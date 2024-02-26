'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "56948452ee4e8b2e5987aebdd6d39a90",
"assets/AssetManifest.bin.json": "f3640a2456d814b72e7200cfd2b080c5",
"assets/AssetManifest.json": "26f4bd35e504d2c4f64aad198a70004a",
"assets/assets/animation/90569-error.json": "9512db684db5d38d99c46f41d8aa4e40",
"assets/assets/animation/error-404.json": "14adc48a53b3b19886b88dabc2b539ae",
"assets/assets/animation/error404.json": "614a199345933bfa25717d8834604771",
"assets/assets/animation/firstOpen1.json": "c631019ba4471a30c3b2e8d70d0a4aae",
"assets/assets/animation/firstOpen2.json": "4677f1b64ce3751798a37dbbefae9dc3",
"assets/assets/animation/loading.json": "d5fd3e38b8e596dc09aefec519c0a975",
"assets/assets/animation/login.json": "908098803de5612bbc6ae3c162a9a903",
"assets/assets/animation/new1.json": "c43bdd3ec64cc46081f653de896977ae",
"assets/assets/animation/new2.json": "c70b5523beba8d6ab7e2414672df05b3",
"assets/assets/animation/no-network.json": "e36c6e2a3b6cf7742a7e937dba2a5a22",
"assets/assets/animation/nodata3.json": "660b7037bdfb751dee602d7979c11167",
"assets/assets/animation/noDataFound.json": "b36df0274fa3298064b393e6cac616ff",
"assets/assets/animation/noNetConnection.json": "5e63f1271475d4f71efacd0745fb4644",
"assets/assets/animation/noNetConnection2.json": "b5cd97fcadf6e7875458c184eb6fa9a1",
"assets/assets/animation/not-user.json": "6ae739958934595acf3233ed434dffb1",
"assets/assets/animation/sync.json": "28609fcb864356e6259578cdb27331fa",
"assets/assets/animation/try-again.json": "cc8ff706e55dbae57cec6342df41473c",
"assets/assets/fonts/Cairo-Bold.ttf": "80ada5fcee2d9415ee00ef7739eba6df",
"assets/assets/fonts/Cairo-Regular.ttf": "81b37df3b28d397659607391993eef22",
"assets/assets/fonts/Cairo-SemiBold.ttf": "df4b7a4fa0bbf338ddcf7abad1885344",
"assets/assets/fonts/Hacen_Tunisia.ttf": "71d28deb511b542c0cd67c0c5e276e80",
"assets/assets/home/approved_stage.svg": "71c90179dbd7ad3a9d47d6f634fa1fd4",
"assets/assets/home/backRound.png": "933d3a5c19d911f89e23ff3131b3f7e4",
"assets/assets/home/backServer.svg": "1d42492ce3e2b7ee4026b5cd6b49aaf4",
"assets/assets/home/feasibillity_study.svg": "091d5187cb31c821ebcc6de97e2dbcd1",
"assets/assets/home/Funding_request.png": "ecd1ffa9c1e80ebff83ae63145f80a1b",
"assets/assets/home/Funding_request.svg": "7b27dd482be19e4e20a3b36c8c6b3745",
"assets/assets/home/money-saving.jpg": "a1fc67e14d9d520fdd432aad69f99223",
"assets/assets/home/sync.svg": "21553e75102e1d33d559dbf860174d89",
"assets/assets/home/vv.svg": "8a8e0e5680ce4169f5520c292d6d740a",
"assets/assets/icons/check.svg": "8ef60e0c30a6396c468a694c77f9a775",
"assets/assets/icons/Home.svg": "b9f539d61530cdbe8334c7ee7f90b7cc",
"assets/assets/icons/Icon_user.svg": "f96684c24b68fc53887bcd40636a045b",
"assets/assets/img/aden1.jpg": "d8e214be851cfc5a5ae26ebf9424cf02",
"assets/assets/img/aden1.png": "caab2a82bd141ffa7f2a0df5410cb680",
"assets/assets/img/img.jpg": "3ca3987d07f2dc048f7996328d96b1e0",
"assets/assets/img/l22.png": "d91b850fd8f4b59f823f95df136ac367",
"assets/assets/img/logo.png": "492890eeaa1f71f0fc6418c8d5cfbd3a",
"assets/assets/img/logo2.png": "a341d043109a67720e9dbf20fa007bc7",
"assets/assets/img/logoApp.png": "40c3a55205d8d3660579818819a02539",
"assets/assets/img/openAccount.png": "9826dd3ad9c700bba4716dbc551b4fe1",
"assets/assets/img/pdf1.png": "bb692a92cc2a1022a1723b026654facc",
"assets/assets/img/pdf2.png": "9e9f1658e3cf0a5f9c07d504e5309b7d",
"assets/assets/img/whiteLogo.png": "492890eeaa1f71f0fc6418c8d5cfbd3a",
"assets/FontManifest.json": "d9e29a4f1cb2aebb12a9f45059eee2d0",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "36d862319879099b130e29512aed83c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "e766963327e0a89f9ec2ba88646b6177",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "13685372945d816a2b474fc082fd9aaa",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "db78b9359171f24936b16d84f63af378",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "1ab236ed440ee51810c56bd16628aef0",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "6a2ddad1092a0a1c326b6d0e738e682b",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8010f496c12c8f917e756cc9ffc3e158",
"/": "8010f496c12c8f917e756cc9ffc3e158",
"main.dart.js": "30668d23c48f9f69dfbf04112883834b",
"manifest.json": "b30058bdcfeaa636d9282bc15ea2bf66",
"version.json": "a20f742dced51c20f8c74b47f2c3048a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
