import { u as useGetRequest, _ as __nuxt_component_2 } from './GET_REQUESTS.bc9507ac.mjs';
import { u as useRuntimeConfig, _ as _export_sfc, n as navigateTo } from './server.mjs';
import { ref, reactive, mergeProps, useSSRContext } from 'vue';
import { u as useMainStore } from './index.3f708b62.mjs';
import { u as usePostRequest, a as useUser } from './POST_REQUESTS.56b9ebda.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './logo-text.c5228760.mjs';
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
import './cookie.f9059845.mjs';
import 'cookie-es';

const _sfc_main = {
  setup() {
    const postRequest = usePostRequest();
    const getRequest = useGetRequest();
    const user = useUser();
    const store = useMainStore();
    const config = useRuntimeConfig();
    const loading = ref(false);
    const error = ref("");
    const userSendData = reactive({
      login: "",
      password: ""
    });
    const submit = async () => {
      const requestOptions = {
        method: "POST",
        body: { "login": userSendData.login, "password": userSendData.password }
      };
      loading.value = true;
      postRequest.postRequest("login", requestOptions, (response) => {
        if (response.success) {
          error.value = "";
          document.cookie = `token=${response.data.token}; max-age=3600`;
          getUsersData(response.data.token);
          navigateTo("/");
        } else {
          error.value = response.message;
        }
        loading.value = false;
      });
    };
    const getUsersData = async (token) => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json",
          "Authorization": "Bearer " + token
        }
      };
      getRequest.getRequest("users/me", requestOptions, (response) => {
        document.cookie = `personName=${response.data.full_name}`;
        user.userName = response.data.full_name;
      });
    };
    return { store, config, user, postRequest, error, userSendData, loading, submit };
  },
  components: {
    Loader: __nuxt_component_2
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Loader = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-page" }, _attrs))} data-v-1445e3ba><div class="login-page-content" data-v-1445e3ba><p class="login-page-title" data-v-1445e3ba> COPYRIGHT\xA9 AKFA UNIVERSITY ALL RIGHTS RESERVED. </p>`);
  if (!$setup.loading) {
    _push(`<div class="login" data-v-1445e3ba><div class="login__head" data-v-1445e3ba><div class="login__head-img" data-v-1445e3ba><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-1445e3ba><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-1445e3ba></div></div><p style="${ssrRenderStyle({ "color": "red" })}" data-v-1445e3ba>${ssrInterpolate($setup.error)}</p><form class="login__form" data-v-1445e3ba><input type="text" placeholder="ID"${ssrRenderAttr("value", $setup.userSendData.login)} data-v-1445e3ba><input type="password" placeholder="Password"${ssrRenderAttr("value", $setup.userSendData.password)} data-v-1445e3ba></form><div class="login__foot" data-v-1445e3ba><a class="login__foot-forgot" data-v-1445e3ba>Forgot password?</a><a style="${ssrRenderStyle({ "cursor": "pointer" })}" class="login__foot-btn" data-v-1445e3ba>Submit</a></div></div>`);
  } else {
    _push(ssrRenderComponent(_component_Loader, null, null, _parent));
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1445e3ba"]]);

export { Login as default };
//# sourceMappingURL=index.6c636931.mjs.map
