import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
import store from "@/store"

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  /**
   * to:代表路由对象，目标（想去哪）
   * from: 代表路由对象，起始（从哪来）
   * next：是一个函数，选择放行或者不放行的意思还可以去重定向到一个新的地方
   * next()就是放行
   * next(false)不放行
   * next(路径)重定向
   */

  const targetPath = to.path;
  if(targetPath.startsWith("/pay") || targetPath.startsWith("pay") || targetPath.startsWith("/center")) {
    if(store.state.userabout.userInfo.name) {
      next()
    }else {
      next(`/login?redirect=${targetPath}`)
    }
  }else {
    next()
  }
})

export default router
