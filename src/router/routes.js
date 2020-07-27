import Home from "@/views/Home"
import Search from "@/views/Search"
import Login from "@/views/Login"
import Register from "@/views/Register"
import Detail from "@/views/Detail"
import AddCart from "@/views/AddCartSuccess"
import ShopCart from "@/views/ShopCart"

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
    path: "/detail/:skuId",
    component: Detail
  },
  {
    path: "/addcart/:skuNum",
    component: AddCart
  },
  {
    path: "/shopcart",
    component: ShopCart
  },
  {
    path: '/communication',
    component: () => import('@/views/Communication/Communication'),
    children: [
      {
        path: 'event',
        component: () => import('@/views/Communication/EventTest/EventTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'model',
        component: () => import('@/views/Communication/ModelTest/ModelTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'sync',
        component: () => import('@/views/Communication/SyncTest/SyncTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'attrs-listeners',
        component: () => import('@/views/Communication/AttrsListenersTest/AttrsListenersTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'children-parent',
        component: () => import('@/views/Communication/ChildrenParentTest/ChildrenParentTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'scope-slot',
        component: () => import('@/views/Communication/ScopeSlotTest/ScopeSlotTest'),
        meta: {
          isHideFooter: true
        },
      }
    ],
  }
]

export default routes
