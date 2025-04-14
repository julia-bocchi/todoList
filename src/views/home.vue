<template>
  <add-events></add-events> <!-- 注意组件名称的大小写 -->
  <eventsRender></eventsRender>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import eventsRender from'../components/EventsRender.vue'
// 使用 defineAsyncComponent 定义异步组件
const addEvents = defineAsyncComponent(() => import('../components/addEvents.vue'));
</script>

<style lang="css" scoped></style>
