import request from '@/utils/http'

export function getDetail(id){
    return request({
        url:'/goods',
        method:'GET',
        params:{
            id
        }
    })
}

/**
 * type=1 是24小时热销榜,2是周热销
 */
export function getHotGoodsAPI({id,type,limit=3}){
    return request({
        url:'/goods/hot',
        method:'GET',
        params:{
            id,
            type,
            limit
        }
    })
}