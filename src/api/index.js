//这个文件是我们的接口请求函数文件
//写了一堆的函数
//每个函数对应的是一个接口的请求功能
//后期我们在想给哪个接口发请求的时候，只需要调用对应的函数即可


import request from '@/utils/request'//这个request就是我们封装的axios

//这个函数里封装的往接口发请求的功能
export const reqCategoryList = () => {
    return request({
        url: '/product/getBaseCategoryList',
        method: "get"
    })  //返回一个promise
}
//接口请求函数的第一张测试方式，必须把文件引入main，这个调用才会执行
// reqCategoryList()