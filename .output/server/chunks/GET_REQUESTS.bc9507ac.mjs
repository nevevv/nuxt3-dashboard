import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc, d as defineStore, u as useRuntimeConfig } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "spinner" }, _attrs))}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const useGetRequest = defineStore("getRequest", () => {
  const confiq = useRuntimeConfig();
  const getRequest = async (url, requestOptions, cb) => {
    const response = await $fetch(`${confiq.public.api_url}/${url}`, requestOptions);
    return cb(response);
  };
  return { getRequest };
});

export { __nuxt_component_2 as _, useGetRequest as u };
//# sourceMappingURL=GET_REQUESTS.bc9507ac.mjs.map
