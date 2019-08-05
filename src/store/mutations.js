/* commit Mutation to change state */
import * as types from './mutation-types';

export default {
  [types.GET_CUT_OFF_TIME_LIST] (state, arr) {
    state.cutOffTimeList = arr;
  },
  setUserInfo (state, payload) {
    state.userInfo = payload;
  },
  setPVCheck (state,payload) {
    console.log(payload,'7777')
    state.setPVCheck = payload;
  },
  setAuthrorize (state, payload) {
    state.authrorizeType = payload;
  }
};
