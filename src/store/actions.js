import * as types from './mutations-types'

export default {
  chooseBook ({commit}, id) {
    commit(types.CHOOSE_BOOK, id)
  },
  toggerBar ({commit}) {
    commit(types.TOGGLE_BAR)
  }
}
