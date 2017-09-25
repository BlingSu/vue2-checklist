import * as types from './mutations-types'

export default {
  chooseBook ({commit}, id) {
    commit(types.CHOOSE_BOOK, id)
  },
  toggerBar ({commit}) {
    commit(types.TOGGLE_BAR)
  },
  fzSizeAdd ({commit}) {
    commit(types.FZ_SIZE_ADD)
  },
  fzSizeSub ({commit}) {
    commit(types.FZ_SIZE_SUB)
  },
  showListPanel ({commit}) {
    commit(types.SHOW_LIST_PANEL)
  }
}
