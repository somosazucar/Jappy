compile:
	rapydscript compile -b lib/jappy.pyj > lib/baselib.js
	riot --config js/riot.config.js --ext tag.html .
dist_xo:
	python setup.py dist_xo
