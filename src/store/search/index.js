import { reqSearchPageList } from "@/api";

const state = {
  searchGoods: {}
}

const mutations = {
  UPDATESEARCHGOODS(state, data) {
    state.searchGoods = data
  }
}

const actions = {
  async gainSearchGoods({ commit }, goodsInfo) {
    const response = await reqSearchPageList(goodsInfo)
    if(response.code === 200) {
      commit("UPDATESEARCHGOODS", response.data)
    }
  }
}

const getters = {
  trademarkList(state) {
    return state.searchGoods.trademarkList || []
  },
  goodsList(state) {
    return state.searchGoods.goodsList || []
  },
  pageInfo(state) {
    return {
      currentPage: state.searchGoods.pageNo,
      pageSize: state.searchGoods.pageSize,
      total: state.searchGoods.total
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
