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

export function getBookComments(query) {
  return request({
    url: '/comment/list-of-book',
    method: 'post',
    data: query
  })
}

export function publishComment(data) {
  return request({
    url: '/comment/publish',
    method: 'post',
    data
  })
}

export function isFavorite(bookId) {
  return request({
    url: '/favorite/is-favorite',
    method: 'post',
    data: bookId,
    headers: {
      "content-type": "application/json"
    }
  })
}

export function addFavorite(bookId) {
  return request({
    url: '/favorite/add',
    method: 'post',
    data: bookId,
    headers: {
      "content-type": "application/json"
    }
  })
}

export function cancelFavorite(bookId) {
  return request({
    url: '/favorite/cancel',
    method: 'post',
    data: bookId,
    headers: {
      "content-type": "application/json"
    }
  })
}

export function isLike(bookId){
  return request({
    url: '/evaluate/is-like',
    method: 'post',
    data: bookId,
    headers: {
      "content-type": "application/json"
    }
  })
}

export function isDislike(bookId){
  return request({
    url: '/evaluate/is-dislike',
    method: 'post',
    data: bookId,
    headers: {
      "content-type": "application/json"
    }
  })
}

export function like(bookId){
  return request({
    url: '/evaluate/like',
    method: 'post',
    data: bookId,
    headers: {
      "content-type": "application/json"
    }
  })
}

export function dislike(bookId){
  return request({
    url: '/evaluate/dislike',
    method: 'post',
    data: bookId,
    headers: {
      "content-type": "application/json"
    }
  })
}

export function cancelLike(bookId){
  return request({
    url: '/evaluate/cancel-like',
    method: 'post',
    data: bookId,
    headers: {
      "content-type": "application/json"
    }
  })
}

export function cancelDislike(bookId){
  return request({
    url: '/evaluate/cancel-dislike',
    method: 'post',
    data: bookId,
    headers: {
      "content-type": "application/json"
    }
  })
}