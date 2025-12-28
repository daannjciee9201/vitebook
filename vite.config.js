// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // 這裡可以加入一些全域變數設定
        quietDeps: true, // 隱藏 Bootstrap 的一些警告訊息
      },
    },
  },
  server: {
    port: 5173,
    open: true // 自動開啟瀏覽器
  }
})