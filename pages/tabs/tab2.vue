<template>
	<view class="root">
		<header-with-search @iconSearchClick="searchClick"></header-with-search>

		<view class="content">
			<view v-if="!recognitioning">
				<image src="../../static/icon_AI.png" mode="aspectFill"
					style="width: 68rpx; height: 54rpx; background-color: #eeeeee;">
			</view>
			<view v-else>
				<text>{{result}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import chat from '../request/api/chat';	
	import common from '../request/api/common';
	import HeaderWithSearch from '../components/header-with-search/header-with-search';


	export default {
		components: {
			HeaderWithSearch
		},
		data() {
			return {
				inputText: "",
				result: '',
				recognitioning: true,
			}
		},
		onLoad() {
			console.log('聊天界面 onLoad');
			this.getPromtGroup()
			this.getPromt()
			this.getPromtUse()
		},
		onUnload() {
			console.log('聊天界面 onUnload');
			chat.stop();
		},
		methods: {
			inputChange() {

			},
			searchClick(msg) {
				console.log('Tab2 点击搜索:' + msg);
				chat.sendMessage(msg, (res) => {
					console.log('AI 返回数据:' + res);
					this.result += res;
				})
			},
			getPromtGroup() {
				common.getPromtGroup().then((res) => {
					console.log('getPromtGroup:' + res);
				})
			},
			getPromt() {
				common.getPromt().then((res) => {
					console.log('getPromt:' + res);
				})
			},
			getPromtUse() {
				common.getPromtUse().then((res) => {
					console.log('getPromtUse:' + res);
				})
			}
		}
	}
</script>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;
	}

	.content {
		padding: 0 20px;
		// background: #161920;
	}

	::v-deep .uni-easyinput__content {
		height: 80rpx;
		font-size: 12px;
		border-radius: 50px;
		border: 0px solid #124141;
		background: white;
		padding-left: 10px;
		padding-right: 10px;
	}

	.content {
		margin-top: 20rpx;
	}
</style>