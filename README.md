# portfolio

ポートフォリオ

## URL

- 本番（匿名版）: https://portfolio.atsmile.dev
- 本番（実名版）: https://portfolio.atsmile.dev?v=full

## 技術スタック

- **Framework**: Next.js 16.2.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Hosting**: AWS EC2
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

| URL | 表示 |
|---|---|
| `portfolio.atsmile.dev` | 匿名版（atsmile） |
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

| クラス | カラーコード | 用途 |
|---|---|---|
| green-50 | #f7faf4 | ページ背景 |
| green-100 | #eaf3de | バッジ背景 |
| green-200 | #c0dd97 | ボーダー |
| green-300 | #97c459 | ボーダーアクセント |
| green-400 | #639922 | ドット（main）|
| green-500 | #3b6d11 | メインテキスト・ボタン |
| green-600 | #27500a | 濃いテキスト |

## インポートエイリアス

| エイリアス | パス |
|---|---|
| `@components/` | `src/components/` |
| `@data/` | `src/data/` |
| `@hooks/` | `src/hooks/` |
| `@defs/` | `src/defs/` |
