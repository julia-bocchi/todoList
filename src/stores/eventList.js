import { defineStore } from 'pinia'
import { reactive } from 'vue'
const events = window.sessionStorage.getItem('eventList')
export const useEventsListStore = defineStore('eventList', () => {
  const eventList = reactive([...JSON.parse(window.sessionStorage.getItem('eventList'))])
  const addEvent = (event) => {
    eventList.push(event)
  }
  return { eventList, addEvent }
})
