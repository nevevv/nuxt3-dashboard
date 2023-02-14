import { defineStore } from "pinia";
import { ofetch } from 'ofetch';
import { ref } from 'vue'

export const usePostRequest = defineStore('postRequest', () => {
    const error = ref('')
    const config = useRuntimeConfig()

    const postRequest = async (url:string, requestOptions:any, cb:any) => {
        const response = await ofetch(`${config.public.api_url}/${url}`, requestOptions).catch(error => error.data)
        return cb(response)
    }

    return { postRequest, error }
})