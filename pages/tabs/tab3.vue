<template>
	<view class="root">
	<header-with-search></header-with-search>
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