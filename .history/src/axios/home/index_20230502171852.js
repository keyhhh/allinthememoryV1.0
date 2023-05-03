import request from '@/axios/axios.js'

export function testId(data){
    return request({
        url: 'user/testIdr',
        method: 'post',
        data
    })
}

export function login (data) {
    return request({
        url: 'user/login',
        method: 'post',
        data
    })
}
export function register(data){
    return request({
        url: 'user/register',
        method: 'post',
        data
    })
}
