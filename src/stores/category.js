import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
//Pinia的主要作用就是将数据的调用封装起来
//变成全局性的响应式,只要数据变了全局就会变.像单例方法

//将这个方法导出为useCategoryStore
export const useCategoryStore =
  //定义为pinia仓库,仓库名为category
  defineStore('category', () => {
    //state导航数据列表
    const categoryList = ref([])
    //action获取导航数据的方法
    const getCategory = async () => {
      const res = await getCategoryAPI()
      categoryList.value = res.result
    }

    return {
      categoryList,
      getCategory
    }
  })
