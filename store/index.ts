import { defineStore } from "pinia";
export const useMainStore = defineStore("mainStore", {
  state: () => ({
    activeSidebar: true,
  }),
  actions: {
    sideToggle() {
      this.activeSidebar = !this.activeSidebar;
    },
  },
});
