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
    component: AddCart
  },
  {
    path: "/shopcart",
    component: ShopCart
  },
  {
    path: "/trade",
    component: Trade
  },
  {
    path: "/pay",
    component: Pay
  },
  {
    path: "/paysuccess",
    component: PaySuccess
  }
]

export default routes
