import request from '@/axios/axios.js'

//获取求助信息
export function getHelp(data){
    return request({
        url: 'help/gethelp',
        method: 'post',
        data
    })
}

//获取求助信息，根据id
export function getHelpBy(data){
    return request({
        url: 'help/gethelp',
        method: 'post',
        data
    })
}
