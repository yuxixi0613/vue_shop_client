//这个文件是我们的接口请求函数文件
//写了一堆的函数
//每个函数对应的是一个接口的请求功能
//后期我们在想给哪个接口发请求的时候，只需要调用对应的函数即可


import request from '@/utils/request'//这个request就是我们封装的axios
import mockRequest from '@/utils/mockRequest'//这个mockRequest就是我们封装的axios

//这个函数里封装的往接口发请求的功能
export const reqCategoryList = () => {
    return request({
        url: '/product/getBaseCategoryList',
        method: "get"
    })  //返回一个promise
}
//接口请求函数的第一张测试方式，必须把文件引入main，这个调用才会执行
// reqCategoryList()


export const reqBannerList = () => {
    return mockRequest({
        url: '/getbanners',
        method: "get"
    })  //返回一个promise
}
export const reqFloorList = () => {
    return mockRequest({
        url: '/getfloors',
        method: "get"
    })  //返回一个promise
}

//请求所需要的参数，都是在调用接口请求函数的时候，传参过来的
export const reqSearchInfo = (searchParams) => {
    return request({
        url: '/list',
        method: "post",
        data:searchParams
    })  //返回一个promise
}
// reqSearchInfo({})