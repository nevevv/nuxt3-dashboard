<template>
    <section class="programs__page">
        <HeadVue text="Roles" subtitle="/ Roles" />
        <div class="main__programs-content">
            <div class="users-content-head">
                <h3 class="users-content-title">All Roles</h3>
                <button class="main__programs-content-btn modalBtn" @click="showModal = !showModal">
                    <i class="bi bi-plus plus-icon"></i>
                    Create a New Roll
                </button>
            </div>
            <div class="main__programs-content-block">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">All Roles</h3>
                    <div class="main__block-head-item">
                        <div class="main__block-head-input">
                            <i class="bi bi-search"></i>
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        </div>
                        <button>
                            <i class="bi bi-funnel"></i>
                            Filter
                        </button>
                        <button>
                            <i class="bi bi-calendar"></i>
                            Filter
                        </button>
                    </div>
                </div>
                <table v-if="!loading">
                    <thead>
                        <tr>
                            <th class="th">ID</th>
                            <th class="th">Name</th>
                            <th class="th">Display Name</th>
                            <th class="th">Description</th>
                            <th class="th">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="list in usersList" :key="list.id">
                            <td>{{ list.id }}</td>
                            <td>{{ list.name }}</td>
                            <td>{{ list.display_name }}</td>
                            <td>{{ list.description }}</td>
                            <td style="width:16%">
                                <NuxtLink :to="'/roles/' + list.id" class="btn"
                                    style="background: #008838; color: white;">Show</NuxtLink>
                                <button class="btn btn-danger" style="margin: 0 0 0 10px;"
                                    @click="deleteUser(list.id)">Delete</button>
                                <button class="btn btn-warning" style="margin: 0 0 0 10px;"
                                    @click="edit(list.id, list)">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Loader v-else />
            </div>
        </div>
        <Modal v-if="showModal">
            <p class="fs-3 text-center">Create new Role</p>
            <input type="text" placeholder="Name" v-model="creatableUsersData.name" />
            <input type="text" placeholder="Display Name" v-model="creatableUsersData.display_name" />
            <input type="text" placeholder="Description" v-model="creatableUsersData.description" />
            <p style="color: red ;">{{ requestError }}</p>
            <div>
                <button class="btn btn-danger" @click="showModal = !showModal">Cancel</button>
                <button class="btn btn-primary" @click.prevent="createNewUser">Create</button>
            </div>
        </Modal>
        <Modal v-if="confirmModal">
            <p class="text-center fs-3">Do you really want to delete the user?</p>
            <div>
                <button class="btn btn-primary" @click.prevent="confirmModal = !confirmModal">Cancel</button>
                <button class="btn btn-danger" @click.prevent="confirmDelete">Delete</button>
            </div>
            <p class="text-danger text-center" :class="{ 'd-none': !activeMessage }">{{ notAccessMessage }}</p>
            <p></p>
        </Modal>
        <Modal v-if="editModal">
            <p class="fs-3 text-center">Edit Roll</p>
            <div class="d-flex flex-column align-items-start gap-2">
                <label for="">Name</label>
                <input type="text" v-model="editCurrentArray.name" />
            </div>

            <div class="d-flex flex-column align-items-start gap-2">
                <label for="">Display Name</label>
                <input type="text" v-model="editCurrentArray.display_name" />
            </div>

            <div class="d-flex flex-column align-items-start gap-2">
                <label for="">Description</label>
                <input type="text" v-model="editCurrentArray.description" />

            </div>

            <p style="color: red ;">{{ editError }}</p>
            <div>
                <button class="btn btn-danger" @click="editModal = !editModal">Cancel</button>
                <button class="btn btn-primary" @click.prevent="editUser">Edit</button>
            </div>
        </Modal>
    </section>
</template>

<script>
import HeadVue from '~~/components/Head.vue';
import { onMounted } from 'vue';
import { useGetRequest } from '~~/helpers/GET_REQUESTS';
import Loader from '~~/components/Loader.vue';
import { usePostRequest } from '~~/helpers/POST_REQUESTS';

definePageMeta({
    middleware: ['guest'],
    pageTransition: {
        name: 'page'
    }
})

export default {
    name: 'page',

    setup() {
        const getRequest = useGetRequest()
        const postRequest = usePostRequest()

        const usersList = ref([])

        const editCurrentArray = ref([])

        const activeMessage = ref(false)
        const notAccessMessage = ref('')
        const deletedUserId = ref('')

        const confirmModal = ref(false)
        const showModal = ref(false)
        const loading = ref(true)
        const requestError = ref('')

        const editError = ref('')
        const editModal = ref(false)

        const currentId = ref('')

        const creatableUsersData = reactive({
            name: '',
            display_name: '',
            description: '',
        })

        const editUsersData = reactive({
            name: '',
            display_name: '',
            description: '',
        })

        const getUsersData = async () => {
            const requestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest('roles', requestOptions, (response) => {
                usersList.value = response.data
                loading.value = false
            })
        }

        const createNewUser = async () => {
            const requestOptions = {
                method: 'POST',
                body: { "name": creatableUsersData.name, "display_name": creatableUsersData.display_name, "description": creatableUsersData.description },
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            }
            postRequest.postRequest('roles/create', requestOptions, (response) => {
                if (response.success) {
                    location.reload()
                } else {
                    requestError.value = response.message
                }
            })
        }

        const deleteUser = (id) => {
            confirmModal.value = !confirmModal.value
            deletedUserId.value = id
        }
        const confirmDelete = () => {
            const requestOptions = {
                method: 'POST',
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            }
            postRequest.postRequest(`roles/${deletedUserId.value}/delete`, requestOptions, (response) => {
                if (response.code === 403) {
                    notAccessMessage.value = response.message
                    activeMessage.value = true
                } else {
                    location.reload()
                }
            })
        }

        const edit = (id, list) => {
            editModal.value = true
            currentId.value = id
            editCurrentArray.value = Object.assign({}, list)
        }


        const editUser = () => {
            const requestOptions = {
                method: 'POST',
                body: { "name": editCurrentArray.value.name, "display_name": editCurrentArray.value.display_name, "description": editCurrentArray.value.description },
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            }
            postRequest.postRequest(`roles/${currentId.value}/update`, requestOptions, (response) => {
                if (response.success) {
                    location.reload()
                } else {
                    editError.value = response.message
                }
            })
        }
        onMounted(() => {
            getUsersData()
        })

        return { usersList, loading, creatableUsersData, createNewUser, showModal, requestError, deleteUser, confirmDelete, confirmModal, notAccessMessage, activeMessage, editUser, editError, edit, editModal, editUsersData, editCurrentArray }
    },

    components: {
        HeadVue, Loader
    },
}

</script>


<style lang="scss" scoped>
$gl-xs : "screen and (max-width: 35.5em)"; // up to 568px

.modal-programs-form {
    gap: 8px;
}


@media #{$gl-xs} {

    table {
        display: block;
        margin-top: 20px;

        >*,
        tr,
        td,
        th {
            display: block
        }

        thead {
            display: none
        }

        tbody tr {
            height: auto;
            padding: 8px 0;

            td {
                padding-left: 45%;
                margin-bottom: 12px;

                &:last-child {
                    margin-bottom: 0
                }

                &:before {
                    position: absolute;
                    font-weight: 700;
                    width: 40%;
                    left: 10px;
                    top: 0
                }

                &:nth-child(1):before {
                    content: "Mail";
                }

                &:nth-child(2):before {
                    content: "Name";
                }

                &:nth-child(3):before {
                    content: "Surname";
                }

                &:nth-child(4):before {
                    content: "Action";
                }
            }
        }
    }
}
</style>