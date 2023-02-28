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
  data() {
    return {
      lists: [
        {
          cash: 0
        },
        {
          cash: 0
        },
        {
          cash: 0
        },
        {
          cash: 0
        },
        {
          cash: 0
        },
        {
          cash: 0
        },
        {
          cash: 0
        },
        {
          cash: 0
        }
      ]
    };
  },
  components: {
    HeadVue
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeadVue = resolveComponent("HeadVue");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "programs__page" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeadVue, {
    text: "Finances",
    subtitle: "/ Students"
  }, null, _parent));
  _push(`<h2 class="finances__content-head">2020 / Fall</h2><div class="main__programs-content"><div class="main__programs-content-block"><table class="table table-bordered finances__block-table"><thead><tr scope="col"><th colspan="1" class="finance-table__head finance-table-title"></th><th colspan="4" class="finance-table__head finance-table-title"> UZS </th><th colspan="4" class="finance-table__head finance-table-title"> USD </th></tr></thead><tbody><tr><th class="finance-table-title">School and Year</th><th class="finance-table-title">Total</th><th class="finance-table-title">Paid</th><th class="finance-table-title">In Debt</th><th class="finance-table-title">Debt Amount</th><th class="finance-table-title">Total</th><th class="finance-table-title">Paid</th><th class="finance-table-title">In Debt</th><th class="finance-table-title">Debt Amount</th></tr><tr><th class="finance-table-text">School and Year</th><!--[-->`);
  ssrRenderList($data.lists, (list) => {
    _push(`<th class="finance-table-text">${ssrInterpolate(list.cash)}</th>`);
  });
  _push(`<!--]--></tr><tr><th class="finance-table-text">School and Year</th><!--[-->`);
  ssrRenderList($data.lists, (list) => {
    _push(`<th class="finance-table-text">${ssrInterpolate(list.cash)}</th>`);
  });
  _push(`<!--]--></tr></tbody></table><div class="main__programs-sub"><div class="main__programs-sub-item"><select name="" id=""><option value="">3</option></select><h3>Items per page</h3><p>3 of 3 items</p></div><div class="main__programs-sub-item"><select name="" id=""><option value="">1</option></select><p>of 1 pages</p><div class="main__programs-sub-chevrons"><i class="fa-solid fa-chevron-left"></i><i class="fa-solid fa-chevron-right"></i></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/finances/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.077cb2dc.mjs.map
