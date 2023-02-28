import { H as HeadVue } from './Head.b38f7dce.mjs';
import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEASURBVHgBtVSBDYIwEHwIAzACI+gEMgJMICO4gW7gCOIEsgE6AXECHIEN6l3yoJhYqYVLLoXv9fLffisyAcaYDNzKXKCZeWEvvvgw9DfWkolGWYOlxna2tZFlLgGvYA5eGAiCoIBhJ3NAs6yn6kNZAEP5yCTFwLZJNJSj3K+lQs8tiUFqKmjP8p4pBEcMLC/TuHXfoI/VkFiBpXoMgkJP9GAxse4p1466om8XsWdWT9S0/A41/Zv4gx5Jbzo7oom6Tn4cnrMp2iUXByxS/mKmD3Aj/kjUa9S4f7/svOLqceJ/oFeOjc1+rcC7uIFVpprlengvaKwZN8Ydra7t3wJ5AhSfC+buQcb4AAAAAElFTkSuQmCC";
const _sfc_main = {
  components: {
    HeadVue
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeadVue = resolveComponent("HeadVue");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "programs__page" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeadVue, {
    text: "Data Export",
    subtitle: "/ Students"
  }, null, _parent));
  _push(`<div class="export__content"><h2 class="export__content-title">Export</h2><div class="export__content-block"><div class="export__content-item"><div><h3 class="export__item-title">File</h3><p class="export__item-text">Deans</p></div><div class="export__content-upl"><img${ssrRenderAttr("src", _imports_0)}><p class="export__content-sub">Export XLSX</p></div></div><div class="export__content-item"><div><h3 class="export__item-title">File</h3><p class="export__item-text">Staff</p></div><div class="export__content-upl"><img${ssrRenderAttr("src", _imports_0)}><p class="export__content-sub">Export XLSX</p></div></div><div class="export__content-item"><div><h3 class="export__item-title">File</h3><p class="export__item-text">Departments</p></div><div class="export__content-upl"><img${ssrRenderAttr("src", _imports_0)}><p class="export__content-sub">Export XLSX</p></div></div><div class="export__content-item"><div><h3 class="export__item-title">File</h3><p class="export__item-text">All Students</p></div><div class="export__content-upl"><img${ssrRenderAttr("src", _imports_0)}><p class="export__content-sub">Export XLSX</p></div></div><div class="export__content-item"><div><h3 class="export__item-title">File</h3><p class="export__item-text">All Courses</p></div><div class="export__content-upl"><img${ssrRenderAttr("src", _imports_0)}><p class="export__content-sub">Export XLSX</p></div></div><div class="export__content-item"><div><h3 class="export__item-title">File</h3><p class="export__item-text">Assigned Courses</p></div><div class="export__content-upl"><img${ssrRenderAttr("src", _imports_0)}><p class="export__content-sub">Export XLSX</p></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/data/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.029e14f8.mjs.map
