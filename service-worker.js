"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Bin_website/recipet/index.html","f6ded08249199b9f5d0c6e5a6f073f0d"],["/Bin_website/recipet/static/css/main.c359b53f.css","dc1cd5feaf125f3a2d324fb11c36bbfe"],["/Bin_website/recipet/static/js/main.fb1e0ca1.js","c6b9109ce53fe8369cea66949b9ae1cc"],["/Bin_website/recipet/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/Bin_website/recipet/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/Bin_website/recipet/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/Bin_website/recipet/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/Bin_website/recipet/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/Bin_website/recipet/static/media/roboto-latin-100.01dbb814.woff2","01dbb814469dc501bd70cf9f13e0b880"],["/Bin_website/recipet/static/media/roboto-latin-100.02fbb4cf.woff","02fbb4cff7f148a54db366fa4adf086f"],["/Bin_website/recipet/static/media/roboto-latin-100.1009f067.eot","1009f0672b7a725a7561d004025ff21f"],["/Bin_website/recipet/static/media/roboto-latin-100.bdd892cd.svg","bdd892cdf337fc8975aca7ccab6ea06c"],["/Bin_website/recipet/static/media/roboto-latin-100italic.09bc4a69.eot","09bc4a695c3d2208ab07c09d64dda8ca"],["/Bin_website/recipet/static/media/roboto-latin-100italic.5bfe254d.woff2","5bfe254da04d4f1a2ed78e818a55a214"],["/Bin_website/recipet/static/media/roboto-latin-100italic.87528ba9.woff","87528ba9a6e829db88fd8d2b94b362b9"],["/Bin_website/recipet/static/media/roboto-latin-100italic.98c79800.svg","98c79800498e557faaabd49d2fd7b428"],["/Bin_website/recipet/static/media/roboto-latin-300.68b24b48.woff2","68b24b48f11ff8e947976b529c6f5941"],["/Bin_website/recipet/static/media/roboto-latin-300.dc2e2189.woff","dc2e21898247b807422ac32ba45f58c6"],["/Bin_website/recipet/static/media/roboto-latin-300.dd0bea1f.svg","dd0bea1f9a808d633492fa573039ca1d"],["/Bin_website/recipet/static/media/roboto-latin-300.f83aa6d1.eot","f83aa6d195038f0103ad63b728d46c35"],["/Bin_website/recipet/static/media/roboto-latin-300italic.31b2bbfb.woff2","31b2bbfb6f231552f1d5c5879664ae03"],["/Bin_website/recipet/static/media/roboto-latin-300italic.4bcc85a5.woff","4bcc85a50fd0d42d5e416c56b39b8d71"],["/Bin_website/recipet/static/media/roboto-latin-300italic.8f9f9012.eot","8f9f9012053df900bacca33e90a39144"],["/Bin_website/recipet/static/media/roboto-latin-300italic.f8b0d5a9.svg","f8b0d5a9ac4006ad3031052476de8a24"],["/Bin_website/recipet/static/media/roboto-latin-400.8681f434.svg","8681f434273fd6a267b1a16a035c5f79"],["/Bin_website/recipet/static/media/roboto-latin-400.a2647ffe.woff2","a2647ffe169bbbd94a3238020354c732"],["/Bin_website/recipet/static/media/roboto-latin-400.a9fc51fd.woff","a9fc51fd0214c75ee5953dda0f2a06a6"],["/Bin_website/recipet/static/media/roboto-latin-400.c3453f44.eot","c3453f443cf8b548b6161300093c779b"],["/Bin_website/recipet/static/media/roboto-latin-400italic.347bfb18.woff2","347bfb18c4e5fd1642089bd15bf3e628"],["/Bin_website/recipet/static/media/roboto-latin-400italic.39c358e4.svg","39c358e4c78546f0f49e624bcbdc8e63"],["/Bin_website/recipet/static/media/roboto-latin-400italic.bad78f93.woff","bad78f935b0182bd83ac29a45edcdb25"],["/Bin_website/recipet/static/media/roboto-latin-400italic.e086010c.eot","e086010c63bb51850b7dc905a0c58c2e"],["/Bin_website/recipet/static/media/roboto-latin-500.4b218fc7.woff2","4b218fc7ca179e548471ff37e3060081"],["/Bin_website/recipet/static/media/roboto-latin-500.713a6623.eot","713a6623ad820be635f48050f204b4d6"],["/Bin_website/recipet/static/media/roboto-latin-500.95204ac9.svg","95204ac95130828753c0ee0ada537c33"],["/Bin_website/recipet/static/media/roboto-latin-500.ac8381d5.woff","ac8381d5023c0187e7a094726d204f6e"],["/Bin_website/recipet/static/media/roboto-latin-500italic.01ef9f5b.woff","01ef9f5b9fc166ecdf86e02e34b8fd64"],["/Bin_website/recipet/static/media/roboto-latin-500italic.4169600b.eot","4169600b774f104453205c0bfc27ed0f"],["/Bin_website/recipet/static/media/roboto-latin-500italic.b5bd232e.svg","b5bd232e5ae7e364a0e75ba4e480dc03"],["/Bin_website/recipet/static/media/roboto-latin-500italic.cfd2fe08.woff2","cfd2fe08211aadeccac1de3fb5d45ad5"],["/Bin_website/recipet/static/media/roboto-latin-700.2b246a55.eot","2b246a5540c3706485cc74b0066b9711"],["/Bin_website/recipet/static/media/roboto-latin-700.57888be7.svg","57888be7f3e68a7050452ea3157cf4de"],["/Bin_website/recipet/static/media/roboto-latin-700.89b46943.woff","89b469433216121ca9d12c1aef1353d1"],["/Bin_website/recipet/static/media/roboto-latin-700.aa3e8711.woff2","aa3e87117db2b3c27801cbb8dfe40c6c"],["/Bin_website/recipet/static/media/roboto-latin-700italic.42b4247c.woff","42b4247cf22991d1c26d8f66eb8f38f8"],["/Bin_website/recipet/static/media/roboto-latin-700italic.44663173.svg","4466317341560ee2759326c4723cae25"],["/Bin_website/recipet/static/media/roboto-latin-700italic.5b2c1ede.woff2","5b2c1edeeb1ce5f7581a22a8cad42410"],["/Bin_website/recipet/static/media/roboto-latin-700italic.7e4c7545.eot","7e4c75456c6d92b86060ae2139c013fc"],["/Bin_website/recipet/static/media/roboto-latin-900.729ed001.eot","729ed0018076024f69415376817f3d59"],["/Bin_website/recipet/static/media/roboto-latin-900.9c4bedee.svg","9c4bedeee9074a7ab438ff0e548d0fba"],["/Bin_website/recipet/static/media/roboto-latin-900.fa058128.woff2","fa058128ab6fcaa61257208d085b4d57"],["/Bin_website/recipet/static/media/roboto-latin-900.fceb24a6.woff","fceb24a67b9ab2b0074defd70c0c54d9"],["/Bin_website/recipet/static/media/roboto-latin-900italic.450b4cf2.woff2","450b4cf2cbd89c75135c0d9db9ade5a2"],["/Bin_website/recipet/static/media/roboto-latin-900italic.968fd8b5.woff","968fd8b51b2075525dc4780b2c7affb0"],["/Bin_website/recipet/static/media/roboto-latin-900italic.9ab9a5a0.eot","9ab9a5a09490bde095f2f0ea68af942f"],["/Bin_website/recipet/static/media/roboto-latin-900italic.9ede86e9.svg","9ede86e9a4bc062655d63c80f9d71d46"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var i=new URL(e);return"/"===i.pathname.slice(-1)&&(i.pathname+=t),i.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,i,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(i)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var i=new URL(t).pathname;return e.some(function(e){return i.match(e)})},stripIgnoredUrlParameters=function(e,t){var i=new URL(e);return i.hash="",i.search=i.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),i.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],i=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,i,/\.\w{8}\./);return[a.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(i){if(!t.has(i)){var a=new Request(i,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+i+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(i,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(i){return Promise.all(i.map(function(i){if(!t.has(i.url))return e.delete(i)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,i=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(i))||(i=addDirectoryIndex(i,"index.html"),t=urlsToCacheKeys.has(i));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(i=new URL("/Bin_website/recipet/index.html",self.location).toString(),t=urlsToCacheKeys.has(i)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(i)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});