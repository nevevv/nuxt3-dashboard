<template>
    <div>
        <div>
            <button class="main__programs-content-btn modalBtn" @click="showCreateModal(url)">
                <i class="bi bi-plus plus-icon"></i>
                Create a new {{ modalName }}
            </button>
        </div>
        <Modal v-if="showModal">
            <p class="fs-3 text-center">Create new {{ modalName }} </p>
            <div class="d-flex flex-column align-items-start gap-2" v-for="field in fields" :key="field.id">
                <label>{{ $t(field) }}</label>
                <input type="text" v-model="fieldsObj[field]" />
            </div>
            <p style="color: red ;">{{ requestError }}</p>
            <div>
                <button class="btn btn-danger" @click="showModal = !showModal">Cancel</button>
                <button class="btn btn-primary" @click.prevent="createNewUser">Create</button>
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

        const createData = (url) => {
            const requestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest(`${url}/create`, requestOptions, (response) => {
                fields.value = response.data
                const arr = [];
                response.data.forEach((field) => {
                    arr[field] = '';
                })
                let { ...obj } = arr
                fieldsObj.value = obj
            })
        }

        const showCreateModal = (url) => {
            showModal.value = !showModal.value
            createData(url)
            link.value = url
        }
        const createNewUser = async () => {
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
        }

        return { showModal, createNewUser, requestError, showCreateModal, fieldsObj, fields }

    }
}
</script>