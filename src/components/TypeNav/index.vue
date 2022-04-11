<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="moveOutDIv" @mouseenter="moveInDiv">
        <h2 class="all">全部商品分类</h2>
        <div class="sort" v-show="isShow">
          <div class="all-sort-list2" @click="toSearch">
            <div
              class="item"
              :class="{ item_on: currentIndex === index }"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              @mouseenter="moveInItem(index)"
            >
              <h3>
                <a
                  href="javascript:;"
                  :data-category1Id="c1.categoryId"
                  :data-categoryName="c1.categoryName"
                  >{{ c1.categoryName }}</a
                >
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dt>
                      <a
                        href="javascript:;"
                        :data-category2Id="c2.categoryId"
                        :data-categoryName="c2.categoryName"
                        >{{ c2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em
                        v-for="(c3, index) in c2.categoryChild"
                        :key="c3.categoryId"
                      >
                        <a
                          href="javascript:;"
                          :data-category3Id="c3.categoryId"
                          :data-categoryName="c3.categoryName"
                          >{{ c3.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="javascript:;">服装城</a>
        <a href="javascript:;">美妆馆</a>
        <a href="javascript:;">尚品汇超市</a>
        <a href="javascript:;">全球购</a>
        <a href="javascript:;">闪购</a>
        <a href="javascript:;">团购</a>
        <a href="javascript:;">有趣</a>
        <a href="javascript:;">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import _ from "lodash"; //完整引入
import throttle from "lodash/throttle"; //按需引入
export default {
  name: "TypeNav",
  //name的作用：
  //1.浏览器工具查询
  //2.全局注册
  //3.keepAlive

  data() {
    return {
      currentIndex: -1,
      isShow: true,
    };
  },

  //vuex中取数据在computed中取
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },

  beforeMount() {
    // console.log(this.$route.path)
    if (this.$route.path !== "/home") {
      this.isShow = false;
    }
  },

  // mounted() {
  //   this.getCategoryList();
  // },

  methods: {
    // getCategoryList() {
    //   this.$store.dispatch("getCategoryList");
    // },

    //移入每个一级分类的事件函数
    // moveInItem(index) {
    //   this.currentIndex = index;
    // },

    //节流处理后的移入事件函数
    moveInItem: throttle(
      function (index) {
        // console.log(index);
        this.currentIndex = index;
      },
      50,
      { trailing: false }
    ),

    toSearch(event) {
      let target = event.target;

      //盲取
      let dataset = target.dataset;

      // console.log(dataset);

      //盲解构
      let { category1id, category2id, category3id, categoryname } = dataset;

      if (categoryname) {
        let location = {
          name: "search",
        };

        let query = {
          categoryName: categoryname,
        };

        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        location.query = query;
        // location = { ...location, ...query };
        // console.log(location, "1");

        //跳转之前看之前有没有带params参数，有的话带上
        location.params = this.$route.params
        
        this.$router.push(location);
      }
    },

    // 鼠标移入我们自己造的div，让三级分类显示，其实也得考虑home和search两遍
    // 只是home本身就是显示着呢，search里面是隐藏的，我们就考虑如何让search当中的显示就可以
    moveInDiv() {
      this.isShow = true;
    },

    // 鼠标移出我们自己造的div，让三级分类在home页面继续留着，在search页面要隐藏
    moveOutDIv() {
      this.currentIndex = -1;
      if (this.$route.path !== "/home") {
        this.isShow = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: wheat;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 615px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: #bfa;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>