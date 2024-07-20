import { nodeResolve } from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react-swc';
import { glob } from 'glob';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getEntryPoints() {
  const entries: string[] = [];
  const patterns = ['src/**/*.ts*'];

  for (const pattern of patterns) {
    const files = glob.sync(pattern);
    for (const file of files) {
      if (file.includes('__mocks__') || file.includes('.test.')) {
        continue;
      }
      if (file.endsWith('/App.tsx')) {
        continue;
      }
      entries.push(file);
    }
  }

  return entries;
}

const entries = getEntryPoints();

console.dir(entries, { depth: 8 });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({ tsconfigPath: 'tsconfig.dist.json', insertTypesEntry: true, logLevel: 'error' }),
    tsconfigPaths(),
    nodeResolve(),
    react(),
  ],
  resolve: {
    dedupe: ['react', 'react-dom', '@emotion/react', '@mui/material'],
  },
  logLevel: 'warn',
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
        '@emotion/react',
        '@emotion/styled',
        /^@nobarrels\/.*/,
        /^@mui\/.*/,
        'date-fns',
        'react',
        'react-dom',
        'react-router-dom',
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
    server: {
      deps: {
        fallbackCJS: true,
      },
    },
  },
});
