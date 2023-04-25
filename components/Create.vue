<!-- <template>
    <div class="d-flex flex-column w-100">
        <HeadVue />
        <p class="fs-3 createNew-title pt-3">{{ $t('create') }} </p>
        <form class="createNew-form" v-if="loading">
            <div class="d-flex flex-column align-items-lg-start gap-2 mb-3 createNew-form-item" v-for="label of fields"
                :key="label">
                {{ $t(label.label) }}
                <input class="w-100 h-100 createNew-form-input" type="text">
            </div>
            <div class="d-flex justify-content-start w-100">
                <button type="submit" class=" btn btn-primary createNew-btn" @click.prevent="createNewUser()">{{
                    $t('create') }}</button>
            </div>
        </form>
        <Loader v-else />
    </div>
</template>

<script setup>

const props =
    defineProps({
        fields: {
            type: Array,
            required: true
        }
    })



const loading = ref(true)


const createNewUser = () => {
    console.log(sendingData.value)
}




</script>
 -->

