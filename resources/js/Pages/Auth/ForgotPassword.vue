<script setup>
import FormField from "../../Components/FormField.vue";
import Button from "../../Components/Button.vue";
import { useForm, Link } from "@inertiajs/vue3";
import AuthLayout from "../../Layouts/Auth.vue";
import { usePage } from "@inertiajs/vue3";
const page = usePage();

const form = useForm({
    email: null,
});

const handleForgot = () => {
    form.post(route("postForgotPassword"), {
        onSuccess: () => {
            console.log("Forgot successful");
        },
        onError: (errors) => {
            console.log("Forgot failed", errors);
        },
    });
};
</script>
<template>
    <AuthLayout>
        <Head title="Forgot Password" />
        <div class="login-box">
            <div class="card card-outline card-primary">
                <div class="card-header">
                    <h1 class="mb-0 text-center">{{ page.props.appName }}</h1>
                </div>
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Forgot Password</p>

                    <form @submit.prevent="handleForgot()">
                        <div class="input-group mb-1">
                            <div class="form-floating">
                                <FormField
                                    label="Email"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    v-model="form.email"
                                />
                                <label for="loginEmail">Email</label>
                            </div>
                            <div class="input-group-text">
                                <span class="bi bi-envelope"></span>
                            </div>
                            <span
                                v-if="form.errors.email"
                                class="invalid-feedback"
                            >
                                {{ form.errors.email }}
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
