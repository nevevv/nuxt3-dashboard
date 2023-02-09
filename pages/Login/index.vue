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
                    <input type="text" placeholder="ID" v-model="data.login" />
                    <input type="password" placeholder="Password" v-model="data.password" />
                </form>
                <div class="login__foot">
                    <a class="login__foot-forgot">Forgot password?</a>
                    <a @click="submit()" style="cursor: pointer;" class="login__foot-btn">Submit</a>
                </div>
            </div>
            <Loader v-else />
        </div>
    </div>
</template>

<script>

import { ofetch } from 'ofetch';
import Loader from '~~/components/Loader.vue';
import { useMainStore } from '~~/store';


export default {
    setup() {
        definePageMeta({
            layout: "log",
            middleware: ['login'],
            pageTransition: {
                name: 'page'
            },
        });
        const store = useMainStore();
        const config = useRuntimeConfig();
        return { store, config }
    },

    components: {
        Loader
    },
    data() {
        return {
            loading: false,
            error: '',
            data: {
                login: '',
                password: '',
            }
        }
    },
    methods: {
        async submit() {
            this.loading = true
            const response = await ofetch(`${this.config.public.api_url}/login`, {
                method: 'POST',
                body: {
                    "login": this.data.login,
                    "password": this.data.password
                },
            }).catch((error) => error.data);
            if (response.success) {
                this.error = '';
                document.cookie = `token=${response.data.token}`;
                this.getUsersData(response.data.token);
                navigateTo('/')
            } else {
                this.error = response.message
            }
            this.loading = false
        },
        async getUsersData(token) {
            const response = await $fetch(`${this.config.public.api_url}/me`, {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + token
                },
            });
            document.cookie = `personName=${response.data.full_name}`
            this.store.usersData = response.data
            console.log(this.store.usersData)
        }
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