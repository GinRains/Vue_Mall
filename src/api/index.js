import beg from "@/ajax/Ajax"
import begMock from "@/ajax/mockAjax"

export const reqCategoryList = () => beg.get("/product/getBaseCategoryList")
export const reqBannerList = () => begMock.get("/banner")
export const reqFloorList = () => begMock.get("/floor")
export const reqGoodsList = data => beg.post("/list", data)

// 商品详情接口
export const reqGoodsDetail = skuId => beg.get(`/item/${ skuId }`)

// 添加商品到购物车及修改数据
export const reqAddGoodsToShopCart = ({skuId, skuNum}) => beg.post(`/cart/addToCart/${ skuId }/${ skuNum }`)

// 跳转购物车
export const reqShopCartInfo = () => beg.get("/cart/cartList")

// 切换商品选中状态
export const reqToggleGoodsIsChecked = ({skuId, isChecked}) => beg.get(`/cart/checkCart/${skuId}/${isChecked}`)

// 删除购物车商品
export const reqDeleteGoods = skuId => beg.delete(`/cart/deleteCart/${skuId}`)

// 用户注册接口
export const reqUserRegister = userInfo => beg.post("/user/passport/register", userInfo)

// 用户登录接口
export const reqUserLogin = userInfo => beg.post("/user/passport/login", userInfo)

// 用户退出登录接口
export const reqQuit = () => beg.get("/user/passport/logout")
