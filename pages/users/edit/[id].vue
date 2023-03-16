<template>
    <div class="d-flex flex-column w-100">
        <HeadVue />
        <p class="fs-3 createNew-title pt-3">{{ $t('edit') }} </p>
        <form class="createNew-form">
            <Loader v-if="loading" />
            <div class="d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item" v-for="field in fields"
                :key="field.id">
                <template v-if="field != 'roles'">
                    <label>{{ $t(field) }}</label>
                    <input class="w-100 h-100 createNew-form-input" type="text" v-model="fieldsObj[field]"
                        v-if="field != 'password' && field != 'password_confirmation'" />
                    <input v-else class="w-100 h-100 createNew-form-input" type="password" v-model="fieldsObj[field]" />
                </template>

                <template v-else>
                    <label>{{ $t(field) }}</label>
                    <Multiselect v-model="value" :options="options" :multiple="true" :hide-selected="true" track-by="id"
                        label="title" />
                </template>
            </div>
            <div class="w-100">
                <p class="text-danger">{{ editError }}</p>
            </div>

            <div class="d-flex justify-content-start w-100">
                <button type="submit" class=" btn btn-primary createNew-btn" @click.prevent="editUser()">{{
                    $t('perform') }}</button>
            </div>
        </form>

    </div>
</template>

<script>
import { useGetRequest } from '~~/helpers/GET_REQUESTS';
import { usePostRequest } from '~~/helpers/POST_REQUESTS';
import HeadVue from '~/components/Head.vue';
import Multiselect from 'vue-multiselect';

export default {
    setup() {
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
            getRequest.getRequest(`users/${useRoute().params.id}/edit`, requestOptions, (response) => {
                response.data.roles.forEach((el) => {
                    value.value.push({ title: el.display_name, id: el.id })
                })
                fields.value = Object.keys(response.data)
                loading.value = false
                arr.value = response.data
                fieldsObj.value.full_name = response.data.full_name
                fieldsObj.value.login = response.data.login
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
            getRequest.getRequest(`roles`, requestOptions, (response) => {
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
            fields.value.forEach(field => {
                arr[field] = fieldsObj.value[field]
            })

            let { ...obj } = arr;

            const rolesArr = value.value.map(el => el.id)
            obj["roles"] = rolesArr

            const requestOptions = {
                method: 'POST',
                body: obj,
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            }
            postRequest.postRequest(`users/${useRoute().params.id}/update`, requestOptions, (response) => {
                if (response.success) {
                    navigateTo('/users')
                } else {
                    editError.value = response.message
                }
            })
        }




        onMounted(() => {
            createData()
            permissionsData()

        })

        return { requestError, fieldsObj, fields, loading, arr, select, selectId, permissionsArr, changeSelect, editUser, editError, editCurrentArray, options, value }

    },
    components: {
        HeadVue, Multiselect
    }


}

</script>

