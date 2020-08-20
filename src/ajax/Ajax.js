import axios from "axios"
import Nprogress from "nprogress"
import "nprogress/nprogress.css"

const TXD = axios.create({
  baseURL: "/api",
  timeout: 200000
})

TXD.interceptors.request.use(config => {
  Nprogress.start()

  return config;
})

TXD.interceptors.response.use(response => {
  Nprogress.done()

  return response.data;
}, error => {
  Nprogress.done()
  alert(`请求错误：${error.message || "未知错误"}`)

  return new Promise(() => {})
})

export default TXD
