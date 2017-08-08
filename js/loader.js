requirejs.config({
    baseUrl: "lib",
    paths: {
        activity: "../js",
        examples: "../examples",
        template: "../template.html"
    },
	shim: {
		"rapydscript": {
			exports: 'RapydScript'
		}
	}
});

requirejs(["activity/activity"]);
