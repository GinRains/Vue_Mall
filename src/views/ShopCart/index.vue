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
        <ul class="cart-list" v-for="cart in cartList" :key="cart.skuid">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" :checked="cart.isChecked" @click="updateIsChecked(cart)">
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl">
            <div class="item-msg">{{cart.skuName}}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{cart.cartPrice}}</span>
          </li>
          <li class="cart-list-con5">
            <a href="javascript:void(0)" class="mins" @click="updateSkuNum(cart, -1)">-</a>
            <input autocomplete="off" type="text" :value="cart.skuNum" minnum="1" class="itxt" @change="updateSkuNum(cart, +$event.target.value)">
            <a href="javascript:void(0)" class="plus" @click="updateSkuNum(cart, 1)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{cart.skuNum * cart.skuPrice}}</span>
          </li>
          <li class="cart-list-con7">
            <a href="javascript:;" class="sindelet" @click="removeGoods(cart)">删除</a>
            <br>
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" v-model="isAllChecked">
        <span>全选</span>
      </div>
      <div class="option">
        <a href="javascript:;" @click="removeAllGoods">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>{{totalNum}}</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{totalPrice}}</i>
        </div>
        <div class="sumbtn">
          <router-link class="sum-btn" href="javascript:;" to="/trade">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  import debounce from "lodash/debounce"

  export default {
    name: 'ShopCart',
    mounted() {
      this.getCartList();
    },
    methods: {
      getCartList() {
        this.$store.dispatch("getCartList")
      },
      updateSkuNum: debounce(async function(cart, changeSkuNum) {
          if(changeSkuNum + cart.skuNum < 1) {
            changeSkuNum = 1 - cart.skuNum
          }

          try {
            await this.$store.dispatch("getAddShopCart", {skuId: cart.skuId, skuNum: changeSkuNum})
            this.getCartList()
          }catch(error) {
            alert(error.message)
          }
        }, 500, { 'trailing': true }),
      async updateIsChecked(cart) {
        try {
          await this.$store.dispatch("changeIsChecked", {skuId: cart.skuId, isChecked: cart.isChecked === 1 ? 0 : 1})
          this.getCartList()
        }catch(error) {
          alert(error.message)
        }
      },
      async removeGoods(cart) {
        try {
          const response = await this.$store.dispatch("deleteGoodsInfo", cart.skuId)
          alert(response)
          this.getCartList()
        }catch(error) {
          alert(error.message)
        }
      },
      async removeAllGoods() {
        try {
          const response = await this.$store.dispatch("deleteAllGoodsInfo")
          if(response) this.getCartList()
        }catch(error) {
          alert(error.message)
        }
      }
    },
    computed:{
      ...mapState({
        cartList: state => state.shopcart.cartList
      }),
      totalNum() {
        return this.cartList.reduce((prev, curr) => {
          if(curr.isChecked) {
            prev += curr.skuNum
          }
          return prev
        }, 0)
      },
      totalPrice() {
        return this.cartList.reduce((prev, curr) => {
          if(curr.isChecked) {
            prev += curr.skuNum * curr.skuPrice
          }
          // 如果对遍历的item有判断，须将return 返回值写在外面
          return prev
        }, 0)
      },
      isAllChecked: {
        get() {
          return this.cartList.every(item => item.isChecked) && this.cartList.length > 0
        },
        async set(newVal) {
          try {
            const response = await this.$store.dispatch("changeAllIsChecked", newVal === true ? 1 : 0)
            alert(response[0])
            this.getCartList()
          }catch(error) {
            alert(error.message)
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
