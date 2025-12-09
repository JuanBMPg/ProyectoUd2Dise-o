// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/ProyectoUd2Dise-o/',  // Nombre de tu repositorio de GitHub
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        registro: resolve(__dirname, 'registro.html'),
        triaje: resolve(__dirname, 'triaje.html'),
      },
    },
  },
})