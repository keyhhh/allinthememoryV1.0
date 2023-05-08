import request from '@/axios/axios.js'

//获取
export function getHelp(data){
    return request({
        url: 'help/likerecordpublic',
        method: 'post',
        data
    })
}
