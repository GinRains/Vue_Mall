<template>
  <div class="pagination">
    <button ref="prev" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">上一页</button>
    <button v-show="currentPage !== 1" @click="changePage(1)">1</button>
    <button v-show="currentPage > 2">···</button>

    <button v-for="page in startToEnd.end" :key="page"
            v-if="page >= startToEnd.start"
            @click="changePage(page)"
            :class="{active: currentPage === page}">{{page}}</button>

    <button v-show="currentPage < totalPage - 1">···</button>
    <button v-show="currentPage !== totalPage" @click="changePage(totalPage)">{{totalPage}}</button>
    <button ref="next" :disabled="currentPage === totalPage" @click="changePage(currentPage + 1)">下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
  import { mapState } from "vuex"

  export default {
    name: "Pagination",
    props: ["continuePage", "currentPage", "pageSize"],
    methods: {
      changePage(page) {
        this.$emit("updatePage", page)
      }
    },
    computed: {
      ...mapState({
        total: state => state.search.goodsListInfo.total
      }),
      totalPage() {
        return Math.ceil(this.total / this.pageSize)
      },
      startToEnd() {
        let { totalPage, continuePage, currentPage } = this,
          start,
          dis,
          end;
        if(totalPage < continuePage) {
          start = 1
          end = totalPage
        }else {
          start = currentPage - Math.floor(continuePage / 2)
          end = currentPage + Math.floor(continuePage / 2)
          if(start < 1) {
            dis = currentPage - start;
            start += dis;
            end += dis;
          }
          if(end > totalPage) {
            dis = end - currentPage;
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
        cursor: pointer;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>
