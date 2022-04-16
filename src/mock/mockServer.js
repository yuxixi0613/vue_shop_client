// 这个文件才是我们真正的去模拟接口的文件
import Mock from 'mockjs'
import banner from './banner.json'
import floor from './floor.json'

// 这两行相当于是在本地，模拟了两个接口，不会真正的发送到后台
Mock.mock('/mock/getbanners',{code:200,data:banner})
Mock.mock('/mock/getfloors',{code:200,data:floor})