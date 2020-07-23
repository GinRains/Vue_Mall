import { reqUserRegister, reqUserLogin, reqQuit } from "@/api"
import { createUserTempId } from "@/utils";

const state = {
  userTempId: createUserTempId(),
  userLogin: JSON.parse(localStorage.getItem("USERINFO_KEY")) || {}
}

const mutations = {
  USERLOGINSUCCESS(state, data) {
    state.userLogin = data
  },
  CLEANUSERINFO(state) {
    state.userLogin = {}
  }
}

const actions = {
  async userRegister({ commit }, userInfo) {
    const response = await reqUserRegister(userInfo)
    if(response.code === 200) {
      return "注册成功，即将跳转登录页..."
    }else {
      return Promise.reject(new Error("用户名已被使用"))
    }
  },
  async userLogin({ commit }, userInfo) {
    const response = await reqUserLogin(userInfo)
    if(response.code === 200) {
      commit("USERLOGINSUCCESS", response.data)
      localStorage.setItem("USERINFO_KEY", JSON.stringify(response.data))
      return "登录成功，即将返回首页..."
    }else {
      return Promise.reject(new Error("登录失败，请重新登录"))
    }
  },
  async userQuit({ commit }) {
    const response = await reqQuit()
    if(response.code === 200) {
      localStorage.removeItem("USERINFO_KEY")
      commit("CLEANUSERINFO")
      return "退出成功，即将返回首页..."
    }else {
      return Promise.reject(new Error("退出失败"))
    }
  }
}

const getters = {

}

export default { state, mutations, actions, getters }
