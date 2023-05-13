import request from '@/axios/axios.js'

//发布求助信息
export function upHelp(data){
    return request({
        url: 'help/uphelp',
        method: 'post',
        data
    })
}
