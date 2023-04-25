<template>
    <div class="d-flex flex-column w-100">
        <HeadVue />
        <p class="fs-3 createNew-title pt-3">{{ $t('edit') }} </p>
        <form class="createNew-form" v-if="!loading">
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item">
                <label>{{ $t('fullName') }}</label>
                <input class="w-100 h-100 createNew-form-input" type="text" v-model="fieldsObj.fullName">
            </div>
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item">
                <label>{{ $t('login') }}</label>
                <input class="w-100 h-100 createNew-form-input" type="text" v-model="fieldsObj.login">
            </div>
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item">
                <label>{{ $t('password') }}</label>
                <input class="w-100 h-100 createNew-form-input" autocomplete type="password" v-model="fieldsObj.password">
            </div>
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item">
                <label>{{ $t('password_confirmation') }}</label>
                <input class="w-100 h-100 createNew-form-input" autocomplete type="password"
                    v-model="fieldsObj.password_confirmation">
            </div>
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item">
                <label>{{ $t('role') }}</label>
                <select class="form-select" aria-label="Default select example"
                    @change="changeSelectValue($event.target.value)">
                    <option selected disabled>{{ $t('role') }}</option>
                    <option :value="el.name" v-for="el in rolesArr" :key="el">{{ el.name }}</option>
                </select>
            </div>

            <p style="color: red ;" class="d-flex w-100 text-danger">{{ requestError }}</p>

            <div class="d-flex justify-content-start w-100">
                <button type="submit" class=" btn btn-primary createNew-btn" @click.prevent="createNewUser()">{{
                    $t('create') }}</button>
            </div>
        </form>
        <Loader v-else />

    </div>
</template>

<script setup>
import { useGetRequest } from '~~/helpers/GET_REQUESTS';
import { usePostRequest } from '~~/helpers/POST_REQUESTS';

definePageMeta({
    middleware: 'guest',
    pageTransition: {
        name: 'page'
    }
})

const postRequest = usePostRequest()
const getRequest = useGetRequest()
const requestError = ref('')
const fieldsObj = reactive({})
const loading = ref(true)
const rolesArr = ref([])

const getUsersDataForEdit = () => {
    const requestOptions = {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + useCookie('token').value,
        }
    }
    getRequest.getRequest(`users/${useRoute().params.id}/show`, requestOptions, (response) => {
        Object.assign(fieldsObj, response.data)
    })
}

const getRoles = () => {
    const requestOptions = {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + useCookie('token').value,
        }
    }
    getRequest.getRequest('roles', requestOptions, (response) => {
        response.data.forEach((el) => {
            rolesArr.value.push(el)
            loading.value = false
        })
    })
}

const createNewUser = async () => {
    const requestOptions = {
        method: 'POST',
        body: fieldsObj,
        headers: { "Authorization": "Bearer " + useCookie('token').value }
    }
    postRequest.postRequest(`users/${useRoute().params.id}/update`, requestOptions, (response) => {
        if (response.success) {
            navigateTo('/users')
        } else {
            requestError.value = response.error.message
        }
    })
}
    
const changeSelectValue = (el) => {
    fieldsObj.role = el
}

getUsersDataForEdit()
getRoles()


</script>


<style scoped>
.createNew-title {
    padding-left: 20px;
}

.createNew-form {
    padding-left: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    background: white;
    padding: 20px;
    margin: 20px;
}

.createNew-form-item {
    width: 47%;
    height: 70px;
}

.createNew-form-input {
    padding-left: 10px;
    outline: none;
    border-radius: 10px;
    border: var(--bs-border-width) solid var(--bs-border-color);
}

.createNew-btn {
    background: #008838 !important;
}
</style>