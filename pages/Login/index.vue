<template>
    <div class="login-page">
        <div class="login-page-content">
            <p class="login-page-title">
                COPYRIGHT© AKFA UNIVERSITY ALL RIGHTS RESERVED.
            </p>
            <div class="login" v-if="!loading">
                <div class="login__head">
                    <div class="login__head-img">
                        <img src="@/static/images/logo-icon.png" alt="" />
                        <img src="@/static/images/logo-text.png" alt="" />
                    </div>
                </div>
                <p style="color: red;">{{ error }}</p>

                <form class="login__form">
                    <input type="text" placeholder="ID" v-model="userSendData.login" />
                    <input type="password" placeholder="Password" v-model="userSendData.password" />
                    <div class="login__foot">
                        <a class="login__foot-forgot">Forgot password?</a>
                        <input type="submit" @click="submit()" style="cursor: pointer; background: #e92026;"
                            class="login__foot-btn">
                    </div>
                </form>

            </div>
            <Loader v-else />
        </div>
    </div>
</template>

<script>

import Loader from '~~/components/Loader.vue';
import { useMainStore } from '~~/store';
import { useUser } from '~~/helpers/userName'
import { usePostRequest } from '~~/helpers/POST_REQUESTS';
import { useGetRequest } from '~~/helpers/GET_REQUESTS'



export default {
    setup() {
        definePageMeta({
            layout: "log",
            middleware: ['login'],
            pageTransition: {
                name: 'page'
            },
        });

        const postRequest = usePostRequest()
        const getRequest = useGetRequest()

        const user = useUser()
        const store = useMainStore();
        const config = useRuntimeConfig();

        const loading = ref(false);
        const error = ref('')
        const userSendData = reactive({
            login: '',
            password: '',
        })

        const submit = async () => {
            const requestOptions = {
                method: 'POST',
                body: { "login": userSendData.login, "password": userSendData.password }
            }

            loading.value = true

            postRequest.postRequest('login', requestOptions, (response) => {
                if (response.success) {
                    error.value = '';
                    document.cookie = `token=${response.data.token}; max-age=3600`;
                    getUsersData(response.data.token);
                    navigateTo('/')
                } else {
                    error.value = response.message
                }
                loading.value = false

            })
        }
        const getUsersData = async (token) => {
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + token,
                }
            }

            getRequest.getRequest('users/me', requestOptions, (response) => {
                document.cookie = `personName=${response.data.full_name}`
                user.userName = response.data.full_name
            })

        }

       
        return { store, config, user, postRequest, error, userSendData, loading, submit }
    },

    components: {
        Loader
    },
}


</script>

<style scoped>
.create-acc {
    color: blue;
    font-size: 1rem;
    cursor: pointer;
}
</style>