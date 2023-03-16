<template>
    <div class="d-flex flex-column w-100">

        <HeadVue :subtitle="`/Role/${userArr.name || ''}`" />
        <div v-if="!loading" class="singleUsersPage d-flex gap-5 ">
            <h5>ID: {{ userArr.id }}</h5>
            <h6> name: {{ userArr.name }}</h6>
            <h6>display name: {{ userArr.display_name }}</h6>
            <h6>description: {{ userArr.description }}</h6>
            <div>
                <h6>Permission list: </h6>
                <ul v-if="userArr.permissions">
                    <li v-for="(el, idx) in userArr.permissions" :key="idx">
                        {{ el.display_name }}
                    </li>
                </ul>
                <p v-else>
                    None
                </p>
            </div>
        </div>

        <Loader v-else />

    </div>
</template>


<script>
import { useGetRequest } from '~~/helpers/GET_REQUESTS';
import Loader from '~~/components/Loader.vue';
import HeadVue from '~~/components/Head.vue';


definePageMeta({
    layout: 'default'
})

export default {
    setup() {
        const route = useRoute().params.id
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
            getRequest.getRequest(`roles/${route}/show`, requestOptions, (response) => {
                console.log(response.data.permissions);
                userArr.value = response.data
                loading.value = false
            })
        }
        onMounted(() => {
            showPerson();
        })

        return { userArr, loading, route }
    },
    components: {
        Loader, HeadVue,
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