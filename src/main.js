// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import newRouter from './router'
import Vuex from 'vuex'
// element module
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '@/api/action.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)

window.store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: newRouter,
  components: { App },
  store: window.store,
  data: {
    window: {
      width: 0,
      height: 0
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    }
  },
  template: '<App/>'
})
