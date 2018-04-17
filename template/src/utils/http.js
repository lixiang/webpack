import axios from 'axios'
import qs from 'qs'
import { timeout, baseURL } from './httpConfig'

const isProduction = process.env.NODE_ENV === 'production'

export function post (url, data) {
  return axios({
    method: 'post',
    baseURL,
    url,
    data: qs.stringify(data),
    timeout,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

export function get (url, params) {
  return axios({
    method: 'get',
    baseURL,
    url,
    params, // get 请求时带的参数
    timeout,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  })
}

export function upload (url, datas) {
  return axios({
    method: 'post',
    baseURL,
    url,
    data: datas,
    processData: false,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export default function (Vue) {
  axios.interceptors.response.use(
    res => {
      Vue.$toast.clear()
      if (!res.data.status === 200) {
        Vue.$toast('网络连接不顺畅')
        return Promise.reject(res)
      }
      return res
    },
    error => {
      Vue.$toast.clear()
      Vue.$toast('网络连接不顺畅')
      return Promise.reject(error)
    }
  )
}
