import request from '@/axios/axios.js'


//发布求助信息
export function upHelp(data){
    return request({
        url: 'help/uphelp',
        method: 'post',
        data
    })
}

//获取求助信息
export function getHelp(data){
    return request({
        url: 'help/gethelp',
        method: 'post',
        data
    })
}

//获取求助信息，根据id
export function getHelpByID(data){
    return request({
        url: 'help/gethelpbyid',
        method: 'post',
        data
    })
}

//获取求助信息的评论
export function getDiscuss(data){
    return request({
        url: 'help/getdiscuss',
        method: 'post',
        data
    })
}

//上传评论内容
export function upDiscuss(data){
    return request({
        url: 'help/updiscuss',
        method: 'post',
        data
    })
}

//更改用户的同求
export function changeUserLike(data){
    return request({
        url: 'help/changeuserlike',
        method: 'post',
        data
    })
}


