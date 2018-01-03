<template>
    <div>
		<tabbar>
			<tabbar-item link="/movie" selected>
				<i slot="icon" class="icon iconfont ysy-movie"></i>
				<span slot="label">电影</span>
			</tabbar-item>
			<tabbar-item link="/music">
				<i slot="icon" class="icon iconfont ysy-music"></i>
				<span slot="label">音乐</span>
			</tabbar-item>
			<tabbar-item link="/book">
				<i slot="icon" class="icon iconfont ysy-book"></i>
				<span slot="label">书籍</span>
			</tabbar-item>
			<tabbar-item link="/mine">
				<i slot="icon" class="icon iconfont ysy-me"></i>
				<span slot="label">个人</span>
			</tabbar-item>
      </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
// 加载图标icon
import icon from '../assets/icon/iconfont.css'

export default {
    data () {
        return {
            message: 'yvshare'
        }
    },
    methods: {
        ok () {
            alert(1)
        }
    },
    components: {
        Tabbar,
        TabbarItem
  }
}
</script>
<style scoped>
	div {
		position: fixed;
	}
</style>
