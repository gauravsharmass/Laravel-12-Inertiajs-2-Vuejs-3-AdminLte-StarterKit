import './bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.min.css'
import "bootstrap"
import 'admin-lte/dist/js/adminlte.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp, h } from 'vue'
import { createInertiaApp,Head } from '@inertiajs/vue3'
import { ZiggyVue } from '../../vendor/tightenco/ziggy'
import { usePage } from "@inertiajs/vue3";
const  page  = usePage();


createInertiaApp({
    title: (title) =>  `${title} | ${page.props.appName}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component('Head', Head)
            .mount(el)
    },
})
