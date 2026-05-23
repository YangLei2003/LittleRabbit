import {ref,onMounted} from 'vue'
import { getCategoryAPI } from '@/apis/category'
import {useRoute} from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory(){
const categoryData = ref({})//后端返回的是对象类型的,所以需要定义一个空对象用以接收
const route = useRoute()//获取了路由参数

async function getCategory(id=route.params.id) {//如果有方法手动给getCategory传参,就用传的,没有的话就用等号右边的默认
  const res = await getCategoryAPI(id)//此处必须与router定义的传参类型一致,params或query
  categoryData.value = res.result
}

//当路由参数变化的时候,重新发送接口请求
onBeforeRouteUpdate((to)=>{//这个to可以获取前端发的请求
  getCategory(to.params.id)
})

onMounted(() => getCategory())

return{
categoryData
}
}
