<template>
    <section class="programs__page">
        <HeadVue text="Services" subtitle="/ Services list" />
        <div class="main__programs-content">
            <div class="main__programs-content">
                <div class="users-content-head">
                    <h3 class="users-content-title">All Services</h3>
                    <CreateNew :modalName="'service'" :fields="['name', 'description', 'price', 'size', 'display_name']"
                        :url="api_url" />
                </div>

            </div>
            <div class="main__programs-content-block mb-5">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">
                        Services List
                    </h3>
                    <Search/>
                </div>
                <table v-if="!loading">
                    <thead>
                        <tr>
                            <th class="th">ID</th>
                            <th class="th">Name</th>
                            <th class="th">Description</th>
                            <th class="th">Price</th>
                            <th class="th">Size1</th>
                            <th class="th">Size</th>
                            <th class="th">Display Name</th>
                            <th class="th">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="list in usersList.data" :key="list.id">
                            <td>{{ list.id }}</td>
                            <td>{{ list.name }}</td>
                            <td>{{ list.description }}</td>
                            <td>{{ list.price }}</td>

                            <td v-if="list.size1">{{ list.size1 }}</td>
                            <td v-else>-</td>

                            <td v-if="list.size">{{ list.size }}</td>
                            <td v-else>-</td>
                            <td>{{ list.display_name }}</td>

                            <td style="width:16%">
                                <Actions :list="list" :fields="['name', 'description', 'price', 'display_name', 'size']"
                                    :url="api_url" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Loader v-else />
                <Pagination :arr="usersList" @pageChange="getUsersData" />
            </div>
        </div>
    </section>
</template>

<script>
import HeadVue from '~~/components/Head.vue'
import Modal from '~~/components/Modal.vue'
import Loader from '~~/components/Loader.vue';
import Actions from '~~/components/Actions.vue'
import CreateNew from '~~/components/CreateNew.vue'
import { useGetRequest } from '~~/helpers/GET_REQUESTS'

definePageMeta({
    middleware: ['guest'],
    pageTransition: {
        name: 'page'
    }
})

export default {
    setup() {
        const api_url = 'services'
        const getRequest = useGetRequest()
        const usersList = ref([])
        const loading = ref(true)
        const currentPage = ref(1)

        const getUsersData = (pageId) => {
            loading.value = true

            const requestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest(`${api_url}?list_type=pagination&page=${pageId}`, requestOptions, (response) => {
                usersList.value = response.data
                loading.value = false
            })
        }
        onMounted(() => {
            getUsersData(currentPage.value)

        })

        return { getUsersData, usersList, loading, api_url }

    },
    components: {
        HeadVue,
        Modal,
        Loader,
        Actions,
        CreateNew
    },


}

</script>
<style  lang="scss">
$gl-ms : "screen and (max-width: 23.5em)"; // up to 360px
$gl-xs : "screen and (max-width: 35.5em)"; // up to 568px
$gl-sm : "screen and (max-width: 48em)"; // max 768px
$gl-md : "screen and (max-width: 64em)"; // max 1024px
$gl-lg : "screen and (max-width: 80em)"; // max 1280px


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
                    content: "ID";
                }

                &:nth-child(2):before {
                    content: "Name";
                }

                &:nth-child(3):before {
                    content: "Description";
                }

                &:nth-child(4):before {
                    content: "Price";
                }

                &:nth-child(5):before {
                    content: "Size1";
                }

                &:nth-child(6):before {
                    content: "Size";
                }

                &:nth-child(7):before {
                    content: "Display Name";
                }
            }
        }
    }
}
</style>