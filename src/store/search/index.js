import { reqGoodsList } from "@/api";

const state = {
  goodsListInfo: {}
}

const mutations = {
  GETGOODSLIST(state, data) {
    state.goodsListInfo = data
  }
}

const actions = {
  async getGoodsList({ commit }, data) {
    const response = await reqGoodsList(data)

    if(response.code === 200) {
      commit("GETGOODSLIST", response.data)
    }
  },
}

const getters = {
  attrsList(state) {
    return state.goodsListInfo.attrsList || [];
  },
  goodsList(state) {
    return state.goodsListInfo.goodsList || [];
  },
  trademarkList(state) {
    return state.goodsListInfo.trademarkList || [];
  },
}

export default {
  state,
  mutations,
  actions,
  getters
}
