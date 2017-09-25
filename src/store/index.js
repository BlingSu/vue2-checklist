import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
// import local from './local'

Vue.use(Vuex)

const state = {
  curBookDetailId: 1,
  bar: false,
  bg_color: 1
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
