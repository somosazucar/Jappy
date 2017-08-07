compile:
	rapydscript compile -b lib/jappy.pyj > lib/baselib.js
	riot --config js/riot.config.js --ext tag.html js/
watch:
	riot --colors --watch --config js/riot.config.js --ext tag.html js/
dist_xo:
	python setup.py dist_xo
