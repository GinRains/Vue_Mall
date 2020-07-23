import { reqAddGoodsToShopCart, reqShopCartInfo, reqToggleGoodsIsChecked, reqDeleteGoods } from "@/api"

const state = {
  shopCartInfo: []
}

const mutations = {
  UPDATESHOPCARTINFO(state, data) {
    state.shopCartInfo = data;
  }
}

const actions = {
  async addToCart({ commit }, goodsInfo) {
    const response = await reqAddGoodsToShopCart(goodsInfo)
    if(response.code === 200) {
      return "商品数据修改成功"
    }else {
      return Promise.reject(new Error("商品数据修改失败"))
    }
  },
  async getShopCartInfo({ commit }) {
    const response = await reqShopCartInfo()
    if(response.code === 200) {
      commit("UPDATESHOPCARTINFO", response.data)
    }
  },
  async toggleGoodsIsChecked({ commit }, goodsInfo) {
    const response = await reqToggleGoodsIsChecked(goodsInfo)
    if(response.code === 200) {
      return "状态修改成功"
    }else {
      return Promise.reject(new Error("状态修改失败"))
    }
  },
  toggleAllGoodsIsChecked({ state, dispatch }, isChecked) {
    const promises = []
    state.shopCartInfo.forEach(goodsItem => {
      if(!(goodsItem.isChecked === isChecked)) {
        const promise = dispatch("toggleGoodsIsChecked", { skuId: goodsItem.skuId, isChecked })
        promises.push(promise)
      }
    })

    return Promise.all(promises)
  },
  async dedeteGoods({ commit }, skuId) {
    const response = await reqDeleteGoods(skuId)
    if(response.code === 200) {
      return "删除商品成功"
    }else {
      return Promise.reject(new Error("删除商品失败"))
    }
  },
  async deleteAllIsCheckedGoods({ state, dispatch }) {
    const promises = []
    state.shopCartInfo.forEach(goodsItem => {
      if(goodsItem.isChecked) {
        const promise = dispatch("dedeteGoods", goodsItem.skuId)
        promises.push(promise)
      }
    })

    return Promise.all(promises)
  }
}

const getters = {

}

export default { state, mutations, actions, getters }
