import Home from "@/views/Home"
import Search from "@/views/Search"
import Login from "@/views/Login"
import Register from "@/views/Register"
import Detail from "@/views/Detail"
import AddCart from "@/views/AddCart"
import ShopCart from "@/views/ShopCart"
import Trade from "@/views/Trade"
import Pay from "@/views/Pay"
import PaySuccess from "@/views/PaySuccess"
const Center = () => import("@/views/Center")
const MyOrder = () => import ("@/views/Center/MyOrder")
const GroupOrder = () => import ("@/views/Center/GroupOrder")
import store from "@/store"

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/search/:keyword?",
    component: Search,
    name: "Search",
    props: true
  },
  {
    path: "/login",
    component: Login,
    meta: {
      isHide: true
    },
    // 路由独享守卫
    beforeEnter(to, from, next) {
      // 路由独享守卫中的to指的就是当前路由
      if(!store.state.userabout.userInfo.name) {
        next()
      }else {
        next("/")
      }
    }
  },
  {
    path: "/register",
    component: Register,
    meta: {
      isHide: true
    }
  },
  {
    path: "/detail/:goodsId",
    component: Detail,
    name: "Detail"
  },
  {
    path: "/addcart",
    component: AddCart,
    beforeEnter(to, from, next) {
      const skuNum = to.query,
        skuInfo = sessionStorage.getItem("SKUINFO_KEY")
      if(skuNum && skuInfo) {
        next()
      }else {
        next("/")
      }
    }
  },
  {
    path: "/shopcart",
    component: ShopCart,
    beforeEnter(to, from, next) {
      if(store.state.userabout.userInfo.name) {
        next()
      }else {
        next("/")
      }
    }
  },
  {
    path: "/trade",
    component: Trade,
    beforeEnter(to, from, next) {
      const originPath = from.path
      if(originPath === "/shopcart") {
        next()
      }else {
        next("/")
      }
    }
  },
  {
    path: "/pay",
    component: Pay,
    beforeEnter(to, from, next) {
      if(from.path === "/trade") {
        next()
      }else {
        next("/")
      }
    }
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    beforeEnter(to, from, next) {
      if(from.path === "/pay") {
        console.log(from.path)
        next()
      }else {
        next("/")
      }
    }
  },
  {
    path: "/center",
    component: Center,
    children: [
      {
        path: "",
        redirect: "myorder"
      },
      {
        path: "myorder",
        component: MyOrder
      },
      {
        path: "grouporder",
        component: GroupOrder
      }
    ]
  }
]

export default routes
