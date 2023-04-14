<template>
    <div class="d-flex flex-column w-100">
        <HeadVue />
        <p class="fs-3 createNew-title pt-3">{{ $t('edit') }} </p>
        <Loader v-if="loading" />

        <form class="createNew-form" v-else>
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item">
                {{ $t('name') }}
                <input type="text" class="w-100 h-100 createNew-form-input" v-model="obj.name">
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
            <p class="text-danger">{{ editError }}</p>
            <div class="d-flex justify-content-start w-100 align-items-center">
                <button type="submit" class=" btn btn-primary createNew-btn" @click.prevent="editUser()">{{
                    $t('perform') }}</button>
            </div>
        </form>

    </div>
</template>

<script setup>
import { useGetRequest } from '~~/helpers/GET_REQUESTS';
import { usePostRequest } from '~~/helpers/POST_REQUESTS';
import HeadVue from '~/components/Head.vue';
import Loader from '~~/components/Loader.vue';


definePageMeta({
    middleware: ['guest'],

    pageTransition: {
        name: 'page'
    }
})
const getRequest = useGetRequest();
const postRequest = usePostRequest();

const loading = ref(true)
const obj = reactive({})
const editError = ref('')

const selectValue = ref('')

const typesArr = ref([])

const getData = () => {
    const requestOptions = {
        headers: {
            "Authorization": "Bearer " + useCookie('token').value,
        }
    }
    getRequest.getRequest(`service-fields/${useRoute().params.id}/show`, requestOptions, (response) => {
        obj.name = response.data.name;
        obj.field_type_id = response.data.field_type_id
        loading.value = false
    })
}

const editUser = () => {

    obj.field_type_id = selectValue.value

    const requestOptions = {
        method: 'POST',
        body: obj,
        headers: { "Authorization": "Bearer " + useCookie('token').value }
    }
    postRequest.postRequest(`service-fields/${useRoute().params.id}/update`, requestOptions, (response) => {
        if (response.success) {
            navigateTo('/options/settings')
        } else {
            editError.value = response.error.message
        }
    })
}
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

const changeType = (el) => {
    selectValue.value = el
}


onMounted(() => {
    getData()
    getTypes()
})

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