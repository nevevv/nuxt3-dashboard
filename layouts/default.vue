<template>
    <div class="header" :class="{ hidden: !store.activeSidebar }">
        <Sidebar />
        <NuxtPage />
    </div>
</template>




<script setup>
import { useMainStore } from '~~/store';

const store = useMainStore();

</script>

 