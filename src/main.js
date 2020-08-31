import Vue from "vue"
import App from "./App"
import router from "./router"
import store from "./store"
import * as API from './api'
import "./mock/mockServe"
import "@/validate"

import TypeNav from "./components/TypeNav"
import SlideShow from "./components/SlideShow"
import { MessageBox, Message, Pagination } from 'element-ui'

Vue.prototype.$message = Message; // 提示消息
Vue.prototype.$msgbox = MessageBox; // 消息盒子
Vue.prototype.$alert = MessageBox.alert; // 弹出框
Vue.use(Pagination)

Vue.component("TypeNav", TypeNav)
Vue.component("SlideShow", SlideShow)

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  render: h => h(App),
  router,
  store
}).$mount("#app")
