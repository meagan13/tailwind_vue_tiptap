import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import editor from './components/Tiptap'
import About from "./views/About"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/editor',
            name: 'editor',
            component: editor
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
