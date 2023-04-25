import request from '@/axios/axios.js'

export function test(query) {
    return request({
        url: 'user',
        method: 'get',
        // params: query
    })
}