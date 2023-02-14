import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    activeSidebar: true,
    usersName: useCookie("personName").value,
  }),
  actions: {
    sideToggle() {
      this.activeSidebar = !this.activeSidebar;
    },
  },
});
