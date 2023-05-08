import request from '@/axios/axios.js'

//获取
export function likeRecordPublic(data){
    return request({
        url: 'public/likerecordpublic',
        method: 'post',
        data
    })
}
