export default [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("@/views/Home")
  },
  {
    path: "/register",
    component: () => import("@/views/Register"),
    meta: {
      isHide: true
    }
  },
  {
    path: "/login",
    component: () => import("@/views/Login"),
    meta: {
      isHide: true
    }
  },
  {
    path: "/search/:keyword?",
    component: () => import("@/views/Search"),
    name: "Search"
  },
  {
    path: "/detail/:skuId",
    component: () => import("@/views/Detail"),
    name: "Detail"
  }
]
