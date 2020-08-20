import Vue from "vue"
import App from "./App"
import router from "./router"
import store from "./store"
import "./mock/mockServe"

import TypeNav from "./components/TypeNav"
import SlideShow from "./components/SlideShow"
import Pagination from './components/Pagination'

Vue.component("TypeNav", TypeNav)
Vue.component("SlideShow", SlideShow)
Vue.component("Pagination", Pagination)

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store
}).$mount("#app")
