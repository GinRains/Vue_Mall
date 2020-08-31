import { reqMyPayInfo, reqOrderPayInfo } from "@/api";

const state = {
  orderId: {},
  orderPayInfo: {}
}

const mutations = {
  GAINMYPAYINFO(state, data) {
    state.orderId = data
  },
  GAINORDERPAYINFO(state, data) {
    state.orderPayInfo = data
  }
}

const actions = {
  async getMyPayInfo({commit}, userTrade) {
    const res = await reqMyPayInfo(userTrade)
    if(res.code === 200) {
      commit("GAINMYPAYINFO", res.data)
      return Promise.resolve("订单提交成功！")
    }else {
      return Promise.reject("订单提交失败")
    }
  },
  async getOrderPayInfo({commit}, orderId) {
    const res = await reqOrderPayInfo(orderId)
    if(res.code === 200) {
      commit("GAINORDERPAYINFO", res.data)
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
