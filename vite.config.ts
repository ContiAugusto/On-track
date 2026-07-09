import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import dotenv from 'dotenv'

dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  /*server: {
    proxy: {
      'api/produtos': {
        target:
          'https://www.bling.com.br/Api/v3/produtos?pagina=1&limite=1&criterio=1&tipo=T',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api/produtos', ''),
        headers: {
          Authorization: process.env.VITE_AUTHORIZATION,
          Cookie: process.env.VITE_COOKIE,
        },
      },
    },
  },*/
})
