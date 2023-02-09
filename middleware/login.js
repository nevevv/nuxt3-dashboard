export default defineNuxtRouteMiddleware((to, from) => {
  useCookie('token').value = ''
});
