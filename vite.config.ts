import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/site-revival-project/',
  plugins: [react()],
})
