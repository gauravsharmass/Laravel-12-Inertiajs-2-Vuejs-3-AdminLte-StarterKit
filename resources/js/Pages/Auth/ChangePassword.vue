<script setup>
import Common from "../../Layouts/Common.vue";
import FormField from "../../Components/FormField.vue";
import Button from "../../Components/Button.vue";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    password: null,
    password_confirmation: null,
});

const handleChangePassword = () => {
    form.post(route("postChangePassword"), {
        onSuccess: () => {
            console.log("Password change successful");
        },
        onError: (errors) => {
            console.log("Password change failed", errors);
        },
    });
};
</script>
<template>
    <Common>
        <Head title="Change Password" />
        <main>
            <div class="container-fluid">
                <form @submit.prevent="handleChangePassword()">
                    <div
                        class="card card-secondary card-outline mb-4 w-50 mx-auto"
                    >
                        <h1 class="mt-4">Change Password</h1>
                        <div class="card-body">
                            <div class="input-group mb-1">
                                <div class="form-floating">
                                    <FormField
                                        label="Password"
                                        id="password"
                                        name="password"
                                        type="password"
                                        v-model="form.password"
                                    />
                                    <label for="loginPassword">Password</label>
                                </div>
                                <div class="input-group-text">
                                    <span class="bi bi-lock-fill"></span>
                                </div>
                                <span
                                    v-if="form.errors.password"
                                    class="invalid-feedback"
                                >
                                    {{ form.errors.password }}
                                </span>
                            </div>

                            <div class="input-group mb-1">
                                <div class="form-floating">
                                    <FormField
                                        label="Password"
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        type="password"
                                        v-model="form.password_confirmation"
                                    />
                                    <label for="loginPassword"
                                        >Confirm Password</label
                                    >
                                </div>
                                <div class="input-group-text">
                                    <span class="bi bi-lock-fill"></span>
                                </div>
                                <span
                                    v-if="form.errors.password_confirmation"
                                    class="invalid-feedback"
                                >
                                    {{ form.errors.password_confirmation }}
                                </span>
                            </div>
                            <Button
                                @click="handleChangePassword"
                                :disabled="form.processing"
                            >
                                {{
                                    form.processing
                                        ? "Changing Password..."
                                        : "Change Password"
                                }}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    </Common>
</template>
