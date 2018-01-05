// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)
Vue.$http.defaults.baseURL = 'api/'

import FastClick from 'fastclick'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 配置路由
import Routers from './router/router'
const RouterConfig = {
  mode: 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);


FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app-box')
