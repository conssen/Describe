//定义store  pinia状态管理器  将axios发出的请求携带token
import {defineStore} from 'pinia'
import {ref} from 'vue'
// 保存请求头信息  token

// 第一个参数用来记录id

// 第二个参数是一个函数用来定义状态

//  返回值也是一个函数 useTokenStore 在别的组件通过导入这个模块 可以获取到第二个函数所定义的内容
export const useTokenStore = defineStore('token', ()=>{
            // 定义响应式变量
            const token =ref('')

            // 定义函数用来响应token的值
            const setToken=(newToken)=>{
                    token.value =newToken
            }
            // 清除token
            const removeToken =()=>{
                token.value=''
            }
            // 返回一个js对象
            return {setToken,removeToken,token}
    },{
        // 持久化存储
        persist:true
    }
)

