<template>
  <div v-for="(item, index) in data" :key="index">
    <el-link
      class="padding6"
      :underline="false"
      href="#"
      icon="el-icon-s-ticket"
      >{{ index }}</el-link
    >
    <VueDraggableNext
      class="el-row components-draggable"
      :list="item"
      :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
      :clone="cloneComponent"
      draggable=".components-item"
      :sort="false"
      :move="change"
    >
      <transition-group>
        <el-col
          class="components-item"
          v-for="child in item"
          :key="child.id"
          :offset="2"
          :span="10"
        >
          <el-button
            class="button components-body"
            size="mini"
            icon="el-icon-s-tools"
            >{{ child.name }}</el-button
          >
        </el-col>
      </transition-group>
    </VueDraggableNext>
  </div>
</template>
<script lang="ts" setup="props, { emit }">
import { VueDraggableNext } from "vue-draggable-next";
import data from "../json/list";
const change = (e: { draggedContext: { element: { id: any } } }): void => {
  const draggedContext = e.draggedContext.element.id;
  console.log(1111222, draggedContext);
};
</script>
<style lang="less" scoped>
.padding6 {
  padding: 10px 0;
}
.button {
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
  padding-left: 10px;
}
</style>