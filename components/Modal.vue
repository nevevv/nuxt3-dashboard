<template>
    <div>
        <div class="modals-body-bg"></div>
        <div class="modal-programs">
            <form class="modal-programs-form">
                <slot></slot>
            </form>
        </div>
    </div>
</template>

<script setup>
defineProps({
    modalTitle: {
        type: String,
        required: false
    }
})

</script>

