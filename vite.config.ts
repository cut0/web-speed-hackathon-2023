import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

export default defineConfig(async ({ mode }) => {
  return {
    build: {
      minify: true,
    },
    plugins: [
      react(),
      mode === 'analyze' &&
        visualizer({
          brotliSize: true,
          filename: 'dist/stats.html',
          gzipSize: true,
          open: true,
        }),
    ],
  };
});
