import http from '../request.js'

class User {
    login() {
		console.log('login');
        return http.request({
            path: "category/list", //请求头
            method: "GET", //请求方式
            data: "", //请求数据
        })
    }
}

export default new User();