<<<<<<< HEAD
<template>
	<div id="movie">
		<divider>豆瓣电影top50</divider>
		<h1>hello</h1>
		<ul class="movie-list">
            <li v-for="item in lists" :key="item.id" @click="getWarn()">
                <panel :header="item.type" :footer="item.footer" :list="item.list"></panel>
            </li>
        </ul>
	</div>
</template>

<script>
	import { Divider, Panel } from 'vux'

	export default {
		components: {
			Divider,
			Panel
		},
		data () {
			return {
				lists: []
			}
		},
		methods: {
			getWarn () {
				alert(1)
			}
		},
		mounted () {
			var _this = this;
			this.$http({
				methods: 'post',
				url: '/static/data/top50.json'
			})
			.then( (res) => {
				res.data.subjects.forEach( (item, i) => {
					let obj = {};

					obj.type = item.title;

					obj.list = [];
					let list1 = {};
					list1.src = item.images.medium;
					list1.fallbackSrc = item.images.medium;
					list1.title = item.directors[0].name;
					list1.desc = item.title;
					list1.url = "#";
					obj.list.push(list1);

					let meta = {};
					meta.source = item.directors[0].name;
					obj.list.push(meta);

					obj.footer = {};
					obj.footer.title = "查看更多";
					obj.footer.url = "#";

					_this.lists.push(obj);
				})
			})
			.catch( (err) => {
				alert(err)
			})
		}
	}
</script>

<style lang="less">
	@import '~vux/src/styles/1px.less';

	.movie-list .weui-media-box_appmsg .weui-media-box__hd {
		height: 90px;
	}
	#movie {
		margin-top: 46px;
	}
</style>
=======
<template>
	<div id="movie">
		<divider>豆瓣电影top50</divider>
		<h1>hehe</h1>
		<ul class="movie-list">
            <li v-for="item in lists" :key="item.id" @click="getWarn()">
                <panel :header="item.type" :footer="item.footer" :list="item.list"></panel>
            </li>
        </ul>
	</div>
</template>

<script>
	import { Divider, Panel } from 'vux'

	export default {
		components: {
			Divider,
			Panel
		},
		data () {
			return {
				lists: []
			}
		},
		methods: {
			getWarn () {
				alert(1)
			}
		},
		mounted () {
			var _this = this;
			this.$http({
				methods: 'post',
				url: '/static/data/top50.json'
			})
			.then( (res) => {
				res.data.subjects.forEach( (item, i) => {
					let obj = {};

					obj.type = item.title;

					obj.list = [];
					let list1 = {};
					list1.src = item.images.medium;
					list1.fallbackSrc = item.images.medium;
					list1.title = item.directors[0].name;
					list1.desc = item.title;
					list1.url = "#";
					obj.list.push(list1);

					let meta = {};
					meta.source = item.directors[0].name;
					obj.list.push(meta);

					obj.footer = {};
					obj.footer.title = "查看更多";
					obj.footer.url = "#";

					_this.lists.push(obj);
				})
			})
			.catch( (err) => {
				alert(err)
			})
		}
	}
</script>

<style lang="less">
	@import '~vux/src/styles/1px.less';

	.movie-list .weui-media-box_appmsg .weui-media-box__hd {
		height: 90px;
	}
	#movie {
		margin-top: 46px;
	}
</style>
>>>>>>> 6f1d0ea58196ae288f7510b419636f2af09db505
