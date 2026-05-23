//把components中的所有组件都进行全局化的注册,这样就可以通过插件的方式进行通用化
import ImageView from './ImageView/index.vue'
import Sku from './XtxStu/index.vue'

export const componentPlugin={
    install(app){
        app.component('XtxImageView',ImageView)
        app.component('XtxSku',Sku)
    }
}