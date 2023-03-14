<template>
    <div>
        <div v-if="!loading" class="singleUsersPage">
            <h5>ID: {{ userArr.id }}</h5>
            <h6>Name: {{ userArr.full_name }}</h6>
            <h6>Username: {{ userArr.login }}</h6>
            <h6>Role: {{ userArr.roles[0].display_name }}</h6>

        </div>
        <Loader v-else />
    </div>
</template>


<script>
import { useGetRequest } from '~~/helpers/GET_REQUESTS';
import Loader from '~~/components/Loader.vue';


definePageMeta({
    layout: 'default'
})

export default {
    setup() {
        const getRequest = useGetRequest();
        const loading = ref(true)
        const userArr = ref([])
        const showPerson = async () => {
            const requestOptions = {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + useCookie('token').value,
                }
            }
            getRequest.getRequest(`users/${useRoute().params.id}/show`, requestOptions, (response) => {
                userArr.value = response.data
                loading.value = false
            })
        }
        onMounted(() => {
            showPerson();
        })

        return { userArr, loading }
    },
    components: {
        Loader
    }

}

</script>



<style>
.singleUsersPage {
    padding: 15px;
    background: white;
    margin: 15px;
}
</style>