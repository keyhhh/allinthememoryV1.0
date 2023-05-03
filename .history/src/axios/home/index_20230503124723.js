import request from '@/axios/axios.js'

//用于local storage保存了id，再次登录进行验证id是否正确
export function testId(data){
    return request({
        url: 'user/testId',
        method: 'post',
        data
    })
}
//登录接口，返回用户信息
export function login (data) {
    return request({
        url: 'user/login',
        method: 'post',
        data
    })
}
//注册接口，发
export function register(data){
    return request({
        url: 'user/register',
        method: 'post',
        data
    })
}
