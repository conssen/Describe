import { createRouter, createWebHistory } from 'vue-router'

// //导入使用的组件
// import LoginVue from '@/views/Login.vue' 
// import LayoutVue from '@/views/Layout.vue'

// import ArticleCategoryVue from '@/views/article/ArticleCategory.vue'
// import ArticleManageVue from '@/views/article/ArticleManage.vue'

// import UserAvatarVue from '@/views/user/UserAvatar.vue'
// import UserInfoVue from '@/views/user/UserInfo.vue'
// import UserResetPasswordVue from '@/views/user/UserResetPassword.vue'


// /* 定义路由关系 */
// const routes = [
//     { path: '/login', component: () => import('@/views/Login.vue') },
//     { path: '/', component: () => import('@/views/Layout.vue'), redirect: '/article/manage', children: [
//         { path: '/article/category', component: () => import('@/views/article/ArticleCategory.vue') },
//         { path: '/article/manage', component: () => import('@/views/article/ArticleManage.vue') },
//         { path: '/user/info', component: () => import('@/views/user/UserInfo.vue') },
//         { path: '/user/avatar', component: () => import('@/views/user/UserAvatar.vue') },
//         { path: '/user/resetPassword', component: () => import('@/views/user/UserResetPassword.vue') }
//     ]} 
// ]

// // 创建路由器  createrwebHistory 不带# hash带#
// const router = createRouter({
//     history:createWebHistory(),
//     routes: routes
// })

// export default router

// import {createRouter ,createWebHistory} from 'vue-router' // 引入路由模块

/* 导入相关组件 */
import LayoutVue from '@/views/Layout.vue'
import LoginVue from '@/views/Login.vue'
import ArticleCategoryVue from '@/views/article/ArticleCategory.vue'
import ArticleManageVue from '@/views/article/ArticleManage.vue'
import UserAvatarVue from '@/views/user/UserAvatar.vue'
import UserInfoVue from '@/views/user/UserInfo.vue'
import UserResetPasswordVue from '@/views/user/UserResetPassword.vue'
/* 定义路由关系 */
const routes = [
    {
        path: '/login', //描述访问路径
        component: LoginVue //显示对应的组件 也就是对应的页面效果
    },
    {
        path: '/',
        component: LayoutVue,
        // 重定向
        redirect: 'article/manage',
        // 配置相关子路由将他们的页面效果展示在当前layout页面中
        children: [
            { path: '/article/category', component: ArticleCategoryVue },
            { path: '/article/manage', component: ArticleManageVue },
            { path: '/user/avatar', component: UserAvatarVue },
            { path: '/user/info', component: UserInfoVue },
            { path: '/user/resetPassWord', component: UserResetPasswordVue },
        ]
    },


]
/* 创建路由器 */
const router = createRouter({
    // routes --->路由表 对应着上面定义的路由关系
    routes: routes,
    history: createWebHistory()
})

/* 导出路由 */
export default router
