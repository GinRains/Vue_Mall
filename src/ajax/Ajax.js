import axios from "axios"
import Nprogress from "nprogress"
import "nprogress/nprogress.css"

const service = axios.create({
  baseURL: "/api",
  timeout: 20000
})

service.interceptors.request.use(
  config => {
    Nprogress.start()
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
