import request from '@/axios/axios.js'



export function getRecordPublic(data){
    return request({
        url: 'public/getrecordpublic',
        method: 'post',
        data
    })
}
