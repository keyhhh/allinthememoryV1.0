import request from '@/axios/axios.js'

//获取胶囊信息
export function getCapsule(data){
    return request({
        url: 'capsule/getcapsule',
        method: 'post',
        data
    })
}

//格局id获取胶囊信息
export function getCapsuleById(data){
    return request({
        url: 'capsule/getcapsulebyid',
        method: 'post',
        data
    })
}

//上传胶囊信息
export function upCapsule(data){
    return request({
        url: 'capsule/upcapsule',
        method: 'post',
        data
    })
}


//上传胶囊信息
export function upCapsule(data){
    return request({
        url: 'capsule/upcapsule',
        method: 'post',
        data
    })
}

