import {defineStore} from 'pinia'
import {ref} from 'vue'
import {loginAPI} from '@/apis/user'

//Pania的作用:让这个封装的方法变成全局共享一份,就好像静态类一样

export const useUserStore=defineStore('user',()=>{
    //1.定义管理用户数据的state
    const userInfo=ref({})
    //2.定义获取接口数据的action函数
    async function getUserInfo({account,password}){
        const res=await loginAPI({account,password})
        userInfo.value=res.result
    }

    function clearUserInfo(){
        userInfo.value={}
    }

    //3.以对象的格式把state和action return
    return{
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},{
    persist:true,//开启持久化
})