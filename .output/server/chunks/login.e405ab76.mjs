import { c as defineNuxtRouteMiddleware } from './server.mjs';
import { u as useCookie } from './cookie.f9059845.mjs';
import 'vue';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'vue-i18n';
import 'vue/server-renderer';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'cookie-es';

const login = defineNuxtRouteMiddleware((to, from) => {
  useCookie("token").value = "";
});

export { login as default };
//# sourceMappingURL=login.e405ab76.mjs.map
