import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router';
import { createPinia } from 'pinia'
import { VueDatePicker } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .component('VueDatePicker', VueDatePicker)
    .mount('#app')