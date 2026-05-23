import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'

//在这里配置路由,对网页进行注册
//path:路径,component填具体的vue文件,也就是import出来的引用参数
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',//默认显示的组件需要置空
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path:'category/sub/:id',
          component:SubCategory
        },
        {
          path:'detail/:id',
          component:Detail
        }
      ]
    },

    {
      path: '/login',
      component: Login
    }
  ],
  //路由滚动星为定制,也就是切换路由时会回到最顶端
  scrollBehavior(){
    return{
      behavior:'smooth',//平滑置顶
      top:0
    }
  }
})

export default router
