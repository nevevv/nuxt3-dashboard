import { defineStore } from "pinia";

export const useGetRequest = defineStore("getRequest", () => {
  const confiq = useRuntimeConfig();

  const getRequest = async (url: string, requestOptions: any, cb:any) => {
    const response = await $fetch(`${confiq.public.api_url}/${url}`,requestOptions)
    return cb(response)
  };
  return {getRequest}
});
