import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://182.92.74.74:8888/byx-bookstore-api',
  timeout: 5000
})

instance.interceptors.response.use(res => {
  return res.data
})
export function request(config) {
  return instance(config)
}

export function requestAll(promises) {
  return axios.all(promises)
}