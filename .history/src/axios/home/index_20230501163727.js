import request from '@/axios/axios.js'

export function login (data) {
    return request({
        url: 'user/login',
        method: 'post',
        da
        // params: query
    })
}