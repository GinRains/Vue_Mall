import beg from "@/ajax/Ajax"
import begMock from "@/ajax/mockAjax"

export const reqCategoryList = () => beg.get("/product/getBaseCategoryList")
export const reqBannerList = () => begMock.get("/banner")
export const reqFloorList = () => begMock.get("/floor")
export const reqGoodsList = data => beg.post("/list", data)
export const reqGoodsDetailList = skuId => beg.get(`/item/${ skuId }`)

// 添加到购物车
export const reqAddShopcart = (skuId, skuNum) => beg.post(`/cart/addToCart/${skuId}/${skuNum}`)

// 获取购物车列表
export const reqShopCart = () => beg.get("/cart/cartList")

// 更新选中状态接口
export const updateIsChecked = (skuID, isChecked) => beg.get(`/cart/checkCart/${skuID}/${isChecked}`)

// 删除商品接口
export const deleteGoods = skuId => beg.delete(`/cart/deleteCart/${skuId}`)

// 注册用户接口
export const reqRegisterUser = userInfo => beg.post("/user/passport/register", userInfo)

// 用户登录
export const reqUserLogin = userInfo => beg.post("/user/passport/login", userInfo)

// 用户退出登录
export const reqLogOut = () => beg.get("/user/passport/logout")
