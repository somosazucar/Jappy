module.exports = {
  "importWorkboxFrom": "disabled",
  "importScripts": ["lib/workbox-sw.js"],
  "globDirectory": ".",
  "globPatterns": [
    "**/*.{svg,css,html,pyj,ico,woff,png,json,js,md,gif}",
  ],
  "globIgnores": [
    "**/node_modules/**/*",
    "**/sw.js",
    "skin/**/*",
    "lib/firebug-lite.js"
  ],
  "swDest": "sw.js",
  "maximumFileSizeToCacheInBytes": 5 * 1024 * 1024
};
