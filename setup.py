from setuptools import setup, find_packages
from codecs import open
import glob
import os

here = os.path.abspath(os.path.dirname(__file__))

with open(os.path.join(here, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()

setup(
    name='jappy-activity',
    version='0.2.0a5',
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

    # You can just specify package directories manually here if your project is
    # simple. Or you can use find_packages().
    #
    # Alternatively, if you just want to distribute a single Python file, use
    # the `py_modules` argument instead as follows, which will expect a file
    # called `my_module.py` to exist:
    #
    #   py_modules=["my_module"],
    #
    packages=find_packages(exclude=['tests']),

    # This field lists other packages that your project depends on to run.
    # Any package you put here will be installed by pip when your project is
    # installed, so they must be valid existing projects.
    #
    # For an analysis of "install_requires" vs pip's requirements files see:
    # https://packaging.python.org/en/latest/requirements.html
    install_requires=[
        'WsgiDAV',
        'Flask',
        'Flask-SocketIO',
        'static',
        'wsgigzip',
        'wsgicors',
        'gevent-websocket',
        'pyinotify'],

    # If there are data files included in your packages that need to be
    # installed, specify them here.
    #
    # If using Python 2.6 or earlier, then these have to be included in
    # MANIFEST.in as well.
    package_data={
        'jappy': glob.glob('webapp/**', recursive=True),
    },
    exclude_package_data={
        'jappy': ['webapp/node_modules']
    },
    entry_points={  # Optional
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
