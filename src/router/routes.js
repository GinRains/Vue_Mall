import Home from "@/views/Home"
import Search from "@/views/Search"
import Login from "@/views/Login"
import Register from "@/views/Register"

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    meta: {
      isShow: true
    }
  },
  {
    path: "/search/:keyword?",
    component: Search,
    name: "Search",
    props: true,
    meta: {
      isShow: true
    }
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  }
]

export default routes
