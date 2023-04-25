<template>
    <div class="d-flex flex-column w-100">
        <HeadVue />
        <p class="fs-3 createNew-title pt-3">{{ $t('create') }} </p>
        <form class="createNew-form" v-if="!loading">
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item">
                <label>{{ $t('name') }}</label>
                <input class="w-100 h-100 createNew-form-input" type="text" v-model="fieldsObj.name">
            </div>
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item">
                <label>{{ $t('permissions') }}</label>
                <MultiSelect :options="options" v-model="value" :multiple="true" :hide-selected="true" track-by="id"
                    label="name" placeholder="Ruxsatlarni tanlang" />
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
import MultiSelect from 'vue-multiselect';


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
const permissionArr = ref([])

const value = ref([])
const options = ref([])

const getPermissions = () => {
    const requestOptions = {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + useCookie('token').value,
        }
    }
    getRequest.getRequest('permissions', requestOptions, (response) => {
        options.value = response.data.items
        loading.value = false
    })
}

const createNewUser = async () => {
    fieldsObj.permissions = value.value.map(el => permissionArr.value.push(el.id))
    const requestOptions = {
        method: 'POST',
        body: fieldsObj,
        headers: { "Authorization": "Bearer " + useCookie('token').value }
    }
    postRequest.postRequest(`roles/create`, requestOptions, (response) => {
        if (response.success) {
            navigateTo('/roles')
        } else {
            requestError.value = response.error.message;
        }
    })
}
    getPermissions()
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