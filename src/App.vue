<script setup>
import { ref, onMounted } from 'vue'
</script>

<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  width: 80%;
  height: 80%;
  background-color: white;
  margin: 50px auto auto auto;
  min-height: 450px;
  border-radius: 5px;
}
</style>
