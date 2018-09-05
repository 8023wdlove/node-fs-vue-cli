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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
