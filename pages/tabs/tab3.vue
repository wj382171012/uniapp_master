<template>
	<view class="container">
	<input class="uni-input" focus placeholder="自动获得焦点" />
	<z-tabs :list="list" tab-width="140rpx" @change="tabsChange" :bar-width="0"></z-tabs>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				list: ['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6', 'tab7', 'tab8']
			}
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		font-size: 14px;
		line-height: 24px;
	}

	.tab_active {
		width: 140rpx;
		font-size: 12px;
		border-radius: 18px;
		background: #124141;
		text-align: center;
	}
</style>