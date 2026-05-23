import { useIntersectionObserver } from '@vueuse/core'//懒加载所需的判断某个元素是否进入视图

//定义懒加载插件
export const lazyPlugin = {
  install(app) {
    //懒加载指令逻辑
    //定义全局指令
    app.directive('img-lazy', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(
          el,//选择绑定的元素
          ([{ isIntersecting }]) => {//这个isIntersecting是个bolean值,当为true时执行代码
            if (isIntersecting) {
              el.src = binding.value//当为ture也就是图片进入视图后,让el的src=bindin.value,等价于img.src=item.picture,当等式成立时显示图片
              stop()//当执行完毕后stop.不会再重复监听这一条元素
            }
          },
        )
      }
    })
  }
}
