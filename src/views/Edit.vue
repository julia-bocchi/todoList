<template>
  <div class="main">
    <button id="exit">
      <RouterLink :to="{ name: 'Home' }"><img src="../assets/exit.jpg" /></RouterLink>
    </button>
    <h1>{{ EventsList.eventList[index].title }}</h1>
    <input placeholder="修改标题" v-model="title"></input>
    <textarea v-model="text" placeholder="还什么都没有呢QAQ"></textarea>
    <button type="submit" id="save" @click="saveEvent">保存</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useEventsListStore } from '@/stores/eventList'
import Home from './home.vue'
import { ref } from 'vue'
const route = useRoute() //获取路由
const index = route.params.EventId //获取要编辑的事件索引
const EventsList = useEventsListStore() //获取pinia仓库
const text = ref('')
const title = ref('')
text.value =
  EventsList.eventList[index].content === '还什么都没有呢QAQ'
    ? ''
    : EventsList.eventList[index].content
//保存修改
const saveEvent = () => {
  if (text.value) {
    EventsList.eventList[index].content = text.value
    EventsList.eventList[index].title = title.value? title.value:EventsList.eventList[index].title
  } else {
    alert('什么都不写好意思吗')
  }
  console.log('Saving to sessionStorage:', JSON.stringify(EventsList.eventList))
  window.sessionStorage.setItem('eventList', JSON.stringify(EventsList.eventList))
  console.log('Reading from sessionStorage:', window.sessionStorage.getItem('eventList'))
  text.value = ''
  title.value = ''
  console.log( window.location.href);
  
  window.location.href = '/#/'
}

</script>

<style lang="css" scoped>
/* 容器样式 */
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* 标题 */
h1 {
  color: rgba(0, 209, 255, 1);
}
textarea {
  margin: auto;
  width: 90%; /* 宽度自适应 */
  height: 150px; /* 高度固定或自定义 */
  padding: 10px; /* 内边距 */
  font-size: 16px; /* 字体大小 */
  border: 2px solid #ccc; /* 边框样式 */
  border-radius: 8px; /* 圆角边框 */
  resize: vertical; /* 只允许垂直调整大小 */
  box-sizing: border-box; /* 确保宽度和高度包含内边距和边框 */
  transition: border-color 0.3s ease; /* 平滑过渡效果 */
}

textarea:focus {
  border-color: #fc4bfc; /* 聚焦时的边框颜色 */
  outline: none; /* 去掉默认的聚焦轮廓 */
  /* background-color: #fc4bfc; */
}
img {
  width: 25%;
  height: 30%;
  float: left;
}
#exit {
  width: 10%;
  border: none;
  background-color: transparent;
  justify-self: start;
  align-self: self-start;
  cursor: pointer;
}
#save {
  margin-top: 50px;
  width: 12%;
  height: 3vw;
  border: none;
  background-color: #dc4bfc;
  color: white;
  font-size: large;
  box-shadow: 0 0.4rem #dfd9d9;
  cursor: pointer;
}
#save:active {
  transform: translateY(3px);
  box-shadow: 0 0.2rem #dfd9d9;
}
input{
  border: 0 solid black;
  border-bottom: 5px;
  outline: 0;
  margin-top: 0;
  position: relative;
  top: -20px;
  /* z-index: -999; */
}
</style>
