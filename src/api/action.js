import {post, get, getById, getByParams} from './common'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const actions = {
  Post ({commit}, obj) {
    return new Promise((resolve, reject) => {
      post(obj.url, obj.data).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  Get ({commit}, url) {
    return new Promise((resolve, reject) => {
      get(url).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  GetByParams ({commit}, obj) {
    return new Promise((resolve, reject) => {
      getByParams(obj.url, obj.data).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  GetById ({commit}, obj) {
    return new Promise((resolve, reject) => {
      getById(obj.url, obj.id).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

const store = new Vuex.Store({
  state: {
    count: 0
  },
  actions: actions
})

export default store
