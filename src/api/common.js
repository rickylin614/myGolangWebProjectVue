import request from './interceptors'

export function post (url, data) {
  return request({
    url: url,
    method: 'post',
    data: data
  })
}

export function get (url) {
  return request({
    url: url,
    method: 'get'
  })
}

export function getById (url, id) {
  return request({
    url: url + '?id=' + id,
    method: 'get'
  })
}

export function getByParams (url, params) {
  return request({
    url: url,
    method: 'get',
    params: params
  })
}
