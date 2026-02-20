<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    modelValue: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: "text",
    },
    placeholder: {
        type: String,
        default: "",
    },
    error: {
        type: String,
        default: "",
    },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
    <input
        :id="id"
        :name="name"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        @input="emit('update:modelValue', $event.target.value)"
        class="form-control"
    />
</template>
