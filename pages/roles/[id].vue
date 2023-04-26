<template>
    <div class="d-flex flex-column w-100 ">
        <HeadVue :text="$t('user')" />
        <form class="createNew-form" :class="{ 'h-50': value.length > 5 }">
            <Loader v-if="loading" />
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item" v-for="(el, idx) in data"
                :key="idx" :class="{ 'h-auto': value.length > 5 && idx === 'permissions' }">
                <template v-if="idx !== 'permissions'">
                    <label>{{ $t(idx) }}</label>
                    <input disabled class="w-100 h-100 createNew-form-input" type="text" :placeholder="el" />
                </template>
                <template v-else>
                    <label>{{ $t(idx) }}</label>
                    <MultiSelect :options="options" v-model="value" :multiple="true" :hide-selected="true" track-by="id"
                        label="name" placeholder="Ruxsatlarni tanlang" style="pointer-events: none" />
                </template>
            </div>
        </form>
    </div>
</template>

<script setup>
import { useGetRequest } from '~~/helpers/GET_REQUESTS';
import MultiSelect from 'vue-multiselect';

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
const value = ref([])
const options = ref([])

const createData = () => {
    const requestOptions = {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + useCookie('token').value,
        }
    }
    getRequest.getRequest(`roles/${useRoute().params.id}/show`, requestOptions, (response) => {
        data.value = response.data
        keysArr.value = Object.keys(response.data)
        value.value = response.data.permissions
        options.value = response.data.permissions
        loading.value = false
    })
}
createData()
</script>

