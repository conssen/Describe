import {createRouter, createWebHistory} from 'vue-router'

//�������
import LoginVue from '@/views/Login.vue' 
import LayoutVue from '@/views/Layout.vue'

import ArticleCategoryVue from '@/views/article/ArticleCategory.vue'
import ArticleManageVue from '@/views/article/ArticleManage.vue'

import UserAvatarVue from '@/views/user/UserAvatar.vue'
import UserInfoVue from '@/views/user/UserInfo.vue'
import UserResetPasswordVue from '@/views/user/UserResetPassword.vue'



const routes = [
    { path: '/login', component: () => import('@/views/Login.vue') },
    { path: '/', component: () => import('@/views/Layout.vue'), redirect: '/article/manage', children: [
        { path: '/article/category', component: () => import('@/views/article/ArticleCategory.vue') },
        { path: '/article/manage', component: () => import('@/views/article/ArticleManage.vue') },
        { path: '/user/info', component: () => import('@/views/user/UserInfo.vue') },
        { path: '/user/avatar', component: () => import('@/views/user/UserAvatar.vue') },
        { path: '/user/resetPassword', component: () => import('@/views/user/UserResetPassword.vue') }
    ]} 
]

// 不带#号
const router = createRouter({
    history:createWebHistory(),
    routes: routes
})

export default router