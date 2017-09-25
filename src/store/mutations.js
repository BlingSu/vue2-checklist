import * as types from './mutations-types'

export default {
  [types.CHOOSE_BOOK] (state, id) {
    state.curBookDetailId = id
  },
  [types.TOGGLE_BAR] (state) {
    state.bar = !state.bar
  },
  [types.FZ_SIZE_ADD] (state) {
    state.fz_size++
    if (state.fz_size >= 24) {
      state.fz_size = 24
    }
  },
  [types.FZ_SIZE_SUB] (state) {
    state.fz_size--
    if (state.fz_size <= 14) {
      state.fz_size = 14
    }
  },
  [types.SHOW_LIST_PANEL] (state) {
    state.list_panel = !state.list_panel
  }
}
