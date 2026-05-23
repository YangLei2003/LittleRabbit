import {ref,onMounted} from 'vue'
import { getBannerAPI } from '@/apis/home'

//获取Banner
export function useBanner(){
const bannerList = ref([])

async function getBanner() {
  const res = await getBannerAPI({
    distributionSite: '2'//接口文档是要求字符串
  })
  bannerList.value = res.result
}

onMounted(() => getBanner())

return{
  bannerList
 }
}