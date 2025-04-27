**日本語** | [English](./README.md)

# Astro + TailwindCSS + shadcn/ui テンプレート

このプロジェクトは、モダンなWeb開発に必要な機能を備えた包括的なテンプレートです。Astro、TailwindCSS v4、shadcn/ui、React、TypeScriptを統合し、環境別のビルド設定とエラートラッキングも含まれています。

![License](https://img.shields.io/badge/License-MIT-green.svg)
![Astro](https://img.shields.io/badge/Astro-5.7.5-BC52EE.svg)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.4-38BDF8.svg)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-2.5.0-000000)

## 🚀 特徴

- **Astro v5**: 高速でモダンな静的サイトジェネレーター
- **TailwindCSS v4**: 最新のユーティリティファーストCSSフレームワーク
- **shadcn/ui**: 再利用可能でカスタマイズ可能なUIコンポーネント
- **React Integration**: Astro内でのReactコンポーネントの利用
- **TypeScript**: 型安全な開発環境
- **環境別設定**: 開発・ステージング・本番環境の自動切り替え
- **Sentry**: エラートラッキングと監視
- **カスタムパス設定**: ベースURL、アセットURLの柔軟な設定

## ⚡️ 必要環境

- Node.js: v20.9.0以上
- npm: v10.1.0以上

### Node.jsバージョン管理

プロジェクトで指定のNode.jsバージョンを使用するために、以下のツールの利用を推奨します：

- [nvm](https://github.com/nvm-sh/nvm) - Node Version Manager
- [fnm](https://github.com/Schniz/fnm) - Fast Node Manager
- [volta](https://volta.sh/) - JavaScript Tool Manager

プロジェクトにはVoltaの設定が含まれており、package.jsonで以下のように固定されています：

```json
"volta": {
  "node": "20.18.0",
  "npm": "10.8.2"
}
```

また、`.node-version`と`.nvmrc`ファイルも提供されています。

## 🛠️ 技術スタック

- **フレームワーク**: Astro v5
- **UI**: React v19, shadcn/ui
- **スタイリング**: TailwindCSS v4, Sass
- **ビルドツール**: Vite
- **言語**: TypeScript
- **エラートラッキング**: Sentry
- **パッケージ管理**: npm

## 📁 プロジェクト構造

> ```text
> /
> ├── public/                    # 静的ファイル
> │   └── assets/                # アセット（画像等）
> ├── src/
> │   ├── assets/                # アセット（SVG等）
> │   ├── components/            # UIコンポーネント
> │   │   ├── ui/                # shadcn/uiコンポーネント
> │   │   │   ├── badge.tsx
> │   │   │   ├── button.tsx
> │   │   │   ├── card.tsx
> │   │   │   ├── dialog.tsx
> │   │   │   ├── label.tsx
> │   │   │   ├── radio-group.tsx
> │   │   │   └── switch.tsx
> │   │   ├── Head.astro         # メタタグとSEO設定
> │   │   ├── Header.astro       # サイトヘッダー
> │   │   ├── HelpDialog.tsx     # ヘルプダイアログ
> │   │   ├── SettingsDialog.tsx # 設定ダイアログ
> │   │   └── Welcome.astro      # ウェルカムページ
> │   ├── layouts/               # レイアウトコンポーネント
> │   │   └── Layout.astro       # メインレイアウト
> │   ├── lib/                   # ユーティリティと設定
> │   │   ├── constants.ts       # 環境設定と定数
> │   │   ├── sentry.ts          # エラートラッキング
> │   │   └── utils.ts           # ユーティリティ関数
> │   ├── pages/                 # ページコンポーネント
> │   │   ├── index.astro        # トップページ
> │   │   └── hoge/              # サブディレクトリページ例
> │   └── styles/                # グローバルスタイル
> │       └── global.css         # TailwindCSSと変数定義
> ├── LICENSE                    # ライセンス
> ├── astro.config.mjs           # Astro設定
> ├── tailwind.config.js         # TailwindCSS設定
> ├── components.json            # shadcn/ui設定
> ├── tsconfig.json              # TypeScript設定
> └── package.json               # 依存関係とスクリプト
> ```

## 📦 セットアップ

> ```bash
> # リポジトリのクローン
> git clone [your-repository-url]
> 
> # 依存関係のインストール
> npm install
> 
> # 開発サーバーの起動
> npm run dev
> ```

## 🔧 コマンド

| コマンド | 説明 |
|:---------|:-----|
| `npm run dev` | 開発サーバーを起動（http://localhost:3000） |
| `npm run build` | 本番用にビルド |
| `npm run stg` | ステージング環境用にビルド |
| `npm run prod` | 本番環境用にビルド |
| `npm run preview` | ビルド結果をプレビュー |

## ⚙️ 環境設定

### 環境変数とURL設定

このプロジェクトでは、開発・ステージング・本番の各環境で異なるURLを使用できる柔軟な設定システムを採用しています。

> ```typescript
> // src/lib/constants.ts
> export const setSiteUrl = {
>   "SITE_URL": {
>     "DEV": "http://dev.hoge.com/",
>     "STG": "http://stg.hoge.com/",
>     "PROD": "http://prod.hoge.com/"
>   },
>   "BASE_URL": {
>     "STATUS": false,  // trueに設定するとサブディレクトリ配置が有効
>     "DEV": "/hoge/",
>     "STG": "/hoge/",
>     "PROD": "/hoge/"
>   },
>   "ASSETS_URL": {
>     "STATUS": false,  // trueに設定すると別ドメインからのアセット配信が有効
>     "DEV": "http://dev.hoge.assets.com/",
>     "STG": "http://stg.hoge.assets.com/",
>     "PROD": "http://prod.hoge.assets.com/"
>   }
> }
> ```

### URL設定の詳細解説

#### 1. `SITE_URL` - サイトのルートURL
- 各環境のメインドメインを設定
- OGP、canonical URL、サイトマップなどのメタ情報に使用
- 例: `http://dev.hoge.com/`

#### 2. `BASE_URL` - サブディレクトリ配置
- `STATUS: true`に設定すると、サイトをサブディレクトリに配置
- ルートパスの代わりに指定したパスが使用される
- 例: `/hoge/` → `http://example.com/hoge/`のような配置が可能
- ビルド出力ディレクトリも自動的に調整される

#### 3. `ASSETS_URL` - 別ドメインアセット配信
- `STATUS: true`に設定すると、画像・CSS・JSなどのアセットを別ドメインから配信
- CDNを使用する場合などに便利
- アセットのビルドパスも自動的に調整される
- 例: `http://dev.hoge.assets.com/assets/images/logo.png`

### 使用例

> ```typescript
> // 現在の環境に基づいたURLを取得
> const currentSiteUrl = getCurrentSiteUrl();     // 例: "http://dev.hoge.com/"
> const currentBaseUrl = getCurrentBaseUrl();     // 例: "/hoge/" or "/"
> const currentAssetsUrl = getCurrentAssetsUrl(); // 例: "http://dev.hoge.assets.com/" or ""
> 
> // ビルド設定での自動適用
> export default defineConfig({
>   site: currentSiteUrl,
>   base: currentBaseUrl,
>   build: {
>     assets: ASSETS_URL.STATUS ? assetsDir : '_astro',
>     assetsPrefix: ASSETS_URL.STATUS ? currentAssetsUrl : undefined,
>   },
>   // ...
> });
> ```

### 設定の切り替え

環境の切り替えは、npm scriptsで管理されています：

> ```bash
> npm run dev   # NODE_ENV=development
> npm run stg   # NODE_ENV=staging
> npm run prod  # NODE_ENV=production
> ```

各コマンドは自動的に適切な環境変数を設定し、対応するURL設定が適用されます。

## 🎨 shadcn/ui の使用

このテンプレートでは、shadcn/uiを統合し、モダンで再利用可能なUIコンポーネントシステムを提供しています。shadcn/uiは、美しく、アクセシビリティに配慮した、カスタマイズ可能なコンポーネントのコレクションです。

### shadcn/uiの特徴

- **コピー＆ペースト方式**: コンポーネントは直接プロジェクトにコピーされ、完全なカスタマイズが可能
- **TailwindCSSベース**: スタイリングはTailwindCSSを使用し、一貫性のあるデザインシステムを実現
- **Radix UIプリミティブ**: アクセシビリティに配慮した高品質なUIプリミティブを採用
- **TypeScript対応**: 型安全なコンポーネント開発をサポート

### 設定ファイル

`components.json`に設定が定義されています：

> ```json
> {
>   "$schema": "https://ui.shadcn.com/schema.json",
>   "style": "new-york",      // UIスタイル
>   "rsc": false,             // React Server Components非対応
>   "tsx": true,              // TypeScript/TSX使用
>   "tailwind": {
>     "config": "",
>     "css": "src/styles/global.css",
>     "baseColor": "gray",    // ベースカラーテーマ
>     "cssVariables": true,   // CSS変数を使用
>     "prefix": ""
>   },
>   "aliases": {
>     "components": "@/components",
>     "utils": "@/lib/utils",
>     "ui": "@/components/ui",
>     "lib": "@/lib",
>     "hooks": "@/hooks"
>   },
>   "iconLibrary": "lucide"   // Lucide Reactアイコンを使用
> }
> ```

### コンポーネントの追加方法

> ```bash
> # 個別のコンポーネントを追加
> npx shadcn add button
> 
> # 複数のコンポーネントを一度に追加
> npx shadcn add dialog card alert
> 
> # 利用可能なコンポーネント一覧を表示
> npx shadcn add
> ```

### 現在利用可能なコンポーネント

#### Button （`@/components/ui/button`）

多様なスタイルとサイズに対応したボタンコンポーネント：

> ```tsx
> // 使用例
> import { Button } from "@/components/ui/button";
> 
> // デフォルトボタン
> <Button>Click me</Button>
> 
> // バリアント: default, destructive, outline, secondary, ghost, link
> <Button variant="destructive">Delete</Button>
> <Button variant="outline">Cancel</Button>
> 
> // サイズ: default, sm, lg, icon
> <Button size="lg">Large Button</Button>
> <Button size="icon">
>   <Icon />
> </Button>
> 
> // アイコン付きボタン
> <Button>
>   <Settings className="mr-2" />
>   Settings
> </Button>
> ```

#### Dialog （`@/components/ui/dialog`）

> ```tsx
> // 使用例
> import {
>   Dialog,
>   DialogContent,
>   DialogDescription,
>   DialogHeader,
>   DialogTitle,
>   DialogTrigger,
> } from "@/components/ui/dialog";
> 
> <Dialog>
>   <DialogTrigger asChild>
>     <Button>Open Dialog</Button>
>   </DialogTrigger>
>   <DialogContent>
>     <DialogHeader>
>       <DialogTitle>タイトル</DialogTitle>
>       <DialogDescription>説明文</DialogDescription>
>     </DialogHeader>
>     {/* コンテンツ */}
>   </DialogContent>
> </Dialog>
> ```

#### カスタムコンポーネントの実装例

##### SettingsDialog.tsx

> ```tsx
> // src/components/SettingsDialog.tsx
> import { Button } from "@/components/ui/button";
> import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
> import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
> import { Switch } from "@/components/ui/switch";
> import { useState, useEffect } from "react";
> 
> const SettingsDialog = () => {
>   const [theme, setTheme] = useState("system");
>   // ...状態管理とテーマ切り替えロジック
>   
>   return (
>     <Dialog>
>       <DialogTrigger asChild>
>         <Button variant="ghost" size="icon">Settings</Button>
>       </DialogTrigger>
>       {/* ... */}
>     </Dialog>
>   );
> };
> 
> export default SettingsDialog;
> ```

### カスタマイズ方法

#### 1. スタイルのカスタマイズ

`src/styles/global.css`でCSS変数を編集：

> ```css
> :root {
>   --primary: oklch(0.21 0.034 264.665);
>   --primary-foreground: oklch(0.985 0.002 247.839);
>   /* その他のカスタムカラー */
> }
> ```

#### 2. コンポーネントのカスタマイズ

追加されたコンポーネントは`src/components/ui/`に配置され、直接編集可能：

> ```tsx
> // src/components/ui/button.tsx のカスタマイズ例
> const buttonVariants = cva(
>   "inline-flex items-center justify-center...",
>   {
>     variants: {
>       variant: {
>         // カスタムバリアントの追加
>         brand: "bg-brand text-white hover:bg-brand/90",
>       },
>       // ...
>     },
>   }
> )
> ```

### TailwindCSSとの統合

shadcn/uiコンポーネントはTailwindCSSクラスを使用し、プロジェクトのテーマと完全に統合されます：

> ```tsx
> // TailwindCSSユーティリティとの組み合わせ
> <Button className="mt-4 w-full">Full Width Button</Button>
> ```

### Astro環境での使用

Astroコンポーネント内でReactコンポーネントとして使用：

> ```astro
> ---
> // src/pages/index.astro
> import { Button } from "@/components/ui/button";
> import SettingsDialog from "@/components/SettingsDialog";
> ---
> 
> <Layout>
>   <Button client:load>
>     Click me
>   </Button>
>   <SettingsDialog client:load />
> </Layout>
> ```

### 利用可能なコンポーネントの拡張

新しいコンポーネントを追加する際の推奨コンポーネント：

- **Form関連**: `form`, `input`, `checkbox`, `select`
- **レイアウト**: `card`, `dialog`, `sheet`, `tabs`
- **フィードバック**: `alert`, `toast`, `tooltip`
- **ナビゲーション**: `navigation-menu`, `dropdown-menu`

### ヘルパーユーティリティ

`src/lib/utils.ts`には、クラス名の結合に使用する`cn`関数が含まれています：

> ```typescript
> import { cn } from "@/lib/utils";
> 
> // 使用例
> <div className={cn(
>   "base-class",
>   isActive && "active-class",
>   "responsive-class"
> )} />
> ```

### 注意点

- コンポーネントは直接プロジェクトにコピーされるため、アップデートは手動で行う必要があります
- Reactコンポーネントとして動作するため、Astro環境では適切なクライアントディレクティブが必要です
- shadcn/uiのコンポーネントは完全にカスタマイズ可能で、プロジェクトの要件に合わせて自由に変更できます

## 🔒 エラートラッキング

このプロジェクトでは、Sentryを使用した包括的なエラートラッキングシステムが統合されています。本番環境でのエラー監視を自動化し、開発環境ではコンソールログによるデバッグをサポートします。

### 基本設定

> ```env
> # .env (本番環境用)
> SENTRY_DSN=your_sentry_dsn_here
> ```

### 機能概要

#### 1. 自動初期化
`astro.config.mjs`でSentryが自動的に初期化されます：

> ```javascript
> import { initSentry, captureException } from './src/lib/sentry';
> 
> initSentry(); // SentryをAstro起動時に初期化
> ```

#### 2. 環境別の動作
- **本番環境**: エラーをSentryに自動送信
- **開発環境**: コンソールにエラーを出力（Sentryへの送信なし）

### 実装詳細

`src/lib/sentry.ts`では以下の機能を提供：

#### エラータイプ別の処理

> ```typescript
> // 例外のキャプチャ
> captureException(error: Error): void
> // → 例外をSentryに送信（本番環境）またはコンソール出力（開発環境）
> 
> // 警告メッセージの送信
> captureWarning(message: string): void
> // → 警告レベルでSentryに送信
> 
> // HTTPエラーの詳細報告
> captureHttpError(url: string, status: number, responseBody?: any): void
> // → API通信エラーを詳細な情報と共に送信
> ```

### 使用例

> ```typescript
> // コンポーネントでのエラーハンドリング
> try {
>   // 危険な処理
>   const result = await riskyOperation();
> } catch (error) {
>   captureException(error as Error);
>   // ユーザーへのフィードバック処理
> }
> 
> // APIエラーの報告
> const response = await fetch('/api/data');
> if (!response.ok) {
>   captureHttpError(
>     '/api/data',
>     response.status,
>     await response.text()
>   );
> }
> 
> // 警告の送信
> if (deprecatedFeatureUsed) {
>   captureWarning('Deprecated feature used: featureName');
> }
> ```

### ビルドプロセスとの統合

ビルド完了時に自動的にクリーンアップ処理でのエラーも捕捉：

> ```javascript
> // astro.config.mjs内のインテグレーション
> {
>   name: 'clean-dist-folder',
>   hooks: {
>     'astro:build:done': async ({ dir }) => {
>       try {
>         // クリーンアップ処理
>       } catch (error) {
>         captureException(error);
>       }
>     }
>   }
> }
> ```

### 設定のカスタマイズ

Sentryの初期化設定をカスタマイズ可能：

> ```typescript
> // src/lib/sentry.ts
> Sentry.init({
>   dsn: SENTRY_DSN,
>   tracesSampleRate: 1.0,  // パフォーマンストレースのサンプリングレート
>   // 追加の設定オプションを必要に応じて設定可能
> });
> ```

### デバッグとモニタリング

開発環境での動作確認：

> ```bash
> # 開発モードで起動
> npm run dev
> 
> # コンソール出力例
> ℹ️ Sentry not initialized (Development mode)
> [DEV] Captured Exception: Error details
> [DEV] Captured Warning: Warning message
> [DEV] Captured HTTP Error: { url, status, responseBody }
> ```

本番環境でのモニタリング：
- Sentryダッシュボードでリアルタイムのエラー追跡
- エラーの発生頻度、影響を受けるユーザー数の可視化
- スタックトレースと環境情報の自動収集

## 📝 スタイリング

### TailwindCSS v4の機能

TailwindCSS v4では、より柔軟なカスタマイズと新しい構文が導入されています：

> ```css
> /* global.css */
> @import "tailwindcss";
> @import "tw-animate-css";
> 
> /* カスタムバリアントの定義 */
> @custom-variant dark (&:is(.dark *));
> 
> /* テーマの定義 */
> @theme inline {
>   --radius-sm: calc(var(--radius) - 4px);
>   --radius-md: calc(var(--radius) - 2px);
>   --radius-lg: var(--radius);
>   --color-background: var(--background);
>   /* ... */
> }
> ```

### OKLCHカラーシステム

プロジェクトではOKLCHカラーモデルを採用し、より正確な色管理を実現：

> ```css
> :root {
>   --primary: oklch(0.21 0.034 264.665);
>   --primary-foreground: oklch(0.985 0.002 247.839);
>   /* ... */
> }
> 
> .dark {
>   --background: oklch(0.13 0.028 261.692);
>   --foreground: oklch(0.985 0.002 247.839);
>   /* ... */
> }
> ```

### ダークモード実装

システム設定に連動したダークモード機能：

1. **自動検出**: システム設定に基づいてテーマを切り替え
2. **手動切り替え**: SettingsDialogで手動変更可能
3. **永続化**: localStorageに設定を保存

> ```tsx
> // SettingsDialogでの実装例
> const applyTheme = (selectedTheme: string) => {
>   if (selectedTheme === "dark") {
>     document.documentElement.classList.add("dark");
>   } else if (selectedTheme === "light") {
>     document.documentElement.classList.remove("dark");
>   } else {
>     // system
>     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
>       document.documentElement.classList.add("dark");
>     } else {
>       document.documentElement.classList.remove("dark");
>     }
>   }
> };
> ```

## 🔧 Astro設定の詳細

### ビルドプロセスのカスタマイズ

`astro.config.mjs`では、以下の機能が設定されています：

1. **クリーンアップ処理**: ビルド完了時に不要ファイルを自動削除
2. **アセット最適化**: インライン化の制御とアセットパスのカスタマイズ
3. **環境別設定**: 開発、ステージング、本番で異なる設定を適用

> ```javascript
> export default defineConfig({
>   // ...
>   build: {
>     inlineStylesheets: 'never',
>     assets: assetsDir,
>     assetsPrefix: ASSETS_URL.STATUS ? assetsUrl : undefined,
>   },
>   integrations: [
>     react(),
>     {
>       name: 'clean-dist-folder',
>       hooks: {
>         'astro:build:done': async ({ dir }) => {
>           // .DS_Store、Thumbs.db、__MACOSXなどを自動削除
>         }
>       }
>     }
>   ],
>   // ...
> });
> ```

### Vite設定の詳細

1. **minify設定**: 本番環境でのみコード圧縮を有効化
2. **assetsInlineLimit**: 小さなアセットの自動インライン化を制御
3. **esbuild設定**: 本番環境でのconsole、debuggerの自動削除

> ```javascript
> vite: {
>   build: {
>     minify: process.env.NODE_ENV === 'production',
>     assetsInlineLimit: 0,
>     rollupOptions: {
>       output: {
>         assetFileNames: (assetInfo) => {
>           // アセットパスのカスタマイズ
>         }
>       }
>     }
>   },
>   // 本番ビルドでのみconsole、debuggerを非表示
>   esbuild: (process.env.NODE_ENV === 'production' ) ? { drop: ['console', 'debugger'] } : {},
> }
> ```

## 🔗 メタデータ管理とSEO

### Head.astroコンポーネント

`Head.astro`は、ページごとのメタデータ管理を担当：

> ```astro
> ---
> import type { PageMeta } from '@/lib/constants';
> 
> const props = Astro.props as PageMeta;
> 
> const {
>   title = DEFAULT_PAGE_META.title,
>   description = DEFAULT_PAGE_META.description,
>   ogType = DEFAULT_PAGE_META.ogType,
>   ogImage = DEFAULT_PAGE_META.ogImage,
>   noindex = false,
>   nofollow = false
> } = props;
> 
> // URLパスの生成
> const canonicalURL = new URL(Astro.url.pathname, Astro.site || SITE_CONFIG.url);
> const ogImageURL = new URL(ogImage, Astro.site || SITE_CONFIG.url);
> ---
> 
> <head>
>   <meta charset="UTF-8">
>   <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=5">
>   <title>{title} | {SITE_CONFIG.name}</title>
>   <!-- SEO、OGP、Twitter Cardなど -->
> </head>
> ```

### ページごとのメタデータ設定

> ```astro
> ---
> // src/pages/index.astro
> import type { PageMeta } from '@/lib/constants';
> 
> const meta: PageMeta = {
>   title: 'Astro + TailwindCSS + shadcn/ui テンプレート',
>   description: 'モダンなWeb開発に必要な機能を備えた包括的なテンプレート',
>   ogType: 'website',
> };
> ---
> 
> <Layout {...meta}>
>   <!-- コンテンツ -->
> </Layout>
> ```

## 🏗️ TypeScript設定

### パスエイリアス

`tsconfig.json`で`@/`から始まるパスを設定：

> ```json
> {
>   "compilerOptions": {
>     "baseUrl": ".",
>     "paths": {
>       "@/*": ["./src/*"]
>     },
>     "jsx": "react-jsx",
>     "jsxImportSource": "react"
>   }
> }
> ```

これにより、以下のようなインポートが可能：

> ```typescript
> import { Button } from "@/components/ui/button";
> import { SITE_CONFIG } from "@/lib/constants";
> ```

## 🚀 デプロイ

### ビルド

> ```bash
> # 開発環境
> npm run dev
> 
> # ステージング環境
> npm run stg
> 
> # 本番環境
> npm run prod
> ```

### ビルド出力

- 環境に応じて`dist/`ディレクトリ内にファイルが生成されます
- アセットは環境設定に基づいて適切なパスに配置されます
- BASE_URLが有効な場合、出力ディレクトリも自動調整（例：`dist/hoge/`）

### 環境別の最適化

- 開発環境: ソースマップ有効、minify無効
- ステージング環境: 本番に近い設定でのテスト
- 本番環境: minify有効、console削除、最適化された出力

## 🔗 重要なファイル

- `astro.config.mjs`: Astroの設定とビルドオプション
- `src/lib/constants.ts`: 環境別のURL設定
- `src/lib/sentry.ts`: エラートラッキング設定
- `components.json`: shadcn/uiの設定
- `tailwind.config.js`: TailwindCSSの設定
- `tsconfig.json`: TypeScriptの設定

## 📄 ライセンス

MIT License - 詳細は[LICENSE](./LICENSE)ファイルを参照してください。

## 📚 参考資料

- [Astro Documentation](https://docs.astro.build)
- [TailwindCSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [React](https://reactjs.org)
- [Sentry](https://sentry.io)

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

---

Built with ❤️ using Astro + TailwindCSS + shadcn/ui