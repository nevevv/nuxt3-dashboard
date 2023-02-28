import { _ as _export_sfc, b as __nuxt_component_0$1 } from './server.mjs';
import { u as useMainStore } from './index.3f708b62.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$1 = {
  setup() {
    const store = useMainStore();
    return { store };
  },
  data() {
    return {
      links: [
        {
          title: "Dashboard",
          to: "/",
          icons: "bi bi-grid-fill"
        },
        {
          title: "Permissions",
          to: "/permissions",
          icons: "bi bi-grid"
        },
        {
          title: "Users",
          to: "/users",
          icons: "bi bi-people"
        },
        {
          title: "Roles",
          to: "/roles",
          icons: "bi bi-person-plus-fill"
        },
        {
          title: "Fields Types List",
          to: "/field_types",
          icons: "bi bi-chat-dots"
        },
        {
          title: "Data Export",
          to: "/data",
          icons: "bi bi-download"
        },
        {
          title: "Options",
          to: "/service-fields",
          icons: "bi bi-award"
        },
        {
          title: "Services",
          to: "/services",
          icons: "bi bi-calendar"
        },
        {
          title: "Course Managements",
          to: "/course",
          icons: "bi bi-bookmark-fill"
        },
        {
          title: "Transfer Credits",
          to: "/transfer",
          icons: "bi bi-arrow-down-up"
        },
        {
          title: "Finances",
          to: "/finances",
          icons: "bi bi-credit-card-fill"
        }
      ]
    };
  },
  methods: {
    closeMenu() {
      this.store.activeSidebar = !this.store.activeSidebar;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<!--[--><nav class="${ssrRenderClass([{ active: !$setup.store.activeSidebar }, "header__nav"])}"><div class="header__nav-logo"><img${ssrRenderAttr("src", _imports_0)} alt="">`);
  if ($setup.store.activeSidebar) {
    _push(`<img${ssrRenderAttr("src", _imports_1)} alt="">`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="header__nav-list"><!--[-->`);
  ssrRenderList($data.links, (link) => {
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: link.to,
      key: link.id,
      class: "header__nav-blocks",
      "active-class": "active"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="header__nav-blocks-item"${_scopeId}><i class="${ssrRenderClass(link.icons)}"${_scopeId}></i>`);
          if ($setup.store.activeSidebar) {
            _push2(`<p${_scopeId}>${ssrInterpolate(link.title)}</p>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", { class: "header__nav-blocks-item" }, [
              createVNode("i", {
                class: link.icons
              }, null, 2),
              $setup.store.activeSidebar ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(link.title), 1)) : createCommentVNode("", true)
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></nav><nav class="${ssrRenderClass([{ active: !$setup.store.activeSidebar }, "header__nav nav-mob"])}"><div class="header__nav-logo"><img${ssrRenderAttr("src", _imports_0)} alt=""><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="header__nav-list"><!--[-->`);
  ssrRenderList($data.links, (link) => {
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: link.to,
      key: link.id,
      class: "header__nav-blocks",
      "active-class": "active",
      onClick: ($event) => $options.closeMenu()
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="header__nav-blocks-item"${_scopeId}><i class="${ssrRenderClass(link.icons)}"${_scopeId}></i><p${_scopeId}>${ssrInterpolate(link.title)}</p></div>`);
        } else {
          return [
            createVNode("div", { class: "header__nav-blocks-item" }, [
              createVNode("i", {
                class: link.icons
              }, null, 2),
              createVNode("p", null, toDisplayString(link.title), 1)
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></nav><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    const store = useMainStore();
    return { store };
  },
  components: {
    SidebarVue: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["header", { hidden: !$setup.store.activeSidebar }]
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.b8951cc8.mjs.map
