import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite acesso de qualquer host
    allowedHosts: [
      'rooms-sector-viewpicture-liked.trycloudflare.com',
      '.trycloudflare.com' // Permite todos os subdomínios do trycloudflare
    ]
  }
})
