import { u as useGetRequest, _ as __nuxt_component_2 } from './GET_REQUESTS.bc9507ac.mjs';
import { ref, useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'vue-i18n';
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

const _sfc_main = {
  setup() {
    useGetRequest();
    const loading = ref(true);
    const userArr = ref([]);
    return { userArr, loading };
  },
  components: {
    Loader: __nuxt_component_2
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Loader = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if (!$setup.loading) {
    _push(`<div class="singleUsersPage"><h5>ID: ${ssrInterpolate($setup.userArr.id)}</h5><h6>name: ${ssrInterpolate($setup.userArr.name)}</h6><h6>display name: ${ssrInterpolate($setup.userArr.display_name)}</h6><h6>description: ${ssrInterpolate($setup.userArr.description)}</h6></div>`);
  } else {
    _push(ssrRenderComponent(_component_Loader, null, null, _parent));
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/permissions/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_.2d28a5d5.mjs.map
