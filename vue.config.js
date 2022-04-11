const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  devServer: {
    proxy: {
      "/api": {
        target: "http://39.98.123.211/", //代表转发的目标服务器
        // pathRewrite: { "^/api": "" }   //后台接口本身就有api，重写为空串反而不对了
        //路径重写
        // 什么时候重写？ 看最终服务器的接口身上有没有
      }
    }
  }
})
