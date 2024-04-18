<template>
	<view class="root">
		<header-with-search></header-with-search>

		<view class="content">
			<view v-if="!recognitioning" class="">
				<image src="../../static/icon_AI.png" mode="aspectFill"
					style="width: 68rpx; height: 54rpx; background-color: #eeeeee;">
			</view>
			<view v-else class="content">
				<text>{{result}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import chat from '../request/api/chat';
	import HeaderWithSearch from '../components/header-with-search/header-with-search';
	
	export default {
		components: {
			HeaderWithSearch
		},
		data() {
			return {
				inputText: "",
				result: '12412421',
				recognitioning: false,
			}
		},
		onUnload() {
			console.log('聊天界面 onUnload');
			chat.stop();
		},
		methods: {
			inputChange() {

			},
			iconClick() {
				console.log('点击搜索:' + this.inputText);
				chat.sendMessage(this.inputText, (res) => {
					console.log('AI 返回数据:' + res);
					this.result += res;
				})
			},
		}
	}
</script>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;
	}
	.container {
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