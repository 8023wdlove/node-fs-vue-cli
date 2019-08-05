import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  userInfo: {},
  authrorizeType: '',
  cutOffTimeList: [],
  permissionListMenu: [],
  permissionListBtn: [],
  setPVCheck:77777
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
