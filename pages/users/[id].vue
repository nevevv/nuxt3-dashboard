<template>
    <div class="d-flex flex-column w-100">
        <HeadVue :text="$t('user')" />
        <form class="createNew-form">
            <Loader v-if="loading" />
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item" v-for="(el, idx) in data"
                :key="idx">
                <label>{{ $t(idx) }}</label>
                <input disabled class="w-100 h-100 createNew-form-input" type="text" :placeholder="el" />
            </div>
        </form>

    </div>
</template>

<script setup>
import { useGetRequest } from '~~/helpers/GET_REQUESTS';
import HeadVue from '~/components/Head.vue';


definePageMeta({
    middleware: 'guest',

    pageTransition: {
        name: 'page'
    }
})

const getRequest = useGetRequest()
const loading = ref(true)
const keysArr = ref([])
const data = ref([])

const createData = () => {
    const requestOptions = {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + useCookie('token').value,
        }
    }
    getRequest.getRequest(`users/${useRoute().params.id}/show`, requestOptions, (response) => {
        data.value = response.data
        keysArr.value = Object.keys(response.data)
        loading.value = false
    })
}

onMounted(() => {
    createData()
})

</script>

