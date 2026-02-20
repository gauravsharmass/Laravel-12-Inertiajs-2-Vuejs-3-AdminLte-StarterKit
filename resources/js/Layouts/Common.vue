<script setup>
import AdminSidebar from "../Shared/AdminSidebar.vue";
import UserSidebar from "../Shared/UserSidebar.vue";
import Header from "../Shared/Header.vue";
import FlashMessage from "../Components/FlashMessage.vue";
import {  usePage } from "@inertiajs/vue3";
const page = usePage();
</script>

<template>
    <div class="app-wrapper">
        <!--begin::Header-->
        <Header />
        <!--end::Header-->
        <!--begin::Sidebar-->
        <AdminSidebar v-if="page.props.auth.role_id == 1" />
        <UserSidebar v-if="page.props.auth.role_id == 2" />
        <!--end::Sidebar-->
        <!--begin::App Main-->

        <main class="app-main">
            <div class="app-content">
                <div class="container-fluid">
                    <FlashMessage />

                    <slot />
                </div>
            </div>
        </main>
        <!--end::App Main-->
    </div>
</template>
