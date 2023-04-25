import axios from 'axios'

//创建axios实例
const request = axios.create({
    baseURL:'http://localhost:8080/AL'
})