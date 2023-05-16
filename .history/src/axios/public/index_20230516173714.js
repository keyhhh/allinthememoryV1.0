import request from '@/axios/axios.js'


//获取全部公开记录
export function getRecordPublic(data){
    return request({
        url: 'public/getrecordpublic',
        method: 'post',
        data
    })
}

//获取全部公开记录
export function getRecordPublic(data){
    return request({
        url: 'public/getrecordpublic',
        method: 'post',
        data
    })
}

//点赞公开记录
export function likeRecordPublic(data){
    return request({
        url: 'public/likerecordpublic',
        method: 'post',
        data
    })
}
