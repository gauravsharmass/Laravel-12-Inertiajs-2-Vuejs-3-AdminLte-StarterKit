<script setup>
import Common from "../../Layouts/Common.vue";
import FormField from "../../Components/FormField.vue";
import Button from "../../Components/Button.vue";
import { useForm, usePage } from "@inertiajs/vue3";
const page = usePage();

const form = useForm({
    name: page.props.auth.name ?? null,
    email: page.props.auth.email ?? null,
});

const handleProfile = () => {
    form.post(route("updateProfile"), {
        onSuccess: () => {
            console.log("Profile update successful");
        },
        onError: (errors) => {
            console.log("Profile update failed", errors);
        },
    });
};
</script>
<template>
    <Common>
        <Head title="My Profile" />
        <main>
            <div class="container-fluid">
                
                <div class="card card-secondary card-outline mb-4 w-50 mx-auto" >
                    <h1 class="mt-4">My Profile</h1>
                    <div class="card-body">
                        <div class="input-group mb-1">
                            <div class="form-floating">
                                <FormField
                                    label="Name"
                                    id="name"
                                    name="name"
                                    type="text"
                                    v-model="form.name"
                                />
                                <label for="name">Name</label>
                            </div>
                            <div class="input-group-text">
                                <span class="bi bi-person-fill"></span>
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
                                    v-model="form.email"
                                />
                                <label for="email">Email</label>
                            </div>
                            <div class="input-group-text">
                                <span class="bi bi-envelope-fill"></span>
                            </div>
                            <span
                                v-if="form.errors.email"
                                class="invalid-feedback"
                            >
                                {{ form.errors.email }}
                            </span>
                        </div>
                        <Button
                            @click="handleProfile"
                            :disabled="form.processing"
                        >
                            {{
                                form.processing
                                    ? "Updating Profile..."
                                    : "Update Profile"
                            }}
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    </Common>
</template>
