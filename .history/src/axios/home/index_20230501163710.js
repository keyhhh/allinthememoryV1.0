import request from '@/axios/axios.js'

export function login (data() {
    return {
        
    }
},) {
    return request({
        url: 'user/login',
        method: 'post',
        // params: query
    })
}
