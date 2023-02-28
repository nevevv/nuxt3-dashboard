import { c as defineNuxtRouteMiddleware, e as useRouter } from './server.mjs';
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

const guest = defineNuxtRouteMiddleware((to, from) => {
  const cookie = useCookie("token");
  if (!cookie.value) {
    useRouter().push("/login");
  }
});

export { guest as default };
//# sourceMappingURL=guest.5d6fb149.mjs.map
