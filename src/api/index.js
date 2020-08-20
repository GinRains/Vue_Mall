import Ajax from "@/ajax/Ajax"
import mockAjax from "@/ajax/mockAjax"

export const reqCategoryList = () => Ajax.get("/product/getBaseCategoryList")
export const reqBannerList = () => mockAjax.get("/banner")
export const reqFloorList = () => mockAjax.get("/floor")
// 请求搜索页数据
export const reqSearchPageList = data => Ajax.post("/list", data)
// 请求详情页数据
export const reqDetailPageInfo = skuId => Ajax.get( `/item/${skuId}`)
