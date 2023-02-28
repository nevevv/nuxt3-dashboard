import { d as defineStore } from './server.mjs';
import { u as useCookie } from './cookie.f9059845.mjs';

const useMainStore = defineStore("main", {
  state: () => ({
    activeSidebar: true,
    usersName: useCookie("personName").value
  }),
  actions: {
    sideToggle() {
      this.activeSidebar = !this.activeSidebar;
    }
  }
});

export { useMainStore as u };
//# sourceMappingURL=index.3f708b62.mjs.map
