<script setup>
import{ref} from 'vue'

// props适配图片列表
defineProps({
    imageList:{
        type:Array,
        default:()=>[]
    }
})

//激活的下标值.就是大图现在预览的图
const activeIndex=ref(0)

//对应的事件
function enterHandler(i){
    activeIndex.value=i
}

</script>
i

<template>
  <div class="goods-image">
    <!-- 左侧大图-->
    <div class="middle" ref="target">
      <img :src="imageList[activeIndex]" alt="" />
    </div>
    <!-- 小图列表 -->
    <ul class="small">
        <!-- 绑定一个鼠标滑入的事件,可以传参数过去,后面那个是动态class控制 -->
      <li v-for="(img, i) in imageList" :key="i" @mouseenter="enterHandler(i)" :class="{actice:i===activeIndex}">
        <img :src="img" alt="" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
    left: 0;
    top: 0;
    position: absolute;
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>