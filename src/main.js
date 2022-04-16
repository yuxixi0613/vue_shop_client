import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import '@/mock/mockServer'
import 'swiper/css/swiper.css';
//接口请求函数的第一种测试方式
// import '@/api'

//接口请求函数的第二种测试方式
// import { reqCategoryList } from '@/api'
// reqCategoryList()

Vue.config.productionTip = false

//引入全局非路由组件TypeNav
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)  //相当于 Vue.component("TypeNav",TypeNav)
import SliderLoop from '@/components/SliderLoop'
Vue.component('SliderLoop', SliderLoop)

import Pagination from '@/components/Pagination'
Vue.component('Pagination', Pagination);

new Vue({
  //安装全局事件总线,越早越好
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')
