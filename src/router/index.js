import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import register from '@/views/register'
import home from '@/components/Nav'
import User from './user'
import chatroom from '@/views/chatroom'

Vue.use(Router)

const routerMap = [
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/',
    name: '首頁',
    component: home,
    children: [
      User.router,
      {
        path: '/chatroom',
        name: '聊天室',
        component: chatroom
      }
    ]
  },
  {
    path: '/login',
    name: '登入',
    component: login
  },
  {
    path: '/register',
    name: '註冊',
    component:  register
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const newRouter = new Router({
  mode: 'history', // 后端支持可开
  routes: routerMap,
  scrollBehavior: () => ({ y: 0 })
})

newRouter.beforeEach((to, from, next) => {
  next()
})

export default newRouter

