<template>
  <div>
    <TypeNav></TypeNav>
    <br />
    <!-- 显示路由传递的参数 -->
    params: {{ $route.params.keyword }}
    <br />
    query:{{ $route.query.keyword1 }}
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style lang="less" scoped>
</style>