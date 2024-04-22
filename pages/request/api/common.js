import http from '../request.js'

class Common {
	getBanner() {
		console.log('获取banner');
		return http.request({
			path: "/banner/queryBanner", //请求头
			method: "POST", //请求方式
			data: {
				'applicationCode': 'Vote',
				'pageCode': 'home',
				'siteCode': 'left',
				"slotNumber": 0,
				'vin': '',
			}
		})
	};


	getPromtGroup() {
		return http.request({
			path: "/aigcPromtGroup/page", //请求头
			method: "POST", //请求方式
			data: {

			}
		})
	}

	getPromt() {
		return http.request({
			path: "/aigcPromt/page", //请求头
			method: "POST", //请求方式
			data: {

			}
		})
	}

	getPromtUse() {
		return http.request({
			path: "/aigcPromt/use", //请求头
			method: "POST", //请求方式
			data: {
				"content": "",
				"groupId": 0,
				"id": 0,
				"sortNum": 0,
				"title": "",
				"updateTime": "",
				"updateUser": 0,
			}
		})
	}

}

export default new Common();