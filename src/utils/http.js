//axios的基础封装
import axios from 'axios'
import {ElMessage} from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {useUserStore} from '@/stores/user'
import router from '@/router'

const httpInstance = axios.create({//奥秘就在axios,他负责前后端的数据交换
  //这里的create只是创建一个axios的实例并且配置属性,然后封装给httpInstance
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})


//拦截器配置
//axios请求拦截器
httpInstance.interceptors.request.use(config => {
  //1.从pinia获取token数据
  const userStore=useUserStore()
  
  const token=userStore.userInfo.token
  if(token){
    config.headers.Authorization=`Bearer ${token}`//此处为后端要求的格式
  }

  return config
}, e => Promise.reject(e))

//axois响应式拦截器
httpInstance.interceptors.response.use(
  //取响应数据的res
  //如果异常了await会抛出e,被拦截器捕获
  res => res.data,//从后端接收的json中只取data并封装进res中
  e => {//如果失败了则原样抛回去
    const userStore=useUserStore()
    ElMessage({
      type:'warning',
      message:e.response.data.message
    })

    //401token失效处理
    //1.清除本地用户数据
    //2.跳转到登录页
    if(e.response.status===401){
      userStore.clearUserInfo()
      router.push('/login')
    }
    return Promise.reject(e)
  })

export default httpInstance
