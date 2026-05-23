//封装所有和用户有关的接口
import request from '@/utils/http'

//此处需要解构
export function loginAPI({account,password}){
    return request({
        url:'/login',
        method:'post',
        data:{
            account,
            password
        }
    })
}