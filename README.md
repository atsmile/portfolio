# portfolio

![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss) ![Vercel](https://img.shields.io/badge/Vercel-deployed-black?logo=vercel)

ポートフォリオ

## URL

- 本番（匿名版）: https://portfolio.atsmile.dev
- 本番（実名版）: https://portfolio.atsmile.dev?v=full

## 技術スタック

- **Framework**: Next.js 16.2.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Hosting**: Vercel
- **CI/CD**: Vercel（main push → 自動デプロイ）
- **Domain**: portfolio.atsmile.net

## セットアップ

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで `http://localhost:3000` を開く。

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx        # RootLayout・メタデータ
│   ├── page.tsx          # トップページ（匿名・実名の切り替えロジック）
│   └── globals.css       # CSS変数・Tailwindカラー定義
├── components/
│   ├── layout/
│   │   ├── Header.tsx    # ナビゲーション
│   │   └── Footer.tsx    # フッター
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── WorksSection.tsx
│   └── ui/
│       ├── WorkCard.tsx
│       ├── SkillBadge.tsx
│       └── SectionTitle.tsx
├── data/
│   ├── profile.ts        # プロフィールデータ（実名・匿名）
│   ├── works.ts          # 制作物データ
│   └── skills.ts         # スキルデータ
├── defs/
│   └── types/
│       └── index.ts      # 型定義
└── hooks/
    └── useInView.ts      # Intersection Observer フック（フェードイン用）
```

## 匿名・実名の切り替え

URLパラメーター `?v=full` の有無で切り替わる。

| URL                            | 表示                       |
| ------------------------------ | -------------------------- |
| `portfolio.atsmile.dev`        | 匿名版（atsmile）          |
| `portfolio.atsmile.dev?v=full` | 実名版（Tomoaki Hanafusa） |

切り替わる内容：

- ヘッダーのロゴ・名前
- Heroセクションの名前・自己紹介文
- AboutセクションのProfileカード
- Worksのポートフォリオリンク先URL
- GitHubリンクの表示・非表示
- ページタイトル

## カラー設計

`globals.css` の `@theme` で定義。

| クラス    | カラーコード | 用途                   |
| --------- | ------------ | ---------------------- |
| green-50  | #f7faf4      | ページ背景             |
| green-100 | #eaf3de      | バッジ背景             |
| green-200 | #c0dd97      | ボーダー               |
| green-300 | #97c459      | ボーダーアクセント     |
| green-400 | #639922      | ドット（main）         |
| green-500 | #3b6d11      | メインテキスト・ボタン |
| green-600 | #27500a      | 濃いテキスト           |

## インポートエイリアス

| エイリアス     | パス              |
| -------------- | ----------------- |
| `@components/` | `src/components/` |
| `@data/`       | `src/data/`       |
| `@hooks/`      | `src/hooks/`      |
| `@defs/`       | `src/defs/`       |

## 設計判断

### なぜ Vercel に移行したか

当初はAWSインフラ層の理解を目的にEC2（Nginx・PM2・Let's Encrypt・GitHub Actions SSH デプロイ）で構築・運用した。その後、EC2にAPIサーバーを立てる方針となったため、フロントエンドをVercelに移行してEC2を解放した。

### レンダリング戦略

1ページ構成で更新頻度が低い静的コンテンツのため、SSG（`force-static`）を検討した。しかし `?v=full` のURLパラメーターによる匿名・実名の切り替えに `searchParams` を使用しているため、ビルド時に静的HTMLを生成するSSGとは相性が悪く、採用を見送った。

現状はApp Routerのデフォルト設定のまま運用している。

### 画像最適化

Vercelの自動画像最適化（WebP変換・リサイズ）をそのまま利用している。

## 今後の開発計画

### DB化

現在 `data/` フォルダにTypeScriptファイルとして管理しているプロフィール・制作物・スキルデータを、Supabase（PostgreSQL）+ Prismaによるデータベース管理に移行する予定。コンテンツの更新をコード変更なしに行えるようにすることが目的。

### OAuthアプリの適用

別プロジェクトとして開発中のOAuthアプリをポートフォリオに組み込む予定。

### 管理画面の作成

DB化完了後に、プロフィール・制作物・スキルデータをGUIで管理できる管理画面を実装する予定。コンテンツ更新のたびにコードを変更・デプロイする運用から脱却することを目的とする。
