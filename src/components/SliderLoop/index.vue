<template>
  <div class="swiper-container" id="mySwiper" :ref="loopRef">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in loopData" :key="banner.id">
        <img :src="banner.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "SliderLoop",

  props: ["loopData", "loopRef"],

  watch: {
    loopData: {
      immediate: true,
      handler() {
        //专门控制的bannerList第一次，数据为空数组，不调用this.$nextTick
        //后期bannerList拿到数据后，只调一次this.$nextTick就行了
        if (this.loopData.length === 0) return;
        this.$nextTick(() => {
          new Swiper(this.$refs[this.loopRef], {
            loop: true,

            pagination: {
              el: ".swiper-pagination",
            },

            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style lang="less" scoped>
</style>