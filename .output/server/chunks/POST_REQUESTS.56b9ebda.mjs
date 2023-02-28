import { d as defineStore, u as useRuntimeConfig } from './server.mjs';
import { ref } from 'vue';
import { ofetch } from 'ofetch';

const useUser = defineStore("user", () => {
  const userName = ref("");
  return { userName };
});
const usePostRequest = defineStore("postRequest", () => {
  const error = ref("");
  const config = useRuntimeConfig();
  const postRequest = async (url, requestOptions, cb) => {
    const response = await ofetch(`${config.public.api_url}/${url}`, requestOptions).catch((error2) => error2.data);
    return cb(response);
  };
  return { postRequest, error };
});

export { useUser as a, usePostRequest as u };
//# sourceMappingURL=POST_REQUESTS.56b9ebda.mjs.map
