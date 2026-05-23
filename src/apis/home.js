import httpInstance from '@/utils/http'

//获取banner轮播图
export function getBannerAPI(params = {}) {
  //接口文档要求默认为1,商品为2
  //解构,默认是1
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    method: "get",
    params: {
      distributionSite
    }
  })
}

//获取新鲜好物
export function findNewAPI() {
  return httpInstance({
    url: '/home/new',
    method: "get"
  })
}

//获取人气推荐
export function findHotAPI() {
  return httpInstance({
    url: '/home/hot',
    method: "get"
  })
}

//获取所有商品模块
export function getGoodAPI() {
  return httpInstance({
    url: '/home/goods',
    method: "get"
  })
}
