<template>
    <div class="d-flex flex-column w-100">
        <HeadVue />
        <p class="fs-3 createNew-title pt-3">{{ $t('edit') }} </p>
        <form class="createNew-form" v-if="!loading">
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item" v-for="(input, idx) in inputs"
                :key="idx" :class="{ 'd-none': idx === 'id' }">
                {{ $t(idx) }}
                <input type="text" class="w-100 h-100 createNew-form-input" v-model="inputs[idx]">
            </div>
            <p style="color: red ;" class="d-flex w-100 text-danger">{{ requestError }}</p>

            <div class="d-flex justify-content-start w-100">
                <button type="submit" class=" btn btn-primary createNew-btn" @click.prevent="edit()">{{
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
const loading = ref(true)

const fields = ref([])
const inputs = ref([])


const edit = async () => {
    const requestOptions = {
        method: 'POST',
        body: inputs.value,
        headers: { "Authorization": "Bearer " + useCookie('token').value }
    }
    postRequest.postRequest(`services/${useRoute().params.id}/update`, requestOptions, (response) => {
        if (response.success) {
            navigateTo('/services')
        } else {
            requestError.value = response.error.message
        }
    })
}

const getFields = () => {
    const requestOptions = {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + useCookie('token').value,
        }
    }
    getRequest.getRequest('services/create', requestOptions, (response) => {
        fields.value = response.data
        loading.value = false
    })
}

const getData = () => {
    const requestOptions = {
        headers: {
            "Authorization": "Bearer " + useCookie('token').value,
        }
    }
    getRequest.getRequest(`services/${useRoute().params.id}/show`, requestOptions, (response) => {
        inputs.value = response.data
    })
}

    getFields()
    getData()

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