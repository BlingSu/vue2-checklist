import * as types from './mutations-types'

export default {
  chooseBook ({commit}, id) {
    commit(types.CHOOSE_BOOK, id)
  }
}
