import { request } from './request'

// 主页的网络请求模块

export function getRecommendBooks(query) {
  return request({
    url: '/book/recommend',
    method: 'post',
		data: query
  })
}

export function getRecommend(count) {
  return request({
    url: '/book/recommend',
    params: {
      count
    }
  })
}

export function getRecommendOfCategory(categoryId, count) {
  return request({
    url: '/book/recommend',
    params: {
      categoryId,
      count
    }
  })
}