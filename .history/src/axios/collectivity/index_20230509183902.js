import request from '@/axios/axios.js'

//获取亲属的记录
export function getReRecore(data){
    return request({
        url: 'capsule/getReRecore',
        method: 'post',
        data
    })
}