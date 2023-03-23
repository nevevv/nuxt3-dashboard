<template>
    <div class="d-flex flex-column w-100 ">
        <HeadVue :text="$t('role')" />
        <form class="createNew-form" :class="{ 'h-75': value.length > 5 }">
            <Loader v-if="loading" />
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item" v-for="field in fields"
                :key="field.id">
                <template v-if="field != 'permissions'">
                    <label>{{ $t(field) }}</label>
                    <input disabled class="w-100 h-100 createNew-form-input" type="text" v-model="fieldsObj[field]"
                        v-if="field != 'password' && field != 'password_confirmation'" />
                    <input v-else class="w-100 h-100 createNew-form-input" type="password" v-model="fieldsObj[field]" />
                </template>

                <template v-else>
                    <label> {{ $t(field) }}</label>
                    <MultiSelect v-model="value" :options="options" :multiple="true" :hide-selected="true" track-by="id"
                        label="title" />
                </template>
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
        const permissionsArr = ref([])
        const editError = ref('')
        const editCurrentArray = ref()
        const usersPermisionArr = ref([])

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
            getRequest.getRequest(`roles/${useRoute().params.id}/edit`, requestOptions, (response) => {
                fields.value = Object.keys(response.data)
                loading.value = false
                arr.value = response.data

                response.data.permissions.forEach((el) => {
                    value.value.push({ title: el.display_name, id: el.id })
                })

                fieldsObj.value.name = response.data.name
                fieldsObj.value.description = response.data.description
                fieldsObj.value.display_name = response.data.display_name
            })

        }

        const permissionsData = () => {
            const requestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest(`permissions`, requestOptions, (response) => {
                permissionsArr.value = response.data
                response.data.data.forEach((el) => {
                    options.value.push({ title: el.display_name, id: el.id })
                })
            })
        }

        const changeSelect = (el) => {
            selectId.value = el.id
        }

        const editUser = () => {
            const arr = [];
            const permissionsArr = value.value.map(el => el.id)

            fields.value.forEach(field => {
                arr[field] = fieldsObj.value[field]
            })

            let { ...obj } = arr;

            obj["permissions"] = permissionsArr


            const requestOptions = {
                method: 'POST',
                body: obj,
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            }
            postRequest.postRequest(`roles/${useRoute().params.id}/update`, requestOptions, (response) => {
                if (response.success) {
                    navigateTo('/roles')
                } else {
                    editError.value = response.message
                }
            })
        }

        onMounted(() => {
            createData()
            permissionsData()

        })

        return { requestError, fieldsObj, fields, loading, arr, select, selectId, permissionsArr, changeSelect, editUser, editError, editCurrentArray, usersPermisionArr, value, options }

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
    height: 58%;
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
