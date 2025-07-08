import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "#const": resolve(__dirname, 'src/const'),
      '#core': resolve(__dirname, 'src/module/Core'),
      '#about': resolve(__dirname, 'src/module/About'),
      '#app-list': resolve(__dirname, 'src/module/AppList'),
      '#pixel-canvas': resolve(__dirname, 'src/module/PixelCanvas'),
      '#poke': resolve(__dirname, 'src/module/Poke'),
      "#weather": resolve(__dirname, 'src/module/Weather'),
      "#e404": resolve(__dirname, 'src/module/E404'),
    }
  }
});
