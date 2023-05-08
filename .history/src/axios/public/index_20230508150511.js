import request from '@/axios/axios.js'



export function getRecordPublic(data){
    return request({
        url: 'public/getRecordPublic',
        method: 'post',
        data
    })
}
