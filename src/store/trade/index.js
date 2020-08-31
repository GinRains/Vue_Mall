import {reqTradeInfo} from '@/api'

const state = {
  tradeInfo: {}
}

const mutations = {
  GAINTRADEINFO(state, data) {
    state.tradeInfo = data
  }
}

const actions = {
  async getTradeInfo({commit}) {
    const res = await reqTradeInfo()
    if(res.code === 200) {
      commit("GAINTRADEINFO", res.data)
    }
  }
}

const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}
