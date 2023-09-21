import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Aici puteți adăuga orice opțiuni specifice pentru SCSS
      },
    },
  },
});
