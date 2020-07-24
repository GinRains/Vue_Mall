import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import router from "./router"
import store from "./store"
import "./mock/mockServe"
import * as API from "@/api"

import { MessageBox, Message } from "element-ui"

import TypeNav from "./components/TypeNav"
import SlideShow from "./components/SlideShow"

Vue.config.productionTip = false
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message

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

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
