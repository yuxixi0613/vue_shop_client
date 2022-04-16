import { reqSearchInfo } from '@/api'
const state = {
    searchInfo: {}
}
const mutations = {
    RECEIVE_SEARCHINFO(state, searchInfo) {
        state.searchInfo = searchInfo
    }
}
const actions = {
    async getSearchInfo({ commit }, searchParams) {
        try {
            const result = await reqSearchInfo(searchParams)
            if (result.code === 200) {
                commit('RECEIVE_SEARCHINFO', result.data)
            } else {
                alert('获取搜索失败')
            }
        } catch (error) {
            alert('请求获取搜索信息失败')
        }
    }
}

const getters = {
    attrsList(state) {
        return state.searchInfo.attrsList || []
    },
    goodsList(state) {
        return state.searchInfo.goodsList || []
    },
    trademarkList(state) {
        return state.searchInfo.trademarkList || []
    },
}


export default {
    state,
    mutations,
    actions,
    getters
}