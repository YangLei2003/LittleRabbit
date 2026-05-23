<script setup>
import {useRoute} from 'vue-router'
import { getCategoryFilterAPI ,getSubCategoryAPI} from '@/apis/category';
import { onMounted,ref } from 'vue';
import GoodsItem from '../Home/components/GoodsItem.vue';

const CategoryData=ref({})
const route=useRoute()

async function getCategoryData(){
    const res=await getCategoryFilterAPI(route.params.id)
    CategoryData.value=res.result
}

onMounted(()=>getCategoryData())

const goodList=ref([])

/**POST接口返回的数据
 * data{
 * categoryId:1005000,
 * page:1,
 * pageSize:20,
 * cortField:'publishTime' | 'orderNum' | 'evaluateNum'
 * }
 */
const requestData=ref({//要设计一个const定义传给后端参数的对象
    categoryId:route.params.id,
    page:1,
    pageSize:20,
    sortField:'publishTime'
})

async function getGoodList() {
    const res=await getSubCategoryAPI(requestData.value)//把const对象传给后端,将返回的对象封装在res中
    goodList.value=res.result.items
}

onMounted(()=>getGoodList())

//点击lable触发的事件,重新请求一遍后端接口就可以啦
function tabChange(){
    requestData.value.page=1
    getGoodList()
}

const disable=ref(false)

async function load(){
    requestData.value.page++
    const res=await getSubCategoryAPI(requestData.value)//这里不能调用整个请求方法,因为要做新老数据的拼接
    //新老数据的拼接
    goodList.value=[...goodList.value,...res.result.items]
    if(res.result.items.length===0){
        disable.value=true
    }
}

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${CategoryData.parentId}` }">{{ CategoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{CategoryData.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
        <!-- 这里el会自动把label的name赋值给requestData.sortField -->
      <el-tabs v-model="requestData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <!-- 无限滚动功能,会自动监测,滚动时触发"load"函数,disable为true时停止监测,也就是到底了 -->
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disable">
         <!-- 商品列表-->
          <goods-item v-for="goods in goodList" :goods="goods" :key="goods.id"/>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>