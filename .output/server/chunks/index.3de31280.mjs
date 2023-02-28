import { H as HeadVue } from './Head.b38f7dce.mjs';
import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './cookie.f9059845.mjs';
import 'cookie-es';
import 'h3';
import 'destr';
import 'ohash';
import './index.3f708b62.mjs';
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

const _sfc_main = {
  components: {
    HeadVue
  },
  data() {
    return {
      lists: [
        {
          id: "20M013",
          email: "a.akhmedjanov@akfauniversity.org",
          firstName: "Azamat",
          lastName: "Akhmedjanov",
          number: "+998 90 122 33 44",
          date: "2020",
          department: "Medical School",
          select: "Select"
        },
        {
          id: "20M013",
          email: "a.akhmedjanov@akfauniversity.org",
          firstName: "Azamat",
          lastName: "Akhmedjanov",
          number: "+998 90 122 33 44",
          date: "2020",
          department: "Medical School",
          select: "Select"
        },
        {
          id: "20M013",
          email: "a.akhmedjanov@akfauniversity.org",
          firstName: "Azamat",
          lastName: "Akhmedjanov",
          number: "+998 90 122 33 44",
          date: "2020",
          department: "Medical School",
          select: "Select"
        },
        {
          id: "20M013",
          email: "a.akhmedjanov@akfauniversity.org",
          firstName: "Azamat",
          lastName: "Akhmedjanov",
          number: "+998 90 122 33 44",
          date: "2020",
          department: "Medical School",
          select: "Select"
        },
        {
          id: "20M013",
          email: "a.akhmedjanov@akfauniversity.org",
          firstName: "Azamat",
          lastName: "Akhmedjanov",
          number: "+998 90 122 33 44",
          date: "2020",
          department: "Medical School",
          select: "Select"
        },
        {
          id: "20M013",
          email: "a.akhmedjanov@akfauniversity.org",
          firstName: "Azamat",
          lastName: "Akhmedjanov",
          number: "+998 90 122 33 44",
          date: "2020",
          department: "Medical School",
          select: "Select"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeadVue = resolveComponent("HeadVue");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "programs__page" }, _attrs))} data-v-f9743629>`);
  _push(ssrRenderComponent(_component_HeadVue, {
    text: "Transfer Credits",
    subtitle: "/ Students"
  }, null, _parent));
  _push(`<div class="main__programs-content" data-v-f9743629><div class="users-content-head" data-v-f9743629><h3 class="users-content-title" data-v-f9743629>Transferred Students</h3><div class="main__all-btn" data-v-f9743629><button class="main__programs-content-btn modalBtn" data-v-f9743629> Add Transferred Student </button></div></div><div class="main__programs-content-block" data-v-f9743629><div class="main__content-block-head" data-v-f9743629><h3 class="main__block-head-title" data-v-f9743629>All Students</h3><div class="main__block-head-item" data-v-f9743629><div class="main__block-head-input" data-v-f9743629><i class="bi bi-search" data-v-f9743629></i><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" data-v-f9743629></div><button data-v-f9743629><i class="bi bi-funnel" data-v-f9743629></i> Filter </button></div></div><table data-v-f9743629><thead data-v-f9743629><tr data-v-f9743629><th class="th" data-v-f9743629>ID</th><th class="th" data-v-f9743629>Email</th><th class="th" data-v-f9743629>Name</th><th class="th" data-v-f9743629>Surname</th><th class="th" data-v-f9743629>Start Date</th><th class="th" data-v-f9743629>Department</th><th class="th" data-v-f9743629>Action</th></tr></thead><tbody data-v-f9743629><!--[-->`);
  ssrRenderList($data.lists, (list) => {
    _push(`<tr data-v-f9743629><td data-v-f9743629>${ssrInterpolate(list.id)}</td><td data-v-f9743629>${ssrInterpolate(list.email)}</td><td data-v-f9743629>${ssrInterpolate(list.firstName)}</td><td data-v-f9743629>${ssrInterpolate(list.lastName)}</td><td data-v-f9743629>${ssrInterpolate(list.date)}</td><td data-v-f9743629>${ssrInterpolate(list.department)}</td><td data-v-f9743629><select class="form-select" aria-label="Default select example" data-v-f9743629><option selected data-v-f9743629>Action</option><option value="1" data-v-f9743629>One</option><option value="2" data-v-f9743629>Two</option><option value="3" data-v-f9743629>Three</option></select></td></tr>`);
  });
  _push(`<!--]--></tbody></table><div class="main__programs-sub" data-v-f9743629><div class="main__programs-sub-item" data-v-f9743629><select name="" id="" data-v-f9743629><option value="" data-v-f9743629>10</option></select><h3 data-v-f9743629>Items per page</h3><p data-v-f9743629>12 of 200 items</p></div><div class="main__programs-sub-item" data-v-f9743629><select name="" id="" data-v-f9743629><option value="" data-v-f9743629>1</option></select><p data-v-f9743629>of 10 pages</p><div class="main__programs-sub-chevrons" data-v-f9743629><i class="fa-solid fa-chevron-left" data-v-f9743629></i><i class="fa-solid fa-chevron-right" data-v-f9743629></i></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/transfer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f9743629"]]);

export { index as default };
//# sourceMappingURL=index.3de31280.mjs.map
