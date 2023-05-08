import request from '@/axios/axios.js'



export function getRecordPublic(data){
    return request({
        url: 'user/testId',
        method: 'post',
        data
    })
}
