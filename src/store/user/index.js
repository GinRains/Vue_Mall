import {reqRegister, reqLogin, reqLogout} from '@/api'
import { getUserTempId } from "@/utils/userabout";

const initToken = JSON.parse(localStorage.getItem("USER_TOKEN")) || {}
const state = {
  userTempId: getUserTempId(),
  tokenInfo: initToken
}

const mutations = {
  GAINTOKEN(state, data) {
    state.tokenInfo = data
  },
  LOGOUTSUCCESS(state) {
    state.tokenInfo = {}
  }
}

const actions = {
  async userRegister({commit}, userInfo) {
    return reqRegister(userInfo)
  },
  async userLogin({commit}, userInfo) {
    const res = await reqLogin((userInfo))
    if(res.code === 200) {
      commit("GAINTOKEN", res.data)
      localStorage.setItem("USER_TOKEN", JSON.stringify(res.data))
      return Promise.resolve("登录成功，即将返回首页")
    }else {
      return Promise.reject("登录失败")
    }
  },
  async userLogout({commit}) {
    const res = await reqLogout()
    if(res.code === 200) {
      localStorage.removeItem("USER_TOKEN")
      commit("LOGOUTSUCCESS")
      return Promise.resolve("退出成功")
    }else {
      return Promise.reject("退出失败")
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
