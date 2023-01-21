export default defineNuxtRouteMiddleware((to, from) => {
  setTimeout(() => {
    if (localStorage.getItem("access_token")) {
      navigateTo(to.fullPath);
    } else {
      navigateTo("/login");
    }
  }, 1);
});
