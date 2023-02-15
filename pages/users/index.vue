<template>
    <section class="programs__page">
        <HeadVue text="Users" subtitle="/ Users" />
        <div class="main__programs-content">
            <div class="users-content-head">
                <h3 class="users-content-title">All users</h3>
                <button class="main__programs-content-btn modalBtn" @click="showModal = !showModal">
                    <i class="bi bi-plus plus-icon"></i>
                    Create a New User
                </button>
            </div>
            <div class="main__programs-content-block">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">All Users</h3>
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
                            <th class="th">Full Name</th>
                            <th class="th">Login</th>
                            <th class="th">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="list in usersList" :key="list.id">
                            <td>{{ list.id }}</td>
                            <td>{{ list.full_name }}</td>
                            <td>{{ list.login }}</td>
                            <td style="width:16%">
                                <NuxtLink :to="'/users/' + list.id" class="btn"
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
            <p class="fs-3 text-center">Create new User</p>
            <input type="text" placeholder="Login" v-model="creatableUsersData.login" />
            <input type="text" placeholder="Password" v-model="creatableUsersData.password" />
            <input type="text" placeholder="Full name" v-model="creatableUsersData.full_name" />
            <input type="text" placeholder="Role" v-model="creatableUsersData.role" />
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
            <p class="fs-3 text-center">Edit User</p>
            <div class="d-flex flex-column align-items-start gap-2">
                <label>Login</label>
                <input type="text" v-model="editCurrentArray.login" />
            </div>
            <div class="d-flex flex-column align-items-start gap-2">
                <label>Password</label>
                <input type="text" v-model="editCurrentArray.password" />
            </div>

            <div class="d-flex flex-column align-items-start gap-2">
                <label>Full name</label>
                <input type="text" v-model="editCurrentArray.full_name" />
            </div>

            <div class="d-flex flex-column align-items-start gap-2">
                <label>Role</label>
                <input type="text" v-model="editCurrentArray.role" />
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
            login: '',
            password: '',
            full_name: '',
            role: ''
        })



        const getUsersData = async () => {
            const requestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest('users', requestOptions, (response) => {
                usersList.value = response.data
                loading.value = false
            })
        }

        const createNewUser = async () => {
            const requestOptions = {
                method: 'POST',
                body: { "login": creatableUsersData.login, "password": creatableUsersData.password, "full_name": creatableUsersData.full_name, "roles[]": creatableUsersData.role },
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            }
            postRequest.postRequest('users/create', requestOptions, (response) => {
                console.log(response)
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

        const edit = (id, list) => {
            editModal.value = true
            currentId.value = id
            editCurrentArray.value = Object.assign({}, list)
        }

        const confirmDelete = () => {
            const requestOptions = {
                method: 'POST',
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            }
            postRequest.postRequest(`users/${deletedUserId.value}/delete`, requestOptions, (response) => {
                if (response.code === 403) {
                    notAccessMessage.value = response.message
                    activeMessage.value = true
                } else {
                    location.reload()
                }
            })
        }

        const editUser = () => {
            const requestOptions = {
                method: 'POST',
                body: { "login": editCurrentArray.value.login, "password": editCurrentArray.value.password, "full_name": editCurrentArray.value.full_name, "roles[]": editCurrentArray.value.role },
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            }
            postRequest.postRequest(`users/${currentId.value}/update`, requestOptions, (response) => {
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

        return { usersList, loading, creatableUsersData, createNewUser, showModal, requestError, deleteUser, confirmDelete, confirmModal, notAccessMessage, activeMessage, editUser, editError, edit, editModal, editCurrentArray }
    },

    components: {
        HeadVue, Loader
    },
}

</script>


<style lang="scss" scoped>
$gl-xs : "screen and (max-width: 35.5em)"; // up to 568px

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