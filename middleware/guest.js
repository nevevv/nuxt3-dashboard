import {useMainStore} from "~/store";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = (typeof window !== "undefined") ? localStorage.getItem('token') : '';
    if (!token && token !== '') {
        useRouter().push('/login')
    }
    await getUsersData(token)
});

async function getUsersData(token) {
    if (token !== '') {
        const response = await $fetch(useRuntimeConfig().public.baseURL + '/user', {
            'method': 'GET',
            headers : {
                'Content-type' : 'application/json',
                'Accept'       : 'application/json',
                "Authorization": `Bearer ${token}`
            },
        });
        if (response.success) {
            useMainStore().usersData = response.data;
        } else {
            useRouter().push('/login')
        }
    }

}
