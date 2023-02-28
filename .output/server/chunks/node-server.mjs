globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{"api_url":"https://crm.uzwebline.com/api/v1"}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/_nuxt/Actions.157496b5.js": {
    "type": "application/javascript",
    "etag": "\"1249-syJwzbbE1d9ofOdEaMKTy486ahM\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 4681,
    "path": "../public/_nuxt/Actions.157496b5.js"
  },
  "/_nuxt/bglogin.02baf8d5.png": {
    "type": "image/png",
    "etag": "\"f479-XBbNMy8VGafzlTW1zB9MZIG99EU\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 62585,
    "path": "../public/_nuxt/bglogin.02baf8d5.png"
  },
  "/_nuxt/chart-gender.dc51560e.png": {
    "type": "image/png",
    "etag": "\"138a-+5p8XrtT2LmDZhwwSaLXYGluZwk\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 5002,
    "path": "../public/_nuxt/chart-gender.dc51560e.png"
  },
  "/_nuxt/composables.6a86220a.js": {
    "type": "application/javascript",
    "etag": "\"61-O3OcZT33uY/hycGv/OysZpf/iac\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 97,
    "path": "../public/_nuxt/composables.6a86220a.js"
  },
  "/_nuxt/cookie.a478a7c9.js": {
    "type": "application/javascript",
    "etag": "\"82a-6qsxgNwl98P9/oAsY6cAkBRTdPM\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 2090,
    "path": "../public/_nuxt/cookie.a478a7c9.js"
  },
  "/_nuxt/default.729ab392.js": {
    "type": "application/javascript",
    "etag": "\"9b5-sOpD3kQNw6qUyIA3fcPLmPvu6bo\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 2485,
    "path": "../public/_nuxt/default.729ab392.js"
  },
  "/_nuxt/entry.cc575467.js": {
    "type": "application/javascript",
    "etag": "\"33bbf-zF/dwxZ7x9Wsvy+0ek+/G9JmlcE\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 211903,
    "path": "../public/_nuxt/entry.cc575467.js"
  },
  "/_nuxt/entry.e6c48c26.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3a585-DNWaQB3ARASvwbPxe0zGl/aRgHQ\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 238981,
    "path": "../public/_nuxt/entry.e6c48c26.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.8c417b80.js": {
    "type": "application/javascript",
    "etag": "\"8cf-Z3sO3kX2TjhBgXaPXO9wWSUm6QY\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 2255,
    "path": "../public/_nuxt/error-404.8c417b80.js"
  },
  "/_nuxt/error-500.6b6132f3.js": {
    "type": "application/javascript",
    "etag": "\"778-OZSRVovBZUi12VAcetJuxFyvzD8\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 1912,
    "path": "../public/_nuxt/error-500.6b6132f3.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.48a3ef1e.js": {
    "type": "application/javascript",
    "etag": "\"4ad-/qW5Grwx6UBKXAKZhpM/4wVIzhE\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 1197,
    "path": "../public/_nuxt/error-component.48a3ef1e.js"
  },
  "/_nuxt/GET_REQUESTS.909cc5c6.js": {
    "type": "application/javascript",
    "etag": "\"142-qOXMsUeoL54aK1XwLh1s8SgElW4\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 322,
    "path": "../public/_nuxt/GET_REQUESTS.909cc5c6.js"
  },
  "/_nuxt/GET_REQUESTS.ddd5ce85.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"dc-cKeY5y4b74pbNBk72lL9ZsACDWg\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 220,
    "path": "../public/_nuxt/GET_REQUESTS.ddd5ce85.css"
  },
  "/_nuxt/guest.b1cf0609.js": {
    "type": "application/javascript",
    "etag": "\"a7-81gykq7RMGkxHpzqjUQnaKsSvjI\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 167,
    "path": "../public/_nuxt/guest.b1cf0609.js"
  },
  "/_nuxt/Head.43a3aaf4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4bc-wz4bzAB+Bf5Q8MNUDVGfGHtw5TQ\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 1212,
    "path": "../public/_nuxt/Head.43a3aaf4.css"
  },
  "/_nuxt/Head.5fe21d4c.js": {
    "type": "application/javascript",
    "etag": "\"11e7-Xci4fkGIVuwc8kucFBZt67CBTcU\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 4583,
    "path": "../public/_nuxt/Head.5fe21d4c.js"
  },
  "/_nuxt/iconContainer.18ed5d44.png": {
    "type": "image/png",
    "etag": "\"10c2-76sxBgdUe079GA7s1DSsd2NUDCY\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 4290,
    "path": "../public/_nuxt/iconContainer.18ed5d44.png"
  },
  "/_nuxt/index.08d1063b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"422-/dPFEWA6U9UO+luPJ/HJ4LA7LNI\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 1058,
    "path": "../public/_nuxt/index.08d1063b.css"
  },
  "/_nuxt/index.0f30bdc6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"47-gidyDzcnlV8AI7cgEjn3JtHOsos\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 71,
    "path": "../public/_nuxt/index.0f30bdc6.css"
  },
  "/_nuxt/index.1489dcb0.js": {
    "type": "application/javascript",
    "etag": "\"978-+IqLEXBEvSCg/u0j2sSd/zs7Oxs\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 2424,
    "path": "../public/_nuxt/index.1489dcb0.js"
  },
  "/_nuxt/index.15c7b874.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"41d-4qJU9PZxpULOOQCTyFaBTogWvrU\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 1053,
    "path": "../public/_nuxt/index.15c7b874.css"
  },
  "/_nuxt/index.16ad2d18.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"373-N/OXiry1+FiUtP+udBSLI/+uFeE\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 883,
    "path": "../public/_nuxt/index.16ad2d18.css"
  },
  "/_nuxt/index.2cb42915.js": {
    "type": "application/javascript",
    "etag": "\"923-xA7jCERPnzEb9qVNdU1ApdHztcU\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 2339,
    "path": "../public/_nuxt/index.2cb42915.js"
  },
  "/_nuxt/index.2e55214f.js": {
    "type": "application/javascript",
    "etag": "\"f31-lE+2AafNqZs/v/TYXP0jS94Ogx8\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 3889,
    "path": "../public/_nuxt/index.2e55214f.js"
  },
  "/_nuxt/index.3abc2d33.js": {
    "type": "application/javascript",
    "etag": "\"16b2a-QvIGLvtmLc0ICmst5CaJfQhRdeA\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 92970,
    "path": "../public/_nuxt/index.3abc2d33.js"
  },
  "/_nuxt/index.4b2adbd1.js": {
    "type": "application/javascript",
    "etag": "\"796-6FkvuWqqZt+uNn0eE6wsDC1Ggzk\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 1942,
    "path": "../public/_nuxt/index.4b2adbd1.js"
  },
  "/_nuxt/index.5488c5cf.js": {
    "type": "application/javascript",
    "etag": "\"9cb-MtHHWRivAFLvuYq+gmWBnkWvYVY\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 2507,
    "path": "../public/_nuxt/index.5488c5cf.js"
  },
  "/_nuxt/index.59a4087d.js": {
    "type": "application/javascript",
    "etag": "\"897-3VXJMl4UUg9F5QL1NZyb6QWC/rc\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 2199,
    "path": "../public/_nuxt/index.59a4087d.js"
  },
  "/_nuxt/index.7430b291.js": {
    "type": "application/javascript",
    "etag": "\"dde-ickLP2zYr3fJqI+Fb3VPdYxMIpA\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 3550,
    "path": "../public/_nuxt/index.7430b291.js"
  },
  "/_nuxt/index.7ddb0d4b.js": {
    "type": "application/javascript",
    "etag": "\"1696-YrHIdQvy8kLMxSAjeyqaMvT+xPo\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 5782,
    "path": "../public/_nuxt/index.7ddb0d4b.js"
  },
  "/_nuxt/index.8bec947e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"373-edVyep79zlYF1e5HJqUfhuk1XGY\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 883,
    "path": "../public/_nuxt/index.8bec947e.css"
  },
  "/_nuxt/index.9ab298e0.js": {
    "type": "application/javascript",
    "etag": "\"9b7-oSFypH89e/t70qKzKLnYnEU5/mo\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 2487,
    "path": "../public/_nuxt/index.9ab298e0.js"
  },
  "/_nuxt/index.a31be76f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"46d-+CKfm6o9o2zd135zSku2qRVK0Lc\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 1133,
    "path": "../public/_nuxt/index.a31be76f.css"
  },
  "/_nuxt/index.c8575ce5.js": {
    "type": "application/javascript",
    "etag": "\"f3-TxQ+Zu0dnX2+juwinqUYGnDoJ7s\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 243,
    "path": "../public/_nuxt/index.c8575ce5.js"
  },
  "/_nuxt/index.e759d22e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"345-DRwaTGsbkHbKXmT5HaTjrzsDMtk\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 837,
    "path": "../public/_nuxt/index.e759d22e.css"
  },
  "/_nuxt/index.fa7a9112.js": {
    "type": "application/javascript",
    "etag": "\"ab9-+++gTlFICQqOSHLt5Na629oUW5Y\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 2745,
    "path": "../public/_nuxt/index.fa7a9112.js"
  },
  "/_nuxt/index.ff455f53.js": {
    "type": "application/javascript",
    "etag": "\"cd4-/fDFSHpovPpqhpeThJtWwHYWNH4\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 3284,
    "path": "../public/_nuxt/index.ff455f53.js"
  },
  "/_nuxt/Inter-Medium.10d48331.ttf": {
    "type": "font/ttf",
    "etag": "\"4cd58-pBiounO7z6jBMcQmq4NteEV6+ps\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 314712,
    "path": "../public/_nuxt/Inter-Medium.10d48331.ttf"
  },
  "/_nuxt/Inter-Regular.41ab0f70.ttf": {
    "type": "font/ttf",
    "etag": "\"4ba44-cjfZz1Xxd3AgZqKKTd4eTH6KtXY\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 309828,
    "path": "../public/_nuxt/Inter-Regular.41ab0f70.ttf"
  },
  "/_nuxt/log.4a24224e.js": {
    "type": "application/javascript",
    "etag": "\"18c-rDuuxcnMqyxa+oYd546mPDWCV6I\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 396,
    "path": "../public/_nuxt/log.4a24224e.js"
  },
  "/_nuxt/login.92ec1a6c.js": {
    "type": "application/javascript",
    "etag": "\"8f-qLBHrfS2Hpnh6ZqA8xXqya35GWM\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 143,
    "path": "../public/_nuxt/login.92ec1a6c.js"
  },
  "/_nuxt/logo-text.c5228760.js": {
    "type": "application/javascript",
    "etag": "\"ba7-AsdM7RAfMx0H5Q6t/mq2g3wEKUU\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 2983,
    "path": "../public/_nuxt/logo-text.c5228760.js"
  },
  "/_nuxt/main__content-head-1.17db170b.svg": {
    "type": "image/svg+xml",
    "etag": "\"44d-s9CVjxTrpLV3vOcGmLNroSZecp8\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 1101,
    "path": "../public/_nuxt/main__content-head-1.17db170b.svg"
  },
  "/_nuxt/main__content-head-2.50a8d97e.svg": {
    "type": "image/svg+xml",
    "etag": "\"503-z0DnLIEQkuWCCh7oG031FzeccaM\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 1283,
    "path": "../public/_nuxt/main__content-head-2.50a8d97e.svg"
  },
  "/_nuxt/main__content-head-3.15de961e.svg": {
    "type": "image/svg+xml",
    "etag": "\"6ab-gK75IxAvdsyvWO2vvBcMRFduCjU\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 1707,
    "path": "../public/_nuxt/main__content-head-3.15de961e.svg"
  },
  "/_nuxt/main__content-head-4.5026de98.svg": {
    "type": "image/svg+xml",
    "etag": "\"2db-BVCFh0MxoB0StSKh7uWaHqLrtsk\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 731,
    "path": "../public/_nuxt/main__content-head-4.5026de98.svg"
  },
  "/_nuxt/main__content-head-5.acf0ab0e.svg": {
    "type": "image/svg+xml",
    "etag": "\"3f8-9AVLAJ11rjy1i4sbE6rEZEGRCgQ\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 1016,
    "path": "../public/_nuxt/main__content-head-5.acf0ab0e.svg"
  },
  "/_nuxt/Poppins-Medium.8d909883.ttf": {
    "type": "font/ttf",
    "etag": "\"26368-KD8htE772/J2uoAr4tlJo2u8QjM\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 156520,
    "path": "../public/_nuxt/Poppins-Medium.8d909883.ttf"
  },
  "/_nuxt/POST_REQUESTS.fbf4c081.js": {
    "type": "application/javascript",
    "etag": "\"121-IKhPJ5BaFNc43x/F7Uw+pCaWwh4\"",
    "mtime": "2023-02-28T11:16:16.246Z",
    "size": 289,
    "path": "../public/_nuxt/POST_REQUESTS.fbf4c081.js"
  },
  "/_nuxt/_id_.198d3220.js": {
    "type": "application/javascript",
    "etag": "\"404-Winm/zbmPHy19TifNNcNT1ik2ws\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 1028,
    "path": "../public/_nuxt/_id_.198d3220.js"
  },
  "/_nuxt/_id_.23d44a9a.js": {
    "type": "application/javascript",
    "etag": "\"37f-CQBwFZh6DVuo9gtnrY0OpVWq3rU\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 895,
    "path": "../public/_nuxt/_id_.23d44a9a.js"
  },
  "/_nuxt/_id_.5deef91e.js": {
    "type": "application/javascript",
    "etag": "\"385-qRj/j3AmvVuKSmOJVFLV1D1C/VE\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 901,
    "path": "../public/_nuxt/_id_.5deef91e.js"
  },
  "/_nuxt/_id_.b6910e7a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3b-NdHsxoFDWV/oo+eZbXLTf1e4xZg\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 59,
    "path": "../public/_nuxt/_id_.b6910e7a.css"
  },
  "/_nuxt/_id_.cbdb9ed8.js": {
    "type": "application/javascript",
    "etag": "\"346-V1NhNM4zihio0Y3ggrb//bItZsw\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 838,
    "path": "../public/_nuxt/_id_.cbdb9ed8.js"
  },
  "/_nuxt/_id_.ff8824e1.js": {
    "type": "application/javascript",
    "etag": "\"38e-WFJQ3G6LUdGgJRs2grD6lMJ17/c\"",
    "mtime": "2023-02-28T11:16:16.261Z",
    "size": 910,
    "path": "../public/_nuxt/_id_.ff8824e1.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_mu84IX = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_mu84IX, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_mu84IX, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
