import { reqGoodsDetailList } from "@/api";

const state = {
  goodsDetailList: {}
}

const mutations = {
  GETGOODSDETAILLIST(state, data) {
    state.goodsDetailList = data
  }
}

const actions = {
  async getGoodsDetailList({ commit }, skuId) {
    const response = await reqGoodsDetailList(skuId)

    if(response.code === 200) {
      commit("GETGOODSDETAILLIST", response.data)
    }
  },
}

const getters = {
  categoryView(state) {
    return state.goodsDetailList.categoryView || {}
  },
  skuInfo(state) {
    return state.goodsDetailList.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.goodsDetailList.spuSaleAttrList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
