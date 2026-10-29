//����request.js����

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