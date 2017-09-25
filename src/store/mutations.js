import * as types from './mutations-types'

export default {
  [types.CHOOSE_BOOK] (state, id) {
    state.curBookDetailId = id
  },
  [types.TOGGLE_BAR] (state) {
    state.bar = !state.bar
  }
}
