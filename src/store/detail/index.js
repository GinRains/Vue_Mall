import {reqDetailPageInfo} from '@/api'

const state = {
  goodsInfo: {}
}

const mutations = {
  GAINGOODSINFO(state, data) {
    state.goodsInfo = data
  }
}

const actions = {
  async gainGoodsInfo({commit}, skuId) {
    const res = await reqDetailPageInfo(skuId)
    if(res.code === 200) {
      commit("GAINGOODSINFO", res.data)
    }
  }
}

const getters = {
  navView(state) {
    return state.goodsInfo.categoryView || {}
  },
  spuSaleAttrList(state) {
    return state.goodsInfo.spuSaleAttrList || []
  },
  skuInfo(state) {
    return state.goodsInfo.skuInfo || {}
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
