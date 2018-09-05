'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
var routers = {
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
};
var routes = [];

var _loop = function _loop(key) {
  if (typeof routers[key] !== 'string') {
    var _loop2 = function _loop2(item) {
      routes.push({
        name: routers[key][item],
        path: '/' + key + '/' + item,
        component: function component(resolve) {
          return require(['@page/' + key + '/' + item + '/' + 'list.vue'], resolve);
        }
      });
      routes.push({
        name: routers[key][item] + '编辑',
        path: '/' + key + '/' + item + '/' + 'info/:id',
        component: function component(resolve) {
          return require(['@page/' + key + '/' + item + '/' + 'info.vue'], resolve);
        }
      });
    };

    for (var item in routers[key]) {
      _loop2(item);
    }
  } else {
    routes.push({
      name: routers[key],
      path: '/' + key,
      component: function component(resolve) {
        return require(['@page/' + key + '/' + 'list.vue'], resolve);
      }
    });
    routes.push({
      name: routers[key] + '编辑',
      path: '/' + key + '/' + 'info/:id',
      component: function component(resolve) {
        return require(['@page/' + key + '/' + 'info.vue'], resolve);
      }
    });
  }
};

for (var key in routers) {
  _loop(key);
}

exports.default = {
  routes: new _vueRouter2.default({
    routes: routes
  }),
  routers: routers
};
