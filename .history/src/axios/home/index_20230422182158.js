import request from '@/axios/axios'

export function test(query){
    return request({
        url:'user',
        method:'get'
    })
}