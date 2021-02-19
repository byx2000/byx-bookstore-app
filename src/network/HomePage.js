import { request, requestAll } from './request'

// 主页的网络请求模块

export function getRecommend(count) {
  return request({
    url: '/book/recommend',
    params: {
      count
    }
  })
}

export function getAllCategories() {
  return request({
    url: '/category/all'
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