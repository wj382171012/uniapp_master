class Request {

	BASEURL = '/aaaaaaa';
	// BASEURL = 'https://hu.acotech.my:50011/';

	#header = {
				'Content-Type': 'application/json',
				'X-ENV-TYPE':'development',
				'X-SERVICEID': 's1',
				'X-CLIENTTYPE': '1',
				'X-P-CODE': '',
				'X-LANGUAGE': "en",
				'X-TOKEN': "",
				'X-SYS-VERSION': '',
				'Version-Name': '',
				'Version-Code': '',
				'X-EQUIPMENT-TYPE': 'atlas',
				'Accept-Language': "en",
				'X-AGENT-TYPE': 'android',
				'X-AGENT-VERSION': '0.0.0',
				'X-APP-ID': 'atlas',
				'AUTHORIZATION': "",
			};

	request(param) {
		// 请求参数
		console.log('执行网络请求');
		let url = param.path,
			method = param.method.toUpperCase(),
			data = param.data || {},
			token = param.token || "",
			hideLoading = param.hideLoading || false;

		//拼接完整请求地址
		let requestUrl = this.BASEURL + url;

		//加载圈
		if (!hideLoading) {
			uni.showLoading({
				title: '加载中...'
			});
		}

		// 返回promise
		return new Promise((resolve, reject) => {
			// 请求
			uni.request({
				url: requestUrl,
				data: data,
				method: method,
				header: this.#header,
				timeout: 15000,
				success: (res) => {
					// 判断 请求api 格式是否正确
					console.log("网络请求结果 success:" + res.statusCode);
					if (res.statusCode && res.statusCode != 200) {
						return;
					}
					// 将结果抛出
					resolve(res.data)
				},
				//请求失败
				fail: (e) => {
					console.log("网络请求结果 fail:" + e);
					resolve(e);
				},
				//请求完成
				complete() {
					//隐藏加载
					console.log("网络请求结果 complete");
					if (!hideLoading) {
						uni.hideLoading();
					}
					resolve();
					return;
				}
			})
		})
	}
}

export default new Request();