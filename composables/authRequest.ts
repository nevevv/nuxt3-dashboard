import {UseFetchOptions} from '#app'
import {NitroFetchRequest} from 'nitropack'
import {KeyOfRes} from 'nuxt/dist/app/composables/asyncData'

export async function authRequest<T>(
    request: NitroFetchRequest,
    opts?:
        | UseFetchOptions<
        T extends void ? unknown : T,
        (res: T extends void ? unknown : T) => T extends void ? unknown : T,
        KeyOfRes<
            (res: T extends void ? unknown : T) => T extends void ? unknown : T
        >
    >
        | undefined
) {

    let token = (typeof window !== "undefined") ? localStorage.getItem('token') : '';
    if (token === '') {
        await navigateTo('/login');
    }

    const config = useRuntimeConfig(),
        headers = {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            "Authorization": "Bearer " + token
        };

    let res = await useFetch<T>(request, {
        baseURL: config.public.baseURL,
        ...opts,
        headers,
    });

    if (res.data._value) {
        let resData = res.data._value;
        resData['_data'] = res;
        return resData;
    }
    if (res.error._value) {
        let errorData = res.error._value.response._data;
        errorData['success'] = false;
        errorData['_data'] = res;
        return errorData;
    }
}