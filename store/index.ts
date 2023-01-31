import { defineStore } from "pinia";
export const useMainStore = defineStore("mainStore", {
  state: () => ({
    activeSidebar: true,
    usersData: {}
  }),
  actions: {
    sideToggle() {
      this.activeSidebar = !this.activeSidebar;
    },
  },
});
