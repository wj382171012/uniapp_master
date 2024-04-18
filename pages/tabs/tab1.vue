<template>
	<view class="root_tab1">
		<header-with-search></header-with-search>
		<view class="container">
			<v-tabs :tabs="list" v-model="swiperCurrent" line-color="#C7B099" active-color="#C7B099" :pills="true"
				pillsColor="#253532" line-height="0" activeColor="#fff" pills-border-radius="50rpx" bgColor="#00000000" ref="tabs" @change="tabsChange"></v-tabs>

			<swiper class="swiper" :current="swiperCurrent" @animationfinish="swiperAnimationfinish">
				<swiper-item v-for="(item, index) in list" :key="index">
					<view class="swiper-item-view">
						{{item}}
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import common from '../request/api/common.js';
	import user from '../request/api/user.js';
	import HeaderWithSearch from '../components/header-with-search/header-with-search';

	export default {
		components: {
			HeaderWithSearch
		},
		data() {
			return {
				list: ['军事', '国内', '新闻新闻', '军事', '国内', '新闻', '军事', '国内', '新闻'],
				swiperCurrent: 0,
				src: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
				localSrc: '/static/c1.png',
			}
		},

		onLoad() {
			this.getBanner()

		},
		methods: {
			//tabs 点击监听
			tabsChange(index) {
				console.log('tabs 点击监听 index:' + index)
				this.swiperCurrent = index;
			},
			
			//swiper滑动结束
			swiperAnimationfinish(e) {
				this.swiperCurrent = e.detail.current;
			},
			// 生成随机颜色
			_getRandomColor() {
				const rgb = [];
				for (let i = 0; i < 3; ++i) {
					let color = Math.floor(Math.random() * 256).toString(16)
					color = color.length == 1 ? '0' + color : color
					rgb.push(color)
				}
				return '#' + rgb.join('');
			},
			login() {
				//用户信息
				user.login().then((res) => {
					console.log(res);
				})
			},
			getBanner() {
				common.getBanner().then((res) => {
					console.log('getBanner返回结果:' + res);

				})
			}
		}
	}
</script>

<style>
	.root_tab1 {
		display: flex;
		flex-direction: column;
	}

	.container {
		padding: 0 40rpx;
	}

	.input {
		height: 45px;
		padding-left: 20px;
		padding-right: 20px;
		background: #234425;
		border-radius: 50px;
		border: 0px solid #868686;
		margin-left: 20px;
		margin-right: 20px;

	}

	.swiper {
		height: 600rpx;
	}

	.swiper-item-view {
		background-color: #007AFF;
		height: 600rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-size: 50rpx;
	}
</style>