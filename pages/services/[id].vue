<template>
    <div class="d-flex flex-column w-100">
        <HeadVue />
        <p class="fs-3 createNew-title pt-3">{{ $t('create') }} </p>
        <Loader v-if="loading" />

        <form class="createNew-form" v-else>
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item" v-for="(input, idx) in inputs"
                :key="input">
                {{ $t(idx) }}
                <input disabled type="text" class="w-100 h-100 createNew-form-input" :placeholder="input || '-'">
            </div>
        </form>

    </div>
</template>

<script setup>
import { useGetRequest } from '~~/helpers/GET_REQUESTS';

definePageMeta({
    middleware: ['guest'],

    pageTransition: {
        name: 'page'
    }
})
const getRequest = useGetRequest()
const loading = ref(true)
const fields = ref([])
const inputs = ref([])

const getData = () => {
    const requestOptions = {
        headers: {
            "Authorization": "Bearer " + useCookie('token').value,
        }
    }
    getRequest.getRequest(`services/${useRoute().params.id}/show`, requestOptions, (response) => {
        inputs.value = response.data
        loading.value = false
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
    })
}



    getData()
    getFields()


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