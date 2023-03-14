<template>
    <div>
        <div>
            <button class="main__programs-content-btn modalBtn" @click="showCreateModal(url)">
                <!-- <i class="bi bi-plus plus-icon"></i> -->
                {{ $t('create') }}
            </button>
        </div>
        <Modal v-if="showModal">
            <p class="fs-3 text-center">{{ $t('create') }} </p>
            <div class="d-flex flex-column align-items-start gap-2" v-for="field in fields" :key="field.id">
                <template v-if="field != 'permissions'">
                    <label>{{ $t(field) }}</label>
                    <input type="text" v-model="fieldsObj[field]" />
                </template>
                <template v-else>
                    <label>{{ $t(field) }}</label>
                    <select v-model="select" class="form-select createModal-select" @change="changeSelect(select)">
                        <option v-for="(el, idx) in arr" :key="idx" :value="el">
                            {{ el.display_name }}
                        </option>
                    </select>
                </template>
            </div>
            <p style="color: red ;">{{ requestError }}</p>
            <div>
                <button class="btn btn-danger" @click="showModal = !showModal">{{ $t('cancel') }}</button>
                <button class="btn btn-primary" @click.prevent="createNewUser">{{ $t('create') }}</button>
            </div>

        </Modal>
    </div>
</template>

<script>
import { useGetRequest } from '~~/helpers/GET_REQUESTS';
import { usePostRequest } from '~~/helpers/POST_REQUESTS';


export default {
    props: ['modalName', 'url'],
    setup() {
        const postRequest = usePostRequest()
        const getRequest = useGetRequest()
        const showModal = ref(false)
        const requestError = ref('')
        const fieldsObj = ref([])
        const link = ref('')
        const fields = ref([])
        const loading = ref(true)
        const arr = ref([])
        const select = ref('')
        const selectId = ref('')

        const createData = (url) => {
            const requestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest(`${url}/create`, requestOptions, (response) => {
                console.log(response);
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
            })
        }
        const showCreateModal = (url) => {
            createData(url)
            getPermissions()
            showModal.value = !showModal.value
            link.value = url
        }
        const createNewUser = async () => {
            fieldsObj.value.permissions = []
            fieldsObj.value.permissions.push(selectId.value)

            const requestOptions = {
                method: 'POST',
                body: fieldsObj.value,
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            }
            postRequest.postRequest(`${link.value}/create`, requestOptions, (response) => {
                if (response.success) {
                    location.reload()
                } else {
                    requestError.value = response.message
                }
            })
            console.log(fieldsObj.value);
        }
        const changeSelect = (list) => {
            selectId.value = list.id
        }

        return { showModal, createNewUser, requestError, showCreateModal, fieldsObj, fields, arr, getPermissions, select, changeSelect }
    }

}
</script>