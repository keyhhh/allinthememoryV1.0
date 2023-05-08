import request from '@/axios/axios.js'

//获取
export function getHelp(data){
    return request({
        url: 'help/gethelp',
        method: 'post',
        data
    })
}
