import AOS from 'aos';
require('@/bootstrap');
import App from '@/App';
import store from "@/store";
import router from "@/router";
import { createApp } from 'vue';
import components from '@/components/index';

const aos = AOS.init();
const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(aos)
    .use(store)
    .use(router)
    .mount('#app');
