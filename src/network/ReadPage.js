import { request } from './request'

export function getChapter(bookId, chapter) {
  return request({
    url: '/chapter/query',
    method: 'post',
    data: {
      bookId,
      chapter
    }
  })
}

export function getContents(bookId) {
  return request({
    url: '/chapter/contents',
    method: 'post',
    data: bookId,
    headers: {
      "content-type": "application/json"
    }
  })
}