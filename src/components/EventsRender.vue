<template>
  <div class="main">
    <ul>
      <li v-for="(event, index) in EventsListStore.eventList" :key="index">
        <div class="main-li">
          <input type="checkbox" v-model="event.isFinished" @change="update(event)" />
          <div class="title">{{ event.title }}</div>
          <div class="content">{{ event.content }}</div>
          <div class="createTime">创建日期:{{ event.createTime }}</div>
          <button class="del" @click="del(index)">del</button>|
          <button class="edit">
            <RouterLink :to="{ name: 'edit', params: { EventId: index } }">编辑</RouterLink>
          </button>
        </div>
        <hr :class="{ finished: event.isFinished }" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useEventsListStore } from '@/stores/eventList'
const EventsListStore = useEventsListStore()
const update = (e) => {
  console.log(e.isFinished)
  window.sessionStorage.setItem('eventList', JSON.stringify(eventList.eventList)) //保存到本地
}
const del = (id) => {
  console.log(id)
  EventsListStore.eventList.splice(id, 1)
  window.sessionStorage.setItem('eventList', JSON.stringify(eventList.eventList)) //保存到本地
}
</script>

<style lang="css" scoped>
.main {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}
ul {
  width: 60%;
  text-decoration: none;
  list-style: none;
}
li {
  text-align: center;
  box-shadow: 0rem 0.5rem 0.4rem #dfd9d9;
  border-radius: 1rem;
  margin: 1rem;
  height: 2.5rem;
}
.main-li {
  display: flex;
}
.main-li > div {
  margin: auto;
  text-align: center;
}
.main-li > .title {
  float: left;
  margin: 0 0 0 1rem;
}
input {
  margin: 0 0 0 1rem;
}
.main-li > .content {
  /* 超出10个字隐藏，之所以设置11em是因为省略号占一个位置 */
  width: 11em;
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.main-li > .createTime {
  float: right;
  margin: 0 1rem 0 0;
}
.del {
  background-color: transparent;
  border: 0;
  color: red;
  /* margin: 0 1rem 0 0; */
  font-size: medium;
  cursor: pointer;
}
.edit {
  background-color: transparent;
  border: 0;
  color: rgb(191, 0, 255);
  margin: 0 1rem 0 0;
  font-size: medium;
  cursor: pointer;
}

.finished {
  text-decoration: line-through; /* 给整个 li 添加横线效果 */
  color: #ccc; /* 可选：改变颜色 */
}
.finished {
  display: block;
  position: relative;
  top: -20px;
  height: 0.1rem;
  background-color: #ccc;
  width: 95%;
}
hr {
  display: none;
}
.router-link-active {
  text-decoration: none;
}
a {
  text-decoration: none;
}
</style>
