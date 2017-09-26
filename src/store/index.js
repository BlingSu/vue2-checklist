import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  curBookDetailId: 1,
  bar: false,
  bg_color: 1,
  list_panel: false,
  font_icon: false,
  font_panel: false,
  bg_night: false,
  fz_size: 18,
  curChapter: 1,
  windowHeight: '',
  curBookContentId: 1
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
