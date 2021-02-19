import request from './request'

// 主页的网络请求模块

export function getRecommend(count) {
  return request({
    url: '/book/recommend',
    params: {
      count
    }
  })
}