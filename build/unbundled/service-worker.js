/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/app-route/app-route.html","624ca199d36389f3db04597a593548ec"],["/bower_components/expandjs/dist/expandjs.min.js","fad87fad70862b3a79c6cffa8623f48d"],["/bower_components/expandjs/expandjs.html","d6d82e14c9996cb71df9d61107a9ddfd"],["/bower_components/font-roboto/roboto.html","09500fd5adfad056ff5aa05e2aae0ec5"],["/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","10a7e56c69fcefaf654e6baf194431b2"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","f0790e6102e7a62b4f5636578e06a17e"],["/bower_components/iron-a11y-keys/iron-a11y-keys.html","fd2760ee5676b7615aaa24d695c5295d"],["/bower_components/iron-ajax/iron-ajax.html","e41df27a4e2addbd8ab54e9b5013377b"],["/bower_components/iron-ajax/iron-request.html","e2a9aabaeb317a535fbb9a9e50d1b62d"],["/bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","52203f1040958d419175fa7112377286"],["/bower_components/iron-collapse/iron-collapse.html","b2fd26bb254350e62747b0342de966cd"],["/bower_components/iron-data-table/array-datasource.js","0bd841900673ed63af33157c3c662c27"],["/bower_components/iron-data-table/data-table-cell.html","ccaebe130d94e9974383d44e0c3c4598"],["/bower_components/iron-data-table/data-table-checkbox.html","7562c0b9a4a17c25bc7bf91b35a102d1"],["/bower_components/iron-data-table/data-table-column-filter.html","00c99ebdf148fd7babd18f7f543f14fa"],["/bower_components/iron-data-table/data-table-column-sort.html","bba937ffa2f9f8955cdccd89754f32a9"],["/bower_components/iron-data-table/data-table-column.html","5b0f74cab56dc51903ab60449fc22464"],["/bower_components/iron-data-table/data-table-row-detail.html","ce63795f968585cb614b37d9d870c91a"],["/bower_components/iron-data-table/data-table-row.html","85fcf9d6dd5ce248622c4575eb42100d"],["/bower_components/iron-data-table/detect-scrollbar-behavior.html","0c8191ae1e69be66dfeb7092c1eed72a"],["/bower_components/iron-data-table/iron-data-table.html","282bab6d63f38e6bc511c2ee93bb0878"],["/bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","253f6add635bd97ecbf29c4e49275361"],["/bower_components/iron-dropdown/iron-dropdown.html","a3dee603b3c404b864c73a4bce028a26"],["/bower_components/iron-fit-behavior/iron-fit-behavior.html","3ca321fa9d615ddcb359b81c504c5394"],["/bower_components/iron-flex-layout/classes/iron-flex-layout.html","008c13a432e964ce83b5980773dae735"],["/bower_components/iron-flex-layout/classes/iron-shadow-flex-layout.html","9c6bba0a888ce43b45ba4fc523e4b542"],["/bower_components/iron-flex-layout/iron-flex-layout-classes.html","6270e8b91b4ce430289f257e37cd019b"],["/bower_components/iron-flex-layout/iron-flex-layout.html","f6d0b5075d5f70cac9b4bd66bd88c459"],["/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","a64177311979fc6a6aae454cb85ea2be"],["/bower_components/iron-icon/iron-icon.html","522d70fee40ae3b04f6fd685881812ee"],["/bower_components/iron-icons/editor-icons.html","0c73cde432a2d5b140bc031ac459e8b1"],["/bower_components/iron-icons/iron-icons.html","c8f9154ae89b94e658e4a52eee690a16"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","8fb45b1b4668dae069f5efb5004c2af4"],["/bower_components/iron-image/iron-image.html","227dc1ce11afc9a5e4b5f89d8b2bd635"],["/bower_components/iron-input/iron-input.html","25508a4b3ec0445cb7c53230f84a1e7d"],["/bower_components/iron-list/iron-list.html","26a4b3e576dce4ee92f9cf1891833475"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","a18eac7958fa21aec679016c7dfe4769"],["/bower_components/iron-menu-behavior/iron-menubar-behavior.html","a0cc6674fc6d9d7ba0b68ff680b4e56b"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","77e57b30cac5c360d4a21f4fae2a6c33"],["/bower_components/iron-overlay-behavior/iron-overlay-behavior.html","7b7cd95e7736b543422c14d66cb240b3"],["/bower_components/iron-overlay-behavior/iron-overlay-manager.html","1e79aa770c7f077e9760a7e751537003"],["/bower_components/iron-pages/iron-pages.html","08c5b7aacd9ef5fdb5ae583b47bd2df5"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","895ac4e6059325f75809ef13297651b3"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","0185cbe8d7139c9e92af3a9af67feb17"],["/bower_components/iron-selector/iron-multi-selectable.html","219287b581ea07f420b7167b47b4fb95"],["/bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-selector/iron-selector.html","4d2657550768bec0788eba5190cddc66"],["/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","707f76946a74b54cc4674e6ea753bdc2"],["/bower_components/neon-animation/animations/fade-in-animation.html","b814c818dbcffe2bb50563e1406497df"],["/bower_components/neon-animation/animations/fade-out-animation.html","44988226230af0e6d92f0988fc8688e2"],["/bower_components/neon-animation/animations/opaque-animation.html","8e2f63bbc648796f3ed96834a5553d07"],["/bower_components/neon-animation/neon-animatable-behavior.html","270f52231303cae4cb8e3fadb5a805c1"],["/bower_components/neon-animation/neon-animated-pages.html","2ee517f0bdf94f05f7317676baf3e61c"],["/bower_components/neon-animation/neon-animation-behavior.html","eb1cdd9cd9d780a811fd25e882ba1f8e"],["/bower_components/neon-animation/neon-animation-runner-behavior.html","af3b9b4baacedc4ff687bb66b51b6a39"],["/bower_components/neon-animation/web-animations.html","b310811179297697d51eac3659df7776"],["/bower_components/paper-behaviors/paper-button-behavior.html","edddd3f97cf3ea944f3a48b4154939e8"],["/bower_components/paper-behaviors/paper-checked-element-behavior.html","59702db25efd385b161ad862b8027819"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-button/paper-button.html","8eaf13f49324367c73031031e7476846"],["/bower_components/paper-dialog-behavior/paper-dialog-behavior.html","c71d2023c9f7662afa978dc7190afa7b"],["/bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","1d272748882199e0e9a9b3cdce6333cf"],["/bower_components/paper-dialog/paper-dialog.html","d7b3aa49ba8b2e3fe126f63a892a2821"],["/bower_components/paper-drawer-panel/paper-drawer-panel.html","98c974927d70c2c60a18bfee98374bd5"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu-icons.html","d309383cfdcf6733d4e6827c3b877c72"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu-shared-styles.html","9836a785c3be274f84db99ad36a1b313"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu.html","fa9bf9e784e9073cc4aaa607ba8d3855"],["/bower_components/paper-fab/paper-fab.html","bdbcdcba723f04d28b53b0f230a3f87b"],["/bower_components/paper-icon-button/paper-icon-button.html","aea1500761125da1b815393d1fe191c9"],["/bower_components/paper-input/paper-input-addon-behavior.html","de7b482dc1fb01847efba9016db16206"],["/bower_components/paper-input/paper-input-behavior.html","59a608228db88b8ccca27ab87de6d4bf"],["/bower_components/paper-input/paper-input-char-counter.html","6e5c3290d5e2da04bb3134ead48e3c46"],["/bower_components/paper-input/paper-input-container.html","78cb01778c673f64844fe92be3f1a992"],["/bower_components/paper-input/paper-input-error.html","3cec14d4d86f4e4b5ad349ba8a2dac9f"],["/bower_components/paper-input/paper-input.html","081e9f414494eeab54bee7f2cd9ca919"],["/bower_components/paper-item/paper-item-behavior.html","82636a7562fd8b0be5b15646ee461588"],["/bower_components/paper-item/paper-item-shared-styles.html","389eedfc65ee58b1f0d67281d0bad1a1"],["/bower_components/paper-item/paper-item.html","5099885c3bd34e04df7796d48851c4a4"],["/bower_components/paper-listbox/paper-listbox.html","5e936685e3ff5d1540c8d51205825b85"],["/bower_components/paper-material/paper-material-shared-styles.html","3a5f381dbdbdabbfd7c122e1c02a60e3"],["/bower_components/paper-material/paper-material.html","82c0fde850e52dc3bfdfc5efa34d5a15"],["/bower_components/paper-menu-button/paper-menu-button-animations.html","a6d6ed67a145ca00d4487c40c4b06273"],["/bower_components/paper-menu-button/paper-menu-button.html","ec075e9b25343bfb467b452000c6fe1a"],["/bower_components/paper-menu/paper-menu-shared-styles.html","d284d59303c2383edf6c626dd679302d"],["/bower_components/paper-menu/paper-menu.html","3d9cf400d7ee8753ab6d0cb6358bb711"],["/bower_components/paper-radio-button/paper-radio-button.html","bb20112b18edda1bba59e50f61d424dd"],["/bower_components/paper-radio-group/paper-radio-group.html","20b413ba58a7660d9779404a6ca37962"],["/bower_components/paper-ripple/paper-ripple.html","c49ca211e96337b6d919a36b28f51abd"],["/bower_components/paper-scroll-header-panel/paper-scroll-header-panel.html","c73f8d44510a3b20a71fcf5f5ac6f9a4"],["/bower_components/paper-spinner/paper-spinner-behavior.html","82e814c4460e8803f6f57cc457658adf"],["/bower_components/paper-spinner/paper-spinner-lite.html","1f3147475d9a3446bc78cdb44103defa"],["/bower_components/paper-spinner/paper-spinner-styles.html","41385e612365d851bb3c3611fc9bddb6"],["/bower_components/paper-styles/color.html","c53abb41659bf242d420a7f93b977e91"],["/bower_components/paper-styles/default-theme.html","25d95202be2ff5b60f651924e66abed2"],["/bower_components/paper-styles/paper-styles.html","3fd71f69f3adc823ef9c03611d296cfc"],["/bower_components/paper-styles/shadow.html","0db3ad33dddb4766c259232951ec158b"],["/bower_components/paper-styles/typography.html","3f95c68bcd0bd4710f3469c4900533d6"],["/bower_components/paper-tabs/paper-tab.html","d79000eb3d5fe30b93443b352289a4d3"],["/bower_components/paper-tabs/paper-tabs-icons.html","9fb57777c667562392afe684d85ddbe2"],["/bower_components/paper-tabs/paper-tabs.html","1d4e3752eadb7f4cdfe57837b8965fbd"],["/bower_components/paper-toast/paper-toast.html","ce2270c5dfe0479d7e12749e38a71f4c"],["/bower_components/paper-toolbar/paper-toolbar.html","2de84db7a7033289b076c29267ee723c"],["/bower_components/paper-tooltip/paper-tooltip.html","7e437e3f4c064c145682a76b22789378"],["/bower_components/polymer/polymer-micro.html","b748a0d7d45573ee8a3b9da396bba3fb"],["/bower_components/polymer/polymer-mini.html","edc68b59b91e30160d42e0538ac3f025"],["/bower_components/polymer/polymer.html","4d8e7531413b9e500aee452ab5bfb9b5"],["/bower_components/promise-polyfill/Promise.js","f7d54d1274e01f41b13d3d231311863a"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","06470312beff013fc54695e0bdda2cb3"],["/bower_components/web-animations-js/web-animations-next-lite.min.js","fa8e5751181dabd5815a9967c06f4d40"],["/bower_components/webcomponentsjs/webcomponents-lite.min.js","a1882f82ebfc212658591b4e817d8e03"],["/index.html","6e7c790137434a0a433c8c6691cb913a"],["/manifest.json","13ef78b3af5cccb7098e59697142085a"],["/src/colour-list/colour-list.html","5376889de61337c5f530ab83f3555150"],["/src/compare-part-lists/compare-part-lists.html","ebfdfc5e347a9056162c59f5999014f4"],["/src/compare-set-parts/compare-set-parts.html","b33a8501941c145944e6437d50f958f6"],["/src/input-dialog/input-dialog.html","d4736ebd19b0ea710d7870c354d023e3"],["/src/input-dialog/question-dialog.html","e858d615a259de3f68628061aceb46ee"],["/src/list-parts/list-of-parts.html","169aa4903c847f8e19fc5bcc0da5c947"],["/src/list-parts/list-parts.html","e96082764f96b7f78273ef6a820d586e"],["/src/list-sets/list-of-sets.html","97e70581b28b675ffbaee0fcf6d434be"],["/src/list-sets/list-sets.html","1a5da3eae715e1abf1a6ac3af5cc68c1"],["/src/main-app/main-app.html","f495c1ce3f4a8cd4c4583775f0db2101"],["/src/manage-moc-parts/manage-moc-parts.html","ef2317809f23f48605fedda84e5ae900"],["/src/manage-part-lists/manage-part-lists.html","8d5942ee351156e87c2ae81a417fde52"],["/src/manage-part-lists/part-list-add-dialog.html","4017bc0ea30a7c52533daac071f42552"],["/src/manage-set-lists/manage-set-lists.html","8d12300fd9c99a9be1353e247825d0b7"],["/src/manage-set-lists/set-list-add-dialog.html","33848e6153d7492d2259ad6725acd18c"],["/src/move-part-to-list-dialog/move-part-to-list-dialog.html","0afdcdff324589a4e32cb18bc841b93d"],["/src/part-search-dialog/part-search-dialog.html","2d92db91aadc6fe6dcf1f72365f81e37"],["/src/part-types/part-types.html","c816de2e6670c8e6048719e412caa62f"],["/src/quantity-input-dialog/quantity-input-dialog.html","d1e63c1eec016228a2e5964d321a8e4d"],["/src/set-search-dialog/set-search-dialog.html","7eb24e1519d5edea8c1e134604718d6e"],["/src/show-part/show-part.html","a2352c9cdfa3b2d97b4a60f6e947d04d"],["/src/show-set/show-set-parts.html","88e9477246fab8f7b0262270a07b447c"],["/src/show-set/show-set.html","e8409a05131c7a5c376f2292cf3ee5f4"],["/src/simple-part-list/simple-part-list.html","b122a058aa304ffebfe2ec426f392811"],["/src/styles/shared-styles.html","6dead3984afc5ef52e3dbd08f4c2ae32"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




