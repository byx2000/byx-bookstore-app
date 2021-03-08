import { request } from './request'

export function getSearchResult(query) {
  return request({
    url: '/book/search',
    method: 'post',
    data: query
  })
}