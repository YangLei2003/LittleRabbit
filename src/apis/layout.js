import httpInstance from "@/utils/http";

export function getCategoryAPI() {
  return httpInstance({//调用getCategoryAPI会return 从后端查询来的数据
    url: '/home/category/head',//Mapping路径
    method: "get"//请求方式
  })
}
