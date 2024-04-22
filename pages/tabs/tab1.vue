<template>
	<view class="root_tab1">
		<header-with-search @iconSearchClick="searchClick"></header-with-search>
		<view class="container">

			<view class="content1">
				<view style="padding-left: 40rpx;">
					<v-tabs :tabs="listTab" v-model="current" line-color="#C7B099" active-color="#C7B099" :pills="true"
						pillsColor="#253532" line-height="0" activeColor="#fff" pills-border-radius="50rpx"
						bgColor="#00000000" ref="tabs" @change="tabsChange"></v-tabs>
				</view>
				<view class="content1_categories">
					<view v-for="(item, index) in categories">
						<item-image-text :image="item.image" :text="item.text"></item-image-text>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import common from '../request/api/common.js';
	import user from '../request/api/user.js';
	import HeaderWithSearch from '../components/header-with-search/header-with-search';
	import ItemImageText from '../components/item-image-text/item-image-text.vue';


	export default {
		components: {
			HeaderWithSearch,
			ItemImageText
		},
		data() {
			return {
				listTab: ['军事', '国内', '新闻新闻'],
				current: 0,
				categories: [{
						'image': '/static/c1.png',
						'text': '军事'
					},
					{
						'image': '/static/c2.png',
						'text': '国内'
					},
					{
						'image': '/static/c3.png',
						'text': '新闻新闻'
					},
					{
						'image': '/static/c4.png',
						'text': '军事'
					},
					{
						'image': '/static/c6.png',
						'text': '国内'
					},
					{
						'image': '/static/c7.png',
						'text': '新闻新闻'
					}, {
						'image': '/static/c8.png',
						'text': '国内'
					},
					{
						'image': '/static/c9.png',
						'text': '新闻新闻'
					},
				],
			}
		},

		onLoad() {
			// this.getBanner()

		},
		methods: {
			searchClick(msg) {
				console.log('Tab1 点击搜索:' + msg);
				
			},
			//tabs 点击监听
			tabsChange(index) {
				console.log('tabs 点击监听 index:' + index)
				this.current = index;
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
		padding: 0 0;
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

	.content1 {
		padding: 40rpx 20rpx 0 0rpx;
	}

	.content1_categories {
		display: grid;
		grid-template-columns: repeat(4, 25%);
		grid-template-rows: 160rpx;
		padding: 10rpx 0rpx 0 0rpx;
	}
</style>