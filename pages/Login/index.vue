<template>
    <div class="login-page">
        <div class="login-page-content">
            <p class="login-page-title">
                COPYRIGHT© AKFA UNIVERSITY ALL RIGHTS RESERVED.
            </p>
            <div class="login" v-if="!loading">
                <div class="login__head">
                    <div class="login__head-img">
                        <img src="@/static/images/logo-icon.png" alt=""/>
                        <img src="@/static/images/logo-text.png" alt=""/>
                    </div>
                </div>
                <p style="color: #ffffff;">{{ error }}</p>

                <form class="login__form">
                    <input type="text" placeholder="ID" v-model="data.name"/>
                    <input type="password" placeholder="Password" v-model="data.password"/>
                </form>
                <div class="login__foot">
                    <a class="login__foot-forgot">Forgot password?</a>
                    <a @click="submit()" style="cursor: pointer;" class="login__foot-btn">Submit</a>
                </div>
            </div>
            <Loader v-else/>
        </div>
    </div>
</template>

<script>

    import Loader from '~~/components/Loader.vue';
    import { useMainStore } from '~~/store';


    export default {
        setup() {
            definePageMeta({
                layout: "log",
                pageTransition: {
                    name: 'page'
                },
            });
            const store = useMainStore();
            const config = useRuntimeConfig();
            return {store,config}
        },

        components: {
            Loader
        },
        data() {
            return {
                loading: false,
                error: '',
                data: {
                    name: '',
                    password: '',
                }
            }
        },
        methods: {
            async submit() {
                this.loading = true
                const headers = {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                };

                const response = await $fetch(`${this.config.public.api_url}/login`, {
                    method: 'POST',
                    body: {
                        "email": this.data.name,
                        "password": this.data.password
                    },
                    headers: headers,
                })

                this.loading = false;

                if (response.success) {
                    this.error = '';
                    this.getUsersData(response.token)
                    this.pushToСookie(response)
                    this.$router.push('/')
                } else {
                    this.error = `${response.error}!`
                }
            },

             async getUsersData(token) {
                const response = await $fetch(`${this.config.public.api_url}/user`, {
                    headers: {
                    'Content-type': 'application/json',
                        'Accept': 'application/json',
                        "Authorization": "Bearer "+token
                    },
                });
                this.store.usersData = response

            },
            pushToСookie(response) {
                const token = response.token;
                document.cookie = `token=${token}`
            },
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