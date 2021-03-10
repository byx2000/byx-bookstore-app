import { request } from './request'

export function getBookDetail(bookId) {
  return request({
    url: '/book/detail',
    method: 'post',
    data: bookId,
    headers: {
      "content-type": "application/json"
    }
  })
}