import { useMainStore } from "~~/store";

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useMainStore();
  store.usersToken = null;
});
