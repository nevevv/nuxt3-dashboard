<template>
    <div>
        <el-table :data="filterTableData" style="width: 100%" :border="true">
            <el-table-column :prop="label.prop" :label="label.title" v-for="(label, i) of lables" :key="i" />
            <el-table-column align="right">
                <template #header>
                    <el-input v-model="search" size="small" placeholder="Поиск" />
                </template>
                <template #default="scope">
                    <el-button size="small" type="primary" @click="show(scope.row.id)">Show</el-button>
                    <el-button size="small" type="warning" @click="handleEdit(scope.row.id)">Edit</el-button>
                    <el-button size="small" type="danger" @click="showModal(scope.row.id)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        <Modal v-if="confirmModal">
            <p class="text-center fs-3">{{ $t('confirmDelete') }}</p>
            <div>
                <button class="btn btn-primary" @click.prevent="confirmModal = !confirmModal">{{
                    $t('cancel') }}</button>
                <button class="btn btn-danger" @click.prevent="handleDelete()">{{ $t('perform')
                }}</button>
            </div>
            <p class="text-danger text-center" :class="{ 'd-none': !activeMessage }">{{ notAccessMessage }}</p>
        </Modal>
    </div>
</template>
  
<script setup>
import { usePostRequest } from '~~/helpers/POST_REQUESTS';
import { computed } from 'vue'

const postRequest = usePostRequest()
const confirmModal = ref(false)
const notAccessMessage = ref('')
const activeMessage = ref(false)
const elementId = ref()

const props = defineProps({
    lables: {
        type: Array,
        required: true
    },
    tableData: {
        type: Array,
        required: true
    }
})

const table = props.tableData
console.log(table);


const show = (id) => {
    navigateTo(`${useRouter().currentRoute.value.path}/${id}/`)
}

const handleEdit = (id) => {
    navigateTo(`${useRouter().currentRoute.value.path}/edit/${id}/`)
}

const showModal = (id) => {
    confirmModal.value = !confirmModal.value
    elementId.value = id
}

const handleDelete = () => {
    const requestOptions = {
        method: 'POST',
        headers: { "Authorization": "Bearer " + useCookie('token').value }
    }
    postRequest.postRequest(`${useRouter().currentRoute.value.name}/${elementId.value}/delete`, requestOptions, (response) => {
        if (response.success) {
            location.reload()
        } else {
            notAccessMessage.value = response.error.message
            activeMessage.value = true
        }
    })

}


const search = ref('');
const filterTableData = computed(() =>
    table.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)

</script>