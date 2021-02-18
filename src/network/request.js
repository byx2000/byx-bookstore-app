import axios from 'axios'

export default function request(config) {
    const instance = axios.create({
        baseURL: 'http://182.92.74.74:8888/byx-bookstore-api',
        timeout: 5000
    })

    instance.interceptors.response.use(res => {
        return res.data
    })

    return instance(config)
}