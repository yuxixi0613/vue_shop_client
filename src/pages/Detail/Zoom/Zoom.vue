<template>
  <div class="spec-preview">
    <img :src="currentImage.imgUrl" />
    <div class="event"></div>
    <div class="big">
      <img :src="currentImage.imgUrl" />
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ["imageList"],
  data() {
    return {
      currentIndex: 0, //为什么要定义这个数据，是因为图标索引不能写死
    };
  },
  computed: {
    // 为了要去计算展示的图片，是为了防止假报错
    currentImage() {
      return this.imageList[this.currentIndex] || {};
    },
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>