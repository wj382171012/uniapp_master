<template>
	<view class="root_item_image_text">
		<image :src="image" class="item_image" mode="aspectFit"></image>
		<text class="item_text">{{text}}</text>

	</view>
</template>

<script>
	export default {
		name: "header-with-search",
		props: {
			image: String,
			text: String,
		},
		data() {
			return {

			}
		},
		methods: {

		},

	}
</script>

<style lang="scss">
	.root_item_image_text {
		width: 100%;
		height: 120rpx;
		display: flex;
		flex-direction: column;
	}

	.item_image {
		width: 100%;
		height: 80rpx;
	}

	.item_text {
		width: 100%;
		height: 40rpx;
		text-align: center;
	}
</style>