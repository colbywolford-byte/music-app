/* Orpharion service worker. It keeps a copy of the app on the device so the app opens with no connection.
   With a connection it asks the network first, so a new version still arrives right away. If the network
   is slow (more than 4 seconds), the saved copy is shown and the fresh copy is saved for next time. */
var CACHE='orpharion-offline-v1',SLOW=4000;
var PAGE=new URL('./',self.registration.scope).href;
var FILES=[PAGE,'manifest.json','icon-192.png','icon-512.png','icon-maskable-512.png'];
function keyOf(req){var u=new URL(req.url);u.search='';u.hash='';if(req.mode==='navigate'||/\/index\.html$/.test(u.pathname)||u.href===PAGE)return PAGE;return u.href}
self.addEventListener('install',function(e){
 e.waitUntil(caches.open(CACHE).then(function(c){
  return Promise.all(FILES.map(function(f){var url=new URL(f,self.registration.scope).href;
   return fetch(url,{cache:'reload'}).then(function(r){if(r&&r.ok)return c.put(url,r)}).catch(function(){})}))
 }).catch(function(){}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){
 e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k.indexOf('orpharion-offline-')===0&&k!==CACHE}).map(function(k){return caches.delete(k)}))})
  .catch(function(){}).then(function(){return self.clients.claim()}))});
function netFirst(r){var k=keyOf(r);
 return caches.open(CACHE).then(function(c){
  var req=r.mode==='navigate'?new Request(r.url,{cache:'no-cache',credentials:'same-origin'}):r;
  var net=fetch(req).then(function(res){if(res&&res.ok&&res.status===200&&res.type==='basic')c.put(k,res.clone());return res});
  return new Promise(function(resolve){var done=false;
   function fin(x){if(!done){done=true;clearTimeout(timer);resolve(x)}}
   var timer=setTimeout(function(){c.match(k).then(function(m){if(m&&!done){done=true;resolve(m)}})},SLOW);
   net.then(fin,function(){c.match(k).then(function(m){fin(m||Response.error())})})})})}
self.addEventListener('fetch',function(e){var r=e.request;if(r.method!=='GET')return;
 var u=new URL(r.url);if(u.origin!==self.location.origin||u.href.indexOf(self.registration.scope)!==0)return;
 e.respondWith(netFirst(r))});
