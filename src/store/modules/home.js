import {reqCategoryList} from '@/api'
const state = {
    categoryList: []
}
const mutations = {
    RECEIVE_CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}
const actions = {
    //真正的请求逻辑
    async getCategoryList({ commit }) {
        try {
            const result = await reqCategoryList()
            if (result.code === 200) {
                commit('RECEIVE_CATEGORYLIST', result.data)
            } else {
                alert('获取三级分类数据失败')
            }
        } catch (error) {
            alert('请求获取三级分类数据失败')
        }
    }
}
const getters = {

}


export default {
    state,
    mutations,
    actions,
    getters
}