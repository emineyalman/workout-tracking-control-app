// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import '@mdi/font/css/materialdesignicons.css'; // Material Design Icons
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

import appAxios from "@/utils/appAxios";

// Components import
import appHeader from '@/components/Shared/appHeader.vue';
import appSlidar from '@/components/DaysSlidar/appSlidar.vue';

loadFonts();

const app = createApp(App);

app.config.globalProperties.$appAxios = appAxios;

app.component('appHeader', appHeader);
app.component('appSlidar', appSlidar);

app.use(router);
app.use(store);
app.use(vuetify);

// Glide.js örneğini oluşturup monte etme
app.mount('#app');

const glide = new Glide('.glide');
glide.mount();
