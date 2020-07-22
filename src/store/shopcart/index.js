import { reqAddShopcart, reqShopCart, updateIsChecked, deleteGoods } from "@/api";

const state = {
  cartList: []
}

const mutations = {
  UPDATECARTLIST(state, data) {
    state.cartList = data;
  }
}

const actions = {
  async getAddShopCart({commit}, { skuId, skuNum }) {
    const response = await reqAddShopcart(skuId, skuNum)
    if(response.code === 200) {
      return "加入购物车成功！"
    }else {
      throw new Error("加入购物车失败！")
    }
  },
  async getCartList({commit}) {
    const response = await reqShopCart()
    if(response.code === 200) {
      commit("UPDATECARTLIST", response.data)
    }
  },
  async changeIsChecked({commit}, { skuId, isChecked }) {
    const response = await updateIsChecked(skuId, isChecked)
    if(response.code === 200) {
      return "状态修改成功"
    }else {
      return Promise.reject(new Error("修改状态失败"))
    }
  },
  changeAllIsChecked({state, dispatch}, isChecked) {
    const promises = []
    state.cartList.forEach(cart => {
      if(cart.isChecked === isChecked) return
      const promise = dispatch("changeIsChecked", {skuId: cart.skuId, isChecked: isChecked})
      promises.push(promise)
    })

    return Promise.all(promises)
  },
  async deleteGoodsInfo({commit}, skuId) {
    const response = await deleteGoods(skuId)
    if(response.code === 200) {
      return "商品删除成功"
    }else {
      return Promise.reject(new Error("商品删除失败"))
    }
  },
  deleteAllGoodsInfo({state, dispatch}) {
    const promises = []
    state.cartList.forEach(cart => {
      if(cart.isChecked) {
        let promise = dispatch("deleteGoodsInfo", cart.skuId)
        promises.push(promise)
      }
    })
    return Promise.all(promises)
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
