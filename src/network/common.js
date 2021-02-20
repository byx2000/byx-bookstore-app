import { request } from './request'

export function getAllCategories() {
	return request({
		url: '/category/all'
	})
}