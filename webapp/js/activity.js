define(["sugar-web/env", "sugar-web/activity/activity"], function (env, activity) {

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

        // One event bus for all
        event_bus = riot.observable()

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

//This is the "Offline copy of pages" service worker
if (navigator.serviceWorker) {
      if (navigator.serviceWorker.controller) {
    console.log('[PWA Builder] active service worker found, no need to register')
  } else {
    //Register the ServiceWorker
    navigator.serviceWorker.register('sw.js', {
      scope: './'
    }).then(function(reg) {
      console.log('Service worker has been registered for scope:'+ reg.scope);
    });
  }
}
