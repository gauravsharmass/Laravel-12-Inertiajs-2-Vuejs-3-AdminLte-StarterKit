<script setup>
import { ref, watch } from "vue";
import { usePage } from "@inertiajs/vue3";
const page = usePage();

const showSuccess = ref(false);
const showError = ref(false);
let successTimer = null;
let errorTimer = null;
let timeout = 5000;

watch(
    () => page.props.flash,
    (flash) => {
        // clear previous timers
        if (successTimer) {
            clearTimeout(successTimer);
            successTimer = null;
        }
        if (errorTimer) {
            clearTimeout(errorTimer);
            errorTimer = null;
        }

        showSuccess.value = !!flash?.success;
        showError.value = !!flash?.error;

        if (showSuccess.value) {
            successTimer = setTimeout(() => {
                showSuccess.value = false;
                successTimer = null;
            }, timeout);
        }

        if (showError.value) {
            errorTimer = setTimeout(() => {
                showError.value = false;
                errorTimer = null;
            }, timeout);
        }
    },
    { immediate: true },
);
</script>
<template>
    <div class="alert alert-success" role="alert" v-if="showSuccess">
        {{ page.props.flash.success }}
    </div>

    <div class="alert alert-danger" role="alert" v-if="showError">
        {{ page.props.flash.error }}
    </div>
</template>
