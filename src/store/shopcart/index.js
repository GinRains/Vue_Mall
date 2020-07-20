import { reqAddShopcart } from "@/api";

const state = {
}

const mutations = {
}

const actions = {
  async getAddShopcart({commit}, { skuId, skuNum }) {
    const response = await reqAddShopcart(skuId, skuNum)
    if(response.code === 200) {
      return "加入购物车成功！"
    }else {
      throw new Error("加入购物车失败！")
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
