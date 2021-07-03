import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "normalize.css";
import "element-plus/lib/theme-chalk/index.css";
import "@/styles/index.less";
const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");
