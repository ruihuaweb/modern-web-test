import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/modern-web-test/',  // ⚠️ 一定要這樣寫
  server: {
    host: '0.0.0.0',
    port: 5000
  }
})
