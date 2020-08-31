import Ajax from "@/ajax/Ajax"
import mockAjax from "@/ajax/mockAjax"

export const reqCategoryList = () => Ajax.get("/product/getBaseCategoryList")
export const reqBannerList = () => mockAjax.get("/banner")
export const reqFloorList = () => mockAjax.get("/floor")
// 请求搜索页数据
export const reqSearchPageList = data => Ajax.post("/list", data)
// 请求详情页数据
export const reqDetailPageInfo = skuId => Ajax.get( `/item/${skuId}`)
// 加入商品到购物车
export const reqGoodsToCart = (skuId, skuNum) => Ajax.post(`/cart/addToCart/${skuId}/${skuNum}`)
// 获取购物车商品列表
export const reqShopCartGoods = () => Ajax.get(`/cart/cartList`)
// 切换商品选中状态
export const reqChangeGoodsChecked = (skuID, isChecked) => Ajax.get(`/cart/checkCart/${skuID}/${isChecked}`)
// 请求对商品数据进行改动
export const reqChangeGoodsNum = (skuId, skuNum) => Ajax.post(`/cart/addToCart/${skuId}/${skuNum}`)
// 请求删除商品数据
export const reqDelGoods = skuId => Ajax.delete(`/cart/deleteCart/${skuId}`)
// 用户请求注册
export const reqRegister = userInfo => Ajax.post(`/user/passport/register`, userInfo)
// 退出登录
export const reqLogout = () => Ajax.get(`/user/passport/logout`)
// 请求登录
export const reqLogin = userInfo => Ajax.post(`/user/passport/login`, userInfo)
// 获取交易页信息
export const reqTradeInfo = () => Ajax.get(`/order/auth/trade`)
// 获取我的支付信息
export const reqMyPayInfo = ({tradeInfo, tradeNo}) => Ajax.post(`/order/auth/submitOrder`, tradeInfo, {params: { tradeNo }})
// 获取订单支付信息
export const reqOrderPayInfo = orderId => Ajax.get(`/payment/weixin/createNative/${orderId}`)
// 请求查看支付状态
export const reqPayStatus = orderId => Ajax.get(`/payment/weixin/queryPayStatus/${orderId}`)
// 请求获取订单列表
export const reqGetOrderInfo = (page, limit) => Ajax.get(`/order/auth/${page}/${limit}`)
