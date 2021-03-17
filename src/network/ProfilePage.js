import { request } from './request'

export function getUserComments(query) {
  return request({
    url: '/comment/list-of-user',
    method: 'post',
    data: query
  })
}