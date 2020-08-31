import { reqShopCartGoods, reqChangeGoodsChecked, reqChangeGoodsNum, reqDelGoods } from "@/api";

const state = {
  shopCartGoodsList: []
}

const mutations = {
  GAINSHOPCARTGOODSLIST(state, data) {
    state.shopCartGoodsList = data
  }
}

const actions = {
  async gainShopCartGoods({ commit }) {
    const response = await reqShopCartGoods()
    if(response.code === 200) {
      commit("GAINSHOPCARTGOODSLIST", response.data)
    }
  },
  // 对商品选中状态进行改动
  changeGoodsChecked({commit}, {skuId, isChecked}) {
    return reqChangeGoodsChecked(skuId, isChecked)
  },
  // 对商品数量进行改动
  changeGoodsNum({commit}, {skuId, skuNum}) {
    return reqChangeGoodsNum(skuId, skuNum)
  },
  delGoods({commit}, skuId) {
    return reqDelGoods(skuId)
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
