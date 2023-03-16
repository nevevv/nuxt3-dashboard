<template>
    <section class="programs__page">
        <HeadVue text="Roles" subtitle="/ Roles" />
        <div class="main__programs-content">
            <div class="users-content-head">
                <h3 class="users-content-title">All Roles</h3>
                <nuxt-link to="/roles/createNew" class="main__programs-content-btn modalBtn">Create</nuxt-link>
            </div>
            <div class="main__programs-content-block">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">All Roles</h3>
                    <Search />
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
                        <tr v-for="(list, idx) in usersList.data" :key="idx">
                            <td>{{ list.id }}</td>
                            <td>{{ list.name }}</td>
                            <td>{{ list.display_name }}</td>
                            <td>{{ list.description }}</td>
                            <td style="width:16%">
                                <!-- <Actions :list="list" :fields="['name', 'display_name', 'description']" :url="api_url" /> -->
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle bg-success border-0"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {{ $t('action') }}
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <NuxtLink :to="'roles' + '/' + list.id" class="dropdown-item">{{ $t('show') }}
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" @click="deleteUser(list.id, 'roles')">{{ $t('delete')
                                            }}</a>
                                        </li>
                                        <li>
                                            <nuxt-link class="dropdown-item" :to="`roles/edit/${list.id}/`">{{ $t('edit') }}</nuxt-link>
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

definePageMeta({
    pageTransition: {
        name: 'page'
    }
})

export default {
    name: 'page',

    setup() {
        const api_url = 'roles'
        const postRequest = usePostRequest()
        const getRequest = useGetRequest()
        const usersList = ref([])
        const loading = ref(true)
        const permissionsList = ref([])
        const deletedUserId = ref('');
        const confirmModal = ref(false);
        const notAccessMessage = ref('')
        const activeMessage = ref(false)

        const getUsersData = async () => {
            const requestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest(api_url, requestOptions, (response) => {
                permissionsList.value = response.data[0]
                usersList.value = response.data
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
            postRequest.postRequest(`roles/${deletedUserId.value}/delete`, requestOptions, (response) => {
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

        return { usersList, loading, api_url, permissionsList, deleteUser, confirmDelete, confirmModal, notAccessMessage, activeMessage }
    },

    components: {
        HeadVue, Loader, Actions, CreateNew
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
                    content: "ID";
                }

                &:nth-child(2):before {
                    content: "Name";
                }

                &:nth-child(3):before {
                    content: "Display Name";
                }

                &:nth-child(4):before {
                    content: "Desription";
                }
            }
        }
    }
}
</style>