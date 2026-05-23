<script setup>
import {getHotGoodsAPI} from '@/apis/detail'
import {useRoute} from 'vue-router'
import { onMounted,ref ,computed} from 'vue';

//设计props参数,这样就能够动态的控制发往后端的参数
const props=defineProps({
    hotType:{
        type:Number
    }
})

const TYPEMAP={
    1:'24小时热榜',
    2:'周热榜'
}
//这里根据传入<DetailHot :hot-type="2"/>的参数定义了title的具体数值
const title=computed(()=>TYPEMAP[props.hotType])

const hotList=ref([])
const route=useRoute()
const hotGoodsData=ref({
    id:route.params.id,
    type:props.hotType
})

async function getHotList(){
    const res=await getHotGoodsAPI(hotGoodsData.value)//注意!传入的对象封装需要用ref响应式来包裹,用的时候要value
    hotList.value=res.result
}

onMounted(()=>getHotList())
</script>


<template>
  <div class="goods-hot">
    <h3>{{title}}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in hotList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{item.name}}</p>
      <p class="desc ellipsis">{{item.desc}}</p>
      <p class="price">&yen;{{item.price}}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>