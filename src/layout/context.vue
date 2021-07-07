<template>
  <VueDraggableNext
    class="drawing-board wh100"
    :list="drawingList"
    :animation="340"
    :scroll="true"
    group="componentsGroup"
    @add="add"
    @update="update"
  >
   <Component
    v-for="item in drawingList"
    :key="factor[item.id][__hmrId]"
    :is="factor[item.id]"
  >
  </Component>
    <!-- <ComponentTree :list="drawingList"></ComponentTree> -->
  </VueDraggableNext>
</template>
<script lang="ts" setup>
import { VueDraggableNext } from "vue-draggable-next";
import { reactive } from "vue";
import factor from "@/library/index.ts";
const drawingList = reactive([]);
const add = (e: CustomEvent) => {
  console.log(111, e, drawingList);
};
const update = (e: CustomEvent) => {
  console.log(222, e, drawingList);
};
</script>
<style></style>