import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  define: {
    global: 'window',
  },
  plugins: [
    react(),
    EnvironmentPlugin([
      'VITE_CONTRACT_ID',
      'VITE_GAME_API_URL',
      'VITE_PARAS_API_URL',
      'VITE_API_URL',
    ]),
  ],
  proxy: 'https://api.playatrium.com',
  server: {
    cors: false,
    hmr: { overlay: false },
    host: true,
    open: true,
  },
})
