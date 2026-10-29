import request from '@/utils/request.js'
import { useTokenStore } from '@/stores/token.js'
//  获取文章分类
 export  const articlecategoryListService= ()=>{
    // 在发送请求之前通过usetokenStore获取token 
       const tokenStore =  useTokenStore();
    //    在pinia中定义的响应式数据都不要.value
       return request.get('/category/list',{headers:{'Authorization':tokenStore.token}})
 }
// 获取文章分类列表
// export const articleCategoryListService = ()=>{
//     //const tokenStore = useTokenStore();
   
//     //return request.get('/category',{headers:{'Authorization':tokenStore.token}})
//     return request.get('/category/list')
// }
// // 新增文章分类
// export const articleCategoryAddService = (categoryData)=>{
//     return request.post('category/add', categoryData)
// }

// // 更新文章分类
// export const articleCategoryUpdateService = (categoryData)=>{
//     return request.put('/category/update', categoryData)
// }

// // 删除文章分类
// export const articleCategoryDeleteService = (id) => {
//     return request.delete('/category/delete', { params: { id } })
// }

// // 展示文章
// export const articleListService = (params)=>{
//     return request.get('/article/list', {params:params})
// }

// /* 新增文章 */
// export const articleAddService = (articleData)=>{
//     return request.post('/article/add',articleData)
// }

// /* 修改文章 */
// export const articleUpdateService = (articleData)=>{
//     return request.put('/article/update',articleData)
// }
// // 根据id删除文章
// export const articleDeleteService = (id)=>{
//     return request.delete('/article/delete',{params:{id} })
// }