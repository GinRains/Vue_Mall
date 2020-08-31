<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="goods in goodsList" :key="goods.id">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" :checked="goods.isChecked" @click="changeChecked(goods.skuId, goods.isChecked)">
          </li>
          <li class="cart-list-con2">
            <img style="width: 80px; height: 80px" :src="goods.imgUrl">
            <div class="item-msg">{{goods.skuName}}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{goods.skuPrice}}.00</span>
          </li>
          <li class="cart-list-con5">
            <a href="javascript:void(0)" class="mins" @click="changeGoodsNum(goods.skuId, -1)">-</a>
            <input disabled autocomplete="off" type="text" :value="goods.skuNum" minnum="1" class="itxt">
            <a href="javascript:void(0)" class="plus" @click="changeGoodsNum(goods.skuId, 1)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{goods.skuPrice * goods.skuNum}}</span>
          </li>
          <li class="cart-list-con7">
            <a href="javascript:;" class="sindelet" @click="removeGoods(goods.skuId)">删除</a>
            <br>
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" v-model="changeAllGoodsChecked" :disabled="!goodsList.length">
        <span>全选</span>
      </div>
      <div class="option">
        <a href="javascript:;" @click="removeIsCheckedGoods">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span style="color: red;">{{checkedGoods}}</span> 件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{totalPrice}}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="javascript:;" @click="toTrade">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import debounce from "lodash/debounce"

  export default {
    name: 'ShopCart',
    mounted() {
      this.getShopCartGoods()
    },
    methods: {
      async getShopCartGoods() {
        await this.$store.dispatch("gainShopCartGoods")
        return {code: 200}
      },
      async changeChecked(skuId, isChecked) {
        isChecked = isChecked === 1 ? 0 : 1
        const res = await this.$store.dispatch("changeGoodsChecked", {skuId, isChecked})
        if(res.code === 200) {
          this.getShopCartGoods()
        }
      },
      changeGoodsNum: debounce(async function(skuId, skuNum) {
        const res = await this.$store.dispatch("changeGoodsNum", {skuId, skuNum})
        if(res.code === 200) {
          this.getShopCartGoods()
        }
      }, 300, {trailing: true}),
      // 删除商品
      async removeGoods(skuId) {
        const res = await this.$store.dispatch("delGoods", skuId)
        if(res.code === 200) {
          this.getShopCartGoods()
          alert("删除商品成功")
        }
      },
      // 删除选中的商品
      async removeIsCheckedGoods() {
        const promises = []
        this.goodsList.forEach(item => {
          if(item.isChecked) {
            const promise = this.$store.dispatch("delGoods", item.skuId)
            promises.push(promise)
          }
        })

        const res = await Promise.all(promises)
        if(res.length) {
          alert("已删除选中的商品")
          this.getShopCartGoods()
        }
      },
      // 跳转结算页
      toTrade() {
        if(!this.tokenInfo.token) {
          alert("亲！你还没登录哦...")
          return void 0
        }

        this.$router.push('/trade')
      }
    },
    computed: {
      ...mapState({
        goodsList: state => state.shopcart.shopCartGoodsList || [],
        tokenInfo: state => state.user.tokenInfo || {}
      }),
      checkedGoods() {
        return this.goodsList.reduce((prev, curr) => {
          return prev + curr.skuNum
        }, 0)
      },
      totalPrice() {
        return this.goodsList.reduce((prev, curr) => {
          return prev + curr.skuNum * curr.skuPrice
        }, 0)
      },
      changeAllGoodsChecked: {
        get() {
          return this.goodsList.length === this.goodsList.filter(item => item.isChecked).length && this.goodsList.length
        },
        async set(newVal) {
          const isChecked = newVal ? 1 : 0
          const promises = []
          this.goodsList.forEach(item => {
            const promise = this.$store.dispatch("changeGoodsChecked", {skuId: item.skuId, isChecked})
            promises.push(promise)
          })

          try {
            const res = await Promise.all(promises)
            if(res.length) {
              const result = await this.getShopCartGoods()
              if(result.code === 200) {
                alert("修改数据成功")
              }
            }
          }catch(err) {
            alert("修改数据状态失败")
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .cart {
    width: 1200px;
    margin: 0 auto;

    h4 {
      margin: 9px 0;
      font-size: 14px;
      line-height: 21px;
    }

    .cart-main {
      .cart-th {
        background: #f5f5f5;
        border: 1px solid #ddd;
        padding: 10px;
        overflow: hidden;

        &>div {
          float: left;
        }

        .cart-th1 {
          width: 25%;

          input {
            vertical-align: middle;
          }

          span {
            vertical-align: middle;
          }
        }

        .cart-th2 {
          width: 25%;
        }

        .cart-th3,
        .cart-th4,
        .cart-th5,
        .cart-th6 {
          width: 12.5%;

        }
      }

      .cart-body {
        margin: 15px 0;
        border: 1px solid #ddd;

        .cart-list {
          padding: 10px;
          border-bottom: 1px solid #ddd;
          overflow: hidden;

          &>li {
            float: left;
          }

          .cart-list-con1 {
            width: 15%;
          }

          .cart-list-con2 {
            width: 35%;

            img {
              width: 82px;
              height: 82px;
              float: left;
            }

            .item-msg {
              float: left;
              width: 150px;
              margin: 0 10px;
              line-height: 18px;
            }
          }

          .item-txt {
            text-align: center;
          }

          .cart-list-con4 {
            width: 10%;

          }

          .cart-list-con5 {
            width: 17%;

            .mins {
              border: 1px solid #ddd;
              border-right: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }

            input {
              border: 1px solid #ddd;
              width: 40px;
              height: 33px;
              float: left;
              text-align: center;
              font-size: 14px;
            }

            .plus {
              border: 1px solid #ddd;
              border-left: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }
          }

          .cart-list-con6 {
            width: 10%;

            .sum {
              font-size: 16px;
            }
          }

          .cart-list-con7 {
            width: 13%;

            a {
              color: #666;
            }
          }
        }
      }
    }

    .cart-tool {
      overflow: hidden;
      border: 1px solid #ddd;

      .select-all {
        padding: 10px;
        overflow: hidden;
        float: left;

        span {
          vertical-align: middle;
        }

        input {
          vertical-align: middle;
        }
      }

      .option {
        padding: 10px;
        overflow: hidden;
        float: left;

        a {
          float: left;
          padding: 0 10px;
          color: #666;
        }
      }

      .money-box {
        float: right;

        .chosed {
          line-height: 26px;
          float: left;
          padding: 0 10px;
        }

        .sumprice {
          width: 200px;
          line-height: 22px;
          float: left;
          padding: 0 10px;

          .summoney {
            color: #c81623;
            font-size: 16px;
          }
        }

        .sumbtn {
          float: right;

          a {
            display: block;
            position: relative;
            width: 96px;
            height: 52px;
            line-height: 52px;
            color: #fff;
            text-align: center;
            font-size: 18px;
            font-family: "Microsoft YaHei";
            background: #e1251b;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>
