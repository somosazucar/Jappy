from setuptools import setup, find_packages
from codecs import open
import glob
import os

here = os.path.abspath(os.path.dirname(__file__))

with open(os.path.join(here, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()

files = []
for root, dirnames, filenames in os.walk('webapp'):
    files.extend(glob.glob(root + "*"))


try:
    if not os.path.exists('jappy/webapp'):
        os.symlink('../webapp', 'jappy/webapp')
    setup(
        name='jappy-activity',
        version='0.2.0a11',
        description='A Python IDE for the Web',
        long_description=long_description,
        long_description_content_type='text/markdown',
        url='https://github.com/somosazucar/Jappy',
        author='SomosAzucar R&D Team',
        author_email='equipo@somosazucar.org',
        classifiers=[
            'Development Status :: 3 - Alpha',
            'Intended Audience :: Developers',
            'Topic :: Text Editors :: Integrated Development Environments (IDE)',
            'License :: OSI Approved :: GNU Affero General Public License v3 or later (AGPLv3+)',
            'Programming Language :: Python :: 2',
            'Programming Language :: Python :: 2.7',
            'Programming Language :: Python :: 3',
            'Programming Language :: Python :: 3.4',
            'Programming Language :: Python :: 3.5',
            'Programming Language :: Python :: 3.6',
        ],
        keywords='web rapydscript jappy html javascript webapp',

        packages=find_packages(exclude=['tests']),

        install_requires=[
            'WsgiDAV',
            'Flask',
            'Flask-SocketIO',
            'static',
            'wsgigzip',
            'wsgicors',
            'gevent-websocket',
            'pyinotify'],
        include_package_data=True,
        package_data={
            'jappy': files
        },
        exclude_package_data={
            'jappy': ['webapp/node_modules']
        },
        entry_points={
            'console_scripts': [
                'jappy=jappy.webview:main',
                'jappy-server=jappy.server:start_server',
            ],
        },
        project_urls={
            'Bug Reports': 'https://github.com/somosazucar/Jappy/issues',
            'Funding': 'https://www.buymeacoffee.com/icarito',
            'Source': 'https://github.com/somosazucar/Jappy/',
        },
    )
finally:
    if os.path.islink('jappy/webapp'):
        os.unlink('jappy/webapp')
