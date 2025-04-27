import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { getCurrentSiteUrl, getCurrentBaseUrl, getCurrentAssetsUrl, ASSETS_URL } from './src/lib/constants.ts';
import { URL } from 'node:url';
import { initSentry, captureException } from './src/lib/sentry';
import glob from 'fast-glob';
import { promises as fs } from 'fs';

initSentry(); // SentryをAstro起動時に初期化

// ビルド環境に合わせた内容を取得
const siteUrl = getCurrentSiteUrl();
const baseUrl = getCurrentBaseUrl();
const assetsUrl = getCurrentAssetsUrl();
const outDirUrl = `./dist${getCurrentBaseUrl()}`; // 最後のスラッシュは削除

// ASSETS_URLが有効な場合のアセット出力先を設定
const assetsDir = ASSETS_URL.STATUS ? 
  new URL(assetsUrl).pathname.replace(/^\//, '') : 
  '_astro';

export default defineConfig({
  site: siteUrl,
  base: baseUrl,
  outDir: outDirUrl,
  build: {
    // スタイルシートをインライン化するかどうか
    inlineStylesheets: 'never',
    // アセットディレクトリを明示的に指定
    assets: assetsDir,
    // アセットのプレフィックスを指定
    assetsPrefix: ASSETS_URL.STATUS ? assetsUrl : undefined,
  },
  integrations: [
    react(),
    {
      name: 'clean-dist-folder',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          try {
            const junkFiles = await glob(`${dir.pathname}/**/{.DS_Store,Thumbs.db,Desktop.ini}`);
            console.log(`Found ${junkFiles.length} junk files to delete`);

            for (const file of junkFiles) {
              await fs.unlink(file);
            }

            const macosxDirs = await glob(`${dir.pathname}/**/__MACOSX`);
            console.log(`Found ${macosxDirs.length} __MACOSX directories to delete`);

            for (const dirPath of macosxDirs) {
              const stats = await fs.stat(dirPath);
              if (stats.isDirectory()) {
                await fs.rm(dirPath, { recursive: true, force: true });
              }
            }

            console.log('Clean-up completed successfully');
          } catch (error) {
            console.error('--- Clean-up Dist Folder Error ---');
            console.error(`Error Message: ${error.message}`);
            console.error(`Stack Trace: ${error.stack}`);
            console.error('-----------------------------------');

            // 例外としてレポート
            captureException(error);
          }
          
        }
      }
    }
  ],
  devToolbar: {
    enabled: false // Astro標準搭載のツールバー表示有無
  },
  server: (e) => ({
    port: e.command === 'dev' ? 3000 : 4321,
    host: true, // ローカルネットワーク上の他のデバイスからもアクセス可能にしています。
    open: true  // サーバー起動時に自動的にブラウザを開くかどうかの設定
  }),
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: process.env.NODE_ENV === 'production', // コードを圧縮するかどうか
      assetsInlineLimit: 0, // 4KB以下の時に自動的にインラインで埋め込まれてしまうのを防ぐ
      rollupOptions: {
        output: {
          // アセットファイル名のカスタマイズ（必要に応じて）
          assetFileNames: (assetInfo) => {
            if (ASSETS_URL.STATUS) {
              // ASSETS_URLが有効な場合、特定のパス構造を維持
              const info = assetInfo.name.split('.')
              const extType = info[info.length - 1]
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                return `assets/images/[name][extname]`;
              } else if (/css/i.test(extType)) {
                return `assets/css/[name]-[hash][extname]`;
              } else if (/js/i.test(extType)) {
                return `assets/js/[name]-[hash][extname]`;
              }
              return `assets/[name]-[hash][extname]`;
            } else {
              // デフォルトの出力パターン
              return `_astro/[name].[hash][extname]`;
            }
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: { // Deprecation [legacy-js-api]が出るので対処
          api: "modern-compiler",
          // additionalData: `@use '@/assets/stylesheets/app.scss' as app;`
        },
      },
    },
    // 本番ビルドでのみconsole、debuggerを非表示する設定
    esbuild: (process.env.NODE_ENV === 'production' ) ? { drop: ['console', 'debugger'] } : {},
  }
});