import axios from 'axios'
import qs from 'qs'
import { timeout, baseURL } from './httpConfig'

axios.defaults.withCredentials = true

export function post(url, data) {
  return axios({
    method: 'post',
    baseURL,
    url,
    data: qs.stringify(data),
    timeout,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  })
}

export function get(url, params) {
  return axios({
    method: 'get',
    baseURL,
    url,
    params, // get 请求时带的参数
    timeout,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  })
}

export function upload(url, datas) {
  return axios({
    method: 'post',
    baseURL,
    url,
    data: datas,
    processData: false,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export default function () {
  axios.interceptors.response.use(
    (res) => {
      if (!res.data.status === 200) {
        return Promise.reject(res)
      }
      return res
    },
    (error) => {
      return Promise.reject(error)
    },
  )
}
