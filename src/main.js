// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
// import router from './router'
import routes from '@/router/index.js'
var Parse = require('parse')
Parse.initialize('b32h7SrhRXGiD3Ubvt2KQHtiR3VPrPgYWIxO3l5Z')
Parse.serverURL = 'https://gesoo.herokuapp.com/parse'
console.log(Parse._getInstallationId().then((res)=>{
  console.log(res,888)
}),Parse,77888)
import ElementUI from 'element-ui'

import '@assets/styles/default.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
let router = routes.routes
Vue.prototype.$axios = axios;
Vue.prototype.$Parse = Parse;

Vue.config.productionTip = false
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding, vnode) {
    // 聚焦元素
    console.log(el, 888);
    el.focus();
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
