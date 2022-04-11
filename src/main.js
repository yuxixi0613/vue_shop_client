import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
//接口请求函数的第一种测试方式
// import '@/api'

//接口请求函数的第二种测试方式
// import { reqCategoryList } from '@/api'
// reqCategoryList()

Vue.config.productionTip = false

//引入全局非路由组件TypeNav
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)  //相当于 Vue.component("TypeNav",TypeNav)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
