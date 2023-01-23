import { useMainStore } from "~~/store";

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useMainStore();

  if (store.usersToken) {
    console.log(1);
    navigateTo(to.fullPath);
  } else {
    console.log(2);
    navigateTo("/login");
  }
});
