<template>
  <!-- 二级路由 -->
  <LayoutFixed/>
  <LayoutNav/>
  <LayoutHeader/>
  <!-- 添加key,禁止缓存复用而强制销毁冲减组件 -->
  <!-- <RouterView :key="$route.fullPath"/> -->
  <RouterView/>
  <LayoutFooter/>
</template>

<script setup>
import LayoutFixed from './components/LayoutFixed.vue';
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'


</script>
