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
                    <input type="text" placeholder="ID" v-model="data.name" />
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
        const store = useMainStore()
        return { store }
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
            let formData = new FormData();
            formData.append('email', this.data.name);
            formData.append('password', this.data.password);

            const response = await $fetch('https://betta.questa.uz/api/v1/auth/login', {
                method: 'POST',
                body: formData
            })


            if (response.status === 'success') {
                this.loading = false;
                this.error = '';
                this.$router.push('/')
                this.pushToLocalStorage(response)
            } else {
                this.loading = false
                this.error = response.error + '!'
            }
        },

        pushToLocalStorage(response) {
            const token = response.access_token
            this.store.usersToken = token;
            setTimeout(() => {
                console.log(this.store.usersToken)
            },10)
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