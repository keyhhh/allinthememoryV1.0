import request from '@/axios/axios.js'


/**
 * 用于local storage保存了id，再次登录进行验证id是否正确
 * @param {*} data  user（userId）
 * @returns 用户信息||user对象
 */
export function testId(data){
    return request({
        url: 'user/testId',
        method: 'post',
        data
    })
}
