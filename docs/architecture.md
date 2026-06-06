# アーキテクチャ

## 設計原則

**Single Source, Multiple Outputs** — コンテンツのソースは `content/` に集約し、ビルドパイプラインで配信形式ごとに変換する。人間向けページ、AI 向け llms、skills はすべて同じソースからの派生物。

## ディレクトリ構造

```
content/                        ← Single Source of Truth（手書き）
├── announcements/{id}.md       ← 個別の発表・新機能
├── sessions/{id}.md            ← セッション要約
├── resources/{id}.md           ← リンク集・ツール紹介
├── build-info.json             ← イベントメタ（年次、日程、フェーズ）
├── topics.json                 ← トピック定義（スラッグ↔公式名）
├── tags.json                   ← タグ定義（スラッグ↔表示名＋別名）
└── allowed-domains.json        ← official_sources に許可するドメイン一覧

scripts/                        ← 変換パイプライン（TypeScript）
├── build-site.mts              ← content → site/
├── build-llms.mts              ← content → public/llms/
├── build-skills.mts            ← content → skills/
├── build-well-known.mts        ← content → public/.well-known/
└── lib/
    ├── types.mts               ← frontmatter の型定義（全スクリプト共通）
    └── content.mts             ← コンテンツ読み込みユーティリティ

site/                           ← VitePress 入力（生成物。site/.vitepress/config.ts のみ手書き）
├── index.md                    ← ランディング
├── announcements/*.md          ← 個別ページ
├── topics/{slug}.md            ← topic 別集約（自動生成）
├── tags/{slug}.md              ← tag 別集約（自動生成）
└── .vitepress/
    ├── config.ts               ← 手書き（テーマ・検索・ナビ設定）
    └── nav.json                ← build-site が生成、config.ts が import

public/                         ← VitePress がルートにコピー（生成物）
├── llms.txt                    ← AI 向けハブ（全体索引）
├── llms/{type}/{id}/llms.txt   ← 詳細 llms（アナウンス・セッション別）
└── .well-known/
    ├── ai-agent.json
    ├── docs-index.json
    └── build-info.json

skills/                         ← Agent Plugin（生成物、git コミット）
└── msbuild-2026/
    ├── SKILL.md                ← ハブ（一覧＋概要＋導線）
    └── references/{type}/{id}.md

plugin.json                     ← プラグインマニフェスト（生成物、リポジトリルート）

docs/                           ← プロジェクト内部ドキュメント（手書き）
```

## ビルドパイプライン

```
content/**/*.md ─┬─ scripts/build-site.mts ──→ site/          (VitePress 入力)
                 ├─ scripts/build-llms.mts ──→ public/llms/   (llms.txt hub + details)
                 ├─ scripts/build-skills.mts → skills/        (SKILL.md + references)
                 └─ scripts/build-well-known.mts → public/.well-known/ (索引 JSON)

                    site/ ──→ vitepress build ──→ site/.vitepress/dist/ (GitHub Pages)
```

各スクリプトは `content/` を直接読み取る。相互依存はない。
npm script では build-site → build-llms → build-skills → build-well-known の順で実行し、
最後に vitepress build が `site/` を静的サイトに変換する。

## GitHub Pages 公開構成

Pages は `site/.vitepress/dist/` をデプロイする。

**Pages で配信されるもの:**

- `/` — ランディング
- `/announcements/{id}.html` — 人間向け記事
- `/topics/{slug}.html` — topic 別集約
- `/tags/{slug}.html` — tag 別集約
- `/llms.txt` — AI 向けハブ
- `/llms/{type}/{id}/llms.txt` — 詳細 llms
- `/.well-known/*.json` — AI メタ・索引

**Pages に載せないもの:**

- `skills/` — プラグインインストールはリポジトリクローン方式 (`/plugin install openjny/msbuild-2026`)

## git 管理方針

| ディレクトリ                | git 管理   | 理由                                 |
| --------------------------- | ---------- | ------------------------------------ |
| `content/`                  | コミット   | Single Source of Truth               |
| `scripts/`                  | コミット   | 変換ロジック                         |
| `site/.vitepress/config.ts` | コミット   | 手書き設定                           |
| `site/**/*.md`              | .gitignore | CI で毎回生成                        |
| `public/`                   | .gitignore | CI で毎回生成                        |
| `skills/`                   | コミット   | インストール時にビルド不要にするため |
| `plugin.json`               | コミット   | プラグインマニフェスト（生成物）     |
| `docs/`                     | コミット   | プロジェクトドキュメント             |
