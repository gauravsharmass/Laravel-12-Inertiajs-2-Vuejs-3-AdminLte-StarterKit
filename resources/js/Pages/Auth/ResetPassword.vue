<script setup>
import FormField from "../../Components/FormField.vue";
import Button from "../../Components/Button.vue";
import { useForm, Link } from "@inertiajs/vue3";
import AuthLayout from "../../Layouts/Auth.vue";
import { usePage } from "@inertiajs/vue3";
const page = usePage();

const props = defineProps({
    token: String,
    email: String,
});
const form = useForm({
    token: props.token,
    email: props.email,
    password: null,
    password_confirmation: null,
});
const handleReset = () => {
    form.post(route("password.update"), {
        onSuccess: () => {
            console.log("Password reset successful");
        },
        onError: (errors) => {
            console.log("Password reset failed", errors);
        },
    });
};
</script>
<template>
    <AuthLayout>
        <Head title="Reset Password" />
        <div class="login-box">
            <div class="card card-outline card-primary">
                <div class="card-header">
                    <h1 class="mb-0 text-center">{{ page.props.appName }}</h1>
                </div>
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Reset Password</p>

                    <form @submit.prevent="handleReset()">
                        <FormField
                            name="token"
                            id="token"
                            type="hidden"
                            v-model="form.token"
                        />
                        <FormField
                            name="email"
                            id="email"
                            type="hidden"
                            v-model="form.email"
                        />
                        <div class="input-group mb-1">
                            <div class="form-floating">
                                <FormField
                                    label="Password"
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
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
                                    label="Confirm Password"
                                    name="password_confirmation"
                                    id="password_confirmation"
                                    type="password"
                                    placeholder="Confirm your password"
                                    v-model="form.password_confirmation"
                                />
                                <label for="loginPassword">Confirm Password</label>
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
                        <div class="row">
                            <div class="col-6">
                                <div class="d-grid gap-2">
                                    <Button
                                        type="submit"
                                        :disabled="form.processing"
                                    >
                                        {{
                                            form.processing
                                                ? "Resetting Password..."
                                                : "Reset Password"
                                        }}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <p class="mb-0">
                        Back to &nbsp;
                        <Link
                            :href="route('login')"
                            class="link-primary text-center"
                            >Sign In</Link
                        >
                    </p>
                </div>
            </div>
        </div>
    </AuthLayout>
</template>
