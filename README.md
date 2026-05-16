# portfolio

ポートフォリオ

## URL

- 本番（匿名版）: https://portfolio.atsmile.dev
- 本番（実名版）: https://portfolio.atsmile.dev?v=full

## 技術スタック

- **Framework**: Next.js 16.2.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Hosting**: AWS EC2（Ubuntu 24.04）
- **Web Server**: Nginx
- **Process Manager**: PM2
- **SSL**: Let's Encrypt
- **CI/CD**: GitHub Actions（main push → SSH → EC2 自動デプロイ）
- **Domain**: Squarespace（portfolio.atsmile.dev）

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
└── defs/
    └── index.ts          # 型定義
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

### なぜ AWS EC2 を選んだか

カラオケ喫茶サイトのVRT（ビジュアルリグレッションテスト）でスクリーンショット保存先にS3を採用したことをきっかけに、AWSを実際に触る機会として本プロジェクトでEC2を選択した。

書籍でAWSの知識はあったが実務での操作経験が限られていたため、Nginxによるリバースプロキシ設定・PM2によるプロセス管理・Let's EncryptによるSSL設定・GitHub ActionsからのSSHデプロイなど、サーバー運用の一連のフローを自分の手で構築することを目的とした。

Vercelでも同等の公開は可能だが、**マネージドサービスに隠れているインフラ層を可視化して理解する**という点でEC2を選んだ。

### コスト

S3・EC2の利用範囲であればAWS無料枠内に収まる見込み。無料期間終了後も同規模であれば継続運用予定。

### レンダリング戦略

1ページ構成で更新頻度が低い静的コンテンツのため、SSG（`force-static`）を検討した。しかし `?v=full` のURLパラメーターによる匿名・実名の切り替えに `searchParams` を使用しているため、ビルド時に静的HTMLを生成するSSGとは相性が悪く、採用を見送った。

現状はApp Routerのデフォルト設定のまま運用している。

### 画像最適化

EC2構成ではVercelのような自動画像最適化が行われないため、`sharp` を導入しNext.jsの画像最適化（WebP変換・リサイズ）を有効化した。

画像は現在リポジトリ内で管理しているが、Git管理から外す目的でS3への移行を予定している。移行時は `next.config.ts` にremotePatternsの設定を追加する。

## 今後の開発計画

### DB化

現在 `data/` フォルダにTypeScriptファイルとして管理しているプロフィール・制作物・スキルデータを、Supabase（PostgreSQL）+ Prismaによるデータベース管理に移行する予定。コンテンツの更新をコード変更なしに行えるようにすることが目的。

### OAuthアプリの適用

別プロジェクトとして開発中のOAuthアプリをポートフォリオに組み込む予定。

### 管理画面の作成

DB化完了後に、プロフィール・制作物・スキルデータをGUIで管理できる管理画面を実装する予定。コンテンツ更新のたびにコードを変更・デプロイする運用から脱却することを目的とする。
