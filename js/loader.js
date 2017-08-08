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
	},
	waitSeconds: 20,
});

requirejs(["activity/activity"]);
