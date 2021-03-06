import Vue from 'vue'
import App from './App'
import 'babel-polyfill'

import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)
Vue.prototype.$http.defaults.baseURL ="http://111.231.78.140:3000"

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
