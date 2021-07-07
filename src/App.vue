<template>
  <el-container class="wh100">
    <el-header class="border_bottom padding_left padding_right"
      ><Top></Top
    ></el-header>
    <el-container>
      <el-aside class="border_right padding scrollbar" width="300px"
        ><Left></Left
      ></el-aside>
      <el-main class="padding"><Context></Context></el-main>
      <el-aside class="border_left padding scrollbar" width="350px"
        ><Right></Right
      ></el-aside>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Left from "@/layout/left.vue";
import Right from "@/layout/right.vue";
import Top from "@/layout/top.vue";
import Context from "@/layout/context.vue";
export default defineComponent({
  name: "App",
  components: { Left, Right, Top, Context },
});
</script>
<style lang="less" scoped>

.scrollbar::-webkit-scrollbar {
  width: 4px; 
}
.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 2px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}
.scrollbar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius:2px;
  background: #ededed;
}
</style>
