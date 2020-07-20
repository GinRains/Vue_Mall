import beg from "@/ajax/Ajax"
import begMock from "@/ajax/mockAjax"

export const reqCategoryList = () => beg.get("/product/getBaseCategoryList")
export const reqBannerList = () => begMock.get("/banner")
export const reqFloorList = () => begMock.get("/floor")
export const reqGoodsList = data => beg.post("/list", data)
export const reqGoodsDetailList = skuId => beg.get(`/item/${ skuId }`)

// 添加到购物车
export const reqAddShopcart = (skuId, skuNum) => beg.post(`/cart/addToCart/${skuId}/${skuNum}`)
