<template>
    <section class="programs__page">

        <HeadVue text="Fields Types" subtitle="/ Fields" />

        <div class="main__programs-content">
            <div class="users-content-head">
                <h3 class="users-content-title">Fields Types</h3>
            </div>
            <div class="main__programs-content-block">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">Fields Types List</h3>
                    <Search/>
                </div>

                <table v-if="!loading">
                    <thead>
                        <tr>
                            <th class="th">ID</th>
                            <th class="th">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="list in dataList" :key="list.id">
                            <td>{{ list.id }}</td>
                            <td>{{ list.name }}</td>
                           
                        </tr>
                    </tbody>
                </table>
                <Loader v-else/>
            </div>
        </div>
    </section>
</template>


<script>
import { useGetRequest } from '~~/helpers/GET_REQUESTS';
import  Loader  from '~~/components/Loader.vue';


definePageMeta({
    middleware: ['guest'],
    pageTransition: {
        name: 'page'
    }
})

import HeadVue from '~~/components/Head.vue';
export default {
    components: {
        HeadVue
    },

    setup() {
        const getRequest = useGetRequest()
        const dataList = ref([])
        const loading = ref(true)

        const getData = async () => {
            const requestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest('field-types',requestOptions, (response) => {
                dataList.value = response.data
                loading.value = false
            })
        }
        onMounted(() => {
            getData()
        })


        return {dataList,loading}
    },
    components: {
        HeadVue,
        Loader
    }
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
                    content: "Name";
                }
            }
        }
    }
}
</style>