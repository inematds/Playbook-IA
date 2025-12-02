import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Playbook-IA/',
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  preview: {
    allowedHosts: ['3000-ipxioi0x16zdyte00malr-d0b9e1e2.sandbox.novita.ai']
  },
  build: {
    outDir: 'dist'
  }
})