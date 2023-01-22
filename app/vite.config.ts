import react from '@vitejs/plugin-react-swc'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:4015',
        secure: false,
      },
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/app/' : '/',
})
