import { useMainStore } from "~~/store";

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useMainStore();

  if (store.usersToken) {
    navigateTo(to.fullPath);
  } else {
    navigateTo("/login");
  }
});
