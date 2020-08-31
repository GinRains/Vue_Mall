import store from "@/store";

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
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.tokenInfo.name) {
        next('/')
      }else next()
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
  },
  {
    path: "/addtocart/:skuId/:skuNum",
    component: () => import("@/views/AddCartSuccess"),
    name: "addToCart",
    beforeEnter: (to, from, next) => {
      const {skuNum, skuId} = to.params
      const skuInfo = sessionStorage.getItem("SKU_INFO_KEY")
      if(skuNum && skuId && skuInfo) {
        next()
      } else next('/')
    }
  },
  {
    path: "/shopcart",
    component: () => import("@/views/ShopCart")
  },
  {
    path: "/trade",
    component: () => import("@/views/Trade"),
    beforeEnter: (to, from, next) => {
      if(from.path === '/shopcart') {
        next()
      }else next('/')
    }
  },
  {
    path: "/pay",
    component: () => import("@/views/Pay")
  },
  {
    path: "/paysuccess",
    component: () => import("@/views/PaySuccess"),
    beforeEnter: (to, from, next) => {
      if(from.path === '/pay') {
        next()
      }else next('/')
    }
  },
  {
    path: "/center",
    component: () => import("@/views/Center"),
    children: [
      {
        path: '',
        component: () => import ("@/views/Center/MyOrder")
      },
      {
        path: 'grouporder',
        component: () => import("@/views/Center/GroupOrder")
      }
    ]
  }
]
