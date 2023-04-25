import axios from 'axios'

//创建axios实例
const request = axios.create({
    //表示公共url部分
    baseURL: 'http://localhost:8080/ALM/',
    //超时
    timeout: 10000,
    //设置Content-type，规定前后端交互使用json
    headers:{}

})