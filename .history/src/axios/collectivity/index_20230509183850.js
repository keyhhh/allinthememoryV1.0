import request from '@/axios/axios.js'

//获取亲属的记录
export function getCapsule(data){
    return request({
        url: 'capsule/getcapsule',
        method: 'post',
        data
    })
}