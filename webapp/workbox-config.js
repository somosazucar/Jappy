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
  "maximumFileSizeToCacheInBytes": 5 * 1024 * 1024,
  runtimeCaching: [{
    // Match any same-origin request that contains 'api'.
    urlPattern: /dav/,
    // Apply a network-first strategy.
    handler: 'networkFirst',
    options: {
      // Fall back to the cache after 10 seconds.
      networkTimeoutSeconds: 10,
      // Use a custom cache name for this route.
      cacheName: 'jappy-offline',
    },
  }]
};
