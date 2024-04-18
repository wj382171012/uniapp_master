<template>
	<view class="container">
		<!-- 	<input class="uni-input" focus placeholder="自动获得焦点" />
		<z-tabs :list="list" tab-width="140rpx" @change="tabsChange" :bar-width="0"></z-tabs> -->

		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				list: ['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6', 'tab7', 'tab8'],
				ndicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
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

	.uni-bg-red {
		height: 200rpx;
		background: red;
		text-align: center;
	}

	.uni-bg-green {
		height: 200rpx;
		background: green;
		text-align: center;
	}

	.uni-bg-blue {
		height: 200rpx;
		background: blue;
		text-align: center;
	}
</style>