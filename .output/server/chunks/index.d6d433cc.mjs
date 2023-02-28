import { u as useGetRequest, _ as __nuxt_component_2 } from './GET_REQUESTS.bc9507ac.mjs';
import { ref, resolveComponent, mergeProps, useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import { H as HeadVue } from './Head.b38f7dce.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
import './cookie.f9059845.mjs';
import 'cookie-es';
import './index.3f708b62.mjs';
import './POST_REQUESTS.56b9ebda.mjs';

const _sfc_main = {
  components: {
    HeadVue
  },
  setup() {
    useGetRequest();
    const dataList = ref([]);
    const loading = ref(true);
    return { dataList, loading };
  },
  components: {
    HeadVue,
    Loader: __nuxt_component_2
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeadVue = resolveComponent("HeadVue");
  const _component_Loader = __nuxt_component_2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "programs__page" }, _attrs))} data-v-4d68cb19>`);
  _push(ssrRenderComponent(_component_HeadVue, {
    text: "Fields Types",
    subtitle: "/ Fields"
  }, null, _parent));
  _push(`<div class="main__programs-content" data-v-4d68cb19><div class="users-content-head" data-v-4d68cb19><h3 class="users-content-title" data-v-4d68cb19>Fields Types</h3></div><div class="main__programs-content-block" data-v-4d68cb19><div class="main__content-block-head" data-v-4d68cb19><h3 class="main__block-head-title" data-v-4d68cb19>Fields Types List</h3><div class="main__block-head-item" data-v-4d68cb19><div class="main__block-head-input" data-v-4d68cb19><i class="bi bi-search" data-v-4d68cb19></i><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" data-v-4d68cb19></div><button data-v-4d68cb19><i class="bi bi-funnel" data-v-4d68cb19></i> Filter </button></div></div>`);
  if (!$setup.loading) {
    _push(`<table data-v-4d68cb19><thead data-v-4d68cb19><tr data-v-4d68cb19><th class="th" data-v-4d68cb19>ID</th><th class="th" data-v-4d68cb19>Name</th></tr></thead><tbody data-v-4d68cb19><!--[-->`);
    ssrRenderList($setup.dataList, (list) => {
      _push(`<tr data-v-4d68cb19><td data-v-4d68cb19>${ssrInterpolate(list.id)}</td><td data-v-4d68cb19>${ssrInterpolate(list.name)}</td></tr>`);
    });
    _push(`<!--]--></tbody></table>`);
  } else {
    _push(ssrRenderComponent(_component_Loader, null, null, _parent));
  }
  _push(`</div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/field_types/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4d68cb19"]]);

export { index as default };
//# sourceMappingURL=index.d6d433cc.mjs.map
