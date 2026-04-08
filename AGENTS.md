<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

---

# このプロジェクトについて

## 概要

ポートフォリオサイト。
Next.js 16 + Tailwind v4 + TypeScript で構築。
Vercel にデプロイ済み。

## URL

- 本番: https://portfolio.atsmile.net
- 匿名版（デフォルト）: パラメーターなし
- 実名版: ?v=full

## GitHub

- アカウント: atsmile
- リポジトリ: https://github.com/atsmile/portfolio

## ディレクトリ構成

- `src/app/page.tsx` … 匿名・実名の切り替えロジック
- `src/data/profile.ts` … profile（実名）・profileAnon（匿名）・careers・careersAnon
- `src/data/works.ts` … Works データ（anonUrl・publicOnly フラグあり）
- `src/data/skills.ts` … スキルデータ
- `src/lib/index.ts` … 型定義（Work・Skill・SkillGroup）
- `src/components/sections/` … 各セクション
- `src/components/ui/` … 共通UIパーツ
- `public/images/` … 画像ファイル（works/ にサムネイル追加予定）

## カラー設計

`globals.css` の `@theme` で定義済み。
green-50〜green-600 / gray-200〜gray-600 を使用。

## 匿名・実名の切り替え

- `searchParams.v === 'full'` で判定
- `profile` / `profileAnon` を切り替えて各セクションにpropsで渡す
- Works は `publicOnly: true` のものを実名版のみ表示
- Works は `anonUrl` がある場合、匿名版では `anonUrl` を使用
- GitHubリンクは `profile.github` が空の場合は非表示

## インポートエイリアス

- `@components/` → `src/components/`
- `@data/` → `src/data/`
- `@lib/` → `src/lib/`

## 今後のタスク

- [ ] Worksのサムネイル画像追加（public/images/works/）
- [ ] TodoアプリをGitHub再作成後にWorksへ追加
- [ ] lib/ ディレクトリの型ファイル名整理の検討
- [ ] ブログの配置方針検討（atsmile.net 配下）
