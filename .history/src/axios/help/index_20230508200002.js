import request from '@/axios/axios.js'

//点赞公开记录
export function likeRecordPublic(data){
    return request({
        url: 'public/likerecordpublic',
        method: 'post',
        data
    })
}
