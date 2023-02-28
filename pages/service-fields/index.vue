<template>
    <section class="programs__page">
        <HeadVue text="Service Field" subtitle="/ Service" />
        <div class="main__programs-content">
            <div class="users-content-head">
                <h3 class="users-content-title">All Service</h3>
                <CreateNew :modalName="'service'" :fields="['name', 'field_type_id']" :url="api_url" />
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
                            <th class="th">Default Value</th>
                            <th class="th">Field type ID</th>
                            <th class="th">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="list in usersList" :key="list.id">
                            <td>{{ list.id }}</td>
                            <td>{{ list.name }}</td>
                            <td>{{ list.default_value }}</td>
                            <td>{{ list.field_type_id }}</td>
                            <td style="width:16%">
                                <Actions :list="list" :fields="['name', 'default_value', 'field_type_id']" :url="api_url" />
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
        const api_url = 'service-fields'
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