<template>
  <div class="pagination">
    <button
      :disabled="currentPage === 1"
      @click="$emit('changePageNo', currentPage - 1)"
    >
      上一页
    </button>

    <!-- 连续页，起始位置也可能是1，如果是1那么就多了，所以连续页不为1的时候这个1存在 -->
    <button v-if="startEnd.start !== 1" @click="$emit('changePageNo', 1)">
      1
    </button>
    <button v-if="startEnd.start > 2">···</button>

    <!-- <button v-for="page in startEnd.end" :key="page" v-if="page>=startEnd.start">{{page}}</button> -->
    <button
      :class="{ active: currentPage === page }"
      v-for="page in pageArr"
      :key="page"
      @click="$emit('changePageNo', page)"
    >
      {{ page }}
    </button>

    <button v-if="startEnd.end < totalPageNo - 1">···</button>
    
    <button
      v-if="startEnd.end !== totalPageNo"
      @click="$emit('changePageNo', totalPageNo)"
    >
      {{ totalPageNo }}
    </button>

    <button
      :disabled="currentPage === totalPageNo"
      @click="$emit('changePageNo', currentPage + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    //当前页
    currentPage: Number,

    //每一页的条数
    pageSize: Number,

    //总条数
    total: {
      type: Number,
      default: 0,
    },
    
    //连续页
    continueNo: {
      type: Number,
      default: 5,
    },
  },

  computed: {
    //计算总页数=总条数/每一页的条数
    totalPageNo() {
      return Math.ceil(this.total / this.pageSize);
    },

    //计算连续页的起始位置和结束位置
    startEnd() {
      let { currentPage, continueNo, totalPageNo } = this;
      let start, end;
      if (totalPageNo <= continueNo) {
        //如果总页数比连续数小，那么起始位置和结束位置就已经定了
        start = 1;
        end = totalPageNo;
      } else {
        //总页数比连续数大的时候，需要计算
        start = currentPage - Math.floor(continueNo / 2);
        end = currentPage + Math.floor(continueNo / 2);

        //判断start是否小于1
        if (start < 1) {
          start = 1;
          end = continueNo;
        }
        //判断end是否大于总页数
        if (end > totalPageNo) {
          end = totalPageNo;
          start = totalPageNo - continueNo + 1;
        }
      }
      return { start, end };
    },

    pageArr() {
      let arr = [];
      for (let i = this.startEnd.start; i <= this.startEnd.end; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
};
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
