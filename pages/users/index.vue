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
                            <td style="width:10%">
                                <NuxtLink :to="'/users/' + list.id" class="btn"
                                    style="background: #008838; color: white;">Show</NuxtLink>
                                <button class="btn btn-danger" style="margin: 0 0 0 10px;"
                                    @click="deleteUser(list.id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Loader v-else />
                <div class="main__programs-sub">
                    <div class="main__programs-sub-item">
                        <select name="" id="">
                            <option value="">10</option>
                        </select>
                        <h3>Items per page</h3>
                        <p>12 of 200 items</p>
                    </div>
                    <div class="main__programs-sub-item">
                        <select name="" id="">
                            <option value="">1</option>
                        </select>
                        <p>of 10 pages</p>

                        <div class="main__programs-sub-chevrons">
                            <i class="fa-solid fa-chevron-left"></i>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
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
        const activeMessage = ref(false)
        const notAccessMessage = ref('')
        const deletedUserId = ref('')
        const confirmModal = ref(false)
        const showModal = ref(false)
        const loading = ref(true)
        const getRequest = useGetRequest()
        const usersList = ref([])
        const postRequest = usePostRequest()
        const requestError = ref('')
        const creatableUsersData = reactive({
            login: '',
            password: '',
            full_name: '',
            role: ''
        })

        const getUsersData = async () => {
            const getRequestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest('users', getRequestOptions, (response) => {
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
                if (response.success) {
                    getRequest.getRequest('users', {
                        headers: {
                            'Content-type': 'application/json',
                            'Accept': 'application/json',
                            "Authorization": "Bearer " + useCookie('token').value,
                        }
                    }, (response) => {
                        location.reload()
                    })
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
            postRequest.postRequest(`users/${deletedUserId.value}/delete`, requestOptions, (response) => {
                console.log(response)
                if (response.code === 403) {
                    notAccessMessage.value = response.message
                    activeMessage.value = true
                }else {
                    location.reload()
                }
            })
        }
        onMounted(() => {
            getUsersData()
        })

        return { usersList, loading, creatableUsersData, createNewUser, showModal, requestError, deleteUser, confirmDelete, confirmModal, notAccessMessage, activeMessage }
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