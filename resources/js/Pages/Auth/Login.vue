<script setup>
import FormField from "../../Components/FormField.vue";
import Button from "../../Components/Button.vue";
import { useForm, Link } from "@inertiajs/vue3";
import AuthLayout from "../../Layouts/Auth.vue";
import { usePage } from "@inertiajs/vue3";
const page = usePage();

const form = useForm({
    email: null,
    password: null,
    remember: false,
});

const handleLogin = () => {
    form.post(route("postLogin"), {
        onSuccess: () => {
            console.log("Login successful");
        },
        onError: (errors) => {
            console.log("Login failed", errors);
        },
    });
};
</script>
<template>
    <AuthLayout>
        <Head title="Sign In" />
        <div class="login-box">
            <div class="card card-outline card-primary">
                <div class="card-header">
                    <h1 class="mb-0 text-center">{{ page.props.appName }}</h1>
                </div>
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Sign in to start your session</p>

                    <form @submit.prevent="handleLogin()">
                        <div class="input-group mb-1">
                            <div class="form-floating">
                                <FormField
                                    label="Email"
                                    id="email"
                                    name="email"
                                    type="email"
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

                        <div class="row">
                            <div class="col-8 d-inline-flex align-items-center">
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                        name="remember"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="flexCheckDefault"
                                    >
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <!-- /.col -->
                            <div class="col-4">
                                <div class="d-grid gap-2">
                                    <Button
                                        class="btn btn-primary"
                                        type="submit"
                                        :disabled="form.processing"
                                    >
                                        {{
                                            form.processing
                                                ? "Signing In..."
                                                : "Sign In"
                                        }}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <p class="mb-1">
                        <Link :href="route('forgotPassword')"
                            >Forgot password?
                        </Link>
                    </p>
                    <p class="mb-0">
                        <Link :href="route('register')" class="text-center"
                            >Sign Up</Link
                        >
                    </p>
                </div>
            </div>
        </div>
    </AuthLayout>
</template>
