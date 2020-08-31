import Vue from "vue"
import Vuex from "vuex"

import home from "./home"
import search from "./search"
import detail from './detail'
import shopcart from './shopcart'
import user from './user'
import trade from './trade'
import pay from './pay'
import order from './order'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
    trade,
    pay,
    order
  }
})
