import Home from "@/views/Home"
import Search from "@/views/Search"
import Login from "@/views/Login"
import Register from "@/views/Register"
import Detail from "@/views/Detail"

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
  }
]

export default routes
