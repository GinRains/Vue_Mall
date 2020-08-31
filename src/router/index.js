import Vue from "vue"
import VueRouter from "vue-router"

import routes from "./routes"
import store from '@/store'

Vue.use(VueRouter)

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location, onResolved, onRejected) {
  if(onResolved === undefined && onRejected === undefined) {
    originPush.call(this, location).catch(() => {})
  }else {
    originPush.call(this, location, onResolved, onRejected)
  }
}
VueRouter.prototype.replace = function(location, onResolved, onRejected) {
  if(onResolved === undefined && onRejected === undefined) {
    originReplace.call(this, location).catch(() => {})
  }else {
    originReplace.call(this, location, onResolved, onRejected)
  }
}

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const targetPath = to.path
  if(targetPath.startsWith('/center') || targetPath.startsWith('/pay') || targetPath.startsWith('/trade') || targetPath.startsWith('/shopcart')) {
    if(store.state.user.tokenInfo.name) {
      next()
    }else next('/login?redirect=' + targetPath) // 再登录的路径后面添加上之前想要去的路径
  }else {
    next()
  }
})

export default router
