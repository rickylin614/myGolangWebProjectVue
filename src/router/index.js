import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import home from '@/components/home'

Vue.use(Router)

const routerMap = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/index',
    name: '首页',
    component: home
  },
  {
    path: '/login',
    name: '登入',
    component: login
  }
]

const newRouter = new Router({
  mode: 'history', // 后端支持可开
  routes: routerMap,
  scrollBehavior: () => ({ y: 0 })
})

newRouter.beforeEach((to, from, next) => {
  console.log('abccccc')
  next()
})
export default newRouter

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
