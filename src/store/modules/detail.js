import { reqGoodsDetailInfo } from "@/api"

const state = {
    goodsDetailInfo: {}
}
const mutations = {
    RECEIVE_GOODSDETAILINFO(state, goodsDetailInfo) {
        state.goodsDetailInfo = goodsDetailInfo
    }
}
const actions = {
    async getGoodsDetailInfo({ commit }, skuId) {
        try {
            const result = await reqGoodsDetailInfo(skuId)
            if (result.code === 200) {
                commit('RECEIVE_GOODSDETAILINFO', result.data)
            } else {
                alert('获取商品详情失败')
            }
        } catch (error) {
            alert('请求获取商品详情失败')
        }
    }
}
const getters = {
    categoryView(state) {
        return state.goodsDetailInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodsDetailInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodsDetailInfo.spuSaleAttrList || {}
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}