import { request } from './request'

export function getUserComments(query) {
  return request({
    url: '/comment/list-of-user',
    method: 'post',
    data: query
  })
}

export function getUserFavorites(query) {
  return request({
    url: '/favorite/query',
    method: 'post',
    data: query
  })
}