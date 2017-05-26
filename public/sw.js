importScripts('workbox-sw.prod.v1.0.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/public/css/app.css",
    "revision": "fee67347f43c24d64afbb3d9ad547cde"
  },
  {
    "url": "/public/js/app.js",
    "revision": "cfdabfb2e33d8f98c76092c419448e53"
  },
  {
    "url": "/public/js/manifest.js",
    "revision": "4694a8f34559d72b7a00315b2e11f245"
  },
  {
    "url": "/public/js/vendor.js",
    "revision": "ef86187971dc2839eae2e35bea5b5752"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
