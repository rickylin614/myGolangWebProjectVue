import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import home from '@/components/Nav'
import test1 from '@/views/user/test1'
import test2 from '@/views/user/test2'

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
      {
        path:'/userManager',
        name:'頁面一',
        component:test1
      },
      {
        path:'/userManager2',
        name:'頁面二',
        component:test2
      }
    ]
  },
  {
    path: '/login',
    name: '登入',
    component: login
  },
  {
    path: '*',
    redirect: '/'
  }
]

const newRouter = new Router({
  mode: 'history', // 后端支持可开
  routes: routerMap,
  scrollBehavior: () => ({ y: 0 })
})

newRouter.beforeEach((to, from, next) => {
  // console.log('abccccc')
  next()
})

export default newRouter

