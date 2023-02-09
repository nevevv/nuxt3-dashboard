import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    activeSidebar: true,
    usersData: {},
    usersName: useCookie("personName").value,
    usersList: [],
  }),
  actions: {
    sideToggle() {
      this.activeSidebar = !this.activeSidebar;
    },
    async getData() {
      const response = await $fetch(`https://crm.uzwebline.com/api/v1/users`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + useCookie("token").value,
        },
      });
    },
  },
});
