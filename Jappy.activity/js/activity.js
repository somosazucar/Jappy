define(["sugar-web/activity/activity"], function (activity) {

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {
        //
        // Initialize the python environment.
        compiler = RapydScript.create_embedded_compiler()

        // One event bus for all
        event_bus = riot.observable()

        // Setup custom script parser
        riot.parsers.js.Rapyd = function(js, options) {
          return (compiler.compile(js))
        }

        // Mount web components
        riot.compile(function() {
          // here tags are compiled and riot.mount works synchronously
          var tags = riot.mount('*')
          activity.setup()

          setTimeout(function(){
              event_bus.trigger('activity-ready', activity)
          })
        })

    });
});
