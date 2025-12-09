import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
  base: "/ProyectoUd2Dise-o/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        medicacion: resolve(__dirname, 'hoja-medicacion.html'),
        camas: resolve(__dirname, 'mapa-camas.html'),
      },
    },
  },
});
