<script setup>
defineProps({
    type: {
        type: String,
        default: "button",
    },
    btnClass: {
        type: String,
        default: "btn btn-primary",
        validator: (value) =>
            [
                "btn btn-primary",
                "btn btn-secondary",
                "btn btn-success",
                "btn btn-danger",
                "btn btn-warning",
                "btn btn-info",
                "btn btn-light",
                "btn btn-dark"
            ].includes(value),
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});
</script>
<template>
    <button :type="type" :disabled="disabled" :class="btnClass">
        <slot />
    </button>
</template>
