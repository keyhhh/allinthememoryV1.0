import request from '@/axios/axios.js'

//获取亲属的记录
export function getReRecord(data){
    return request({
        url: 'capsule/getrerecore',
        method: 'post',
        data
    })
}