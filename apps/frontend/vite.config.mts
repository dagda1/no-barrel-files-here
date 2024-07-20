import react from '@vitejs/plugin-react-swc';
import path from 'path';
import dts from 'vite-plugin-dts';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const isTest = process.env.NODE_ENV === 'test';
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({ tsconfigPath: isTest ? 'tsconfig.json' : 'tsconfig.dist.json', logLevel: 'error' }),
    nodePolyfills({
      globals: {
        Buffer: true,
      },
    }),
    tsconfigPaths(),
    react(),
  ],
  logLevel: 'warn',
  resolve: {
    dedupe: ['react', 'react-dom', '@emotion/react', 'vite-plugin-node-polyfills'],
    alias: {
      '@nobarrels/component-library': path.resolve(__dirname, '../../packages/component-library/src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  build: {
    sourcemap: isDev && 'inline',
    minify: isProd,
    rollupOptions: {
      external: [/^@types\/.*/],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
        },
        format: 'esm',
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './setuptests.ts',
    server: {
      deps: {
        fallbackCJS: true,
      },
    },
  },
});
