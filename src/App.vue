<template>
  <el-container class="wh100">
    <el-header class="border_bottom padding_left padding_right"
      >Header</el-header
    >
    <el-container>
      <el-aside class="border_right padding" width="300px">Aside</el-aside>
      <el-main class="padding">Main</el-main>
      <el-aside class="border_left padding" width="350px">Aside</el-aside>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>
<style></style>
