import { createRouter,createWebHashHistory } from "vue-router";
import Home from '../views/home.vue'
import Edit from '../views/Edit.vue'
const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/edit/:EventId',
        name:'edit',
        component:Edit
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;