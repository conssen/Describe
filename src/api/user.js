// 定义发出异步请求


import request from '@/utils/request.js'
// 用户注册

export const userRegisterService = (registerData)=>{
    const params = new URLSearchParams()
    for(let key in registerData){
        params.append(key, registerData[key]);
    }
    return request.post('/user/register', params)
}


// 用户登录
export const userLoginService = (loginData)=>{
    const params = new URLSearchParams()
    for(let key in loginData){
        params.append(key, loginData[key]);
    }
    return request.post('/user/login', params)
}

// 获取用户信息
export const userInfoService = ()=>{
    return request.get('/user/userInfo')

}
// 更新用户
export const userInfoUpdateService = (userInfoData)=>{
    return request.put('/user/update', userInfoData)
}
// 更换用户 头像
export const userAvatarUpdateService = (avatarUrl)=>{
    const params  = new URLSearchParams();
    params.append('avatarUrl', avatarUrl) 
    return request.patch('/user/updateAvatar', params)
}

// 更换用户密码
export const userPasswordUpdateService = (passwordData)=>{

    return request.patch('/user/updatePwd', passwordData);
} 


// import request from '@/utils/request'  /* 导入request.js 请求响应拦截器 */

// 提供调用注册接口的函数
// export default userRegisterService = (registerData) => {
//     // 借助UrlSearchParams完成参数传递  作用是统一请求格式
//     const params = new URLSearchParams()
//     for (let key in registerData) {
//         params.append(key, registerData[key])
//     }
//     return request.post('/user/register', registerData);
// }

// /* 提供调用接口获取登录函数 */
// export const  userLoginService =(LoginData)=>{
//     // 接收参数 new URLSearchParams 就是一个表单容器参数
//     const params = new URLSearchParams()
//     // 然后将接收过来的LoginData中的参数添加到表单容器中
//     for (let key in LoginData){
//          params.append(key, LoginData[key])
//     }
//     // 发出请求
//     return request.post('/user/login',LoginData)
// }


