import { reqCategoryList, reqBannerList, reqFloorList } from "@/api";

const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}

const mutations = {
  UPDATECATEGORYLIST(state, data) {
    state.categoryList = data;
  },
  UPDATEBANNERLIST(state, data) {
    state.bannerList = data;
  },
  UPDATEFLOORLIST(state, data) {
    state.floorList = data;
  }
}

const actions = {
  async gainCategoryList({ commit }) {
    const response = await reqCategoryList()
    if(response.code === 200) {
      commit("UPDATECATEGORYLIST", response.data)
    }
  },
  async gainBannerList({ commit }) {
    const response = await reqBannerList()
    if(response.code === 200) {
      commit("UPDATEBANNERLIST", response.data)
    }
  },
  async gainFloorList({ commit }) {
    const response = await reqFloorList()
    if(response.code === 200) {
      commit("UPDATEFLOORLIST", response.data)
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
