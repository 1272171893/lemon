<template>
  <el-container class="wh100">
    <el-header class="border_bottom padding_left padding_right"
      ><Top></Top></el-header
    >
    <el-container>
      <el-aside class="border_right padding" width="300px"
        ><Left></Left
      ></el-aside>
      <el-main class="padding"><Context></Context></el-main>
      <el-aside class="border_left padding" width="350px"><Right></Right></el-aside>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup="props, { emit }">
// import { defineComponent } from "vue";
import Left from "@/layout/left.vue";
import Right from "@/layout/right.vue";
import Top from "@/layout/top.vue";
import Context from "@/layout/context.vue";
// export default defineComponent({
//   name: "App",
// });
</script>
<style></style>
