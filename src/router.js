import VueRouter from 'vue-router'
import Vue from 'vue'
import Hot from '@/views/Hot'
import Movie from '@/views/Movie'
import Top from '@/views/Top'
import Detail from '@/views/Detail'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {path:'/',redirect:'/hot'},
        {path:'/hot',component:Hot},
        {path:'/movie',component:Movie},
        {path:'/top',component:Top},
        {path:'/detail/:id',component:Detail},
    ]
})
export default router