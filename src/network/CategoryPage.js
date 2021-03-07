import { request } from './request'

export function getClassificationQueryBooks(query) {
  return request({
    url: '/book/classification',
    method: 'post',
    data: query
  })
}