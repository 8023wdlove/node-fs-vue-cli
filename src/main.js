// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import routes from '@/router/index.js'
import ElementUI from 'element-ui'

import '@assets/styles/default.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
let router = routes.routes

Vue.config.productionTip = false
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding, vnode) {
    // 聚焦元素
    el.style.backgroundColor='green'; 
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
