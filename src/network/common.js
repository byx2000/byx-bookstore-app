import { request } from './request'

export function getAllCategories() {
	return request({
		url: '/category/all'
	})
}

export function login(info) {
	return request({
		url: '/user/login',
		method: 'post',
		data: info
	})
}
