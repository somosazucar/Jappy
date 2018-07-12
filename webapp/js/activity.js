define(["sugar-web/env", "sugar-web/activity/activity"], function (env, activity) {

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

        // One event bus for all
        event_bus = riot.observable()

        function mountTags() {

            // here tags are compiled and riot.mount works synchronously
            window.tags = riot.mount('*')
			var splash = document.getElementById('splash');
			document.body.removeChild(splash);

            try {
              activity.setup()
              setTimeout(function(){
                event_bus.trigger('activity-ready', activity)
              }, 100)
            }
            catch(err) {
              // No datastore
              event_bus.trigger('activity-not-ready', err)
            }
        }

        // Mount web components
        if (riot.compile !== undefined) {
			// Initialize the python environment.
			compiler = RapydScript.create_embedded_compiler()

			// Setup custom script parser
			riot.parsers.js.Rapyd = function(js, options) {
			  return (compiler.compile(js))
			}

			riot.compile(mountTags)
        }
        else {
            mountTags()
        }

    });
});

// Check that service workers are registered
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

