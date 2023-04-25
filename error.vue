<template>
    <div class="card">
        <h1 class="card_title">{{ error.statusCode }} Error</h1>
        <strong>{{ error.message }}</strong>
    </div>
</template>

<script setup>
defineProps(['error'])
</script>

<style>
.card {
    position: fixed;
    left: 50%;
    top: 15%;
    transform: translateX(-50%) translateY(-50%);
    padding: 15px;
}

.card_title {
    text-align: center;
}

strong {
    text-align: center;
}
</style>