import { reqGoodsDetail } from "@/api";

const state = {
  goodsDetailInfo: {}
}

const mutations = {
  FILLGOODSDETAILINFO(state, data) {
    state.goodsDetailInfo = data;
  }
}

const actions = {
  async getGoodsDetailInfo({ commit }, skuId) {
    const response = await reqGoodsDetail(skuId);
    if(response.code === 200) {
      commit("FILLGOODSDETAILINFO", response.data)
    }
  }
}

const getters = {
  categoryView(state) {
    return state.goodsDetailInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.goodsDetailInfo.skuInfo || {}
  },
  skuSaleAttrList(state) {
    return state.goodsDetailInfo.spuSaleAttrList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
