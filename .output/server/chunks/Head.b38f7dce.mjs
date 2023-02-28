import { _ as _export_sfc, u as useRuntimeConfig, n as navigateTo } from './server.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { u as useCookie } from './cookie.f9059845.mjs';
import { u as useMainStore } from './index.3f708b62.mjs';
import { u as usePostRequest, a as useUser } from './POST_REQUESTS.56b9ebda.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';

const _imports_0 = "data:image/png;base64,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";
const _sfc_main = {
  props: ["text", "subtitle"],
  setup() {
    const postRequest = usePostRequest();
    const user = useUser();
    const store = useMainStore();
    const config = useRuntimeConfig();
    const userName = ref("");
    const logout = async () => {
      const requestOptions = {
        method: "POST",
        headers: { "Authorization": "Bearer " + useCookie("token").value }
      };
      postRequest.postRequest("logout", requestOptions, (response) => {
        console.log(response);
        navigateTo("/login");
      });
    };
    return { store, config, userName, user, logout };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="main__head"><i class="bi bi-list burger-menu"></i><div class="main__head-title">${ssrInterpolate($props.text)}</div><div class="main__head-block"><select id="form-select" class="form-control" style="${ssrRenderStyle({ "text-transform": "uppercase", "color": "#008838", "max-width": "300px", "outline": "none", "appearance": "none" })}"><option value="en">en</option><option value="ru">ru</option></select><p>${ssrInterpolate($setup.user.userName || unref(useCookie)("personName").value)}</p><a href="#!"><i class="bi bi-bell-fill" style="${ssrRenderStyle({ "color": "#E92026" })}"></i></a><a href="#!"><img${ssrRenderAttr("src", _imports_0)} alt=""></a></div><p class="btn btn-dark logout">Logout</p></div><div class="main__block-name"><i class="bi bi-house-fill" style="${ssrRenderStyle({ "color": "#008838" })}"></i><p class="main__block-title">${ssrInterpolate($props.subtitle)}</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Head.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeadVue = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { HeadVue as H };
//# sourceMappingURL=Head.b38f7dce.mjs.map
