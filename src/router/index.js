import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import register from '@/views/register'
import home from '@/components/Nav'
// import test2 from '@/views/user/test2'
import orderManage from '@/views/order/orderManage'
import updateOrder from '@/views/order/updateOrder'
import insertOrder from '@/views/order/insertOrder'
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
      ,
      {
        path:'/orderManage',
        name:'店家訂單',
        component:orderManage
      }
      ,
      {
        path: '/insertOrder',
        name: '新增餐廳',
        component:  insertOrder
      },
      {
        path: '/updateOrder',
        name: '修改餐廳',
        component:  updateOrder
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

