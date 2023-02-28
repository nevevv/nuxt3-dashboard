import { H as HeadVue } from './Head.b38f7dce.mjs';
import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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

const _imports_0 = "" + globalThis.__buildAssetsURL("main__content-head-1.17db170b.svg");
const _imports_1 = "" + globalThis.__buildAssetsURL("main__content-head-2.50a8d97e.svg");
const _imports_2 = "" + globalThis.__buildAssetsURL("main__content-head-3.15de961e.svg");
const _imports_3 = "" + globalThis.__buildAssetsURL("chart-gender.dc51560e.png");
const _imports_4 = "" + globalThis.__buildAssetsURL("main__content-head-4.5026de98.svg");
const _imports_5 = "" + globalThis.__buildAssetsURL("main__content-head-5.acf0ab0e.svg");
const _imports_6 = "" + globalThis.__buildAssetsURL("iconContainer.18ed5d44.png");
const _sfc_main = {
  name: "page",
  components: {
    HeadVue
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeadVue = resolveComponent("HeadVue");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "dashboard__main" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeadVue, { text: "Dashboard" }, null, _parent));
  _push(`<div class="main__content"><div class="main__content-items"><div class="main__content-head"><div class="main__content-icon"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><select><option value="">2022</option></select></div><div class="main__content-info"><div><h3 class="main__content-item">${ssrInterpolate(_ctx.$t("students"))}</h3><p class="main__content-value">1229 <span>+10.94%</span></p></div><div><h3 class="main__content-item">${ssrInterpolate(_ctx.$t("volume"))}</h3><p class="main__content-value">9820</p></div></div></div><div class="main__content-items"><div class="main__content-head"><div class="main__content-icon"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><select><option value="">2022</option></select></div><div class="main__content-info"><div><h3 class="main__content-item">${ssrInterpolate(_ctx.$t("prof"))}</h3><p class="main__content-value">49 <span>+120.28%</span></p></div><div><h3 class="main__content-item">${ssrInterpolate(_ctx.$t("assis"))}</h3><p class="main__content-value">24 <span>+45.00%</span></p></div></div></div><div class="main__content-items"><div class="main__content-head"><div class="main__content-icon"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><select><option value="">2022</option></select></div><div class="main__content-info"><div><h3 class="main__content-item">${ssrInterpolate(_ctx.$t("allEvents"))}</h3><p class="main__content-value">21</p></div><div><h3 class="main__content-item">${ssrInterpolate(_ctx.$t("pending"))}</h3><p class="main__content-value">18</p></div><div><h3 class="main__content-item">${ssrInterpolate(_ctx.$t("completed"))}</h3><p class="main__content-value">3 <span>+0.00%</span></p></div></div></div><div class="main__content-items"><div class="main__content-head"><h3 class="main__content-title">${ssrInterpolate(_ctx.$t("studentStatus"))}</h3><select><option value="">2022</option></select></div><div class="main__content-chart"><p class="main__chart-gender"><span></span>${ssrInterpolate(_ctx.$t("males"))}</p><p class="main__chart-gender"><span></span>${ssrInterpolate(_ctx.$t("females"))}</p></div><img width="200" class="main__chart-img" height="200"${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="main__content-items"><div class="main__content-head"><div class="main__content-icon"><img${ssrRenderAttr("src", _imports_4)} alt=""></div></div><div class="main__content-info other-block"><div><h3 class="main__content-item">${ssrInterpolate(_ctx.$t("mandatoryCourses"))}</h3><p class="main__content-value">29 <span>+0.00%</span></p></div><div><h3 class="main__content-item">${ssrInterpolate(_ctx.$t("selectiveCourses"))}</h3><p class="main__content-value">31 <span>+0.00%</span></p></div></div></div><div class="main__content-items"><div class="main__content-head"><div class="main__content-icon"><img${ssrRenderAttr("src", _imports_5)} alt=""></div><select><option value="">2022</option></select></div><div class="main__content-info"><div><h3 style="${ssrRenderStyle({ "color": "#cc5f5f" })}" class="main__content-item">${ssrInterpolate(_ctx.$t("debtors"))}</h3><p class="main__content-value">12% <span>+0.00%</span></p></div><div><h3 class="main__content-item">${ssrInterpolate(_ctx.$t("customers"))}</h3><p class="main__content-value">0</p></div></div></div><div class="main__content-items"><h3 class="main__content-title">${ssrInterpolate(_ctx.$t("noticeBoard"))}</h3><div class="main__content-notice"><img${ssrRenderAttr("src", _imports_6)} alt=""><h3>${ssrInterpolate(_ctx.$t("noNoti"))}</h3><p>${ssrInterpolate(_ctx.$t("addNewNotiAndInform"))}</p><button><i class="fa-solid fa-plus"></i> ${ssrInterpolate(_ctx.$t("newNotice"))}</button></div></div><div class="main__content-items"><div class="main__content-head"><div class="main__content-sub"><h3 class="main__content-title">${ssrInterpolate(_ctx.$t("summary"))}</h3><select class="main__content-select"><option>${ssrInterpolate(_ctx.$t("paidContracts"))}</option></select></div><select style="${ssrRenderStyle({ "color": "#1c1d22 !important" })}"><option>2022</option></select></div><div class="main__content-scale"><div class="main__content-y"><p>100k</p><p>80k</p><p>60k</p><p>40k</p><p>20k</p></div><div class="main__content-x"><div class="main__content-graph"><div></div><p>Sept 10</p></div><div class="main__content-graph"><div></div><p>Sept 11</p></div><div class="main__content-graph"><div></div><p>Sept 12</p></div><div class="main__content-graph"><div></div><p>Sept 13</p></div><div class="main__content-graph"><div></div><p>Sept 14</p></div><div class="main__content-graph"><div></div><p>Sept 15</p></div><div class="main__content-graph"><div></div><p>Sept 16</p></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.964600f2.mjs.map
