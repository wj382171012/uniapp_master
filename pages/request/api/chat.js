class Chat {

	#baseUrl_ws = 'ws://47.96.232.53:8081/chat';
	#ChatGPT_token = '152|IqKxfNf1ZgkbbPuOTTeWheaJ3Q4KO2zjSSj0FTnU465647be';

	constructor() {
		this.init()
	}

	init() {
		this.socketOpen = false;
		this.socketMsgQueue = [];
		this.socketId = 0;
		this.sessionId = '';
		this._callback = null;

		let _this = this;

		uni.connectSocket({
			url: this.#baseUrl_ws
		});

		//监听WebSocket 打开状态
		uni.onSocketOpen(function(res) {
			console.log('WebSocket连接已打开！');
			_this.socketOpen = true;
			_this._sendInitMessage();

			for (var i = 0; i < _this.socketMsgQueue.length; i++) {
				sendSocketMessage(_this.socketMsgQueue[i]);
			}
			_this.socketMsgQueue = [];
		});

		//监听WebSocket 连接异常
		uni.onSocketError(function(res) {
			console.log('WebSocket连接打开失败，请检查！');
		});

		//监听WebSocket 服务器内容
		uni.onSocketMessage(function(result) {
			console.log('收到服务器内容：' + result.data);
			let res = JSON.parse(result.data);

			if (res.type == "connected") {
				_this.socketId = res.content;
			} else if (res.type == "answer") {
				_this._callback(res.content);
			} else if (res.type == "new_session") {
				var data = JSON.parse(res.content);
				_this.sessionId = data.sessionId;
			} else if (res.type == "error") {

			} else if (res.type == "stop") {

			} else if (res.type == "finish") {

			}
		});

		//监听 WebSocket 关闭状态
		uni.onSocketClose(function(res) {
			console.log('WebSocket 已关闭！');
		});
	}

	_sendInitMessage() {
		let j = {
			"token": '152|IqKxfNf1ZgkbbPuOTTeWheaJ3Q4KO2zjSSj0FTnU465647be',
			"sessionId": this.sessionId
		};
		let msg = {
			"type": "auth",
			"content": j
		};

		uni.sendSocketMessage({
			data: JSON.stringify(msg)
		});
	}

	sendMessage(question, callback) {
		console.log('发送数据 isOpen:' + this.socketOpen + ' 内容: ' + question);
		this._callback = callback;
		let q = {
			"question": question,
			"aiCode": "xinghuoai",
			"useApp": 0,
			"sessionMode": 1,
			"sessionId": this.sessionId
		};
		let msg = {
			"type": "chat",
			"content": q
		};
		if (this.socketOpen) {
			uni.sendSocketMessage({
				data: JSON.stringify(msg)
			});
		} else {
			this.socketMsgQueue.push(msg);
		}
	}

	// 注意这里有时序问题，
	// 如果 uni.connectSocket 还没回调 uni.onSocketOpen，而先调用 uni.closeSocket，那么就做不到关闭 WebSocket 的目的。
	// 必须在 WebSocket 打开期间调用 uni.closeSocket 才能关闭。
	stop() {
		console.log('发送数据 isOpen:' + this.socketOpen);
		if (this.socketOpen) {
			uni.closeSocket();
		}
	};
}

export default new Chat();