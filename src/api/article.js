import request from '@/utils/request.js'
import { useTokenStore } from '@/stores/token.js'

// 获取文章分类列表
export const articleCategoryListService = ()=>{
    //const tokenStore = useTokenStore();
   
    //return request.get('/category',{headers:{'Authorization':tokenStore.token}})
    return request.get('/category/list')
}
// 新增文章分类
export const articleCategoryAddService = (categoryData)=>{
    return request.post('category', categoryData)
}



// 更新文章分类
export const articleCategoryUpdateService = (categoryData)=>{
    return request.put('/category', categoryData)
}

// 删除文章分类
export const articleCategoryDeleteService = (id)=>{
    return request.delete ('/category?id='+id)
}

// 展示文章
export const articleListService = (params)=>{
    return request.get('/article/list', {params:params})
}

/* 新增文章 */
export const articleAddService = (articleData)=>{
    return request.post('/article',articleData)
}

/* 修改文章 */
export const articleUpdateService = (articleData)=>{
    return request.put('/article',articleData)
}
// 根据id删除文章
export const articleDeleteService = (id)=>{
    return request.delete('/article?id='+id)
}