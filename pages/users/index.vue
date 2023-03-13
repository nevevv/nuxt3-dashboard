<template>
    <section class="programs__page">
        <HeadVue text="Users" subtitle="/ Users" />
        <div class="main__programs-content">
            <div class="users-content-head">
                <h3 class="users-content-title">All users</h3>
                <CreateNew :modalName="'user'" :fields="['login', 'password', 'full_name', 'role[]']" :url="api_url" />
            </div>
            <div class="main__programs-content-block">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">All Users</h3>
                    <Search/>
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
                                <Actions :list="list" :fields="['login', 'password', 'full_name', 'role[]']"
                                    :url="api_url" />

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
        const api_url = 'users'
        const getRequest = useGetRequest()
        const usersList = ref([])
        const loading = ref(true)


        const getUsersData = async () => {
            const requestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest(api_url, requestOptions, (response) => {
                usersList.value = response.data
                loading.value = false
            })
        }

        onMounted(() => {
            getUsersData()
        })

        return { usersList, loading, api_url }
    },

    components: {
        HeadVue, Loader, Actions, CreateNew
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