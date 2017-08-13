define(["sugar-web/env", "sugar-web/activity/activity"], function (env, activity) {

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

		// One event bus for all
        event_bus = riot.observable()
		loadCSSAsync("lib/sugar-web/graphics/css/sugar-96dpi.css",
					 "not screen and (device-width: 1200px) and (device-height: 900px)")
		loadCSSAsync("lib/sugar-web/graphics/css/sugar-200dpi.css",
					 "screen and (device-width: 1200px) and (device-height: 900px)")
		loadCSSAsync( "lib/sugar-web/graphics/css/sugar-72dpi.css",
					  "screen and (max-width: 800px)" )
		loadCSSAsync( "css/small-screens.css",
					  "screen and (max-width: 800px)" )
		loadCSSAsync( "css/tiny-screens.css",
					  "screen and (max-width: 420px)" )

        // Mount web components
        riot.compile(function() {
          // here tags are compiled and riot.mount works synchronously
          window.tags = riot.mount('*')

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
        })

    });
});
