import axios from "axios"
import Nprogress from "nprogress"
import "nprogress/nprogress.css"

const mockService = axios.create({
  baseURL: "/mock",
  timeout: 20000
})

mockService.interceptors.request.use(
  config => {
    Nprogress.start()
    return config;
  }
)

mockService.interceptors.response.use(
  response => {
    Nprogress.done()
    return response.data;
  },
  error => {
    Nprogress.done()
    alert(`请求错误：${error.message || "未知错误"}`)
  }
)

export default mockService
