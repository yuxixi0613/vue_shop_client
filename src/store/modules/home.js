import { reqBannerList, reqCategoryList, reqFloorList } from '@/api'
const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}
const mutations = {
    RECEIVE_CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    RECEIVE_BANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    RECEIVE_FLOORLIST(state, floorList) {
        state.floorList = floorList
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
    },

    async getBannerList({ commit }) {
        try {
            const result = await reqBannerList()
            if (result.code === 200) {
                commit('RECEIVE_BANNERLIST', result.data)
            } else {
                alert('获取banner数据失败')
            }
        } catch (error) {
            alert('请求获取banner数据失败')
        }
    },

    async getFloorList({ commit }) {
        try {
            const result = await reqFloorList()
            if (result.code === 200) {
                commit('RECEIVE_FLOORLIST', result.data)
            } else {
                alert('获取floor数据失败')
            }
        } catch (error) {
            alert('请求获取floor数据失败')
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