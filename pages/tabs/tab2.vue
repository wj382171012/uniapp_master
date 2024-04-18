<template>
	<view class="container">
		<uni-easyinput class="uni-mt-5" :inputBorder="false" suffixIcon="search" v-model="inputText"
			placeholder="搜索你想了解的内容" @iconClick="iconClick">
		</uni-easyinput>
		<text>{{result}}</text>
	</view>
</template>

<script>
import chat from '../request/api/chat';
	export default {
		data() {
			return {
				inputText: "",
				result:''
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
				chat.sendMessage(this.inputText, (res)=>{
					console.log('AI 返回数据:' + res);
					this.result += res;
				})
			},
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 20px 20px;
		// background: #161920;
	}

	::v-deep .uni-easyinput__content {
		height: 80rpx;
		font-size: 12px;
		border-radius: 50px;
		border: 0px solid #124141;
		background: white;
		padding-left: 10px;
	}
</style>