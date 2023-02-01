import {UseFetchOptions} from '#app'
import {NitroFetchRequest} from 'nitropack'
import {KeyOfRes} from 'nuxt/dist/app/composables/asyncData'

export async function apiRequest<T>(
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
    const config = useRuntimeConfig(),
        headers = {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        };

    let res = await useFetch<T>(request, {
        baseURL: config.public.baseURL,
        ...opts,
        headers,
        /*onResponse({request, response, options}) {
            if (response.status === 422) {
                throw new Error(response._data || 'Validation error');
            }
            if (response.status === 401) {
                throw new Error('Unauthorized');
            }
            if (response.status === 403) {
                throw new Error('Forbidden');
            }
            if (response.status === 404) {
                throw new Error('Not found');
            }
            if (response.status === 500) {
                throw new Error('Server error');
            }
            if (response.status === 503) {
                throw new Error('Service unavailable');
            }
            if (response.status === 504) {
                throw new Error('Gateway timeout');
            }
            if (response.status === 429) {
                throw new Error('Too many requests');
            }
            if (response.status === 400) {
                throw new Error('Bad request');
            }
            if (response.status === 405) {
                throw new Error('Method not allowed');
            }
            if (response.status === 406) {
                throw new Error('Not acceptable');
            }
            if (response.status === 408) {
                throw new Error('Request timeout');
            }
            if (response.status === 409) {
                throw new Error('Conflict');
            }
            if (response.status === 410) {
                throw new Error('Gone');
            }
        }*/
    });
    // if (res.error._value) {
    //     throw new Error(res.data || 'Validation error');
    // }
    if (res.data._value) {
        let resData = res.data._value;
        resData['_data'] = res;
        if (resData.token) {
            localStorage.setItem('token', resData.token);
        }
        console.log(resData)
        return resData;
    }
    if (res.error._value) {
        let errorData = res.error._value.response._data;
        errorData['success'] = false;
        errorData['_data'] = res;
        // localStorage.removeItem('token');
        throw new Error(errorData || 'Validation error');
    }
}