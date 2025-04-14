<template>
  <form ref="form" class="form-container" @submit="addEvent">
    <input
      type="text"
      name="event"
      id="addEvent"
      v-model="eventName"
      placeholder="请输入代办事项"
    /><button type="submit">提交</button>
  </form>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useEventsListStore } from '@/stores/eventList'

const eventList = useEventsListStore()

let eventName = ref('') //事件名
const addEvent = (e) => {
  try {
    e.preventDefault()
    if (!eventName.value.trim()) {
      alert('不能输入空白事件')
      return
    }

    const event = {
      title: eventName.value,
      createTime: new Date().toLocaleDateString(),
      content: '还什么都没有呢QAQ', // 默认内容
      startDate: '',
      deadline: '', // 可以根据需要添加
      isFinished: false, // 新增属性，表示是否完成
    }

    eventList.addEvent(event)
    eventName.value = '' // 清空输入框

    console.log('Saving to sessionStorage:', JSON.stringify(eventList.eventList))
    window.sessionStorage.setItem('eventList', JSON.stringify(eventList.eventList))
    console.log('Reading from sessionStorage:', window.sessionStorage.getItem('eventList'))
  } catch (error) {
    console.error('Error in addEvent:', error)
    alert('发生错误，请稍后再试')
  }
}
</script>

<style lang="css" scoped>
.form-container {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 输入框 */
input {
  border: 0.1px solid #fc4bfc;
  padding: 1rem;
  font-size: 1rem;
  width: 40%; /* 让输入框填满容器 */
  border-radius: 1rem 0rem 0rem 1rem;
  box-shadow: 0 0.4rem #dfd9d9;
  cursor: pointer;
  color: #720c72;
}
input[type='text']::placeholder {
  color: #fc4bfc;
}
input:focus {
  outline: 0cap;
}
/* 日期输入框 */
#date {
  border-radius: 0;
  width: 10%;
}
/* 按钮 */
button {
  border: none;
  width: 5em;
  padding: 1rem;
  border-radius: 0rem 1rem 1rem 0rem;
  background: linear-gradient(110deg, #fc4bfc 0%, rgba(0, 209, 255, 1) 100%);
  box-shadow: 0 0.4rem #dfd9d9;
  color: white;
}
</style>
