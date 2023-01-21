export default defineNuxtRouteMiddleware((to, from) => {
  setTimeout(() => {
    localStorage.removeItem("access_token");
  }, 1);
});
