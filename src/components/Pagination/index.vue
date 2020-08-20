<template>
  <div class="pagination">
    <button @click="jumpPage(currentPage - 1)" :disabled="currentPage===1">上一页</button>
    <button @click="jumpPage(1)">1</button>
    <button>···</button>

    <button
      v-for="page in startToEnd.end"
      v-if="page >= startToEnd.start"
      :class="{active: page === currentPage}"
      @click="jumpPage(page)"
      :key="page">{{page}}</button>

    <button>···</button>
    <button @click="jumpPage(totalPage)">{{totalPage}}</button>
    <button @click="jumpPage(currentPage + 1)" :disabled="currentPage===totalPage">下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props: {
      currentPage: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 0
      },
      total: {
        type: Number,
        default: 0
      },
      continuePage: {
        type: Number,
        default: 5
      }
    },
    methods: {
      jumpPage(page) {
        this.$emit('handlePage', page)
      }
    },
    computed: {
      totalPage() {
        return Math.ceil(this.total / this.pageSize)
      },
      startToEnd() {
        const {continuePage, totalPage, currentPage} = this
        let start,
          distNum,
          end
        if(totalPage <= continuePage) {
          start = 1
          end = totalPage
        }else {
          start = currentPage - Math.floor(continuePage / 2)
          end = currentPage + Math.floor((continuePage / 2))
          if(start <= 0) {
            distNum = 1 - start
            start += distNum
            end += distNum
          }

          if(end > totalPage) {
            // -1
            distNum = totalPage - end
            start += distNum
            end += distNum
          }
        }

        return {
          start,
          end
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .pagination {
    text-align: right;
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
