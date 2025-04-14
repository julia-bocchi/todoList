import { defineStore } from 'pinia'
import { reactive } from 'vue'
const events = JSON.parse(window.sessionStorage.getItem('eventList') || '[]')
console.log(events)

export const useEventsListStore = defineStore('eventList', () => {
  const eventList = reactive([...events])
  const addEvent = (event) => {
    eventList.push(event)
  }
  return { eventList, addEvent }
})
