import { createApp } from 'vue';
import './assets/style.css';
import App from './App.vue';
import router from './router';
import { registerPlugins } from './plugins';
import { createPinia } from 'pinia';

const app = createApp(App);
registerPlugins(app);

const store = createPinia();

app.use(router).use(store).mount('#app');
