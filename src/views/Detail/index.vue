<template>
  <div class="wrap">
    <TypeNav></TypeNav>
    <div class="con-wrap">
      <div class="brand">
        <a href="javascript:;">{{categoryView.category1Name}}</a>
        <a href="javascript:;">{{categoryView.category2Name}}</a>
        <a href="javascript:;">{{categoryView.category3Name}}</a>
      </div>
      <div class="con-main">
        <div class="preview-wrap">
          <!--放大镜-->
          <Zoom></Zoom>
          <!--缩略图-->
          <Thumbnail></Thumbnail>
        </div>
        <div class="info-wrap">
          <div class="info-content">
            <h3 class="info-name">{{skuInfo.skuName}}</h3>
            <p class="news">{{skuInfo.skuDesc}}</p>
            <div class="price-area">
              <div class="price">
                <span class="title">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
                <span class="price-detail">
                  <i>￥</i>
                  <em>{{skuInfo.price}}</em>
                  <span>降价通知</span>
                </span>
                <span class="comment">累计评价 <i>1314520</i></span>
              </div>
              <div class="promotion">
                <span class="title">促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                <p><span>加价购</span>满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</p>
              </div>
            </div>
            <div class="support">
              <span class="title">支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</span>
              <p>以旧换新，闲置手机回收 4G套餐超值抢 礼品购</p>
            </div>
            <div class="express">
              <span class="title">配&nbsp;&nbsp;送&nbsp;&nbsp;至</span>
              <p>广东省 深圳市 宝安区</p>
            </div>
            <div class="choose-area">
              <div class="choosed"></div>
              <dl v-for="spuSaleAttr in spuSaleAttrList" :key="spuSaleAttr.baseSaleAttrId">
                <dt>{{spuSaleAttr.saleAttrName}}</dt>
                <dd
                  change-price="0"
                  class="active"
                  v-for="spuSale in spuSaleAttr.spuSaleAttrValueList"
                  :key="spuSale.id">{{spuSale.saleAttrValueName}}</dd>
              </dl>
            </div>
            <div class="cart-wrap">
              <div class="control">
                <span class="goods">1</span>
                <button class="increment">+</button>
                <button class="decrement">-</button>
              </div>
              <div class="add-good">
                <button class="add">加入购物车</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--商品列表-->
    <section class="productDetail">
      <aside class="aside">
        <div class="tabWrap">
          <h4 class="active">相关分类</h4>
          <h4>推荐品牌</h4>
        </div>
        <div class="tabContent">
          <div class="classify active">
            <ul class="list">
              <li>手机</li>
              <li>内存卡</li>
              <li>贴膜</li>
              <li>移动电源</li>
              <li>手机壳</li>
              <li>iPhone配件</li>
              <li>手机耳机</li>
              <li>平板电脑</li>
            </ul>

            <ul class="product-info">
              <li>
                <img src="./images/part01.png" alt="">
                <p>Apple苹果iPhone 6s (A1699)</p>
                <p class="price">¥{{goodsDetailList.price}}.00</p>
                <button>加入购物车</button>
              </li>
              <li>
                <img src="./images/part02.png" alt="">
                <p>Apple苹果iPhone 6s (A1699)</p>
                <p class="price">¥6088.00</p>
                <button>加入购物车</button>
              </li>
              <li>
                <img src="./images/part03.png" alt="">
                <p>Apple苹果iPhone 6s (A1699)</p>
                <p class="price">¥6088.00</p>
                <button>加入购物车</button>
              </li>
              <li>
                <img src="./images/part02.png" alt="">
                <p>Apple苹果iPhone 6s (A1699)</p>
                <p class="price">¥6088.00</p>
                <button>加入购物车</button>
              </li>
              <li>
                <img src="./images/part01.png" alt="">
                <p>Apple苹果iPhone 6s (A1699)</p>
                <p class="price">¥6088.00</p>
                <button>加入购物车</button>
              </li>
            </ul>
          </div>
          <div class="recommend">
            相关推荐
          </div>
        </div>
      </aside>
      <div class="detail">
        <div class="fitting">
          <h4>选择搭配</h4>
          <div class="good-suits">
            <div class="phone">
              <img src="./images/l-m01.png" alt="">
              <p>￥5299</p>
              <i>+</i>
            </div>
            <div class="fitting-suits">
              <div>
                <img src="./images/dp01.png" alt="">
                <p>Feless费勒斯VR</p>
                <input type="checkbox" value="39">
                <span>39</span>
              </div>
              <div>
                <img src="./images/dp02.png" alt="">
                <p>Feless费勒斯VR</p>
                <input type="checkbox" value="50">
                <span>50</span>
              </div>
              <div>
                <img src="./images/dp03.png" alt="">
                <p>Feless费勒斯VR</p>
                <input type="checkbox" value="59">
                <span>59</span>
              </div>
              <div>
                <img src="./images/dp04.png" alt="">
                <p>Feless费勒斯VR</p>
                <input type="checkbox" value="99">
                <span>99</span>
              </div>
            </div>
            <div class="cart-wrap">
              <p>已选购<em>0</em>件商品</p>
              <div class="title">套餐价</div>
              <div class="price">￥5299</div>
              <button class="add-cart">加入购物车</button>
            </div>
          </div>
        </div>
        <div class="intro">
          <div class="tab-wrap">
            <div class="active">商品介绍</div>
            <div>规格与包装</div>
            <div>售后保障</div>
            <div>商品评价</div>
            <div>手机社区</div>
          </div>
          <div class="tab-content">
            <div class="good-intro active">
              <div class="info">
                <p>分辨率：1920*1080(FHD)</p>
                <p>后置摄像头：1200万像素</p>
                <p>前置摄像头：500万像素</p>
                <p>核 数：其他</p>
                <p>频 率：以官网信息为准</p>
                <p>品牌： Apple</p>
                <p>商品名称：APPLEiPhone 6s Plus</p>
                <p>商品编号：1861098</p>
                <p>商品产地：中国大陆</p>
                <p>商品毛重：0.51kg</p>
                <p>热点：指纹识别，Apple Pay，金属机身，拍照神器</p>
                <p>系统：苹果（IOS）</p>
                <p>像素：1000-1600万品毛重：0.51kg</p>
                <p>机身内存：64GB</p>
                <div class="good-pic">
                  <img src="./images/intro01.png" alt="">
                  <img src="./images/intro02.png" alt="">
                  <img src="./images/intro03.png" alt="">
                </div>
              </div>
            </div>
            <div class="good-package">规格与包装</div>
            <div class="good-aftersale">售后保障</div>
            <div class="good-recommend">商品评价</div>
            <div class="good-interflow">手机社区</div>
          </div>
        </div>
      </div>
    </section>
    <div class="heartbeat-area">
      <h4>猜你喜欢</h4>
      <div class="heartbeat-content">
        <div class="good">
          <div>
            <img src="./images/itemlike01.png" alt="">
          </div>
          <p class="title">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <p class="price">￥ 3699.00</p>
          <div><span>已有6人评价</span></div>
        </div>
        <div class="good">
          <div>
            <img src="./images/itemlike02.png" alt="">
          </div>
          <p class="title">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <p class="price">￥ 3699.00</p>
          <div><span>已有6人评价</span></div>
        </div>
        <div class="good">
          <div>
            <img src="./images/itemlike03.png" alt="">
          </div>
          <p class="title">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <p class="price">￥ 3699.00</p>
          <div><span>已有6人评价</span></div>
        </div>
        <div class="good">
          <div>
            <img src="./images/itemlike04.png" alt="">
          </div>
          <p class="title">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <p class="price">￥ 3699.00</p>
          <div><span>已有6人评价</span></div>
        </div>
        <div class="good">
          <div>
            <img src="./images/itemlike05.png" alt="">
          </div>
          <p class="title">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <p class="price">￥ 3699.00</p>
          <div><span>已有6人评价</span></div>
        </div>
        <div class="good">
          <div>
            <img src="./images/itemlike06.png" alt="">
          </div>
          <p class="title">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
          <p class="price">￥ 3699.00</p>
          <div><span>已有6人评价</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Thumbnail from "./Thumbnail"
  import Zoom from "./Zoom"
  import { mapGetters, mapState } from "vuex"

  export default {
    name: "Detail",
    mounted() {
      this.getGoodsDetailList()
    },
    methods: {
      getGoodsDetailList() {
        const { goodsId } = this.$route.params;
        this.$store.dispatch("getGoodsDetailList", goodsId)
      }
    },
    computed: {
      ...mapState({
        goodsDetailList: state => state.detail.goodsDetailList
      }),
      ...mapGetters(["categoryView", "skuInfo", "spuSaleAttrList"])
    },
    components: {
      Thumbnail,
      Zoom
    }
  }
</script>

<style lang="less" scoped>
  .clearFix () {
    *zoom: 1;
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
  .typeArea() {
    width: 1200px;
    margin: 0 auto;
  }

  .wrap {
    .con-wrap {
      .typeArea();
      margin-top: 15px;
      > .brand {
        padding: 9px 15px 9px 0;
        a {
          &::after {
            content: '/';
            padding: 0 6px;
          }
        }
      }
      > .con-main {
        .clearFix();
        margin: 5px 0 15px;
        .preview-wrap {
          float: left;
          width: 400px; height: 400px; border: 1px solid #dfdfdf;
          .preview {
            position: relative;
            .zoom {
              position: relative;
              width: 400px; height: 400px;
              img {
                width: 100%;
              }
              .mask {
                position: absolute; top: 0; left: 0;
                width: 200px; height: 200px; background: rgba(255,255, 255, .5);
                border: 1px solid #ddd;
              }
            }
            > .magnify {
              position: absolute; left: 420px; top: 0px;
              width: 400px; height: 400px; border: 1px solid #ddd; overflow: hidden;
              img {
                width: 800px; height: 800px;
              }
            }
          }
          .thumbnail {
            .clearFix();
            width: 400px; margin-top: 5px;
            .prev {
              float: left;
              width: 10px; height: 54px; border: 1px solid #ccc; margin-right: 4px;
              background: #ebebeb; text-align: center; line-height: 54px; cursor: pointer;
            }
            .items {
              float: left; position: relative;
              width: 372px; height: 56px; overflow: hidden;
              .img-list {
                .clearFix();
                position: relative; left: 0;
                text-align: center;
                > img {
                  float: left;
                  width: 50px; height: 50px; padding: 2px; margin-right: 22px;
                  border: 1px solid #ccc; vertical-align: top;
                }
              }
            }
            .next {
              float: left;
              width: 10px; height: 54px; border: 1px solid #ccc;
              background: #ebebeb; text-align: center; line-height: 54px; cursor: pointer;
            }
          }
        }
        .info-wrap {
          float: right;
          width: 700px;
          .info-content {
            .info-name {
              margin-top: 15px; line-height: 21px;
              font-size: 14px;
            }
            .news {
              margin-top: 15px; color: #e12228;
            }
            .price-area {
              background: #fee9ec;
              margin-top: 10px; line-height: 28px;
              padding: 5px;
              .price {
                .clearFix();
                .title {
                  margin-right: 15px;
                }
                .price-detail {
                  > i {
                    font-size: 16px;
                    color: #cc1122;
                  }
                  > em {
                    font-size: 24px; font-weight: bold;
                    color: #cc1122;
                  }
                  > span {
                    font-size: 12px;
                    color: #cc1122;
                  }
                }
                .comment {
                  float: right;
                }
              }
              .promotion {
                .clearFix();
                .title {
                  float: left;
                  margin-right: 15px;
                }
                p {
                  width: 520px;
                  float: left;
                  color: #999;
                  span {
                    padding: 3px; color: #fff; background: #c81623;
                    margin-right: 4px;
                  }
                }
              }
            }
            .support {
              .clearFix();
              margin-top: 10px; line-height: 28px;
              .title {
                float: left;
                margin-right: 15px;
              }
              > p {
                float: left;
                width: 520px; color: #999;
              }
            }
            .express {
              .clearFix();
              margin-top: 10px; line-height: 28px;
              border-bottom: 1px solid #ededed; padding-bottom: 5px;
              .title {
                float: left;
                margin-right: 15px;
              }
              p {
                float: left;
                width: 520px; color: #999;
              }
            }
            .choose-area {
              margin-top: 10px; line-height: 28px;
              .choosed {
                > mark {
                  height: 30px; line-height: 30px; border: 1px solid #ddd; padding: 0 20px; margin-right: 20px;
                  background: snow; display: inline-block;
                  a {
                    margin-left: 20px;
                    color: red;
                    cursor: pointer;
                  }
                }
              }
              dl {
                .clearFix();
                margin: 13px 0;
                dt {
                  float: left;
                  margin-right: 15px;
                }
                dd {
                  float: left;
                  margin-right: 5px; padding: 2px 14px;
                  color: #666; cursor: pointer;
                  line-height: 24px;
                  border: 1px solid #eee;
                  border-right: 2px solid #bbb;
                  border-bottom: 2px solid #bbb;
                  // 为什么不能用first-child
                  /*&:first-child {
                    color: red;
                  }*/
                  &.active {
                    color: red;
                  }
                }
              }
            }
            .cart-wrap {
              .clearFix();
              .control {
                .clearFix();
                float: left;
                position: relative;
                .goods {
                  float: left;
                  width: 15px; height: 15px; margin-right: 15px; padding: 10px;
                  border: 1px solid #ddd;
                  display: block;
                  text-align: center; line-height: 15px;
                }
                button {
                  float: left; position: absolute;
                  width: 34px; height: 18px;
                }
                .increment {
                  top: 0;
                }
                .decrement {
                  top: 17px;
                }
              }
              .add-good {
                float: left;
                .add {
                  width: 120px; height: 36px; margin-left: 45px;
                  font-size: 16px;
                  background: #e1251b; color: #fff;
                  border: none; outline: none;
                }
              }
            }
          }
        }
      }
    }
    .productDetail {
      .clearFix();
      width: 1200px; margin: 75px auto 0;
      .aside {
        float: left;
        width: 210px; border: solid 1px #ccc;
        .tabWrap {
          .clearFix();
          h4 {
            float: left;
            width: 105px; height: 40px; line-height: 40px; text-align: center;
            border-top: 3px solid #fff; border-bottom: 1px solid #ccc;
            cursor: pointer;
            &.active {
              border-top-color: #e1251b;
              border-bottom: none;
            }
          }
        }
        .tabContent {
          padding: 10px;
          .classify {
            display: none;
            .list {
              .clearFix();
              li {
                float: left;
                width: 50%; line-height: 28px;
                border-bottom: 1px dashed #ededed;
              }
            }
            .product-info {
              li {
                margin: 5px 0 15px;
                border-bottom: 1px solid #ededed;
                text-align: center;
                > img {
                  width: 152px;
                }
                > .price {
                  font-size: 16px; color: #c81623;
                  font-weight: bold;
                }
                button {
                  line-height: 18px;
                  margin: 5px 0; padding: 2px 14px;
                  border: 1px solid #8c8c8c; color: #8c8c8c;
                  cursor: pointer;
                }
              }
            }
            &.active {
              display: block;
            }
          }
          .recommend {
            display: none;
            &.active {
              display: block;
            }
          }
        }
      }

      .detail {
        float: right;
        width: 980px;
        .fitting {
          border: 1px solid #ddd;
          margin-bottom: 15px;
          h4 {
            padding: 5px 0 5px 15px;
            color: #333; background: #f1f1f1;
            border-bottom: 1px solid #ddd;
          }
          .good-suits {
            .clearFix();
            height: 170px;
            padding-top: 10px;
            .phone {
              float: left;
              position: relative;
              width: 127px; height: 165px;
              text-align: center;
              img {
                width: 87px;
              }
              p {
                color: #c81623;
                font-weight: bold; font-size: 16px;
              }
              i {
                position: absolute;
                top: 48px; right: -25px;
                font-size: 16px;
              }
            }
            .fitting-suits {
              .clearFix();
              float: left;
              width: 668px; height: 165px;
              > div {
                float: left;
                text-align: center;
                width: 127px; padding: 0 20px;
                img {
                  width: 120px; height: 130px;
                }
                input {
                  cursor: pointer;
                }
              }
            }

            .cart-wrap {
              float: left;
              //.clearFix();
              width: 153px; height: 165px;
              border-left: 1px solid #ddd; margin-left: 10px; padding-left: 10px;
              p {
                margin: 10px 0;
                em {
                  padding: 0 4px;
                  color: #c81623;
                  font-size: 16px; font-weight: bold;
                }
              }
              .title {
                margin-bottom: 10px; font-weight: bold;
              }
              .price {
                margin-bottom: 10px;
                font-size: 16px; color: #c81623; font-weight: bold;
              }
              .add-cart {
                padding: 10px 25px;
                font-size: 16px; border: none; outline: none;
                color: #fff; background: #e1251b;
                cursor: pointer;
              }
            }
          }
        }
      }

      .intro {
        .clearFix();
        .tab-wrap {
          .clearFix();
          float: left;
          width: 100%;
          background: #ededed;
          div {
            float: left;
            height: 40px; line-height: 40px; padding: 0 11px;
            cursor: pointer;
            border: 1px solid #ccc; background: #fff;
            border-right: none;
            &.active {
              color: #fff; background: #ea4a36;
            }
            &:last-child {
              border-right: 1px solid #ccc;
            }
          }
        }
        .tab-content {
          float: left;
          padding-left: 10px;
          > div {
            display: none;
          }
          .good-intro.active {
            display: block;
            .info {
              p {
                margin: 10px 0;
              }
              .good-pic {
                img {
                  vertical-align: top;
                }
              }
            }
          }
        }
      }
    }
    .heartbeat-area {
      margin-bottom: 15px !important;
      .typeArea();
      width: 1198px;
      border: 1px solid #ddd;
      h4 {
        padding: 5px 10px;
        color: #333; background: #f1f1f1;
        border-bottom: 1px solid #ddd;
      }
      .heartbeat-content {
        .clearFix();
        padding: 15px 11px;
        .good {
          float: left;
          width: 196px;
        }
        > div {
          text-align: center;
          img {
            width: 167px; height: 124px;
          }
        }
        p.title {
          padding: 0 15px;
        }
        p.price {
          padding: 0 15px; margin-bottom: 20px;
          font-size: 16px; font-weight: bold;
          color: #c81623;
        }
      }
    }
  }
</style>
