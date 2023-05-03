import request from '@/axios/axios.js'

export function login () {
    return request({
        url: 'user/login',
        method: 'post',
        // params: query
    })
}