import request from '@/utils/http'

//有参请求
export function getCategoryAPI(id) {
  return request({
    url: '/category',
    method: "get",
    params: {
      id
    }
  })
}

export function getCategoryFilterAPI(id){
    return request({
        url:'/category/sub/filter',
        method:'get',
        params:{
            id
        }
    })
}

/**
 * data{
 * categoryId:1005000,
 * page:1,
 * pageSize:20,
 * cortField:'publishTime' | 'orderNum' | 'evaluateNum'
 * }
 */


export function getSubCategoryAPI(data){
    return request({
        url:'/category/goods/temporary',
        method:'POST',
        data//Post请求不用params,不拼接在url
    })
}
