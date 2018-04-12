import subprocess
from flask import jsonify
try:
    from flask_hookserver import Hooks
except ImportError:
    Hooks = False


def register_hooks(app):
    app.config['VALIDATE_IP'] = False
    app.config['VALIDATE_SIGNATURE'] = False

    if not Hooks:
        return None

    hooks = Hooks(app, url='/hooks')

    def ping(data, delivery):
        return 'pong'
    hooks.register_hook('ping', ping)

    def new_code(data, delivery):
        print('New push to %s' % data['ref'])
        if data['ref'] == 'refs/heads/master':
            try:
                cmd_output = subprocess.check_output(
                    ['git', 'pull', 'origin', 'master'],)
                return jsonify({'msg': str(cmd_output)})
            except subprocess.CalledProcessError as error:
                print("Code deployment failed", error.output)
                return jsonify({'msg': str(error.output)})
        return 'Thanks'
    hooks.register_hook('push', new_code)

    return None
