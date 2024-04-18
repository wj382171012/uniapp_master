<template>
	<view class="container_header_with_search">
		<uni-easyinput class="uni-mt-5" :inputBorder="false" suffixIcon="search" v-model="inputText"
			placeholder="搜索你想了解的内容" @iconClick="iconClick">
		</uni-easyinput>
	</view>
</template>

<script>
	export default {
		name: "header-with-search",
		data() {
			return {
				inputText: "",
			}
		},
		methods: {
			iconClick() {
				console.log('点击搜索:' + this.inputText);

			},
		},
		options: {
			styleIsolation: 'shared'
		}
	}
</script>

<style>
	.container_header_with_search {
		width: 100%;
		height: 320rpx;
		background: #F2E6C6;
		padding-top:80rpx;
	}

	::v-deep .uni-easyinput__content {
		width: 665rpx;
		height: 80rpx;
		font-size: 12px;
		border-radius: 50px;
		border: 0px solid #124141;
		background: white;
		padding-left: 10px;
		padding-right: 10px;
		margin-left: 40rpx;
		
	}
	
	/deep/ .uni-easyinput__content {
		width: 665rpx;
		height: 80rpx;
		font-size: 12px;
		border-radius: 50px;
		border: 0px solid #124141;
		background: white;
		padding-left: 10px;
		padding-right: 10px;
		margin-left: 40rpx;
		
	}
</style>