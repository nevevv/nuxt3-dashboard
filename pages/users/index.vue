<template>
    <section class="programs__page">
        <HeadVue :text="`${$t('users')}`" :subtitle="`/ ${$t('users')}`" />
        <div class="main__programs-content">
            <div class="users-content-head">
                <h3 class="users-content-title">{{ `${$t('all') + ' ' + $t('users')}` }}</h3>
                <div>
                    <div>
                        <nuxt-link to="/users/createNew" 
                    class="main__programs-content-btn modalBtn">{{ $t('create') }}</nuxt-link>
                    </div>
                    <Modal v-if="showModal">
                        <p class="fs-3 text-center">{{ $t('create') }} </p>
                        <Loader v-if="loadingModal" />
                        <div class="d-flex flex-column align-items-start gap-2" v-for="field in fields" :key="field.id"
                            v-else>
                            <template v-if="field != 'roles'">
                                <label>{{ $t(field) }}</label>
                                <input type="text" v-model="fieldsObj[field]" />
                            </template>
                            <template v-else>
                                <label>{{ $t(field) }}</label>
                                <select v-model="select" class="form-select createModal-select"
                                    @change="changeSelect(select)">
                                    <option v-for="(el, idx) in arr" :key="idx" :value="el">
                                        {{ el.display_name }}
                                    </option>
                                </select>
                            </template>
                        </div>
                        <p class="text-danger">{{ requestError }}</p>
                        <div>
                            <button class="btn btn-danger" @click="showModal = !showModal">{{ $t('cancel') }}</button>
                            <button class="btn btn-primary" @click.prevent="createNewUser">{{ $t('create') }}</button>
                        </div>

                    </Modal>
                </div>
            </div>
            <div class="main__programs-content-block">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">{{ `${$t('all') + ' ' + $t('users')}` }}</h3>
                    <Search />
                </div>
                <table v-if="!loading">
                    <thead>
                        <tr>
                            <th class="th">ID</th>
                            <th class="th">{{ $t('full_name') }}</th>
                            <th class="th">{{ $t('login') }}</th>
                            <th class="th">{{ $t('role') }}</th>
                            <th class="th">{{ $t('action') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="list in usersList" :key="list.id">
                            <td>{{ list.id }}</td>
                            <td>{{ list.full_name }}</td>
                            <td>{{ list.login }}</td>
                            <td v-if="list.roles.length">
                                <span class="bg-primary text-white p-1 m-1 td-span" v-for="el in list.roles" :key="el">{{
                                    el.display_name + ' ' }}</span>
                            </td>
                            <td v-else> </td>
                            <td style="width:16%">
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle bg-success border-0"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {{ $t('action') }}
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <NuxtLink :to="'users' + '/' + list.id" class="dropdown-item">{{ $t('show') }}
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" @click="deleteUser(list.id, 'users')">{{ $t('delete')
                                            }}</a>
                                        </li>
                                        <li>
                                            <nuxt-link class="dropdown-item" :to="`users/edit/${list.id}/`">{{ $t('edit')
                                            }}</nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                                <Modal v-if="confirmModal">
                                    <p class="text-center fs-3">{{ $t('confirmDelete') }}</p>
                                    <div>
                                        <button class="btn btn-primary" @click.prevent="confirmModal = !confirmModal">{{
                                            $t('cancel') }}</button>
                                        <button class="btn btn-danger" @click.prevent="confirmDelete">{{ $t('perform')
                                        }}</button>
                                    </div>
                                    <p class="text-danger text-center" :class="{ 'd-none': !activeMessage }">{{
                                        notAccessMessage }}</p>
                                </Modal>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Loader v-else />
            </div>
        </div>
    </section>
</template>

<script>
import HeadVue from '~~/components/Head.vue';
import { useGetRequest } from '~~/helpers/GET_REQUESTS';
import { usePostRequest } from '~~/helpers/POST_REQUESTS';
import Loader from '~~/components/Loader.vue';
import Actions from '~~/components/Actions.vue'
import CreateNew from '~~/components/CreateNew.vue'
import Pagination from '~~/components/Pagination.vue';

definePageMeta({
    middleware: 'guest',
    pageTransition: {
        name: 'page'
    }
})

export default {
    name: 'page',
    setup() {

        const api_url = 'users'
        const getRequest = useGetRequest()
        const postRequest = usePostRequest()
        const usersList = ref([])
        const loading = ref(true)
        const loadingModal = ref(true)
        const showModal = ref(false)
        const requestError = ref('')
        const fieldsObj = ref([])
        const link = ref('')
        const fields = ref([])
        const arr = ref([])
        const select = ref('')
        const selectId = ref('')
        const confirmModal = ref(false)
        const deletedUserId = ref('');
        const notAccessMessage = ref('')
        const activeMessage = ref(false)

        const createData = () => {
            const requestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest(`${api_url}/create`, requestOptions, (response) => {
                loadingModal.value = false
                fields.value = response.data
                const arr = [];
                response.data.forEach((field) => {
                    arr[field] = '';
                })
                let { ...obj } = arr
                fieldsObj.value = obj
            })
        }
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
        const showCreateModal = () => {
            createData(api_url)
            getRoles()
            showModal.value = !showModal.value
            link.value = api_url
        }
        const createNewUser = async () => {
            if (selectId.value) {
                fieldsObj.value.roles = []
                fieldsObj.value.roles.push(selectId.value)
            }
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
        const changeSelect = (list) => {
            selectId.value = list.id
        }

        const getUsersData = async () => {
            const requestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest(api_url, requestOptions, (response) => {
                usersList.value = response.data.data
                loading.value = false
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
                if (response.code === 403) {
                    notAccessMessage.value = response.message
                    activeMessage.value = true
                } else {
                    location.reload()
                }
            })
        }

        onMounted(() => {
            getUsersData()
        })

        return { getUsersData, usersList, loading, api_url, showModal, createNewUser, requestError, showCreateModal, fieldsObj, fields, arr, select, changeSelect, Loader, loadingModal, confirmModal, deleteUser, notAccessMessage, activeMessage, confirmDelete }
    },

    components: {
        HeadVue, Loader, Actions, CreateNew, Pagination
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
                    content: "ID";
                }

                &:nth-child(2):before {
                    content: "Full Name";
                }

                &:nth-child(3):before {
                    content: "Login";
                }

                &:nth-child(4):before {
                    content: "Action";
                }
            }
        }
    }
}
</style>