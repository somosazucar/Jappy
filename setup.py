from setuptools import setup, find_packages
from codecs import open
import os

here = os.path.abspath(os.path.dirname(__file__))

with open(os.path.join(here, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()

files = []
for root, dirnames, filenames in os.walk('webapp'):
    files.extend([os.path.join(root,item) for item in filenames])


try:
    if not os.path.exists('jappy/webapp'):
        os.symlink('../webapp', 'jappy/webapp')
    setup(
        name='jappy',
        version='0.2.0a15',
        description='A Python IDE for the Web',
        long_description=long_description,
        long_description_content_type='text/markdown',
        setup_requires=['install_freedesktop'],
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
        package_data={
            'jappy': files
        },
        entry_points={
            'console_scripts': [
                'jappy-server=jappy.server:start_server',
            ],
            'gui_scripts': [
                'jappy=jappy.webview:main',
            ]
        },
        desktop_entries={
            'jappy': {
                'Name': 'Jappy',
                'GenericName': 'A Python IDE for the Web (with backend)',
                'Categories': 'Development;IDE;',
            },
        },
        include_package_data=True,
        project_urls={
            'Bug Reports': 'https://github.com/somosazucar/Jappy/issues',
            'Funding': 'https://www.buymeacoffee.com/icarito',
            'Source': 'https://github.com/somosazucar/Jappy/',
        },
        data_files=[
            ('share/icons/hicolor/512x512/apps', ['webapp/activity/jappy.png']),
            ('share/icons/hicolor/scalable/apps', ['webapp/activity/jappy.svg']),
        ]
    )
finally:
    if os.path.islink('jappy/webapp'):
        os.unlink('jappy/webapp')
