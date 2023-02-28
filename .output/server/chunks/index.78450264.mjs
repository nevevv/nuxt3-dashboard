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
          title: "Biochemistry & Lab",
          code: "MBKD103",
          credits: "4",
          program: "Medical School",
          action: "Select"
        },
        {
          title: "Biochemistry & Lab",
          code: "MBKD103",
          credits: "4",
          program: "Medical School",
          action: "Select"
        },
        {
          title: "Biochemistry & Lab",
          code: "MBKD103",
          credits: "4",
          program: "Medical School",
          action: "Select"
        },
        {
          title: "Biochemistry & Lab",
          code: "MBKD103",
          credits: "4",
          program: "Medical School",
          action: "Select"
        },
        {
          title: "Biochemistry & Lab",
          code: "MBKD103",
          credits: "4",
          program: "Medical School",
          action: "Select"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeadVue = resolveComponent("HeadVue");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "programs__page" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeadVue, {
    text: "Course Managements",
    subtitle: "/ Students"
  }, null, _parent));
  _push(`<div class="main__programs-content"><div class="users-content-head"><h3 class="users-content-title">Courses</h3><div class="main__all-btn"><button class="main__programs-content-btn modalBtn"> Create a New Course </button></div></div><div class="main__programs-content-block"><div class="main__content-block-head"><h3 class="main__block-head-title">All Courses</h3><div class="main__block-head-item"><div class="main__block-head-input"><i class="bi bi-search"></i><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></div><button><i class="bi bi-funnel"></i> Filter </button></div></div><table><thead><tr><th class="th">Title</th><th class="th">Code</th><th class="th">Min Credits</th><th class="th">Department</th><th class="th">Action</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($data.lists, (list) => {
    _push(`<tr><td>${ssrInterpolate(list.title)}</td><td>${ssrInterpolate(list.code)}</td><td>${ssrInterpolate(list.credits)}</td><td>${ssrInterpolate(list.program)}</td><td><select class="form-select" aria-label="Default select example"><option selected>Open this select menu</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></td></tr>`);
  });
  _push(`<!--]--></tbody></table><div class="main__programs-sub"><div class="main__programs-sub-item"><select name="" id=""><option value="">10</option></select><h3>Items per page</h3><p>1-2 of 2 items</p></div><div class="main__programs-sub-item"><select name="" id=""><option value="">1</option></select><p>of 1 pages</p><div class="main__programs-sub-chevrons"><i class="fa-solid fa-chevron-left"></i><i class="fa-solid fa-chevron-right"></i></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.78450264.mjs.map
