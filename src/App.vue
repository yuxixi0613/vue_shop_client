<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- 第一种方案可以根据路径去判断login与register不显示footer -->
    <!-- <Footer v-show="$route.path==='/home'|| $route.path==='/search'"></Footer> -->
    <Footer v-show="!$route.meta.isHidden"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>
