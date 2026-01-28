// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"dn1C1":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "15f4393c115b09c5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"aFuO6":[function(require,module,exports,__globalThis) {
var _badgeJs = require("./badge.js");
var _dataJs = require("./data.js");
var _domJs = require("./dom.js");
var _storageJs = require("./storage.js");
(0, _badgeJs.updateCartBadge)();
const descEl = document.getElementById("categoryDescription");
const sectionChips = document.getElementById("sectionChips");
const categoryChips = document.getElementById("categoryChips");
const grid = document.getElementById("productsGrid");
let allProducts = [];
let activeSection = "all";
let activeCategory = "all";
const LAST_CATALOG_HASH_KEY = "kramnychka:lastCatalogHash";
/** 1) Зчитуємо hash типу #care / #rest / #outdoor / #garden */ function applyHashFilter() {
    const hash = window.location.hash.replace("#", "").trim();
    if (hash) {
        activeSection = hash;
        activeCategory = "all";
    } else {
        activeSection = "all";
        activeCategory = "all";
        // запам’ятати, щоб потім “Назад до каталогу” в кошику вів у той самий розділ
        const safeHash = hash ? `#${hash}` : "";
        localStorage.setItem(LAST_CATALOG_HASH_KEY, safeHash);
    }
}
function buildChips() {
    // Section chips
    sectionChips.replaceChildren();
    const allBtn = (0, _domJs.el)("button", {
        className: "chip",
        text: "\u0423\u0441\u0456 \u0440\u043E\u0437\u0434\u0456\u043B\u0438"
    });
    allBtn.addEventListener("click", ()=>{
        activeSection = "all";
        activeCategory = "all";
        updateChips();
        render();
    });
    sectionChips.appendChild(allBtn);
    (0, _dataJs.SECTIONS).forEach((s)=>{
        const btn = (0, _domJs.el)("button", {
            className: "chip",
            text: s.title,
            dataset: {
                key: s.key
            }
        });
        btn.addEventListener("click", ()=>{
            // якщо клікаємо чіп — теж оновимо hash, щоб URL відповідав фільтру
            window.location.hash = s.key; // це викличе hashchange і перерендер
        });
        sectionChips.appendChild(btn);
    });
    updateCategoryChips();
}
function updateChips() {
    [
        ...sectionChips.querySelectorAll(".chip")
    ].forEach((btn)=>btn.classList.remove("is-active"));
    const target = activeSection === "all" ? sectionChips.querySelector(".chip") : sectionChips.querySelector(`.chip[data-key="${activeSection}"]`);
    if (target) target.classList.add("is-active");
    else sectionChips.querySelector(".chip")?.classList.add("is-active");
    updateCategoryChips();
}
function updateCategoryChips() {
    categoryChips.replaceChildren();
    const categories = new Set();
    allProducts.forEach((p)=>{
        if (activeSection === "all" || p.section === activeSection) categories.add(p.category);
    });
    const allCat = (0, _domJs.el)("button", {
        className: "chip",
        text: "\u0423\u0441\u0456 \u043F\u0456\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"
    });
    allCat.addEventListener("click", ()=>{
        activeCategory = "all";
        updateCategoryActive();
        render();
    });
    categoryChips.appendChild(allCat);
    [
        ...categories
    ].sort().forEach((cat)=>{
        const btn = (0, _domJs.el)("button", {
            className: "chip",
            text: cat,
            dataset: {
                cat
            }
        });
        btn.addEventListener("click", ()=>{
            activeCategory = cat;
            updateCategoryActive();
            render();
        });
        categoryChips.appendChild(btn);
    });
    updateCategoryActive();
}
function updateCategoryActive() {
    [
        ...categoryChips.querySelectorAll(".chip")
    ].forEach((btn)=>btn.classList.remove("is-active"));
    const target = activeCategory === "all" ? categoryChips.querySelector(".chip") : categoryChips.querySelector(`.chip[data-cat="${CSS.escape(activeCategory)}"]`);
    if (target) target.classList.add("is-active");
    else categoryChips.querySelector(".chip")?.classList.add("is-active");
}
function productCard(p) {
    const card = (0, _domJs.el)("article", {
        className: "card"
    });
    const title = (0, _domJs.el)("h3", {
        className: "card__title",
        text: p.name
    });
    const meta = (0, _domJs.el)("p", {
        className: "card__meta",
        text: `${p.category} \u{2022} ${(0, _dataJs.SECTIONS).find((s)=>s.key === p.section)?.title ?? ""}`
    });
    const priceRow = (0, _domJs.el)("div", {
        className: "priceRow"
    });
    const price = (0, _domJs.el)("strong", {
        text: `${(0, _domJs.formatUAH)(p.priceUAH)} / ${p.unit}`
    });
    priceRow.appendChild(price);
    if (p.recommended) {
        const badge = (0, _domJs.el)("span", {
            className: "badge",
            text: "\u041E\u043B\u044F \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0454"
        });
        priceRow.appendChild(badge);
    }
    const btn = (0, _domJs.el)("button", {
        className: "btn",
        text: "\u0414\u043E\u0434\u0430\u0442\u0438 \u0432 \u043A\u043E\u0448\u0438\u043A"
    });
    btn.addEventListener("click", ()=>{
        (0, _storageJs.addToCart)(p.id, 1);
        // Візуальний фідбек: зміна тексту + стиль
        btn.classList.add("is-added");
        const prevText = btn.textContent;
        btn.textContent = "\u0414\u043E\u0434\u0430\u043D\u043E \u2713";
        window.setTimeout(()=>{
            btn.classList.remove("is-added");
            btn.textContent = prevText;
        }, 900);
    });
    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(priceRow);
    card.appendChild(btn);
    return card;
}
function updateDescription() {
    if (!descEl) return;
    if (activeCategory !== "all") {
        descEl.textContent = (0, _dataJs.CATEGORY_DESCRIPTIONS)?.[activeCategory] ?? "";
        return;
    }
    if (activeSection !== "all") {
        const secTitle = (0, _dataJs.SECTIONS).find((s)=>s.key === activeSection)?.title ?? "";
        descEl.textContent = secTitle ? `\u{420}\u{43E}\u{437}\u{434}\u{456}\u{43B}: ${secTitle}` : "";
        return;
    }
    descEl.textContent = "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0440\u043E\u0437\u0434\u0456\u043B \u0430\u0431\u043E \u043F\u0456\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044E, \u0449\u043E\u0431 \u0448\u0432\u0438\u0434\u0448\u0435 \u0437\u043D\u0430\u0439\u0442\u0438 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0435.";
}
function render() {
    updateDescription();
    const filtered = allProducts.filter((p)=>{
        if (activeSection !== "all" && p.section !== activeSection) return false;
        if (activeCategory !== "all" && p.category !== activeCategory) return false;
        return true;
    });
    grid.replaceChildren();
    if (filtered.length === 0) {
        grid.appendChild((0, _domJs.el)("p", {
            text: "\u041D\u0435\u043C\u0430\u0454 \u0442\u043E\u0432\u0430\u0440\u0456\u0432 \u0437\u0430 \u0446\u0438\u043C\u0438 \u0444\u0456\u043B\u044C\u0442\u0440\u0430\u043C\u0438."
        }));
        return;
    }
    const fragment = document.createDocumentFragment();
    filtered.forEach((p)=>fragment.appendChild(productCard(p)));
    grid.appendChild(fragment);
}
(async function init() {
    allProducts = await (0, _dataJs.loadProducts)();
    applyHashFilter();
    buildChips();
    updateChips();
    render();
    (0, _badgeJs.updateCartBadge)();
    window.addEventListener("hashchange", ()=>{
        applyHashFilter();
        updateChips();
        render();
    });
})();

},{"./data.js":"a4kWt","./dom.js":"3crBc","./storage.js":"6iTkZ","./badge.js":"1md5T"}],"a4kWt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadProducts", ()=>loadProducts);
parcelHelpers.export(exports, "SECTIONS", ()=>SECTIONS);
parcelHelpers.export(exports, "SIZES", ()=>SIZES);
parcelHelpers.export(exports, "COLORS", ()=>COLORS);
parcelHelpers.export(exports, "CATEGORY_DESCRIPTIONS", ()=>CATEGORY_DESCRIPTIONS);
parcelHelpers.export(exports, "CATEGORIES", ()=>CATEGORIES);
var _productsJson = require("../content/products.json");
var _productsJsonDefault = parcelHelpers.interopDefault(_productsJson);
async function loadProducts() {
    return (0, _productsJsonDefault.default).items ?? [];
}
const SECTIONS = [
    {
        key: "care",
        title: "\u0422\u0443\u0440\u0431\u043E\u0442\u0430 \u043F\u0440\u043E \u0441\u0435\u0431\u0435"
    },
    {
        key: "rest",
        title: "\u0414\u043B\u044F \u0441\u043E\u043B\u043E\u0434\u043A\u0438\u0445 \u0441\u043D\u0456\u0432 \u0442\u0430 \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u043D\u043A\u0443"
    },
    {
        key: "outdoor",
        title: "\u041D\u0430 \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u0443 \u0442\u0430 \u0432 \u043D\u0435\u0433\u043E\u0434\u0443"
    },
    {
        key: "garden",
        title: "\u0413\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0441\u044C\u043A\u0456 \u0441\u043F\u0440\u0430\u0432\u0438 \u0442\u0430 \u0433\u043E\u0440\u043E\u0434"
    }
];
const SIZES = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
];
const COLORS = [
    "\u0447\u0435\u0440\u0432\u043E\u043D\u0438\u0439",
    "\u0441\u0438\u043D\u0456\u0439",
    "\u0437\u0435\u043B\u0435\u043D\u0438\u0439",
    "\u0436\u043E\u0432\u0442\u0438\u0439",
    "\u0447\u043E\u0440\u043D\u0438\u0439",
    "\u0431\u0456\u043B\u0438\u0439",
    "\u0441\u0456\u0440\u0438\u0439"
];
const CATEGORY_DESCRIPTIONS = {
    "\u0422\u0435\u043F\u043B\u0456 \u043D\u0456\u0436\u043A\u0438": "\u0428\u043A\u0430\u0440\u043F\u0435\u0442\u043A\u0438 \u043D\u0430 \u0432\u0441\u0456 \u0441\u0435\u0437\u043E\u043D\u0438: \u0442\u043E\u043D\u0435\u043D\u044C\u043A\u0456 \u043B\u0456\u0442\u043D\u0456 \u0442\u0430 \u043F\u0443\u0445\u043D\u0430\u0441\u0442\u0456 \u0437\u0438\u043C\u043E\u0432\u0456.",
    "\u0411\u0430\u0437\u043E\u0432\u0438\u0439 \u0437\u0430\u0442\u0438\u0448\u043E\u043A": "\u0412\u043E\u0434\u043E\u043B\u0430\u0437\u043A\u0438, \u043A\u043E\u0444\u0442\u0438, \u0448\u0442\u0430\u043D\u0438, \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0456 \u043A\u043E\u0441\u0442\u044E\u043C\u0438 \u2014 \u0442\u0435, \u0449\u043E \u043D\u043E\u0441\u0438\u0442\u044C\u0441\u044F \u0449\u043E\u0434\u043D\u044F.",
    "\u0414\u043E\u043C\u0430\u0448\u043D\u0456\u0439 \u043A\u043E\u043C\u0444\u043E\u0440\u0442": "\u0425\u0430\u043B\u0430\u0442\u0438 \u0442\u0430 \u043F\u0456\u0436\u0430\u043C\u0438 \u2014 \u0434\u043B\u044F \u0434\u043E\u043C\u0443, \u0432\u0438\u0445\u0456\u0434\u043D\u0438\u0445 \u0456 \u0442\u0438\u0445\u0438\u0445 \u0432\u0435\u0447\u043E\u0440\u0456\u0432.",
    "\u041C\u2019\u044F\u043A\u0456 \u043E\u0431\u0456\u0439\u043C\u0438": "\u041F\u043B\u0435\u0434\u0438, \u043F\u043E\u0441\u0442\u0456\u043B\u044C, \u0440\u0443\u0448\u043D\u0438\u043A\u0438 \u2014 \u0443\u0441\u0435, \u0449\u043E \u0434\u043E\u0434\u0430\u0454 \u0442\u0435\u043F\u043B\u0430 \u0434\u043E\u043C\u0443.",
    "\u0412\u0435\u0440\u0445\u043D\u0456\u0439 \u043E\u0434\u044F\u0433": "\u041A\u0443\u0440\u0442\u043A\u0438 \u0437\u0438\u043C\u043E\u0432\u0456 \u0442\u0430 \u0434\u0435\u043C\u0456\u0441\u0435\u0437\u043E\u043D\u043D\u0456 \u2014 \u0432\u0456\u0434 \u0432\u0456\u0442\u0440\u0443 \u0439 \u043D\u0435\u0433\u043E\u0434\u0438.",
    "\u0414\u043B\u044F \u0445\u0430\u0442\u0438": "\u041A\u0430\u043F\u0446\u0456 (\u0442\u0430\u043F\u043E\u0447\u043A\u0438), \u0449\u043E\u0431 \u0432\u0434\u043E\u043C\u0430 \u0431\u0443\u043B\u043E \u0442\u0435\u043F\u043B\u043E \u0456 \u0437\u0430\u0442\u0438\u0448\u043D\u043E.",
    "\u041C\u0430\u0439\u0431\u0443\u0442\u043D\u0456\u0439 \u0432\u0440\u043E\u0436\u0430\u0439": "\u041D\u0430\u0441\u0456\u043D\u043D\u044F \u2014 \u043E\u0431\u0438\u0440\u0430\u043B\u0430 \u044F\u043A \u0434\u043B\u044F \u0432\u043B\u0430\u0441\u043D\u043E\u0433\u043E \u0433\u043E\u0440\u043E\u0434\u0443 \uD83C\uDF31",
    "\u0422\u0443\u0440\u0431\u043E\u0442\u0430 \u043F\u0440\u043E \u0440\u043E\u0441\u043B\u0438\u043D\u0438": "\u0410\u0433\u0440\u043E\u0432\u043E\u043B\u043E\u043A\u043D\u043E \u0442\u0430 \u043F\u043B\u0456\u0432\u043A\u0430 \u2014 \u0449\u043E\u0431 \u0443\u0441\u0435 \u0440\u043E\u0441\u043B\u043E \u0448\u0432\u0438\u0434\u0448\u0435.",
    "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0443 \u0433\u043E\u0441\u043F\u043E\u0434\u0456": "\u041A\u043B\u0435\u0439\u043E\u043D\u043A\u0430 \u0434\u043B\u044F \u0441\u0442\u043E\u043B\u0443 \u2014 \u0449\u043E\u0431 \u043A\u0443\u0445\u043D\u044F \u0441\u044F\u044F\u043B\u0430."
};
const CATEGORIES = Object.keys(CATEGORY_DESCRIPTIONS);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../content/products.json":"fIYjl"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fIYjl":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"items":[{"id":"p001","name":"\u041C\u2019\u044F\u043A\u0456 \u0432\u043E\u0432\u043D\u044F\u043D\u0456 \u0448\u043A\u0430\u0440\u043F\u0435\u0442\u043A\u0438 \xab\u0417\u0438\u043C\u043E\u0432\u0438\u0439 \u0432\u0435\u0447\u0456\u0440\xbb","priceUAH":145,"unit":"\u043F\u0430\u0440\u0430","section":"care","category":"\u0422\u0435\u043F\u043B\u0456 \u043D\u0456\u0436\u043A\u0438","recommended":true},{"id":"p002","name":"\u0411\u0430\u0437\u043E\u0432\u0430 \u0432\u043E\u0434\u043E\u043B\u0430\u0437\u043A\u0430 (\u043A\u043E\u043B\u0456\u0440: \u0442\u0435\u043F\u043B\u0430 \u043A\u0430\u0440\u0430\u043C\u0435\u043B\u044C)","priceUAH":480,"unit":"\u0448\u0442","section":"care","category":"\u0411\u0430\u0437\u043E\u0432\u0438\u0439 \u0437\u0430\u0442\u0438\u0448\u043E\u043A","recommended":true},{"id":"p003","name":"\u0424\u043B\u0430\u043D\u0435\u043B\u0435\u0432\u0430 \u043F\u0456\u0436\u0430\u043C\u0430 \u0432 \u043A\u043B\u0456\u0442\u0438\u043D\u043A\u0443 (\u0436\u0456\u043D\u043E\u0447\u0430)","priceUAH":820,"unit":"\u0448\u0442","section":"rest","category":"\u0414\u043E\u043C\u0430\u0448\u043D\u0456\u0439 \u043A\u043E\u043C\u0444\u043E\u0440\u0442","recommended":true},{"id":"p004","name":"\u041D\u0430\u0441\u0456\u043D\u043D\u044F \u043F\u043E\u043C\u0456\u0434\u043E\u0440\u0456\u0432 \xab\u041C\u0430\u043C\u0438\u043D\u0435 \u0434\u043E\u043C\u0430\u0448\u043D\u0454\xbb (\u0440\u0430\u043D\u043D\u0456)","priceUAH":18,"unit":"\u043F\u0430\u043A","section":"garden","category":"\u041C\u0430\u0439\u0431\u0443\u0442\u043D\u0456\u0439 \u0432\u0440\u043E\u0436\u0430\u0439","recommended":true},{"id":"p005","name":"\u041F\u043B\u0435\u0434 \u043C\u0456\u043A\u0440\u043E\u0444\u0456\u0431\u0440\u0430 \xab\u041E\u0431\u0456\u0439\u043C\u0438\xbb (150\u0445200 \u0441\u043C)","priceUAH":560,"unit":"\u0448\u0442","section":"rest","category":"\u041C\u2019\u044F\u043A\u0456 \u043E\u0431\u0456\u0439\u043C\u0438","recommended":true},{"id":"p006","name":"\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0456 \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0456 \u0448\u0442\u0430\u043D\u0438 \u043D\u0430 \u0444\u043B\u0456\u0441\u0456 (\u0442\u0435\u043C\u043D\u043E-\u0441\u0438\u043D\u0456)","priceUAH":650,"unit":"\u0448\u0442","section":"care","category":"\u0411\u0430\u0437\u043E\u0432\u0438\u0439 \u0437\u0430\u0442\u0438\u0448\u043E\u043A","recommended":true},{"id":"p007","name":"\u041A\u043B\u0435\u0439\u043E\u043D\u043A\u0430 \u043D\u0430 \u043A\u0443\u0445\u043E\u043D\u043D\u0438\u0439 \u0441\u0442\u0456\u043B \xab\u041B\u0430\u0432\u0430\u043D\u0434\u043E\u0432\u0435 \u043F\u043E\u043B\u0435\xbb","priceUAH":130,"unit":"\u043C","section":"garden","category":"\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0443 \u0433\u043E\u0441\u043F\u043E\u0434\u0456","recommended":true},{"id":"p008","name":"\u041F\u0443\u0445\u043D\u0430\u0441\u0442\u0456 \u043A\u0456\u043C\u043D\u0430\u0442\u043D\u0456 \u043A\u0430\u043F\u0446\u0456 \u0437 \u0432\u0443\u0448\u043A\u0430\u043C\u0438","priceUAH":310,"unit":"\u043F\u0430\u0440\u0430","section":"outdoor","category":"\u0414\u043B\u044F \u0445\u0430\u0442\u0438","recommended":true},{"id":"p009","name":"\u0410\u0433\u0440\u043E\u0432\u043E\u043B\u043E\u043A\u043D\u043E \u0431\u0456\u043B\u0435 (\u0449\u0456\u043B\u044C\u043D\u0456\u0441\u0442\u044C 30\u0433/\u043C\xb2)","priceUAH":25,"unit":"\u043C","section":"garden","category":"\u0422\u0443\u0440\u0431\u043E\u0442\u0430 \u043F\u0440\u043E \u0440\u043E\u0441\u043B\u0438\u043D\u0438","recommended":true},{"id":"p010","name":"\u0414\u0435\u043C\u0456\u0441\u0435\u0437\u043E\u043D\u043D\u0430 \u043A\u0443\u0440\u0442\u043A\u0430 (\u0441\u0442\u0435\u0431\u043D\u043E\u0432\u0430\u043D\u0430, \u043E\u043B\u0438\u0432\u043A\u043E\u0432\u0430)","priceUAH":1550,"unit":"\u0448\u0442","section":"outdoor","category":"\u0412\u0435\u0440\u0445\u043D\u0456\u0439 \u043E\u0434\u044F\u0433","recommended":true}]}');

},{}],"3crBc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "el", ()=>el);
parcelHelpers.export(exports, "formatUAH", ()=>formatUAH);
parcelHelpers.export(exports, "pluralizeUA", ()=>pluralizeUA);
function el(tag, options = {}) {
    const node = document.createElement(tag);
    if (options.className) node.className = options.className;
    if (options.text) node.textContent = options.text;
    if (options.href) node.setAttribute("href", options.href);
    if (options.type) node.setAttribute("type", options.type);
    if (options.value != null) node.value = options.value;
    if (options.dataset) Object.entries(options.dataset).forEach(([k, v])=>node.dataset[k] = String(v));
    return node;
}
function formatUAH(amount) {
    return new Intl.NumberFormat("uk-UA").format(amount) + " \u0433\u0440\u043D";
}
function pluralizeUA(count, [one, few, many]) {
    const mod10 = count % 10;
    const mod100 = count % 100;
    if (mod10 === 1 && mod100 !== 11) return one;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
    return many;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6iTkZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCart", ()=>getCart);
parcelHelpers.export(exports, "addToCart", ()=>addToCart);
parcelHelpers.export(exports, "updateQty", ()=>updateQty);
parcelHelpers.export(exports, "removeFromCart", ()=>removeFromCart);
parcelHelpers.export(exports, "clearCart", ()=>clearCart);
const CART_KEY = "kramnychka:cart";
function getCart() {
    try {
        const raw = localStorage.getItem(CART_KEY);
        const cart = raw ? JSON.parse(raw) : [];
        return Array.isArray(cart) ? cart : [];
    } catch  {
        return [];
    }
}
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function addToCart(productId, qty = 1) {
    const safeQty = Math.max(1, Number(qty) || 1);
    const cart = getCart();
    const existing = cart.find((x)=>x.productId === productId);
    if (existing) existing.qty = Math.max(1, (Number(existing.qty) || 0) + safeQty);
    else cart.push({
        productId,
        qty: safeQty
    });
    saveCart(cart);
}
function updateQty(productId, qty) {
    const safeQty = Math.max(1, Number(qty) || 1);
    const cart = getCart();
    const item = cart.find((x)=>x.productId === productId);
    if (!item) return;
    item.qty = safeQty;
    saveCart(cart);
}
function removeFromCart(productId) {
    const cart = getCart().filter((x)=>x.productId !== productId);
    saveCart(cart);
}
function clearCart() {
    localStorage.removeItem(CART_KEY);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1md5T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateCartBadge", ()=>updateCartBadge);
var _storageJs = require("./storage.js");
function updateCartBadge() {
    const badge = document.getElementById("cartBadge");
    if (!badge) return;
    const cart = (0, _storageJs.getCart)();
    const count = cart.reduce((sum, item)=>sum + (Number(item.qty) || 0), 0);
    if (count > 0) {
        badge.textContent = String(count);
        badge.classList.add("is-visible");
    } else {
        badge.textContent = "";
        badge.classList.remove("is-visible");
    }
}

},{"./storage.js":"6iTkZ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["dn1C1","aFuO6"], "aFuO6", "parcelRequire714f", {})

//# sourceMappingURL=catalog.115b09c5.js.map
