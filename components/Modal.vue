<template>
    <div>
        <div class="modals-body-bg" @click="hideModalAfterClickOnBg"></div>
        <div class="modal-programs">
            <form class="modal-programs-form">
                <slot></slot>
            </form>
        </div>
    </div>


</template>

<script>
export default {
    props: ['modalTitle'],

    setup() {
        const hideModalAfterClickOnBg = () => {
            console.log(this);
        }
        return {hideModalAfterClickOnBg}
    }
}



</script>

