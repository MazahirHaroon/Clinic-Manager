import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      "@public/*": "./public/*",
      "@constants/*": "./src/constants/*",
      "@common-components": "/src/components/common",
      "@common-components/*": "/src/components/common/*",
      "@components": "/src/components",
      "@components/*": "/src/components/*",
    }
  }
})