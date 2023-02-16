<template>
    <section class="programs__page">
        <HeadVue text="Permissions" subtitle="/ Permissions list" />
        <div class="main__programs-content">
            <div class="main__programs-content-head">
                <button class="main__programs-content-btn modalBtn" @click="showModal = !showModal">
                    <i class="bi bi-plus plus-icon"></i>
                    Create a New Permission
                </button>

            </div>
            <div class="main__programs-content-block mb-5">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">
                        Permissions List
                    </h3>
                    <div class="main__block-head-item">
                        <div class="main__block-head-input">
                            <i class="bi bi-search"></i>
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        </div>
                        <div style="display: flex; gap: 12px">
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
                        <tr v-for="permission in permissionsList" :key="permission.id">
                            <td>{{ permission.id }}</td>
                            <td>{{ permission.name }}</td>
                            <td>{{ permission.display_name }}</td>
                            <td>{{ permission.description }}</td>

                            <td style="width:16%">
                                <NuxtLink :to="'/permissions/' + permission.id" class="btn"
                                    style="background: #008838; color: white;">Show</NuxtLink>
                                <button class="btn btn-danger" style="margin: 0 0 0 10px;"
                                    @click="deletePermission(permission.id)">Delete</button>
                                <button class="btn btn-warning" style="margin: 0 0 0 10px;"
                                    @click="edit(permission.id, permission)">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Loader v-else />

                <div class="main__programs-sub notice__content-border">
                    <div class="main__programs-sub-item">
                        <p>{{ responseList.to }} of {{ responseList.total }} items</p>
                    </div>
                    <div class="main__programs-sub-item">
                        <select @change="changeList($event)">
                            <option :value="id + 1" v-for="(list, id) in responseList.last_page" :key="id">
                                {{ id+ 1 }}
                            </option>
                        </select>

                        <p> of {{ responseList.last_page }} pages </p>

                        <div class=" main__programs-sub-chevrons">
                            <i class="fa-solid fa-chevron-left"></i>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Modal v-if="showModal">
            <p class="text-center fs-3">Create new Permission</p>
            <input type="text" placeholder="Name" v-model="creatableUsersData.name">
            <input type="text" placeholder="Display Name" v-model="creatableUsersData.display_name">
            <input type="text" placeholder="Description" v-model="creatableUsersData.description">
            <p style="color: red ;">{{ requestError }}</p>
            <div>
                <button class="modal-programs-closeBtn" @click="showModal = !showModal">Cancel</button>
                <button class="modal-programs-createBtn" @click.prevent="createNewPermission">Create</button>
            </div>
        </Modal>
        <Modal v-if="confirmModal">
            <p class="text-center fs-3">Do you really want to delete the permission?</p>
            <div>
                <button class="btn btn-primary" @click.prevent="confirmModal = !confirmModal">Cancel</button>
                <button class="btn btn-danger" @click.prevent="confirmDelete">Delete</button>
            </div>
            <p class="text-danger text-center">{{ notAccessMessage }}</p>
        </Modal>
        <Modal v-if="editModal">
            <p class="fs-3 text-center">Edit Permission</p>
            <div class="d-flex flex-column align-items-start gap-2">
                <label>Name</label>
                <input type="text" v-model="editCurrentArray.name" />
            </div>
            <div class="d-flex flex-column align-items-start gap-2">
                <label>Display Name</label>
                <input type="text" v-model="editCurrentArray.display_name" />
            </div>
            <div class="d-flex flex-column align-items-start gap-2">
                <label>Description</label>
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
import HeadVue from '~~/components/Head.vue'
import Modal from '~~/components/Modal.vue'
import Loader from '~~/components/Loader.vue';
import { useGetRequest } from '~~/helpers/GET_REQUESTS'
import { usePostRequest } from '~~/helpers/POST_REQUESTS'


definePageMeta({
    middleware: ['guest'],
    pageTransition: {
        name: 'page'
    }
})

export default {
    setup() {
        const getRequest = useGetRequest();
        const postRequest = usePostRequest();
        const editCurrentArray = ref([])
        const showModal = ref(false)
        const confirmModal = ref(false)
        const responseList = ref([])
        const permissionsList = ref([])
        const loading = ref(true)
        const requestError = ref('')

        const deletedPermissionId = ref()
        const notAccessMessage = ref('')

        const editError = ref('')
        const editModal = ref(false)

        const currentId = ref('')
        const currentPage = ref(1)


        const creatableUsersData = reactive({
            name: '',
            display_name: '',
            description: '',
        })

        const getUsersData = async (pageId) => {
            const requestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest(`permissions?list_type=pagination&page=${pageId}`, requestOptions, (response) => {
                responseList.value = response.data
                permissionsList.value = response.data.data
                loading.value = false
            })
        }

        const createNewPermission = async () => {
            const requestOptions = {
                method: 'POST',
                body: { "name": creatableUsersData.name, "display_name": creatableUsersData.display_name, "description": creatableUsersData.description },
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            }
            postRequest.postRequest('permissions/create', requestOptions, (response) => {
                if (response.success) {
                    location.reload()
                } else {
                    requestError.value = response.message
                }
            })
        }

        const deletePermission = async (id) => {
            confirmModal.value = true
            deletedPermissionId.value = id
        }

        const confirmDelete = () => {
            const requestOptions = {
                method: 'POST',
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            }
            postRequest.postRequest(`permissions/${deletedPermissionId.value}/delete`, requestOptions, (response) => {
                if (response.success) {
                    location.reload()
                }
            })
        }
        const edit = (id, list) => {
            editModal.value = true
            currentId.value = id
            editCurrentArray.value = Object.assign({}, list)
            console.log(id, list)
        }
        const editUser = () => {
            const requestOptions = {
                method: 'POST',
                body: { "name": editCurrentArray.value.name, "display_name": editCurrentArray.value.display_name, "description": editCurrentArray.value.description },
                headers: { "Authorization": "Bearer " + useCookie('token').value }
            }
            postRequest.postRequest(`permissions/${currentId.value}/update`, requestOptions, (response) => {
                if (response.success) {
                    location.reload()
                } else {
                    editError.value = response.message
                }
            })
        }

        const changeList = (e) => {
            loading.value = true
            getUsersData(e.target.value)
            loading.value = false
        }

        onMounted(() => {
            getUsersData(currentPage)
        })

        return { creatableUsersData, getUsersData, showModal, permissionsList, loading, requestError, createNewPermission, deletePermission, confirmModal, notAccessMessage, confirmDelete, editError, editModal, edit, editUser, editCurrentArray, responseList, changeList }

    },
    components: {
        HeadVue,
        Modal,
        Loader,
    },


}

</script>
<style  lang="scss">
$gl-ms : "screen and (max-width: 23.5em)"; // up to 360px
$gl-xs : "screen and (max-width: 35.5em)"; // up to 568px
$gl-sm : "screen and (max-width: 48em)"; // max 768px
$gl-md : "screen and (max-width: 64em)"; // max 1024px
$gl-lg : "screen and (max-width: 80em)"; // max 1280px

// table style

table {
    border-spacing: 1;
    border-collapse: collapse;
    background: white;
    border-radius: 6px;
    overflow: hidden;
    width: 100%;
    position: relative;
    // margin-left: 27px;

    * {
        position: relative
    }

    td,
    th {
        padding-left: 8px;
        font-weight: 400;
    }

    thead tr {
        height: 60px;
        font-size: 16px;
    }

    tbody tr {
        height: 48px;
        border-bottom: 1px solid rgba(223, 223, 223, 0.409);
        border-top: 1px solid rgba(223, 223, 223, 0.409);
    }

    td,
    th {
        text-align: left;

        &.l {
            text-align: right
        }

        &.c {
            text-align: center
        }

        &.r {
            text-align: center
        }
    }
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
                    content: "Course Title";
                }

                &:nth-child(2):before {
                    content: "Program";
                }

                &:nth-child(3):before {
                    content: "Degree";
                }

                &:nth-child(4):before {
                    content: "Min Credits";
                }

                &:nth-child(5):before {
                    content: "Action";
                }
            }
        }
    }
}
</style>