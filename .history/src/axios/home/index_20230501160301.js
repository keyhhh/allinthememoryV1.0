import request from '@/axios/axios.js'

export function test() {
    return request({
        url: 'user/',
        method: 'get',
        // params: query
    })
}