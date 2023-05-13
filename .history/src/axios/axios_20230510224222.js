import axios from 'axios'

//创建axios实例
export default  axios.create({
    //表示公共url部分
    baseURL: 'http://localhost:8081/AIM/',
    //超时
    timeout: 10000,
    //设置Content-type，规定前后端交互使用json
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    // withCredentials: true

});axios.defaults.withCredentials=true;