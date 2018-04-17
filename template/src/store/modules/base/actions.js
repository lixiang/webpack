import * as types from './type'

export default {
  add ({ commit }, text) {
    commit(types.BASE_ADTION, text)
  }
}
