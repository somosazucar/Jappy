/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "lib/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "activity/activity-icon.svg",
    "revision": "57833d949ceaf1b1f521cc2f1cac21a6"
  },
  {
    "url": "activity/jappy.svg",
    "revision": "61b1e7701eef55fc0022b45fd7dd250c"
  },
  {
    "url": "css/activity.css",
    "revision": "d2b6b156feb09c144ba15998254d438c"
  },
  {
    "url": "css/folder.css",
    "revision": "55c10b26898d1ee3c7b49d9e8dc632b1"
  },
  {
    "url": "css/github-markdown.css",
    "revision": "8f563f252b6ce60044212a5f6465494d"
  },
  {
    "url": "css/markdown-extra.css",
    "revision": "1d98269e04d369a87ce065526367ed96"
  },
  {
    "url": "css/small-screens.css",
    "revision": "ac0f1b6312c54d1c72b1b99e4a490520"
  },
  {
    "url": "css/tiny-screens.css",
    "revision": "c42f8cdfe02827b94daacd556a2e83f7"
  },
  {
    "url": "docs/wiki.html",
    "revision": "f03103eb1ba737fe92826129e0e85920"
  },
  {
    "url": "examples/color_names.pyj",
    "revision": "623a105bf94db7ca69d533127cf2042c"
  },
  {
    "url": "examples/colors.pyj",
    "revision": "ae6ca856e5b5b6560d26dafba71dd43c"
  },
  {
    "url": "examples/emojis.pyj",
    "revision": "6bc4fe1c325fb082c70b96d632aa7307"
  },
  {
    "url": "examples/input.pyj",
    "revision": "72bfac6419210bf712eeedc282768a01"
  },
  {
    "url": "examples/lunita.pyj",
    "revision": "d8b6743465c76442fef95a0679d0f674"
  },
  {
    "url": "examples/mandala.pyj",
    "revision": "a6a5a672a6cddecdd54374e780f655b1"
  },
  {
    "url": "examples/memorize.pyj",
    "revision": "ed05027088ae1b4d65413822bc8cfa48"
  },
  {
    "url": "examples/repl.pyj",
    "revision": "37afbed63f53a3f473edfd0ce7f3b30e"
  },
  {
    "url": "examples/timeout.pyj",
    "revision": "ed429ae67cb6606d05610375159bc0f7"
  },
  {
    "url": "examples/unicode.pyj",
    "revision": "d242fc635202d313e03bb72c109d656c"
  },
  {
    "url": "examples/welcome.pyj",
    "revision": "1059be14785ee705ff59a9c745a0e686"
  },
  {
    "url": "fallback.html",
    "revision": "28d61cef56030f702e4b67ea386aa5d1"
  },
  {
    "url": "favicon.ico",
    "revision": "3a3f88295211a79b48c6b85d33befbde"
  },
  {
    "url": "fonts/NotoEmoji.woff",
    "revision": "26b60c1cb78e66d43b09bddbfb1c2fa7"
  },
  {
    "url": "icons/activity-icon.svg",
    "revision": "57833d949ceaf1b1f521cc2f1cac21a6"
  },
  {
    "url": "icons/activity-start.svg",
    "revision": "853337c887987cd831343c282bbf4c70"
  },
  {
    "url": "icons/document-generic.svg",
    "revision": "641b0b9431d8e72357c426eab33ae2ff"
  },
  {
    "url": "icons/entry-search.svg",
    "revision": "81ae442f651e06be1b22132e90abf4b9"
  },
  {
    "url": "icons/eraser_bw.svg",
    "revision": "64a6e2091836612a0ca1ca0c8cc5fd07"
  },
  {
    "url": "icons/eraser_color.svg",
    "revision": "5aa65d7437431001dfbab40d6140553e"
  },
  {
    "url": "icons/export-or-publish.svg",
    "revision": "2a98a741b3fc8b30743f2c9a601aaa1b"
  },
  {
    "url": "icons/folder.svg",
    "revision": "6e00f00feefdb6a171ab5f9cc2d2a35e"
  },
  {
    "url": "icons/image-x-generic.svg",
    "revision": "fbe9328082788ebe43bddda0c255d80f"
  },
  {
    "url": "icons/ios/ios-appicon-120-120.png",
    "revision": "82969a8aa99c55b21691b0e50ec6df50"
  },
  {
    "url": "icons/ios/ios-appicon-152-152.png",
    "revision": "42409818549ee45864d0bac8baa01157"
  },
  {
    "url": "icons/ios/ios-appicon-180-180.png",
    "revision": "bb6f221902f1c98ffb6f9a0f5e0dcdf6"
  },
  {
    "url": "icons/ios/ios-appicon-76-76.png",
    "revision": "6a50c3f6859f2642f03bf3a0086c89bd"
  },
  {
    "url": "icons/load-example.svg",
    "revision": "0459ac6d23df33b84b8c0801bc4e0fda"
  },
  {
    "url": "icons/run_bw.svg",
    "revision": "6750bdcc7f94c93246b122cd597ed6c0"
  },
  {
    "url": "icons/run_color.svg",
    "revision": "230f10cc4191ad4f84eb91dc1423b712"
  },
  {
    "url": "icons/stopit_bw.svg",
    "revision": "9418c86a4b45f1035f4ec0b4055eff2f"
  },
  {
    "url": "icons/stopit_color.svg",
    "revision": "d569c2a59377739595ea7cf8c1069f08"
  },
  {
    "url": "icons/tab-add.svg",
    "revision": "8c326475aafde4c87ac6b8b7f2be3044"
  },
  {
    "url": "icons/text-html.svg",
    "revision": "8187e63a8006fdb03215c9592ab0e9b5"
  },
  {
    "url": "icons/toolbar-book.svg",
    "revision": "fc9439580bbfe46d2fd2b927b948d69c"
  },
  {
    "url": "icons/toolbar-help.svg",
    "revision": "2efa871f61a6a39c357292a5f8c5af35"
  },
  {
    "url": "icons/tray-hide.svg",
    "revision": "0bcf56430855a6e240b813cc465aaf65"
  },
  {
    "url": "icons/tray-show.svg",
    "revision": "e4a3807feb7d7b799dbfb875df7fbbd4"
  },
  {
    "url": "icons/user-documents.svg",
    "revision": "e76ad7200944a4c259fbcd45b3ac6280"
  },
  {
    "url": "icons/view-fullscreen.svg",
    "revision": "2a91f9c092e08322b30d1f1b6c814c5d"
  },
  {
    "url": "icons/view-return.svg",
    "revision": "70637eac87ee264de7f8de451cabdeca"
  },
  {
    "url": "icons/zip-archive.svg",
    "revision": "a73288393f1d26088f3abd0c8094adde"
  },
  {
    "url": "index-dev.html",
    "revision": "3cc29e51be45b4a5ffad8fec5c0896a7"
  },
  {
    "url": "index.html",
    "revision": "f2c16886060d2308db9e4a8572c8ac8e"
  },
  {
    "url": "jappy.json",
    "revision": "2ab6676995d1b6f683cf7f15787e2a02"
  },
  {
    "url": "js/activity.js",
    "revision": "299fdc478caf1ae3cc4740c7932c89d8"
  },
  {
    "url": "js/code_editor.tag.html",
    "revision": "7c28111781b52a931ba3db1d79bb7ee9"
  },
  {
    "url": "js/folder.pyj",
    "revision": "4065ef205a53d08b769da123a6563212"
  },
  {
    "url": "js/jappy.pyj",
    "revision": "dc1c8875fe21d02ff80537ff54c9dcb6"
  },
  {
    "url": "js/loader.js",
    "revision": "4d8db7be6ab9deaf4a44eeea93b5d55a"
  },
  {
    "url": "js/riot.config.js",
    "revision": "ba2f0f0fe83da2e950ba99a4fa5a29b0"
  },
  {
    "url": "js/toolbar.tag.html",
    "revision": "70428a8a8460e9aef16468d9910b8962"
  },
  {
    "url": "lib/browser-polyfill.min.js",
    "revision": "9bc1704145c1d004703d089c0a9d9d60"
  },
  {
    "url": "lib/cm/addon/dialog/dialog.css",
    "revision": "c89dce10b44d2882a024e7befc2b63f5"
  },
  {
    "url": "lib/cm/addon/dialog/dialog.js",
    "revision": "db45cf36108d1eddcf6529f6ddeb38b9"
  },
  {
    "url": "lib/cm/addon/edit/closebrackets.js",
    "revision": "f323f607d1d7e86c5b9fc5825c5226b5"
  },
  {
    "url": "lib/cm/addon/edit/matchbrackets.js",
    "revision": "600983d791a47cc171b5bd0b61321159"
  },
  {
    "url": "lib/cm/addon/scroll/simplescrollbars.css",
    "revision": "0352ba51fd6a422fe6cc44925e33ad88"
  },
  {
    "url": "lib/cm/addon/scroll/simplescrollbars.js",
    "revision": "91e30237f38bae3be7e7fd7ba3811e73"
  },
  {
    "url": "lib/cm/addon/search/search.js",
    "revision": "1f893272e50fcc42f9238dd99e71fd8f"
  },
  {
    "url": "lib/cm/addon/search/searchcursor.js",
    "revision": "af75ae54572ba078647b1d183b00d5b8"
  },
  {
    "url": "lib/cm/addon/selection/active-line.js",
    "revision": "0e6cca20bb8c12104de8ff1196a27c32"
  },
  {
    "url": "lib/cm/codemirror.css",
    "revision": "e046ddd550734c3e36cc476056d4a6d1"
  },
  {
    "url": "lib/cm/codemirror.js",
    "revision": "af11dfc85f29b64f225cb2446de64cfa"
  },
  {
    "url": "lib/cm/codemirror.min.js",
    "revision": "5492b682c3282be341cfbe9280cf3a0c"
  },
  {
    "url": "lib/cm/mode/css/css.js",
    "revision": "5708d6a411224d88e940533990984689"
  },
  {
    "url": "lib/cm/mode/htmlmixed/htmlmixed.js",
    "revision": "7744b687e609c17578c152c6f506587c"
  },
  {
    "url": "lib/cm/mode/javascript/javascript.js",
    "revision": "0594d125de88b7a266773ae0dd409b32"
  },
  {
    "url": "lib/cm/mode/markdown/markdown.js",
    "revision": "b12e5aa6b1f599bbb46ccbc4ec50f61e"
  },
  {
    "url": "lib/cm/mode/python/python.js",
    "revision": "c5727e163baae80b55adcc87a8d6233c"
  },
  {
    "url": "lib/cm/mode/xml/xml.js",
    "revision": "539314b38217a1d83e35b1e3dab79b44"
  },
  {
    "url": "lib/cm/theme/solarized.css",
    "revision": "19c0369e2f0d0fdbd681e94d492cfbfb"
  },
  {
    "url": "lib/code_editor.js",
    "revision": "5c7a05aa16b1e955c9b08bf4874de645"
  },
  {
    "url": "lib/domReady.js",
    "revision": "19ff0e97093d58cd893fe72534a98b8b"
  },
  {
    "url": "lib/FileSaver.min.js",
    "revision": "cf4473afd98b8fcdbf259ad664f10027"
  },
  {
    "url": "lib/folder.js",
    "revision": "77e7d7db96a3c3058b5d1908d89484c6"
  },
  {
    "url": "lib/inobounce.min.js",
    "revision": "379807d95bedb7b0f00f29e8f145e8a1"
  },
  {
    "url": "lib/jappy.js",
    "revision": "e31828c05473abced068d08d18010208"
  },
  {
    "url": "lib/jszip.min.js",
    "revision": "62db1c2504bd4d030ffc37880227d5fd"
  },
  {
    "url": "lib/manup.min.js",
    "revision": "b222bb634cd949281fa7f49d339e56a6"
  },
  {
    "url": "lib/marked.js",
    "revision": "4889879c43ff8cdaa9bd1a869651be29"
  },
  {
    "url": "lib/p5.min.js",
    "revision": "8a4f469221ef6af3a8b704a8c63d3638"
  },
  {
    "url": "lib/rapydscript.js",
    "revision": "3bf99f78ded1be527ff966fe37f2bdd5"
  },
  {
    "url": "lib/require.js",
    "revision": "b5ee11af2f6dc41b22c5cb411907f889"
  },
  {
    "url": "lib/riot.min.js",
    "revision": "bcf4e45a019175807b87547e1bae6642"
  },
  {
    "url": "lib/riot+compiler.min.js",
    "revision": "48e1eb0bbf9e446ee65207877a2d59f4"
  },
  {
    "url": "lib/sugar-web/activity/activity.js",
    "revision": "8d3cdb4cb1658eeb10e0b9c59976d7f0"
  },
  {
    "url": "lib/sugar-web/activity/shortcut.js",
    "revision": "3a7ef797a561c8fb9612606dda22055c"
  },
  {
    "url": "lib/sugar-web/bus.js",
    "revision": "32c251c8f63afb0a54ffc72b368fcd1f"
  },
  {
    "url": "lib/sugar-web/bus/sugarizer.js",
    "revision": "c5fe6a0f715f0b480ca5c398c7c589b0"
  },
  {
    "url": "lib/sugar-web/bus/sugaros.js",
    "revision": "67539fe3c032eec84cc20d1567dce1b6"
  },
  {
    "url": "lib/sugar-web/datastore.js",
    "revision": "7b761e28785d97276d3707d1f6ba0dfc"
  },
  {
    "url": "lib/sugar-web/datastore/sugarizer.js",
    "revision": "be91c5da52a57b41d0ce3c1020846c9c"
  },
  {
    "url": "lib/sugar-web/datastore/sugaros.js",
    "revision": "d1170282b4b7362cc01d7931d11d8a08"
  },
  {
    "url": "lib/sugar-web/dictstore.js",
    "revision": "fc49065c7a71ea4b7147fe2bd88b7cdf"
  },
  {
    "url": "lib/sugar-web/env.js",
    "revision": "4311422ed0a2df5291552e98b618a93b"
  },
  {
    "url": "lib/sugar-web/graphics/activitypalette.html",
    "revision": "28ce0c6272973df6fe88dd42c45d5bf2"
  },
  {
    "url": "lib/sugar-web/graphics/activitypalette.js",
    "revision": "e5bab39926b454701d3e5d384ca73516"
  },
  {
    "url": "lib/sugar-web/graphics/css/sugar-200dpi.css",
    "revision": "509038999812bf0546aeef946328adfc"
  },
  {
    "url": "lib/sugar-web/graphics/css/sugar-72dpi.css",
    "revision": "e1daf5732cdee88836fb3fe58e711eb4"
  },
  {
    "url": "lib/sugar-web/graphics/css/sugar-96dpi.css",
    "revision": "1173a55442493196becf5de746db47be"
  },
  {
    "url": "lib/sugar-web/graphics/grid.js",
    "revision": "00dce76bd16d8ba41c8b5af82c87a0e9"
  },
  {
    "url": "lib/sugar-web/graphics/icon.js",
    "revision": "b66d7748b54a4d5e642f7e1ebaa8c29e"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/activity-stop.svg",
    "revision": "2fe547921e72875a8e91f058b493334b"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/checkbox-checked-selected.svg",
    "revision": "7c892083b83afbd1a5a81fe947199495"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/checkbox-checked.svg",
    "revision": "1068e2cab88a34f2acea7511ca4257d9"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/checkbox-unchecked-selected.svg",
    "revision": "2c927c304cbbdeb82915f5664df5c028"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/checkbox-unchecked.svg",
    "revision": "aac3caa4a9f04de9a58244af5861ae55"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/dialog-cancel-active.svg",
    "revision": "008d4c31178121c233729308012f8f48"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/dialog-cancel.svg",
    "revision": "30807ff56d9226e2ac89fc8d5acdc56f"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/dialog-ok-active.svg",
    "revision": "026fcea11fc69c1c17ec433768bc4c2a"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/dialog-ok.svg",
    "revision": "d7940c6196cf3ce62ce93db0e4f11305"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/entry-cancel-active.svg",
    "revision": "286f87810be46ace22c7fa5b3a4cfcf3"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/entry-cancel-disabled.svg",
    "revision": "0187e59a16ff67c7a3e3b7866d4d9206"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/entry-cancel.svg",
    "revision": "61e15dff7a6c5c5dd70979ead3bb01f0"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/radio-active-selected.svg",
    "revision": "c3e80553901abd395b3f2aa055e06463"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/radio-active.svg",
    "revision": "7c445307c9f18c8340342ccf1a0c250f"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/radio-selected.svg",
    "revision": "57aa875732407d25d819321dd773a940"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/radio.svg",
    "revision": "567c4d692bc66c550332b05d6ed47909"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/zoom-groups.svg",
    "revision": "599eaa77a65d8a1e8ff741468bddfb50"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/zoom-home.svg",
    "revision": "e0b71aee6352f2fc707c21698787e894"
  },
  {
    "url": "lib/sugar-web/graphics/icons/actions/zoom-neighborhood.svg",
    "revision": "f884a7c0a91bf68659f6a3756834fbf4"
  },
  {
    "url": "lib/sugar-web/graphics/icons/emblems/arrow-down.svg",
    "revision": "fcbdad3af4b5886aa974ee5f8a40274f"
  },
  {
    "url": "lib/sugar-web/graphics/icons/emblems/arrow-up.svg",
    "revision": "21276c78123bac317ae2c340b4007315"
  },
  {
    "url": "lib/sugar-web/graphics/menupalette.html",
    "revision": "0e7e06adf95db30c1d8da96b20378156"
  },
  {
    "url": "lib/sugar-web/graphics/menupalette.js",
    "revision": "46b5e0106a2701ec9b1e60f0e279292e"
  },
  {
    "url": "lib/sugar-web/graphics/palette.js",
    "revision": "3fb3585ae4669e624d5ccefe8a3e7011"
  },
  {
    "url": "lib/sugar-web/graphics/radiobuttonsgroup.js",
    "revision": "7171df8815e59490919e2bc668a690fc"
  },
  {
    "url": "lib/sugar-web/graphics/README.md",
    "revision": "0730e9618507112c6fba28205b2b4f60"
  },
  {
    "url": "lib/sugar-web/graphics/xocolor.js",
    "revision": "c77c2113386d6e00d9823a5c75abaac8"
  },
  {
    "url": "lib/sugar-web/package.json",
    "revision": "67b393723001f89d9b398fd221abd97f"
  },
  {
    "url": "lib/sugar-web/presence.js",
    "revision": "6f765d5ecc4fdce6e360636c3384f1d3"
  },
  {
    "url": "lib/sugar-web/README.md",
    "revision": "18136978927410f704f55bb8c091ad17"
  },
  {
    "url": "lib/text.js",
    "revision": "6c086c1db5681306e7a7cf1943704044"
  },
  {
    "url": "lib/toolbar.js",
    "revision": "6f4af7c71448c0da42e08c3f9bd59210"
  },
  {
    "url": "lib/webdav.js",
    "revision": "0e09d1ef28c34a4ab1c745473607efa7"
  },
  {
    "url": "lib/webL10n.js",
    "revision": "cfe9a3b67eeaabacfa922a74b5a197e8"
  },
  {
    "url": "lib/workbox-sw.js",
    "revision": "ed25dc64f757df940d68d70073faac6c"
  },
  {
    "url": "lib/y-array.js",
    "revision": "578c2cc14996c2e7a6a506f18662c48a"
  },
  {
    "url": "lib/y-map.js",
    "revision": "c36287a9d02cb2d4f01b9d3aa9fc2719"
  },
  {
    "url": "lib/y-memory.js",
    "revision": "f3846219e429d0b401eb4d9a98ef0474"
  },
  {
    "url": "lib/y-text.js",
    "revision": "9828fb5aa244bb7a9672748fba31bff7"
  },
  {
    "url": "lib/y-websockets-client.js",
    "revision": "4e92e972d9de829c2840e057dbb6e0f0"
  },
  {
    "url": "lib/y.js",
    "revision": "a637df979349b1b83b60b0c2d30a876e"
  },
  {
    "url": "manifest.json",
    "revision": "5e417232675c9229eba5ffc4e047cb92"
  },
  {
    "url": "package.json",
    "revision": "d40ddb9dc87c4299555de9252c42f792"
  },
  {
    "url": "README.md",
    "revision": "d31bb07abce348a2bec500258441e2e8"
  },
  {
    "url": "template.html",
    "revision": "63194755acfffe931f30aab0c966f6db"
  },
  {
    "url": "workbox-config.js",
    "revision": "0bb7808521c0de3f7c9f12dca9627499"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/dav/, workbox.strategies.networkFirst({ networkTimeoutSeconds: 10, cacheName: "jappy-offline", plugins: [] }), 'GET');
