<template>
    <section class="programs__page">
        <HeadVue text="Roles" subtitle="/ Roles" />
        <div class="main__programs-content">
            <div class="users-content-head">
                <h3 class="users-content-title">All Roles</h3>
                <CreateNew :modalName="'role'" :url="api_url" />
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
                        <tr v-for="(list, idx) in usersList" :key="idx">
                            <td>{{ list.id }}</td>
                            <td>{{ list.name }}</td>
                            <td>{{ list.display_name }}</td>
                            <td>{{ list.description }}</td>
                            <td style="width:16%">
                                <Actions :list="list" :fields="['name', 'display_name', 'description']" :url="api_url" />
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
import Loader from '~~/components/Loader.vue';
import Actions from '~~/components/Actions.vue'
import CreateNew from '~~/components/CreateNew.vue'

definePageMeta({
    middleware: ['guest'],
    pageTransition: {
        name: 'page'
    }
})

export default {
    name: 'page',

    setup() {
        const api_url = 'roles'

        const getRequest = useGetRequest()
        const usersList = ref([])
        const loading = ref(true)
        const permissionsList = ref([])
        const getUsersData = async () => {
            const requestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest(api_url, requestOptions, (response) => {
                permissionsList.value = response.data[0].permissions
                usersList.value = response.data
                loading.value = false
            })
        }

        onMounted(() => {
            getUsersData()
        })

        return { usersList, loading, api_url, permissionsList }
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