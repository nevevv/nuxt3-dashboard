<template>
    <div class="d-flex flex-column w-100">
        <HeadVue />
        <p class="fs-3 createNew-title pt-3">{{ $t('create') }} </p>
        <form class="createNew-form">
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item">
                {{ $t('name') }}
                <input type="text" class="w-100 h-100 createNew-form-input" v-model="sendingData.name">
            </div>
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item">
                {{ $t('type') }}
                <select class="form-select" @change="changeType($event.target.value)">
                    <option selected disabled>{{ $t('type') }}</option>
                    <option v-for="item in typesArr" :key="item.id" :value="item.id">
                        {{ item.name }}
                    </option>
                </select>
            </div>


            <p class="text-danger">{{ requestError }}</p>

            <div class="d-flex justify-content-start w-100">
                <button type="submit" class=" btn btn-primary createNew-btn" @click.prevent="createSettings()">{{
                    $t('create') }}</button>
            </div>
        </form>

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
const sendingData = reactive({})
const selectValue = ref('')

const typesArr = ref([])

const getTypes = () => {
    const requestOptions = {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + useCookie('token').value,
        }
    }
    getRequest.getRequest('field-types', requestOptions, (response) => {
        typesArr.value = response.data.items
    })
}


const createSettings = () => {
    sendingData.field_type_id = selectValue.value
    const requestOptions = {
        method: 'POST',
        body: sendingData,
        headers: {
            "Authorization": "Bearer " + useCookie('token').value
        }
    }
    postRequest.postRequest('service-fields/create', requestOptions, (response) => {
        if (response.success) {
            navigateTo('/options/settings')
        } else {
            requestError.value = response.error.message
        }
    })
}


const changeType = (el) => {
    selectValue.value = el
}

getTypes()

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