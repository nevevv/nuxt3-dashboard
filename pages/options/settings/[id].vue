<template>
    <div class="d-flex flex-column w-100">
        <HeadVue />
        <p class="fs-3 createNew-title pt-3">{{ $t('create') }} </p>
        <Loader v-if="loading" />

        <form class="createNew-form" v-else>
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item">
                {{ $t('name') }}
                <input disabled type="text" class="w-100 h-100 createNew-form-input" :placeholder="obj.name">
            </div>
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item">
                {{ $t('type') }}
                <input disabled type="text" class="w-100 h-100 createNew-form-input" :placeholder="obj.type">

            </div>
        </form>

    </div>
</template>

<script setup>
import HeadVue from '~/components/Head.vue';
import Loader from '~~/components/Loader.vue';


definePageMeta({
    middleware: ['guest'],

    pageTransition: {
        name: 'page'
    }
})
const getRequest = useGetRequest()
const loading = ref(true)
const obj = reactive({})


const getData = () => {
    const requestOptions = {
        headers: {
            "Authorization": "Bearer " + useCookie('token').value,
        }
    }
    getRequest.getRequest(`service-fields/${useRoute().params.id}/show`, requestOptions, (response) => {
        obj.name = response.data.name;
        obj.type = response.data.type
        loading.value = false
    })
}


onMounted(() => {
    getData()
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