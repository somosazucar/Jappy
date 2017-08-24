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
	waitSeconds: 60,
});

requirejs(["activity/activity"]);
