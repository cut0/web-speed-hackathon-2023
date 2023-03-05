import preact from '@preact/preset-vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(async ({ mode }) => {
  return {
    build: {
      minify: true,
    },
    plugins: [
      preact({
        babel: {
          plugins: [
            [
              '@emotion',
              {
                autoLabel: 'dev-only',
                cssPropOptimization: true,
                labelFormat: '[local]',
                // sourceMap is on by default but source maps are dead code eliminated in production
                sourceMap: false,
              },
            ],
          ],
        },
      }),
      viteCompression(),

      mode === 'analyze' &&
        visualizer({
          brotliSize: true,
          filename: 'dist/stats.html',
          gzipSize: true,
          open: true,
        }),
    ],
    resolve: {
      alias: {
        react: 'preact/compat',
      },
    },
  };
});
