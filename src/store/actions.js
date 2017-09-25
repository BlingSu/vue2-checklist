import * as types from './mutations-types'

export default {
  chooseBook ({commit}, id) {
    commit(types.CHOOSE_BOOK, id)
  },
  toggleBar ({commit}) {
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
  },
  showFontPanel ({commit}) {
    commit(types.SHOW_FONT_PANEL)
  },
  curChapter ({commit}, num) {
    commit(types.CUR_CHAPTER, num)
  },
  switchNight ({commit}) {
    commit(types.SWITCH_NIGHT)
  },
  prevChapter ({commit}) {
    commit(types.PREV_CHAPTER)
  },
  nextChapter ({commit, maxChapter}) {
    commit(types.NEXT_CHAPTER, maxChapter)
  },
  showBookDetail ({commit}, obj) {
    commit(types.SHOW_BOOK_DETAIL, obj)
  }
}
