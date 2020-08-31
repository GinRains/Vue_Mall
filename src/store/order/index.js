import { reqGetOrderInfo } from "@/api";

const state = {
  orderInfo: {}
}

const mutations = {
  GAINORDERINFO(state, data) {
    state.orderInfo = data
  }
}

const actions = {
  async getOrderInfo({commit}, {page, limit}) {
    const res = await reqGetOrderInfo(page, limit)
    if(res.code === 200) {
      commit("GAINORDERINFO", res.data)
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
