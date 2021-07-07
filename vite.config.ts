import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJSX()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "/src") }],
  },
  css: {
    preprocessorOptions: {
      less: {
        // modifyVars: {
        //   hack: `true; @import (reference) "${resolve(
        //     "src/style/global/config.less"
        //   )}";`,
        // },
        javascriptEnabled: true,
      },
    },
  },
});
