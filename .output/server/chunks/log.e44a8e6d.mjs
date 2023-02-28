import Login from './index.6c636931.mjs';
import { resolveComponent, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './GET_REQUESTS.bc9507ac.mjs';
import './index.3f708b62.mjs';
import './cookie.f9059845.mjs';
import 'cookie-es';
import 'h3';
import 'destr';
import 'ohash';
import './POST_REQUESTS.56b9ebda.mjs';
import 'ofetch';
import './logo-text.c5228760.mjs';
import 'hookable';
import 'unctx';
import 'ufo';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'vue-i18n';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  components: {
    Login
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Login = resolveComponent("Login");
  _push(ssrRenderComponent(_component_Login, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/log.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const log = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { log as default };
//# sourceMappingURL=log.e44a8e6d.mjs.map
