import { _ as __nuxt_component_1, a as __nuxt_component_0 } from './Actions.b4410b4e.mjs';
import { u as useGetRequest, _ as __nuxt_component_2 } from './GET_REQUESTS.bc9507ac.mjs';
import { ref, resolveComponent, mergeProps, useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import { H as HeadVue } from './Head.b38f7dce.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import './cookie.f9059845.mjs';
import 'cookie-es';
import 'h3';
import 'destr';
import 'ohash';
import './POST_REQUESTS.56b9ebda.mjs';
import 'ofetch';
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
import './index.3f708b62.mjs';

const _sfc_main = {
  name: "page",
  setup() {
    const api_url = "service-fields";
    useGetRequest();
    const usersList = ref([]);
    const loading = ref(true);
    return { usersList, loading, api_url };
  },
  components: {
    HeadVue,
    Loader: __nuxt_component_2,
    Actions: __nuxt_component_1,
    CreateNew: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeadVue = resolveComponent("HeadVue");
  const _component_CreateNew = __nuxt_component_0;
  const _component_Actions = __nuxt_component_1;
  const _component_Loader = __nuxt_component_2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "programs__page" }, _attrs))} data-v-dfaa2567>`);
  _push(ssrRenderComponent(_component_HeadVue, {
    text: "Service Field",
    subtitle: "/ Service"
  }, null, _parent));
  _push(`<div class="main__programs-content" data-v-dfaa2567><div class="users-content-head" data-v-dfaa2567><h3 class="users-content-title" data-v-dfaa2567>All Service</h3>`);
  _push(ssrRenderComponent(_component_CreateNew, {
    modalName: "service",
    fields: ["name", "field_type_id"],
    url: $setup.api_url
  }, null, _parent));
  _push(`</div><div class="main__programs-content-block" data-v-dfaa2567><div class="main__content-block-head" data-v-dfaa2567><h3 class="main__block-head-title" data-v-dfaa2567>All Roles</h3><div class="main__block-head-item" data-v-dfaa2567><div class="main__block-head-input" data-v-dfaa2567><i class="bi bi-search" data-v-dfaa2567></i><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" data-v-dfaa2567></div><button data-v-dfaa2567><i class="bi bi-funnel" data-v-dfaa2567></i> Filter </button><button data-v-dfaa2567><i class="bi bi-calendar" data-v-dfaa2567></i> Filter </button></div></div>`);
  if (!$setup.loading) {
    _push(`<table data-v-dfaa2567><thead data-v-dfaa2567><tr data-v-dfaa2567><th class="th" data-v-dfaa2567>ID</th><th class="th" data-v-dfaa2567>Name</th><th class="th" data-v-dfaa2567>Default Value</th><th class="th" data-v-dfaa2567>Field type ID</th><th class="th" data-v-dfaa2567>Action</th></tr></thead><tbody data-v-dfaa2567><!--[-->`);
    ssrRenderList($setup.usersList, (list) => {
      _push(`<tr data-v-dfaa2567><td data-v-dfaa2567>${ssrInterpolate(list.id)}</td><td data-v-dfaa2567>${ssrInterpolate(list.name)}</td><td data-v-dfaa2567>${ssrInterpolate(list.default_value)}</td><td data-v-dfaa2567>${ssrInterpolate(list.field_type_id)}</td><td style="${ssrRenderStyle({ "width": "16%" })}" data-v-dfaa2567>`);
      _push(ssrRenderComponent(_component_Actions, {
        list,
        fields: ["name", "default_value", "field_type_id"],
        url: $setup.api_url
      }, null, _parent));
      _push(`</td></tr>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service-fields/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dfaa2567"]]);

export { index as default };
//# sourceMappingURL=index.14d6536e.mjs.map
