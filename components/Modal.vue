<template>
    <div>
        <div class="modals-body-bg"></div>
        <div class="modal-programs">
            <div class="modal-programs-head">
                <h2 class="modal-programs-title">{{ modalTitle }}</h2>
            </div>

            <form class="modal-programs-form">
                <slot></slot>
            </form>
        </div>
    </div>


</template>

<script>
export default {
    props: ['modalTitle'],
}

</script>

