import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let routers = {
  organ: {
    role: '角色资料',
    store: '仓库资料',
    itemInfo: '商品资料'
  },
  storeInfo: {
    price: '价格信息',
    product: '产地信息',
    quanlity: '质量信息'
  }
}
let routes = []
routes.push({
   path: '/', redirect: '/organ/role'
});
for (let key in routers) {
  if (typeof routers[key] !== 'string') {
    for (let item in routers[key]) {
      routes.push({
        name: routers[key][item],
        path: '/' + key + '/' + item,
        component: resolve => require(['@page/' + key + '/' + item + '/' + 'list.vue'], resolve)
      })
      routes.push({
        name: routers[key][item] + '编辑',
        path: '/' + key + '/' + item + '/' + 'info/:id',
        component: resolve => require(['@page/' + key + '/' + item + '/' + 'info.vue'], resolve)
      })
    }
  } else {
    routes.push({
      name: routers[key],
      path: '/' + key,
      component: resolve => require(['@page/' + key + '/' + 'list.vue'], resolve)
    })
    routes.push({
      name: routers[key] + '编辑',
      path: '/' + key + '/' + 'info/:id',
      component: resolve => require(['@page/' + key + '/' + 'info.vue'], resolve)
    })
  }
}

export default {
  routes: new Router({
    routes
  }),
  routers
}
