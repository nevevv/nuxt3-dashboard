export default defineNuxtRouteMiddleware((to, from) => {
    const cookie = useCookie('token');
    if(!cookie.value) {
        navigateTo('/login')
    }
});
