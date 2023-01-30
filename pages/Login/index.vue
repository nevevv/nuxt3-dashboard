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


    export default {
        setup() {
            definePageMeta({
                layout: "log",
                pageTransition: {
                    name: 'page'
                },
            });
            const config = useRuntimeConfig();
            return {config}
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
                    await this.getUsersData(response.token)
                   // await this.pushToСookie(response)
                    // this.$router.push('/')
                } else {
                    this.error = `${response.error}!`
                }

            },

            pushToСookie(response) {
                const token = response.token;
                document.cookie = `token=${token}`
            },

            async getUsersData(token) {
                console.log(token)

                console.log(this.config.public.api_url)

                const response = await $fetch(`${this.config.public.api_url}/user`, {
                    header: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                        "Authorization": "Bearer " + token
                    }
                })

            }
        },

    }


    // Akbarali@questa.uz
    // 199905

</script>

<style scoped>

    .create-acc {
        color: blue;
        font-size: 1rem;
        cursor: pointer;
    }
</style>