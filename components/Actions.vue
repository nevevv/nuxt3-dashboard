<template>
    <div>
        <div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle bg-success border-0" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    {{ $t('action') }}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <NuxtLink :to="url + '/' + list.id" class="dropdown-item">{{ $t('show') }}
                        </NuxtLink>
                    </li>
                    <li>
                        <a class="dropdown-item" @click="deleteUser(list.id, url)">{{ $t('delete') }}</a>
                    </li>
                    <li><a class="dropdown-item" @click="edit(list.id, list, url)"> {{ $t('edit') }} </a>
                    </li>
                </ul>
            </div>
        </div>
        <Modal v-if="confirmModal">
            <p class="text-center fs-3">{{ $t('confirmDelete') }}</p>
            <div>
                <button class="btn btn-primary" @click.prevent="confirmModal = !confirmModal">{{ $t('cancel') }}</button>
                <button class="btn btn-danger" @click.prevent="confirmDelete">{{ $t('perform') }}</button>
            </div>
            <p class="text-danger text-center" :class="{ 'd-none': !activeMessage }">{{ notAccessMessage }}</p>
        </Modal>
        <Modal v-if="editModal">
            <p class="fs-3 text-center">{{ $t('confirmEdit') }}</p>
            <template v-for="field in fields" :key="field.id">
                <div class="d-flex flex-column align-items-start gap-2" v-if="field !== 'role[]'">
                    <label>{{ $t(field) }}</label>
                    <input type="text" v-model="editCurrentArray[field]" />
                </div>
                <div v-else class="d-flex flex-column gap-2 align-items-start">
                    <label>{{ $t(field) }}</label>
                    <select v-model="select" class="form-select createModal-select" @change="changeSelect(select)">
                        <option selected disabled v-if="editCurrentArray.roles[0]">
                            {{ editCurrentArray.roles[0].display_name }}
                        </option>
                        <option v-for="(el, idx) in arr" :key="idx" :value="el">
                            {{ el.display_name }}
                        </option>
                    </select>
                </div>

            </template>

            <p style="color: red ;">{{ editError }}</p>
            <div>
                <button class="btn btn-primary" @click="editModal = !editModal">{{ $t('cancel') }}</button>
                <button class="btn btn-danger" @click.prevent="editUser(fields)">{{ $t('perform') }}</button>
            </div>
        </Modal>
    </div>
</template>

<script>
import { useGetRequest } from '~~/helpers/GET_REQUESTS';

import { usePostRequest } from '~~/helpers/POST_REQUESTS';

export default {
    props: ['list', 'fields', 'url'],

    setup() {
        const getRequest = useGetRequest();
        const postRequest = usePostRequest();
        const confirmModal = ref(false);
        const showModal = ref(false);
        const deletedUserId = ref('');
        const activeMessage = ref(false)
        const notAccessMessage = ref('')
        const editCurrentArray = ref()
        const editModal = ref(false)
        const currentId = ref('')
        const editError = ref('')
        const link = ref('')
        const arr = ref([])
        const select = ref('')
        const selectId = ref('')

        const getRoles = () => {
            const requestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest('roles', requestOptions, (response) => {
                arr.value = response.data
            })
        }

        const edit = (id, list, url) => {
            getRoles()
            editModal.value = true
            currentId.value = id
            editCurrentArray.value = Object.assign({}, list)
            link.value = url
        }
        const editUser = (fields) => {
            const arr = [];
            fields.forEach(field => {
                arr[field] = editCurrentArray.value[field]
            })


            let { ...obj } = arr;


            if (selectId.value) {
                obj['roles'] = [selectId.value]
            }


            const requestOptions = {
                method: 'POST',
                body: obj,
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            }


            postRequest.postRequest(`${link.value}/${currentId.value}/update`, requestOptions, (response) => {
                if (response.success) {
                    location.reload()
                } else {
                    editError.value = response.message
                }
            })
        }
        const deleteUser = (id, url) => {
            confirmModal.value = !confirmModal.value
            deletedUserId.value = id
            link.value = url

        }

        const confirmDelete = () => {
            const requestOptions = {
                method: 'POST',
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            }
            postRequest.postRequest(`${link.value}/${deletedUserId.value}/delete`, requestOptions, (response) => {
                if (response.code === 403) {
                    notAccessMessage.value = response.message
                    activeMessage.value = true
                } else {
                    location.reload()
                }
            })
        }

        const changeSelect = (el) => {
            selectId.value = el.id
        }

        return { edit, deleteUser, confirmDelete, editUser, confirmModal, showModal, activeMessage, notAccessMessage, editModal, editCurrentArray, editError, getRoles, arr, select, changeSelect }
    },

}



</script>