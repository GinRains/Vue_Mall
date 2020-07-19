<template>
  <div class="pagination">
    <button :disabled="currentPage === 1" @click="$emit('changePage', currentPage - 1)">上一页</button>
    <button v-show="continuePageScope.start > 1"
            :class="{active: currentPage === 1}"
            @click="$emit('changePage', 1)">1</button>
    <button v-show="continuePageScope.start > 2">···</button>

    <!-- 如果v-for和v-if同时存在，v-for的优先级比v-if要高-->
    <button
      v-for="page in continuePageScope.end" :key="page"
      :class="{active: currentPage === page}"
      @click="$emit('changePage', page)"
      v-if="page >= continuePageScope.start">{{page}}</button>

    <button v-show="continuePageScope.end < totalPage - 1">···</button>
    <button v-show="continuePageScope.end < totalPage"
            :class="{active: currentPage === totalPage}"
            @click="$emit('changePage', totalPage)">{{totalPage}}</button>
    <button :disabled="currentPage === totalPage" @click="$emit('changePage', currentPage - 1)">下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {
    name: "Pagination",
    props: {
      currentPage: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 4
      },
      continuePage: {
        type: Number,
        default: 5
      }
    },
    computed: {
      ...mapGetters(["total"]),
      // 总页数
      totalPage() {
        return Math.ceil(this.total / this.pageSize)
      },
      // 连续页码的起始与结束
      continuePageScope() {
        let { currentPage, totalPage, continuePage } = this
        let start,
          dis,
          end;
        // 第一步：判断总页码是否比连续页码还要小
        if(totalPage <= continuePage) {
          start = 1
          end = totalPage
        }else {
          // 正常情况
          start = currentPage - Math.floor(continuePage / 2)
          end = currentPage + Math.floor(continuePage / 2)
          // 左边界
          if(start <= 1) {
            dis = 1 - start;
            start += dis;
            end += dis
          }

          // 有边界
          if(end >= totalPage) {
            dis = end - totalPage
            start -= dis
            end -= dis
          }
        }

        return { start, end }
      }
    }
  }
</script>

<style lang="less" scoped>
  .pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>
