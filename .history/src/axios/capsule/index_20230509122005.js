import request from '@/axios/axios.js'

//发布求助信息
export function getCapsule(data){
    return request({
        url: 'help/getcapsule',
        method: 'post',
        data
    })
}
