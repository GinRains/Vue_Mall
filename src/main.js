import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import router from "./router"
import store from "./store"
import "./mock/mockServe"

import TypeNav from "./components/TypeNav"
import SlideShow from "./components/SlideShow"
import Pagination from "./components/Pagination"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

Vue.use(ElementUI)

Vue.config.productionTip = false

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, onResolved, onRejected) {
  if(onResolved === undefined && onRejected === undefined) {
    originPush.call(this, location).catch(() => {})
  }else {
    originPush.call(this, location, onResolved, onRejected)
  }
}

VueRouter.prototype.replace = function (location, onResolved, onRejected) {
  if(onResolved === undefined && onRejected === undefined) {
    originReplace.call(this, location).catch(() => {})
  }else {
    originReplace.call(this, location, onResolved, onRejected)
  }
}

Vue.component("TypeNav", TypeNav)
Vue.component("SlideShow", SlideShow)
Vue.component("Pagination", Pagination)

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
