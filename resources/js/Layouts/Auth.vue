<script setup>
import FlashMessage from "../Components/FlashMessage.vue";
</script>
<template>
    <div class="login-page bg-body-secondary app-loaded">
        <FlashMessage />
        <slot />
    </div>
</template>
