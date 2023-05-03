import request from '@/axios/axios.js'

export function test() {
    return request({
        url: 'user/login',
        method: 'post',
        // params: query
    })
}