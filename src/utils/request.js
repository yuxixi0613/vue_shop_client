//这个文件主要是对axios进行二次封装
//因为原本的axios不能满足我们的功能需求
//最终要达到
// 1.配置基础路径和超时限制
// 2.添加进度条信息  nprogress
// 3.返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据
// 4.统一处理请求错误, 具体请求也可以选择处理或不处理

import axios from 'axios'
import nprogress from 'nprogress'//引入js
import 'nprogress/nprogress.css'//引入css

// 1.配置基础路径和超时限制
const instance = axios.create({
    baseURL: '/api',//公共的基础路径
    timeout: 20000,//超时时间
});

// 2.添加进度条信息  nprogress（开启进度条）
instance.interceptors.request.use(
    //请求拦截器的成功
    (config) => {
        //拦截器一般就做两件事
        //1.修改报文（配置项）
        //2.添加额外的功能
        nprogress.start()
        return config;  //切记需要返回
    },
    //请求拦截器的失败  一般情况下可以不写
    // (error) => {
    //     // alert("请求拦截失败")    //直接处理：弹出“请求拦截失败”
    //     return Promise.reject(error);//这样写可以把错误继续往后传递在catch继续处理
    // }
);

// 3.返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据
instance.interceptors.response.use(
    (response) => {
        nprogress.done()
        return response.data;
    },
    (error) => {
        // 4.统一处理请求错误, 具体请求也可以选择处理或不处理
        nprogress.done()
        // 统一处理请求错误
        alert("ajax请求失败")

        // 具体请求也可以选择处理或不处理:
        return Promise.reject(error);//这样写可以让错误信息继续传递，如果这里不return，相当于return了undefined，undefined代表是成功，就会进入.then里

        //中断promise链
        // return new Promise(()=>{})  //返回pending状态的promise，可以终端promise链，代表后面不处理了
    }
);

export default instance

