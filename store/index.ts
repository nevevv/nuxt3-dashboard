import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      sidebarActive: true,
      mobSideActive: false,
      display: "flex",
      sidebarWidth: "300px",
    };
  },
  mutations: {
    sidebarActions(state) {
      state.sidebarActive = !state.sidebarActive;
      if (window.screen.width >= 500) {
        if (state.sidebarWidth === "300px") {
          state.sidebarWidth = "100px";
        } else {
          state.sidebarWidth = "300px";
        }
      } else {
        if (!state.mobSideActive) {
          state.mobSideActive = true;
        } else {
          state.mobSideActive = false;
        }
      }
    },
    hideSidebar(state) {
      state.mobSideActive = false;
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
