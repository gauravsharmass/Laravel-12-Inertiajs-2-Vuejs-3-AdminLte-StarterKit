<script setup>
    import UserSidebar from "../Shared/UserSidebar.vue";
    import Header from "../Shared/Header.vue";
    import FlashMessage from "../Components/FlashMessage.vue";
</script>
<template>
    <div class="app-wrapper">
        <!--begin::Header-->
        <Header />
        <!--end::Header-->
        <!--begin::Sidebar-->
        <UserSidebar />
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
