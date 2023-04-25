<template>
    <section class="programs__page">
        <HeadVue text="Roles" subtitle="/ Roles" />
        <div class="main__programs-content">
            <div class="users-content-head">
                <h3 class="users-content-title">All Roles</h3>
                <nuxt-link to="/roles/create_new" class="main__programs-content-btn modalBtn">{{ $t('create') }}</nuxt-link>
            </div>
            <div class="main__programs-content-block">
                <Loader v-if="loading" />
                <tableVue style="margin-right: 15px; margin-left: 15px; width:97%;" :lables="labels" :tableData="tableData"
                    v-else />
            </div>
        </div>
    </section>
</template>

<script setup>

import { useGetRequest } from '~~/helpers/GET_REQUESTS';
import { useI18n } from 'vue-i18n';

const getRequest = useGetRequest();
const tableData = ref()
const loading = ref(true)

const labels = computed(() => [
    { title: useI18n().t('id'), prop: 'id' },
    { title: useI18n().t('name'), prop: 'name' }
])

const getUsersData = async () => {
    const requestOptions = {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + useCookie('token').value,
        }
    }
    getRequest.getRequest('roles', requestOptions, (response) => {
        tableData.value = response.data
        loading.value = false
    })
}

getUsersData()

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