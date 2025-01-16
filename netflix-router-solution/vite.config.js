import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  globals: true, environment: 'jsdom', setupFiles: './src/tests/setup.js', css: true,
})
