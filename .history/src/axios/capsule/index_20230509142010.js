import request from '@/axios/axios.js'

//获取胶囊信息
export function getCapsule(data){
    return request({
        url: 'capsule/getcapsule',
        method: 'post',
        data
    })
}

//上传胶囊信息
export function getCapsule(data){
    return request({
        url: 'capsule/getcapsule',
        method: 'post',
        data
    })
}
