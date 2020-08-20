import axios from "axios"
import Nprogress from "nprogress"
import "nprogress/nprogress.css"

const mockTXD = axios.create({
  baseURL: "/mock",
  timeout: 200000
})

mockTXD.interceptors.request.use(config => {
  Nprogress.start()

  return config;
})

mockTXD.interceptors.response.use(response => {
  Nprogress.done()

  return response.data;
}, error => {
  Nprogress.done()
  alert(`请求错误：${error.message || "未知错误"}`)

  return new Promise(() => {})
})

export default mockTXD
