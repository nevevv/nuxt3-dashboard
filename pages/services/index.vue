<template>
    <section class="programs__page">
        <HeadVue text="Services" subtitle="/ Services list" />
        <div class="main__programs-content">
            <div class="main__programs-content">
                <div class="users-content-head">
                    <h3 class="users-content-title">All Services</h3>
                    <nuxt-link to="/services/create_new" class="main__programs-content-btn modalBtn">{{ $t('create')
                    }}</nuxt-link>

                </div>

            </div>
            <div class="main__programs-content-block mb-5">
                <Loader v-if="loading" />
                <tableVue style="margin-right: 15px; margin-left: 15px; width:97%;" :lables="labels" :tableData="tableData"
                    v-else />
                <Pagination :pages="pagesCount" @pageChange="getUsersData" style="margin-left: 15px;" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { useGetRequest } from '~~/helpers/GET_REQUESTS';
import { useI18n } from 'vue-i18n';

definePageMeta({
    middleware: ['guest'],
    pageTransition: {
        name: 'page'
    }
})

const getRequest = useGetRequest()
const loading = ref(true)
const currentPage = ref(1)
const pagesCount = ref()
const tableData = ref([])

const labels = computed(() => [
    { title: useI18n().t('id'), prop: 'id' },
    { title: useI18n().t('name'), prop: 'name' },
    { title: useI18n().t('description'), prop: 'description' },
    { title: useI18n().t('display_name'), prop: 'display_name' }
])

const getUsersData = (pageId) => {
    loading.value = true
    const requestOptions = {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + useCookie('token').value,
        }
    }
    getRequest.getRequest(`services?list_type=pagination&page=${pageId}`, requestOptions, (response) => {
        tableData.value = response.data.items
        pagesCount.value = Math.ceil(response.data.total_count / response.data.limit)
        loading.value = false

    })
}
getUsersData(currentPage.value)



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

                // &:nth-child(1):before {
                //     content: "ID";
                // }

                // &:nth-child(2):before {
                //     content: "Name";
                // }

                // &:nth-child(3):before {
                //     content: "Description";
                // }

                // &:nth-child(4):before {
                //     content: "Price";
                // }

                // &:nth-child(5):before {
                //     content: "Size1";
                // }

                // &:nth-child(6):before {
                //     content: "Size";
                // }

                // &:nth-child(7):before {
                //     content: "Display Name";
                // }
            }
        }
    }
}
</style>