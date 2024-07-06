import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { glob } from 'glob';

function getEntryPoints() {
  const entries: string[] = [];
  const patterns = ['src/**/*.ts*'];

  for (const pattern of patterns) {
    const files = glob.sync(pattern);
    for (const file of files) {
      if (file.includes('__mocks__') || file.includes('.test.')) {
        continue;
      }
      entries.push(file);
    }
  }

  return entries;
}

const entries = getEntryPoints();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({ tsconfigPath: 'tsconfig.dist.json', insertTypesEntry: true, logLevel: 'error' }),
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
    dedupe: ['react', 'react-dom', '@emotion/react'],
  },
  build: {
    manifest: true,
    minify: true,
    outDir: './dist/esm',
    sourcemap: 'inline',
    lib: {
      entry: [...entries],
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        '@emotion/styled',
        '@emotion/react',
        /^@nobarrels\/.*/,
        '@material-table/core',
        /^@mui\/.*/,
        /^@rjsf\/.*/,
        /^@tanstack\/.*/,
        'axios',
        'date-fns',
        'react',
        'react-dom',
        'react-router-dom',
        'react-use',
        'zen-observable',
        'zod',
        'zustand',
      ],
      input: [...entries],
      output: {
        preserveModulesRoot: 'src',
        preserveModules: true,
        dir: 'dist/esm',
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
