// 在vite中配置服务器的端口 
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
// 配置服务器的代理 解决跨域问题也就是 端口不一致  在后端的话通常为CrossOrgin 
  server: {
    proxy: {
      '/api':{ /* 获取路径中包含/api的请求 */
        target:'http://localhost:8080',//目标服务器
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,'')//
      }
    }
  }
})
