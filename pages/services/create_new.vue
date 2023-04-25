<template>
    <div class="d-flex flex-column w-100">
        <HeadVue />
        <p class="fs-3 createNew-title pt-3">{{ $t('create') }} </p>
        <form class="createNew-form" v-if="!loading">
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item" v-for="field in fields"
                :key="field">
                {{ $t(field) }}
                <input type="text" class="w-100 h-100 createNew-form-input" v-model="sendingData[field]">
            </div>
            <div class="d-flex justify-content-start w-100 flex-column align-items-start gap-4">
                <p class="text-danger">{{ requestError }}</p>
                <button type="submit" class=" btn btn-primary createNew-btn" @click.prevent="createSettings()">{{
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
const loading = ref(true)
const fields = ref([])
const requestError = ref('')
const sendingData = reactive({})

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

const createSettings = () => {
    const requestOptions = {
        method: 'POST',
        body: sendingData,
        headers: {
            "Authorization": "Bearer " + useCookie('token').value
        }
    }
    postRequest.postRequest('services/create', requestOptions, (response) => {
        if (response.success) {
            navigateTo('/services/')
        } else {
            requestError.value = response.error.message
        }
    })
}


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