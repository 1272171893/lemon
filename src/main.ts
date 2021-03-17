import { createApp } from "vue";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 'normalize.css';
import Home from "./Home.vue";
const app = createApp(Home);
app.use(ElementPlus);
app.mount("#app");