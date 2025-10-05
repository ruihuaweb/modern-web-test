import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/modern-web-test/'   // 👈 這裡加上你的 repo 名稱
})
