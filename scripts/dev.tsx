import { assert } from '@cutting/assert';
import { execSync } from 'child_process';
import chokidar from 'chokidar';
import type { ViteDevServer } from 'vite';
import { createServer } from 'vite';
import path from 'path';

const watchPaths = [
  'packages/theme/src',
  'packages/core/src',
  'packages/component-library/src',
];

const root = path.resolve('apps/mentor');

function getPackage(path: string): string {
  if (path.startsWith('packages/theme/src')) {
    return '@nobarrels/theme';
  } else if (path.startsWith('packages/core/src')) {
    return '@harbour/core';
  } else if (path.startsWith('packages/component-library/src')) {
    return '@nobarrels/component-library';
  } 

  throw new Error(`no package found at ${path}`);
}

export function createDevServer(): () => Promise<void> {
  let viteServer: ViteDevServer | null = null;

  async function startVite(): Promise<void> {
    viteServer = await createServer({
      logLevel: 'info',
      root,
      base: './',
      clearScreen: false,
      server: {
        watch: {
          ignored: /^(?:.*[\\\/])?(node_modules|dist)[\\\/]?.*$/,
        },
      },
    });

    await viteServer.listen(3300, false);
    viteServer.printUrls();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>): void => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => fn(...args), delay);
    };
  }

  async function restartVite() {
    if (viteServer) {
      await viteServer.restart(false);
    }
  }

  const restart = debounce(async (path: string) => {
    assert(!!path, `no path`);
    console.log('------------------------------');
    console.log('Restarting Vite server...');
    try {
      const pkg = getPackage(path);
      console.log(`found package changes in ${pkg}`);
      console.log('------------------------------');
      execSync(`pnpm turbo run build --filter="${pkg}"`, { stdio: 'inherit' });
      await restartVite();
    } catch (err) {
      console.error(err);
    }
  }, 500);

  chokidar
    .watch(watchPaths, {
      ignored: /^(?:.*[\\\/])?(node_modules|dist)[\\\/]?.*$/,
      ignoreInitial: true,
      depth: 30,
      alwaysStat: true,
      followSymlinks: false,
      ignorePermissionErrors: true,
      atomic: true,
      awaitWriteFinish: {
        stabilityThreshold: 500,
        pollInterval: 250,
      },
    })
    .on('all', (event, path) => {
      console.log('------------------------------');
      console.log({ path });
      console.log(`File ${path} changed, scheduling Vite restart...`);
      console.log('------------------------------');
      restart(path);
    })
    .on('ready', () => {
      console.log('we are ready');
    });

  return startVite;
}
