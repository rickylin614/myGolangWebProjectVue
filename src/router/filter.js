
// const router = new VueRouter({})

import newRouter from '.'

newRouter.beforeEach((to, from, next) => {
  console.log('entry router before each')
})

newRouter.afterEach((to, from, next) => {
  console.log('entry router after each')
})
