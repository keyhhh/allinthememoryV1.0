import request from '@/axios/axios.js'



export function getRecordPublic(data){
    return request({
        url: 'public/testId',
        method: 'post',
        data
    })
}
