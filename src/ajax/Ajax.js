import axios from "axios"
import Nprogress from "nprogress"
import "nprogress/nprogress.css"
import store from "@/store"
import userabout from "@/store/userabout";

const service = axios.create({
  baseURL: "/api",
  timeout: 20000
})

service.interceptors.request.use(
  config => {
    Nprogress.start()
    const userTempId = store.state.userabout.userTempId;
    if(userTempId) {
      config.headers.userTempId = userTempId;
    }

    const token = store.state.userabout.userInfo.token;
    if(token) {
      config.headers.token = token;
    }

    return config;
  }
)

service.interceptors.response.use(
  response => {
    Nprogress.done()
    return response.data;
  },
  error => {
    Nprogress.done()
    alert(`请求错误：${error.message || "未知错误"}`)
  }
)

export default service
