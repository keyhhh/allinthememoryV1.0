import request from '@/axios/axios.js'

//获取亲属的记录
export function getReRecord(data){
    return request({
        url: 'relatives/getrerecord',
        method: 'post',
        data
    })
}

//上传亲属的记录
export function upReRecord(data){
    return request({
        url: 'relatives/uprerecord',
        method: 'post',
        data
    })
}

//获取该用户亲属的标签
export function getRe(data){
    return request({
        url: 'relatives/getre',
        method: 'post',
        data
    })
}