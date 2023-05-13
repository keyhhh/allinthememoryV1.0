import request from '@/axios/axios.js'

//获取亲属的记录
export function getReRecore(data){
    return request({
        url: 'capsule/getreRecore',
        method: 'post',
        data
    })
}