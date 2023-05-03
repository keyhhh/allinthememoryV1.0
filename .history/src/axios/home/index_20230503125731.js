import request from '@/axios/axios.js'


/**
 * 用于local storage保存了id，再次登录进行验证id是否正确
 * @param {*} data  user（userId）
 * @returns 用户信息user对象
 */
export function testId(data){
    return request({
        url: 'user/testId',
        method: 'post',
        data
    })
}

/**
 * 登录接口 
 * @param {*} data user（account，password）
 * @returns 返回用户信息user对象
 */
export function login (data) {
    return request({
        url: 'user/login',
        method: 'post',
        data
    })
}

/**
 * 注册接口
 * @param {*} data user对象（account，gender，password，userName）
 * @returns 返回用户信息，但是只有账号密码user对象
 */
export function register(data){
    return request({
        url: 'user/register',
        method: 'post',
        data
    })
}

/**
 * 加载home界面记录数据的接口
 * @param {*} data 
 * @returns 
 */
export function getRecord(data){
    return request({
        url: 'home/getrecord',
        method: 'post',
        data
    })
}