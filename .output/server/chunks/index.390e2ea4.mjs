import { M as Modal, _ as __nuxt_component_1, a as __nuxt_component_0 } from './Actions.b4410b4e.mjs';
import { u as useGetRequest, _ as __nuxt_component_2 } from './GET_REQUESTS.bc9507ac.mjs';
import { ref, resolveComponent, mergeProps, useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import { u as useCookie } from './cookie.f9059845.mjs';
import { H as HeadVue } from './Head.b38f7dce.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import './POST_REQUESTS.56b9ebda.mjs';
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
import 'cookie-es';
import './index.3f708b62.mjs';

const _sfc_main = {
  setup() {
    const api_url = "services";
    const getRequest = useGetRequest();
    const usersList = ref([]);
    const loading = ref(true);
    ref(1);
    const getUsersData = async (pageId) => {
      const requestOptions = {
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json",
          "Authorization": "Bearer " + useCookie("token").value
        }
      };
      getRequest.getRequest(`${api_url}?list_type=pagination&page=${pageId}`, requestOptions, (response) => {
        usersList.value = response.data;
        loading.value = false;
        console.log(response.data);
      });
    };
    const changePage = (e) => {
      getUsersData(e.target.value);
    };
    return { getUsersData, usersList, loading, api_url, changePage };
  },
  components: {
    HeadVue,
    Modal,
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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "programs__page" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeadVue, {
    text: "Permissions",
    subtitle: "/ Services list"
  }, null, _parent));
  _push(`<div class="main__programs-content"><div class="main__programs-content"><div class="users-content-head"><h3 class="users-content-title">All Services</h3>`);
  _push(ssrRenderComponent(_component_CreateNew, {
    modalName: "service",
    fields: ["name", "description", "price", "size", "display_name"],
    url: $setup.api_url
  }, null, _parent));
  _push(`</div></div><div class="main__programs-content-block mb-5"><div class="main__content-block-head"><h3 class="main__block-head-title"> Services List </h3><div class="main__block-head-item"><div class="main__block-head-input"><i class="bi bi-search"></i><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></div><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px" })}"><button><i class="bi bi-funnel"></i> Filter </button><button><i class="bi bi-calendar"></i> Filter </button></div></div></div>`);
  if (!$setup.loading) {
    _push(`<table><thead><tr><th class="th">ID</th><th class="th">Name</th><th class="th">Description</th><th class="th">Price</th><th class="th">Size1</th><th class="th">Size</th><th class="th">Display Name</th><th class="th">Action</th></tr></thead><tbody><!--[-->`);
    ssrRenderList($setup.usersList.data, (list) => {
      _push(`<tr><td>${ssrInterpolate(list.id)}</td><td>${ssrInterpolate(list.name)}</td><td>${ssrInterpolate(list.description)}</td><td>${ssrInterpolate(list.price)}</td><td>${ssrInterpolate(list.size1)}</td><td>${ssrInterpolate(list.size)}</td><td>${ssrInterpolate(list.display_name)}</td><td style="${ssrRenderStyle({ "width": "16%" })}">`);
      _push(ssrRenderComponent(_component_Actions, {
        list,
        fields: ["name", "description", "price", "display_name", "size"],
        url: $setup.api_url
      }, null, _parent));
      _push(`</td></tr>`);
    });
    _push(`<!--]--></tbody></table>`);
  } else {
    _push(ssrRenderComponent(_component_Loader, null, null, _parent));
  }
  _push(`<div class="main__programs-sub"><div class="main__programs-sub-item"><p>${ssrInterpolate($setup.usersList.to)} of ${ssrInterpolate($setup.usersList.total)} items</p></div><div class="main__programs-sub-item"><select name="" id=""><!--[-->`);
  ssrRenderList($setup.usersList.last_page, (item) => {
    _push(`<option${ssrRenderAttr("value", item)}>${ssrInterpolate(item)}</option>`);
  });
  _push(`<!--]--></select><p>of ${ssrInterpolate($setup.usersList.last_page)} pages</p><div class="main__programs-sub-chevrons"><i class="fa-solid fa-chevron-left"></i><i class="fa-solid fa-chevron-right"></i></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.390e2ea4.mjs.map
