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
    const api_url = "users";
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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "programs__page" }, _attrs))} data-v-10c65649>`);
  _push(ssrRenderComponent(_component_HeadVue, {
    text: "Users",
    subtitle: "/ Users"
  }, null, _parent));
  _push(`<div class="main__programs-content" data-v-10c65649><div class="users-content-head" data-v-10c65649><h3 class="users-content-title" data-v-10c65649>All users</h3>`);
  _push(ssrRenderComponent(_component_CreateNew, {
    modalName: "user",
    fields: ["login", "password", "full_name", "role[]"],
    url: $setup.api_url
  }, null, _parent));
  _push(`</div><div class="main__programs-content-block" data-v-10c65649><div class="main__content-block-head" data-v-10c65649><h3 class="main__block-head-title" data-v-10c65649>All Users</h3><div class="main__block-head-item" data-v-10c65649><div class="main__block-head-input" data-v-10c65649><i class="bi bi-search" data-v-10c65649></i><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" data-v-10c65649></div><button data-v-10c65649><i class="bi bi-funnel" data-v-10c65649></i> Filter </button><button data-v-10c65649><i class="bi bi-calendar" data-v-10c65649></i> Filter </button></div></div>`);
  if (!$setup.loading) {
    _push(`<table data-v-10c65649><thead data-v-10c65649><tr data-v-10c65649><th class="th" data-v-10c65649>ID</th><th class="th" data-v-10c65649>Full Name</th><th class="th" data-v-10c65649>Login</th><th class="th" data-v-10c65649>Action</th></tr></thead><tbody data-v-10c65649><!--[-->`);
    ssrRenderList($setup.usersList, (list) => {
      _push(`<tr data-v-10c65649><td data-v-10c65649>${ssrInterpolate(list.id)}</td><td data-v-10c65649>${ssrInterpolate(list.full_name)}</td><td data-v-10c65649>${ssrInterpolate(list.login)}</td><td style="${ssrRenderStyle({ "width": "16%" })}" data-v-10c65649>`);
      _push(ssrRenderComponent(_component_Actions, {
        list,
        fields: ["login", "password", "full_name", "role[]"],
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-10c65649"]]);

export { index as default };
//# sourceMappingURL=index.37348728.mjs.map
