<template>
    <div class="d-flex flex-column w-100">
        <HeadVue />
        <p class="fs-3 createNew-title pt-3">{{ $t('create') }} </p>
        <form class="createNew-form">
            <Loader v-if="loading" />
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item" v-for="field in fields"
                :key="field.id">
                <template v-if="field != 'permissions'">
                    <label>{{ $t(field) }}</label>
                    <input class="w-100 h-100 createNew-form-input" type="text" v-model="fieldsObj[field]"
                        v-if="field != 'password' && field != 'password_confirmation'" />
                    <input v-else class="w-100 h-100 createNew-form-input" type="password" v-model="fieldsObj[field]" />

                </template>
                <template v-else>
                    <label>{{ $t(field) }}</label>
                    <MultiSelect v-model="value" :options="options" :multiple="true" :hide-selected="true" track-by="id"
                        label="title" placeholder="Ruxsatlarni tanlang" />
                </template>
            </div>
            <p class="text-danger">{{ requestError }}</p>

            <div class="d-flex justify-content-start w-100">
                <button type="submit" class=" btn btn-primary createNew-btn" @click.prevent="createNewUser()">{{
                    $t('create') }}</button>
            </div>
        </form>

    </div>
</template>

<script>
import { useGetRequest } from '~~/helpers/GET_REQUESTS';
import { usePostRequest } from '~~/helpers/POST_REQUESTS';
import HeadVue from '~/components/Head.vue';
import MultiSelect from 'vue-multiselect';


export default {
    setup() {
        definePageMeta({
            middleware: 'guest',

            pageTransition: {
                name: 'page'
            }
        })
        const postRequest = usePostRequest()
        const getRequest = useGetRequest()
        const requestError = ref('')
        const fieldsObj = ref([])
        const fields = ref([])
        const loading = ref(true)
        const arr = ref([])
        const select = ref('')
        const selectId = ref('')
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
            getRequest.getRequest('roles/create', requestOptions, (response) => {
                loading.value = false
                fields.value = response.data
                const arr = [];
                response.data.forEach((field) => {
                    arr[field] = '';
                })
                let { ...obj } = arr
                fieldsObj.value = obj
            })
        }

        const getPermissions = () => {
            const requestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest('permissions', requestOptions, (response) => {
                arr.value = response.data
                response.data.data.forEach((el) => {
                    options.value.push({ title: el.display_name, id: el.id })
                })
            })
        }

        const createNewUser = async () => {
            const permissionsArr = value.value.map(el => el.id)

            fieldsObj.value.permissions = permissionsArr


            const requestOptions = {
                method: 'POST',
                body: fieldsObj.value,
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            }
            postRequest.postRequest(`roles/create`, requestOptions, (response) => {
                if (response.success) {
                    navigateTo('/roles')
                } else {
                    requestError.value = response.message
                }
            })
        }
        const changeSelect = (list) => {
            selectId.value = list.id
        }

        onMounted(() => {
            createData()
            getPermissions()
        })

        return { createData, getPermissions, requestError, fieldsObj, fields, loading, arr, select, selectId, changeSelect, createNewUser, value, options }

    },
    components: {
        HeadVue, MultiSelect
    }


}

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