//定义store 
import {defineStore} from 'pinia'
import {ref} from 'vue'
// 保存请求头信息  token
export const useTokenStore = defineStore('token',()=>{

    const token = ref('')
    const setToken = (newToken)=>{
        token.value = newToken
    }

    const removeToken = ()=>{
        token.value = ''
    }
    return  {
        token, setToken, removeToken 
    }
},{
    //持久化存储
    persist:true
});

