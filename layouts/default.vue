<template>
    <div class="header">
        <Sidebar />


        <slot />
    </div>
</template>




<script>


import SidebarVue from '@/components/Sidebar.vue';
export default {
    components: {
        SidebarVue,
    },

}

</script>