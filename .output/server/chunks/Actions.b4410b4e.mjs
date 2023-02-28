import { useSSRContext, ref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, vModelText, withModifiers, createTextVNode } from 'vue';
import { _ as _export_sfc, b as __nuxt_component_0$1 } from './server.mjs';
import { u as useCookie } from './cookie.f9059845.mjs';
import { u as usePostRequest } from './POST_REQUESTS.56b9ebda.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main$2 = {
  props: ["modalTitle"],
  setup() {
    const hideModalAfterClickOnBg = () => {
      console.log(this);
    };
    return { hideModalAfterClickOnBg };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="modals-body-bg"></div><div class="modal-programs"><form class="modal-programs-form">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</form></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  props: ["fields", "modalName", "url"],
  setup() {
    const postRequest = usePostRequest();
    const showModal = ref(false);
    const requestError = ref("");
    const fieldsObj = ref([]);
    const link = ref("");
    const showCreateModal = (fields, url) => {
      showModal.value = !showModal.value;
      const arr = [];
      fields.forEach((field) => {
        arr[field] = "";
      });
      let { ...obj } = arr;
      fieldsObj.value = obj;
      link.value = url;
    };
    const createNewUser = async () => {
      const requestOptions = {
        method: "POST",
        body: fieldsObj.value,
        headers: { "Authorization": "Bearer " + useCookie("token").value }
      };
      postRequest.postRequest(`${link.value}/create`, requestOptions, (response) => {
        if (response.success) {
          location.reload();
        } else {
          requestError.value = response.message;
        }
      });
    };
    return { showModal, createNewUser, requestError, showCreateModal, fieldsObj };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = Modal;
  _push(`<div${ssrRenderAttrs(_attrs)}><div><button class="main__programs-content-btn modalBtn"><i class="bi bi-plus plus-icon"></i> Create a new ${ssrInterpolate($props.modalName)}</button></div>`);
  if ($setup.showModal) {
    _push(ssrRenderComponent(_component_Modal, null, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<p class="fs-3 text-center"${_scopeId}>Create new ${ssrInterpolate($props.modalName)}</p><!--[-->`);
          ssrRenderList($props.fields, (field) => {
            _push2(`<div class="d-flex flex-column align-items-start gap-2"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t(field))}</label><input type="text"${ssrRenderAttr("value", $setup.fieldsObj[field])}${_scopeId}></div>`);
          });
          _push2(`<!--]--><p style="${ssrRenderStyle({ "color": "red" })}"${_scopeId}>${ssrInterpolate($setup.requestError)}</p><div${_scopeId}><button class="btn btn-danger"${_scopeId}>Cancel</button><button class="btn btn-primary"${_scopeId}>Create</button></div>`);
        } else {
          return [
            createVNode("p", { class: "fs-3 text-center" }, "Create new " + toDisplayString($props.modalName), 1),
            (openBlock(true), createBlock(Fragment, null, renderList($props.fields, (field) => {
              return openBlock(), createBlock("div", {
                class: "d-flex flex-column align-items-start gap-2",
                key: field.id
              }, [
                createVNode("label", null, toDisplayString(_ctx.$t(field)), 1),
                withDirectives(createVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": ($event) => $setup.fieldsObj[field] = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.fieldsObj[field]]
                ])
              ]);
            }), 128)),
            createVNode("p", { style: { "color": "red" } }, toDisplayString($setup.requestError), 1),
            createVNode("div", null, [
              createVNode("button", {
                class: "btn btn-danger",
                onClick: ($event) => $setup.showModal = !$setup.showModal
              }, "Cancel", 8, ["onClick"]),
              createVNode("button", {
                class: "btn btn-primary",
                onClick: withModifiers($setup.createNewUser, ["prevent"])
              }, "Create", 8, ["onClick"])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreateNew.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: ["list", "fields", "url"],
  setup() {
    const postRequest = usePostRequest();
    const confirmModal = ref(false);
    const showModal = ref(false);
    const deletedUserId = ref("");
    const activeMessage = ref(false);
    const notAccessMessage = ref("");
    const editCurrentArray = ref();
    const editModal = ref(false);
    const currentId = ref("");
    const editError = ref("");
    const link = ref("");
    const edit = (id, list, url) => {
      editModal.value = true;
      currentId.value = id;
      editCurrentArray.value = Object.assign({}, list);
      link.value = url;
    };
    const editUser = (fields) => {
      const arr = [];
      fields.forEach((field) => {
        console.log(editCurrentArray.value[field]);
        arr[field] = editCurrentArray.value[field];
      });
      let { ...obj } = arr;
      const requestOptions = {
        method: "POST",
        body: obj,
        headers: { "Authorization": "Bearer " + useCookie("token").value }
      };
      postRequest.postRequest(`${link.value}/${currentId.value}/update`, requestOptions, (response) => {
        if (response.success) {
          location.reload();
        } else {
          editError.value = response.message;
        }
      });
    };
    const deleteUser = (id, url) => {
      confirmModal.value = !confirmModal.value;
      deletedUserId.value = id;
      link.value = url;
    };
    const confirmDelete = () => {
      const requestOptions = {
        method: "POST",
        headers: { "Authorization": "Bearer " + useCookie("token").value }
      };
      postRequest.postRequest(`${link.value}/${deletedUserId.value}/delete`, requestOptions, (response) => {
        if (response.code === 403) {
          notAccessMessage.value = response.message;
          activeMessage.value = true;
        } else {
          location.reload();
        }
      });
    };
    return { edit, deleteUser, confirmDelete, editUser, confirmModal, showModal, activeMessage, notAccessMessage, editModal, editCurrentArray, editError };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_Modal = Modal;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: $props.url + "/" + $props.list.id,
    class: "btn",
    style: { "background": "#008838", "color": "white" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Show`);
      } else {
        return [
          createTextVNode("Show")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button class="btn btn-danger" style="${ssrRenderStyle({ "margin": "0 0 0 10px" })}">Delete</button><button class="btn btn-warning" style="${ssrRenderStyle({ "margin": "0 0 0 10px" })}">Edit</button></div>`);
  if ($setup.confirmModal) {
    _push(ssrRenderComponent(_component_Modal, null, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<p class="text-center fs-3"${_scopeId}>Do you really want to delete the user?</p><div${_scopeId}><button class="btn btn-primary"${_scopeId}>Cancel</button><button class="btn btn-danger"${_scopeId}>Delete</button></div><p class="${ssrRenderClass([{ "d-none": !$setup.activeMessage }, "text-danger text-center"])}"${_scopeId}>${ssrInterpolate($setup.notAccessMessage)}</p>`);
        } else {
          return [
            createVNode("p", { class: "text-center fs-3" }, "Do you really want to delete the user?"),
            createVNode("div", null, [
              createVNode("button", {
                class: "btn btn-primary",
                onClick: withModifiers(($event) => $setup.confirmModal = !$setup.confirmModal, ["prevent"])
              }, "Cancel", 8, ["onClick"]),
              createVNode("button", {
                class: "btn btn-danger",
                onClick: withModifiers($setup.confirmDelete, ["prevent"])
              }, "Delete", 8, ["onClick"])
            ]),
            createVNode("p", {
              class: ["text-danger text-center", { "d-none": !$setup.activeMessage }]
            }, toDisplayString($setup.notAccessMessage), 3)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($setup.editModal) {
    _push(ssrRenderComponent(_component_Modal, null, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<p class="fs-3 text-center"${_scopeId}>Edit User</p><!--[-->`);
          ssrRenderList($props.fields, (field) => {
            _push2(`<div class="d-flex flex-column align-items-start gap-2"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t(field))}</label><input type="text"${ssrRenderAttr("value", $setup.editCurrentArray[field])}${_scopeId}></div>`);
          });
          _push2(`<!--]--><p style="${ssrRenderStyle({ "color": "red" })}"${_scopeId}>${ssrInterpolate($setup.editError)}</p><div${_scopeId}><button class="btn btn-danger"${_scopeId}>Cancel</button><button class="btn btn-primary"${_scopeId}>Edit</button></div>`);
        } else {
          return [
            createVNode("p", { class: "fs-3 text-center" }, "Edit User"),
            (openBlock(true), createBlock(Fragment, null, renderList($props.fields, (field) => {
              return openBlock(), createBlock("div", {
                class: "d-flex flex-column align-items-start gap-2",
                key: field.id
              }, [
                createVNode("label", null, toDisplayString(_ctx.$t(field)), 1),
                withDirectives(createVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": ($event) => $setup.editCurrentArray[field] = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.editCurrentArray[field]]
                ])
              ]);
            }), 128)),
            createVNode("p", { style: { "color": "red" } }, toDisplayString($setup.editError), 1),
            createVNode("div", null, [
              createVNode("button", {
                class: "btn btn-danger",
                onClick: ($event) => $setup.editModal = !$setup.editModal
              }, "Cancel", 8, ["onClick"]),
              createVNode("button", {
                class: "btn btn-primary",
                onClick: withModifiers(($event) => $setup.editUser($props.fields), ["prevent"])
              }, "Edit", 8, ["onClick"])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Actions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Modal as M, __nuxt_component_1 as _, __nuxt_component_0 as a };
//# sourceMappingURL=Actions.b4410b4e.mjs.map
