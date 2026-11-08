/* Orpharion: minimal service worker. It only lets the browser offer "Install app".
   It does not cache anything, so you always get the newest version of the app. */
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(){});
