import request from '@/axios/axios.js'


/**
 * 用于local storage保存了id，再次登录进行验证id是否正确
 * @param {*} data  user（userId）
 * @returns 用户信息||user对象
 */
export function testId(data) {
    return request({
        url: 'user/testId',
        method: 'post',
        data
    })
}

/**
 * 登录接口 
 * @param {*} data user（account，password）
 * @returns 返回用户信息||user对象
 */
export function login(data) {
    return request({
        url: 'user/login',
        method: 'post',
        data
    })
}

/**
 * 退出登录的接口
 * @param {*} data 
 * @returns 
 */
export function loginOut() {
    return request({
        url: 'user/loginout',
        method: 'post',
    })
}

/**
 * 注册接口
 * @param {*} data user（account，gender，password，userName）
 * @returns 返回用户信息，但是只有账号密码||user对象
 */
export function register(data) {
    return request({
        url: 'user/register',
        method: 'post',
        data
    })
}

/**
 * 修改用户数据的接口
 * @param {*} data 
 * @returns 
 */
export function updateUser(data) {
    return request({
        url: 'user/updateuser',
        method: 'post',
        data
    })
}

/**
 * @param {*} data user（userId）
 * @returns 返回用户记录信息||record对象
 */
export function getRecord(data) {
    return request({
        url: 'home/getrecord',
        method: 'post',
        data
    })
}

//获取记录信息通过日期
export function getRecordByDate(data,searchDateValue) {
    return request({
        url: 'home/getrecordbydate',
        method: 'post',
        data :
        
    })
}


//获取记录信息通过标签
export function getRecordByTag(data) {
    return request({
        url: 'home/getrecordbytag',
        method: 'post',
        data
    })
}

//上传记录
export function upRecord(data) {
    return request({
        url: 'home/uprecord',
        method: 'post',
        data
    })
}

//设置是否私密
export function isOpen(data) {
    return request({
        url: 'home/isopen',
        method: 'post',
        data
    })
}

//删除记录信息
export function deRecord(data) {
    return request({
        url: 'home/derecord',
        method: 'post',
        data
    })
}

//搜索记录信息