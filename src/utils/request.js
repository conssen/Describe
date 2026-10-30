import axios from 'axios';
import { useTokenStore } from '@/stores/token';
import { ElMessage } from 'element-plus'
const baseURL = '/api';
const instance = axios.create({baseURL})
/* 在请求then或catch进行拦截  由于后端配置了jwt令牌 需要token验证  这里进行了抽取封装成了store*/ 
instance.interceptors.request.use( 
    // 请求头的config配置
    (config)=>{ 
/* pinia抽取同类代码  请求前的回调 */ 
        const tokenStore = useTokenStore();
        if(tokenStore.token){
            config.headers.Authorization = tokenStore.token
        }
        return config;
    },
    (err)=>{
        Promise.reject(err)
    }
)

// 导入路由器
import router from '@/router'
/* 添加响应拦截器 */
instance.interceptors.response.use(
    result=>{
    // 判断业务状态码
        if(result.data.code === 1){
            return result.data;
        }
        ElMessage.error(result.data.msg ? result.data.msg : '服务异常')
        return Promise.reject(result.data)
    },
    err=>{
        //判断响应状态码，如果为401，则证明未登录，提示登录，并跳转登陆页面
        if(err.response.status === 401){
            ElMessage.error('请先登录')
            // 跳转
            router.push('/login')
        }else{
            ElMessage.error('服务异常');
        }
      
        return Promise.reject(err);
    }
)

export default instance;