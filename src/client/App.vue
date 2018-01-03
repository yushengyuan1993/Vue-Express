<template>
  <div id="app">
    <!-- header -->
    <x-header></x-header>

    <router-view></router-view>

    <!-- footer -->
    <x-tabbar></x-tabbar>
  </div>
</template>

<script>
import xHeader from './components/header'
import xTabbar from './components/tabbar'
export default {
  name: 'app',
  components: {
    xHeader,
    xTabbar
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  // background-color: #6f17f3;
}
</style>
