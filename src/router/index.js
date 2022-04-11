import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import routes from './routes'


// 1、保存原来的push方法，以备后期使用
let originPush = VueRouter.prototype.push

// 2、修改原型身上的push方法，改为我们自己定义的方法
VueRouter.prototype.push = function (location, resolved, rejected) {
    if (resolved === undefined && rejected === undefined) {
        // 代表用户使用的时候，没有传递成功或者失败的回调
        return originPush.call(this, location).catch(() => { })
    } else {
        // 代表用户至少传递了一个回调，用来处理promise
        return originPush.call(this, location, resolved, rejected)
    }
}

export default new VueRouter({
    base: '/',
    mode: 'history',
    routes
});