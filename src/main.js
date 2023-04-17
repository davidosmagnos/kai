import { createApp } from 'vue'
import App from './App.vue'
import Projects from "./Projects.vue"
import Contact from './Contact.vue'
import Index from './components/Index.vue'

import {createRouter,createWebHistory} from 'vue-router'

var routes = [
    {
        path:"/",
        name:"Index",
        component:Index
    },
    {
        path:"/projects",
        name:"Projects",
        component:Projects
    },
    {
        path:"/contact",
        name:"Contact",
        component:Contact
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes:routes
})


createApp(App).use(router).mount('#app')
