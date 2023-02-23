<template>
    <div>
        <div>
            <button class="main__programs-content-btn modalBtn" @click="showCreateModal(fields)">
                <i class="bi bi-plus plus-icon"></i>
                Create a New User
            </button>
        </div>
        <Modal v-if="showModal">
            <p class="fs-3 text-center">Create new </p>

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
import { usePostRequest } from '~~/helpers/POST_REQUESTS';

export default {
    props: ['fields'],
    setup() {
        const postRequest = usePostRequest()
        const showModal = ref(false)
        const requestError = ref('')
        const fieldsObj = ref([])


        const showCreateModal = (fields) => {
            showModal.value = !showModal.value
            const arr = [];
            fields.forEach((field) => {
                arr[field] = '';
            })
            let { ...obj } = arr
            fieldsObj.value = obj
        }


        const createNewUser = async () => {
            console.log()
            const requestOptions = {
                method: 'POST',
                body: fieldsObj.value,
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            }
            postRequest.postRequest('users/create', requestOptions, (response) => {
                if (response.success) {
                    location.reload()
                } else {
                    requestError.value = response.message
                }
            })
        }




        return { showModal, createNewUser, requestError, showCreateModal,fieldsObj }

    }
}
</script>