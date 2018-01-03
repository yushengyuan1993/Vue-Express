<template>
    <div class="header">
		<x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">菜单</x-header>
		<div v-transfer-dom>
			<actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
		</div>
    </div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom } from 'vux'

export default {
	name:'xheader',
	directives: {
		TransferDom
	},
	components: {
		XHeader,
		Actionsheet
	},
	data () {
		return {
			menus: {
				menu1: '分享',
				menu2: '评论'
			},
			showMenus: false
		}
	}
}
</script>
<style scoped>
	.header .vux-header {
		width: 100%;
		position: fixed;
		left: 0px;
		top: 0px;
		z-index: 100;
	}
</style>

