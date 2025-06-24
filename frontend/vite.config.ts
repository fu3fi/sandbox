import { defineConfig } from 'vite';
import solid from 'solid-start/vite';
import path from 'path';

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
});
