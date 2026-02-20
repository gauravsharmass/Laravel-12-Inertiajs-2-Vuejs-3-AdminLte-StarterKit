<script setup>
import { ref, inject } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
const page = usePage();

const sidebarToggle = inject("sidebarToggle", ref(false));

function toggleSidebar() {
    if (sidebarToggle.value) {
        document.body.classList.remove("sidebar-collapse");
        document.body.classList.add("sidebar-open");
    } else {
        document.body.classList.remove("sidebar-open");
        document.body.classList.add("sidebar-collapse");
    }
    sidebarToggle.value = !sidebarToggle.value;
}
</script>
<template>
    <nav class="app-header navbar navbar-expand bg-body">
        <!--begin::Container-->
        <div class="container-fluid">
            <!--begin::Start Navbar Links-->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a
                        class="nav-link"
                        data-lte-toggle="sidebar"
                        href="#"
                        role="button"
                        @click.stop="toggleSidebar"
                    >
                        <i class="bi bi-list"></i>
                    </a>
                </li>
            </ul>
            <!--end::Start Navbar Links-->
            <!--begin::End Navbar Links-->
            <ul class="navbar-nav ms-auto">
                <!--begin::Navbar Search-->
                <nav class="navbar navbar-static-top">
                    <!-- Sidebar toggle button-->
                    <a
                        href="#"
                        class="sidebar-toggle"
                        data-toggle="push-menu"
                        role="button"
                    >
                        <span class="sr-only">Toggle navigation</span>
                    </a>
                </nav>
                <!--begin::User Menu Dropdown-->

                <li class="nav-item dropdown user-menu">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {{ page.props.auth.name }}
                        <i class="bi bi-person text-dark"></i>
                    </a>
                    <ul
                        class="dropdown-menu ropdown-menu-lg dropdown-menu-end"
                        aria-labelledby="navbarDropdown"
                    >
                        <li>
                            <Link
                                class="dropdown-item"
                                :href="route('showProfile')"
                                ><i class="bi bi-person"></i> Profile</Link
                            >
                        </li>
                        <li>
                            <Link
                                class="dropdown-item"
                                :href="route('changePassword')"
                                ><i class="bi bi-lock"></i> Change
                                Password</Link
                            >
                        </li>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                            <Link
                                method="post"
                                class="dropdown-item"
                                :href="route('logout')"
                                ><i class="bi bi-box-arrow-left"></i>
                                Logout</Link
                            >
                        </li>
                    </ul>
                </li>

                <!--end::User Menu Dropdown-->
            </ul>
            <!--end::End Navbar Links-->
        </div>
        <!--end::Container-->
    </nav>
</template>
