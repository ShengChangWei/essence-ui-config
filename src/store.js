import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    eMapConfig: 'tdt',
    initExtent: {},
    googleInitExtent: {}
  },
  mutations: {
    getMapConfig(state, info) {
      state.eMapConfig = info.baseMapType;
      state.initExtent = info.initExtent
      state.googleInitExtent = info.googleInitExtent
    }
  },
  actions: {

  }
})
