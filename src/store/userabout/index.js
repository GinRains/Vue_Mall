import { reqRegisterUser, reqUserLogin, reqLogOut } from "@/api";
import { createUserTempId } from "@/utils/user"

const state = {
  userTempId: createUserTempId(),
  userInfo: JSON.parse(localStorage.getItem("USERINFO_KEY")) || {}
}

const mutations = {
  UPDATEUSERINFO(state, data) {
    state.userInfo = data
  },
  DELETEUSERINFO(state) {
    state.userInfo = {}
  }
}

const actions = {
  async userRegister({ commit }, userInfo) {
    const response = await reqRegisterUser(userInfo)
    if(response.code === 200) {
      return "用户注册成功"
    }else {
      return Promise.reject(new Error("用户注册失败"))
    }
  },
  async userLogin({ commit }, userInfo) {
    const response = await reqUserLogin(userInfo)
    if(response.code === 200) {
      commit("UPDATEUSERINFO", response.data)
      localStorage.setItem("USERINFO_KEY", JSON.stringify(response.data))
    }else {
      return Promise.reject(new Error("登录失败"))
    }
  },
  async userLogOut({ commit }) {
    const response = await reqLogOut()
    if(response.code === 200) {
      localStorage.removeItem("USERINFO_KEY")
      commit("DELETEUSERINFO")
    }else {
      return Promise.reject(new Error("退出登录失败"))
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
