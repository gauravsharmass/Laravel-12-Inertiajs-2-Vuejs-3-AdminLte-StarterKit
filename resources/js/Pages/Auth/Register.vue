<script setup>
import FormField from "../../Components/FormField.vue";
import Button from "../../Components/Button.vue";
import { useForm, Link } from "@inertiajs/vue3";
import AuthLayout from "../../Layouts/Auth.vue";
import { usePage } from "@inertiajs/vue3";
const page = usePage();

const form = useForm({
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
    terms: false,
});

const handleRegister = () => {
    form.post(route("postRegister"), {
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
        <Head title="Sign Up" />
        <div class="register-box">
            <!-- /.register-logo -->
            <div class="card card-outline card-primary">
                <div class="card-header">
                    <h1 class="mb-0 text-center">{{ page.props.appName }}</h1>
                </div>
                <div class="card-body register-card-body">
                    <p class="register-box-msg">Register a new membership</p>

                    <form @submit.prevent="handleRegister()">
                        <div class="input-group mb-1">
                            <div class="form-floating">
                                <FormField
                                    label="Name"
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    v-model="form.name"
                                />
                                <label for="registerName">Name</label>
                            </div>
                            <div class="input-group-text">
                                <span class="bi bi-person"></span>
                            </div>
                            <span
                                v-if="form.errors.name"
                                class="invalid-feedback"
                            >
                                {{ form.errors.name }}
                            </span>
                        </div>
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
                                <label for="registerEmail">Email</label>
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
                                    placeholder="Enter your password"
                                    v-model="form.password"
                                />
                                <label for="registerPassword">Password</label>
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
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    placeholder="Confirm your password"
                                    v-model="form.password_confirmation"
                                />
                                <label for="registerPasswordConfirmation"
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
                        <!--begin::Row-->
                        <div class="row">
                            <div class="col-8 d-inline-flex align-items-center">
                                <div class="form-check">
                                    <input
                                        name="terms"
                                        class="form-check-input"
                                        type="checkbox"
                                        v-model="form.terms"
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="flexCheckDefault"
                                    >
                                        I agree to the
                                        <a href="javascript:;">terms</a>
                                    </label>
                                    <span
                                        v-if="form.errors.terms"
                                        class="invalid-feedback"
                                    >
                                        {{ form.errors.terms }}
                                    </span>
                                </div>
                            </div>
                            <!-- /.col -->
                            <div class="col-4">
                                <div class="d-grid gap-2">
                                    <Button
                                        type="submit"
                                        :disabled="form.processing"
                                    >
                                        {{
                                            form.processing
                                                ? "Signing Up..."
                                                : "Sign Up"
                                        }}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <p class="mb-0">
                        Already have an account?&nbsp;
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
