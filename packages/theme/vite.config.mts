import { nodeResolve } from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react-swc';
import { glob } from 'glob';
import dts from 'vite-plugin-dts';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

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
    nodeResolve(),
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
      preserveEntrySignatures: 'allow-extension',
      external: ['@emotion/styled', '@emotion/react', 'react', 'react-dom'],
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
    setupFiles: './setuptests.ts',
    css: true,
    server: {
      deps: {
        fallbackCJS: true,
      },
    },
  },
});
