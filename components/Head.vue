<template>
    <div>
        <div class="main__head">
            <i class="bi bi-list burger-menu" @click="store.sideToggle"></i>
            <div class="main__head-title">{{ text }}</div>
            <div class="main__head-block">

                <select id="form-select" class="form-control" v-model="$i18n.locale"
                    style="text-transform: uppercase;  color:#008838 ; max-width: 300px; outline: none; appearance: none;">
                    <option value="en">en</option>
                    <option value="ru">ru</option>
                </select>
                <p>{{ user.userName || useCookie('personName').value }}</p>
                <a href="#!">
                    <i class="bi bi-bell-fill" style="color:#E92026;"></i>
                </a>
                <a href="#!">
                    <img src="../static/images/main__head-avatar.png" alt="" />
                </a>
            </div>
            <p @click="logout" class="btn btn-dark logout">Logout</p>
        </div>

        <div class="main__block-name">
            <i class="bi bi-house-fill" style="color:#008838"></i>
            <p  class="main__block-title">{{ subtitle }}</p>
        </div>
    </div>
</template>

<script>
import { useMainStore } from '~~/store';
import { useUser } from '../helpers/userName'
import { usePostRequest } from '~~/helpers/POST_REQUESTS';
export default {
    props: ['text', 'subtitle'],
    setup() {
        const postRequest = usePostRequest();
        const user = useUser()
        const store = useMainStore();
        const config = useRuntimeConfig();
        const userName = ref('')



        const logout = async () => {
            const requestOptions = {
                method: 'POST',
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            } 

            postRequest.postRequest('logout',requestOptions, (response) => {
                console.log(response);
                navigateTo('/login')
            } )
        }
        
        return { store, config, userName, user,logout }
    },

}
</script>

<style>

.logout {
    position: fixed;
    right: 1%;
    bottom: 1%;
    z-index: 1000;

}
hr {
    margin-top: -7px;
    opacity: 0.1;
}

.main__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* max-width: 1540px; */
    padding: 14px 21px;
    background: white;
}

.main__head-title {
    font-family: var(--pop500);
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--black);
}

.main__head-block {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.main__head-select {
    font-family: var(--int400);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    border: none;
    background: #fef5ea;
    padding: 8px 0px 8px 12px;
    border-radius: 8px;
    outline: none;
    display: flex;
    gap: 20px;
    align-items: center;
}

.main__head-select select {
    border: none;
    background: transparent;
    outline: none;
}

.main__head-btn span {
    margin-right: 25px;
}

.main__block-name {
    background: white;
    padding: 4px 20px;
    border-top: 1px solid #f1f3f9;
    display: flex;
    align-items: center;
    gap: 11px;
}

.main__block-title,
.main__block-span {
    font-family: var(--int400);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #8b8d97;
}

.burger-menu {
    font-size: 20px;
    background: rgb(192, 192, 192);
    border-radius: 3px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 0px;
    padding-bottom: 0px;
    cursor: pointer;
}

.form-control {
    width: max-content;
}
</style>