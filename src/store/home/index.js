import { reqCategoryList, reqBannerList, reqFloorList } from "@/api";

const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}

const mutations = {
  GETCATEGORYLIST(state, data) {
    state.categoryList = data
  },
  GETBANNERLIST(state, data) {
    state.bannerList = data
  },
  GETFLOORLIST(state, data) {
    state.floorList = data
  }
}

const actions = {
  async getCategoryList({ commit }) {
    const response = await reqCategoryList()

    if(response.code === 200) {
      commit("GETCATEGORYLIST", response.data)
    }
  },
  async getBannerList({ commit }) {
    const response = await reqBannerList()

    if(response.code === 200) {
      commit("GETBANNERLIST", response.data)
    }
  },
  async getFloorList({ commit }) {
    const response = await reqFloorList()

    if(response.code === 200) {
      commit("GETFLOORLIST", response.data)
    }
  },
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
