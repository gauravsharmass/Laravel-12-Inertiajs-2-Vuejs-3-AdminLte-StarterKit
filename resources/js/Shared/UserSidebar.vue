<script setup>
import { inject, ref } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
const page = usePage();
const sidebarToggle = inject("sidebarToggle", ref(false));

const openMenu = ref(null);
const toggleMenu = (menu) => {
    openMenu.value = openMenu.value === menu ? null : menu;
};
</script>
<template>
    <aside class="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
        <!--begin::Sidebar Brand-->
        <div class="sidebar-brand">
            <!--begin::Brand Link-->
            <Link :href="route('userDashboard')"  class="brand-link">
                <!--begin::Brand Text-->
                <span class="brand-text fw-light"> {{ page.props.appName }}</span>
                <!--end::Brand Text-->
            </Link>
            <!--end::Brand Link-->
        </div>
        <!--end::Sidebar Brand-->
        <!--begin::Sidebar Wrapper-->
        <div class="sidebar-wrapper">
            <nav class="mt-2">
                <ul
                    class="nav sidebar-menu flex-column"
                    role="navigation"
                    aria-label="Main navigation"
                    id="navigation"
                >
                    <li class="nav-item">
                        <Link  :href="route('userDashboard')" class="nav-link">
                            <i class="nav-icon bi bi-speedometer"></i>
                            <p>Dashboard</p>
                        </Link>
                    </li>

                    <!-- MultiLevel Link -->
                    <!-- <li
                        class="nav-item"
                        :class="{ 'menu-open': openMenu === 'Multilevel' }"
                    >
                        <a
                            href="#"
                            class="nav-link"
                            @click.prevent="toggleMenu('Multilevel')"
                        >
                            <i class="nav-icon bi bi-palette"></i>
                            <p>
                                Multilevel
                                <i
                                    class="nav-arrow bi bi-chevron-right"
                                    :class="{
                                        rotate: openMenu === 'Multilevel',
                                    }"
                                ></i>
                            </p>
                        </a>

                        <ul
                            class="nav nav-treeview"
                            v-show="openMenu === 'Multilevel'"
                        >
                            <li class="nav-item">
                                <a href="../index.html" class="nav-link">
                                    <i class="nav-icon bi bi-circle"></i>
                                    <p>Item 1</p>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a href="../index2.html" class="nav-link">
                                    <i class="nav-icon bi bi-circle"></i>
                                    <p>Item 2</p>
                                </a>
                            </li>
                        </ul>
                    </li> -->

                    
                </ul>
            </nav>
        </div>
        <!--end::Sidebar Wrapper-->
    </aside>
</template>
