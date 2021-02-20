import { request } from './request'

export function getAllCategories() {
	return request({
		url: '/category/all'
	})
}

export function queryBooks(queryObject) {
	return request({
		url: '/book/query',
		method: 'post',
		data: queryObject
	})
}