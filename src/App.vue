<script setup>
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';

const categoryStore=useCategoryStore()
//不能直接onMounted(categoryStore.getCategory()),这样相当于先调用getCategory()方法再赋值给onMounted
//这个生命周期的钩子函数是,当钩子触发时,调用getCategory()方法,所以要()=>
onMounted(()=>categoryStore.getCategory())
</script>

<template>
  <!-- 一级路由出口组件 -->
  <RouterView/>
</template>

<style scoped></style>
