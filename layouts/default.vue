<template>
    <div class="header" :class="{ hidden: !store.activeSidebar }">
        <Sidebar />
        <slot />
    </div>
</template>




<script>


import SidebarVue from '@/components/Sidebar.vue';
import { useMainStore } from '~~/store';
export default {
    setup() {
        const store = useMainStore();
        return { store }
    },
    components: {
        SidebarVue,
    },

}

</script>

