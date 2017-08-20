import subprocess
from flask import jsonify
from flask_hookserver import Hooks

def register_hooks(app):
    app.config['VALIDATE_IP'] = False
    app.config['VALIDATE_SIGNATURE'] = False

    hooks = Hooks(app, url='/hooks')

    def ping(data, delivery):
        return 'pong'
    hooks.register_hook('ping', ping)

    def new_code(data, delivery):
        print ('New push to %s' % data['ref'])
        if data['ref'] == 'master':
            try:
                cmd_output = subprocess.check_output(
                    ['git', 'pull', 'origin', 'master'],)
                return jsonify({'msg': str(cmd_output)})
            except subprocess.CalledProcessError as error:
                print ("Code deployment failed", error.output)
                return jsonify({'msg': str(error.output)})
        return 'Thanks'
    hooks.register_hook('push', new_code)

    return None

