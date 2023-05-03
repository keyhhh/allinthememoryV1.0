import request from '@/axios/axios.js'

export function login (data) {
    return request({
        url: 'user/login',
        method: 'post',
        data
        // params: query
    })
}
export function register(data){
    return request({
        url: 'user/register',
        method: ''
    })
}
