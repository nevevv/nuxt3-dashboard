import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    usersToken: null,
    activeSidebar: true,
  }),
  actions: {
    sideToggle() {
      this.activeSidebar = !this.activeSidebar;
    },
  },
});
