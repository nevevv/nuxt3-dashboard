<template>
    <div class="limiter">
        <div class="container-login100">
            <Loader v-if="loading" />

            <div class="wrap-login100" v-else>
                <div class="login100-pic js-tilt" data-tilt>
                    <img src="~/assets/images/favicon.webp" alt="IMG">
                </div>

                <form class="login100-form validate-form">
                    <div class="p-b-20 ">
                        <select id="form-select" class="form-select" v-model="$i18n.locale" style="padding-left: 10px;">
                            <option value="oz">O'zbekcha</option>
                            <option value="ru">Русский</option>
                        </select>
                    </div>
                    <span class="login100-form-title">
                        {{ $t('autorization') }}
                    </span>

                    <div class="wrap-input100 validate-input">
                        <input class="input100" type="text" name="email" :placeholder="$t('login')"
                            v-model="userSendData.login">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div class="wrap-input100 validate-input" data-validate="Password is required">
                        <input class="input100" type="password" name="pass" :placeholder="$t('password')"
                            v-model="userSendData.password">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </div>

                    <p style="color: red; font-size: 14px; text-align: center;">{{ error }}</p>


                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn" @click.prevent="submit()">
                            {{ $t('login') }}
                        </button>
                    </div>

                    <div class="text-center p-t-12 p-b-136">
                        <span class="txt1">
                            {{ $t('forgot') }}
                        </span>
                        <a class="txt2" href="#" style="padding-left: 10px;">
                            {{ $t('login') }} / {{ $t('password') }}?
                        </a>
                    </div>


                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

import Loader from '~~/components/Loader.vue';
import { useUser } from '~~/helpers/userName'
import { usePostRequest } from '~~/helpers/POST_REQUESTS';
import { useGetRequest } from '~~/helpers/GET_REQUESTS'

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
        document.cookie = `personName=${response.data.fullName}`
        user.userName = response.data.full_name
    })

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: var(--int400);
}

.create-acc {
    color: blue;
    font-size: 1rem;
    cursor: pointer;
}

.limiter {
    width: 100%;
    margin: 0 auto;
}

.container-login100 {
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: #9053c7;
    background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
    background: -o-linear-gradient(-135deg, #c850c0, #4158d0);
    background: -moz-linear-gradient(-135deg, #c850c0, #4158d0);
    background: linear-gradient(-135deg, #c850c0, #4158d0);
}

.wrap-login100 {
    width: 960px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 177px 130px 33px 95px;
}

/*------------------------------------------------------------------
[  ]*/
.login100-pic {
    width: 316px;
}

.login100-pic img {
    max-width: 100%;
}


/*------------------------------------------------------------------
[  ]*/
.login100-form {
    width: 290px;
}

.login100-form-title {
    font-size: 24px;
    color: #333333;
    line-height: 1.2;
    text-align: center;

    width: 100%;
    display: block;
    padding-bottom: 20px;
}


/*---------------------------------------------*/
.wrap-input100 {
    position: relative;
    width: 100%;
    z-index: 1;
    margin-bottom: 10px;
}

.input100 {
    font-size: 15px;
    line-height: 1.5;
    color: #666666;

    display: block;
    width: 100%;
    background: #e6e6e6;
    height: 50px;
    border-radius: 25px;
    padding: 0 30px 0 25px;
    border: none;
}


/*------------------------------------------------------------------
[ Focus ]*/
.focus-input100 {
    display: block;
    position: absolute;
    border-radius: 25px;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 0px 0px;
    color: rgba(87, 184, 70, 0.8);
}

.input100:focus+.focus-input100 {
    -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
    animation: anim-shadow 0.5s ease-in-out forwards;
}

@-webkit-keyframes anim-shadow {
    to {
        box-shadow: 0px 0px 70px 25px;
        opacity: 0;
    }
}

@keyframes anim-shadow {
    to {
        box-shadow: 0px 0px 70px 25px;
        opacity: 0;
    }
}

.symbol-input100 {
    font-size: 15px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    position: absolute;
    border: none;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-left: 35px;
    pointer-events: none;
    color: #666666;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}

.input100:focus+.focus-input100+.symbol-input100 {
    color: #57b846;
    padding-left: 28px;
}

/*------------------------------------------------------------------
[ Button ]*/
.container-login100-form-btn {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;
}

.login100-form-btn {
    font-size: 15px;
    line-height: 1.5;
    color: #fff;
    text-transform: uppercase;

    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: none;
    background: #57b846;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}

.login100-form-btn:hover {
    background: #333333;
}



/*------------------------------------------------------------------
[ Responsive ]*/



@media (max-width: 992px) {
    .wrap-login100 {
        padding: 177px 90px 33px 85px;
    }

    .login100-pic {
        width: 35%;
    }

    .login100-form {
        width: 50%;
    }
}

@media (max-width: 768px) {
    .wrap-login100 {
        padding: 100px 80px 33px 80px;
    }

    .login100-pic {
        display: none;
    }

    .login100-form {
        width: 100%;
    }
}

@media (max-width: 576px) {
    .wrap-login100 {
        padding: 100px 15px 33px 15px;
    }
}

.p-t-136 {
    padding-top: 136px;
}

.p-t-12 {
    padding-top: 12px;
}

.p-b-136 {
    padding-bottom: 136px;
}

.p-b-20 {
    padding-bottom: 20px;
}
</style>