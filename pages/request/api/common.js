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
	}
}

export default new Common();