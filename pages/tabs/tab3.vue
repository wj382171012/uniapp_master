<template>
	<view class="root">
		<header-with-search @iconSearchClick="searchClick"></header-with-search>
	</view>
</template>

<script>
	import HeaderWithSearch from '../components/header-with-search/header-with-search';
	export default {
		components: {
			HeaderWithSearch
		},
		data() {

		},
		methods: {
			searchClick(msg) {
				console.log('Tab3 点击搜索:' + msg);

			},
		}
	}
</script>

<style>
	.root {
		display: flex;
		flex-direction: column;
	}

	.container {
		padding: 0 20px;
	}
</style>