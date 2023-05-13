import request from '@/axios/axios.js'

//获取亲属的信息
export function getCapsule(data){
    return request({
        url: 'capsule/getcapsule',
        method: 'post',
        data
    })
}