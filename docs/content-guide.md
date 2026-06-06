# コンテンツ規約

## frontmatter 仕様

すべてのコンテンツファイルは `content/` 配下に配置し、YAML frontmatter を持つ。

```yaml
---
id: github-copilot-app
title: GitHub Copilot App
summary: エディタに依存しないエージェントネイティブのデスクトップアプリ GitHub Copilot App を Preview で発表。My Work ビューでリポジトリ横断のセッション・Issue・PR・バックグラウンド自動化を一元管理し、エージェントの作業過程と判断根拠を透明化する Trace 機能を搭載。Agent Mode の進化として、開発者のワークフロー全体をカバーする新しいサーフェスを提供する。
tags:
  - github-copilot
  - github-copilot-app
content_type: announcement
topic: developer-tools-and-frameworks
official_sources:
  - https://github.blog/...
deliveries:
  site: true
  llms: true
  skills: true
---
```

### フィールド一覧

| フィールド | 必須 | 説明 |
|-----------|------|------|
| `id` | Yes | 一意 ID。ファイル名と一致必須。kebab-case。URL・llms パス・references ファイル名に使われる |
| `title` | Yes | ID の人間用表示名。製品名やサービス名を書く。説明的な修飾語は不要 |
| `summary` | Yes | 200-300 文字程度の 1 行文字列。何が変わったか・何ができるようになったかを直接記述。YAML の `>-` は使わない |
| `tags` | Yes | `tags.json` で定義されたスラッグのリスト。未定義スラッグは CI でエラー |
| `content_type` | Yes | `announcement` / `session` / `resource` |
| `topic` | Yes | `topics.json` で定義されたスラッグ |
| `official_sources` | Yes | 公式の一次情報 URL。`allowed-domains.json` で許可されたドメインのみ |
| `deliveries` | No | 省略時は全 `true`。配信先ごとに生成する/しないを制御 |

### title の書き方

- ID の人間用表示名。製品名やサービス名をそのまま書く
- 「〜アップデート」「〜エンタープライズ対応」のような説明的修飾語は **不要**
- リポジトリ全体が Build 2026 なので「Build 2026」も **不要**
- 良い例: `GitHub Copilot App`, `Microsoft Foundry`, `Azure SRE Agent`
- 悪い例: `Microsoft Foundry アップデート`, `Azure SRE Agent — VNet 統合で本番環境に展開可能に`

### summary の書き方

- **何が変わったか・何ができるようになったかを直接記述**
- hub 一覧（llms.txt、SKILL.md）で title と並んで表示される前提
- 製品名は title で表示されるため summary での繰り返しは **不要**
- 「Build 2026」のようなリポジトリ文脈の繰り返しは **不要**
- 200-300 文字程度の 1 行文字列。YAML の `>-`（folded block scalar）は使わない（改行がスペースに変換され、句読点後に不要な空白が入るため）

### topic スラッグ一覧

`topics.json` で定義。Build 2026 セッションカタログの公式 Topic に準拠。

| スラッグ | 公式名 |
|---------|--------|
| `agents-and-apps` | Agents & apps |
| `developer-tools-and-frameworks` | Developer tools & frameworks |
| `cloud-platform-and-data` | Cloud platform & data |
| `responsible-ai` | Responsible AI |
| `working-with-models` | Working with models |
| `windows` | Windows |

### tags について

`tags.json` で製品・サービス単位にスラッグを管理する。`aka` フィールドで曖昧な別名を吸収する。

```json
{ "slug": "github-copilot", "name": "GitHub Copilot", "aka": ["ghcp", "copilot-chat"] }
```

### official_sources の許可ドメイン

`allowed-domains.json` で一元管理。主なドメイン:

| ドメイン | 用途 |
|---------|------|
| `learn.microsoft.com` | ドキュメント・API リファレンス |
| `devblogs.microsoft.com` | 開発者ブログ |
| `techcommunity.microsoft.com` | Tech Community ブログ |
| `blogs.microsoft.com` | 公式ブログ |
| `news.microsoft.com` | ニュースルーム・Build ページ |
| `github.blog` | GitHub 公式ブログ |
| `github.com` | リポジトリ・Discussions・リリース |
| `build.microsoft.com` | セッションカタログ |
| `aka.ms` | 短縮 URL |

全リストは `content/allowed-domains.json` を参照。

---

## 本文の規約

### 共通ルール

- 見出しは `##` から開始（`#` は使わない。title から自動生成される）
- 箇条書きの各項目は 1 行で完結させる（変換スクリプトが行単位で抽出するため）
- GA / Public Preview / Private Preview のステータスは **太字** で明記
- コードブロックには言語タグを付ける
- 外部リンクは `official_sources` または `allowed-domains.json` の許可ドメインのみ
- 記事間のクロスリファレンスは content/ 内の相対パス（例: `../github-copilot-app.md`）
- MVP では画像/アセットなし。テキストとリンクのみ

### announcement（個別の発表・新機能）

```markdown
## 概要

何が発表されたか、なぜ重要かを 2-3 段落で説明する。

## 主な変更点

- **機能名**: 何ができるようになったか（**GA** / **Public Preview** / **Private Preview** を明記）
- **機能名**: ...

## 技術的詳細

開発者が知るべき技術的な詳細。
アーキテクチャの変更、新しい API、内部動作、対応プロトコルなど。

## 応用シナリオ

この発表がどのようなユースケースで活用できるかを具体的に記述。
既存のワークフローへの組み込み方、他サービスとの組み合わせなど。

## 制約・注意点

プレビューの制限事項、既知の問題、対応リージョン、
移行パス、非推奨化される既存機能、価格への影響など。
内容がなければセクションごと省略可。

## 参考リンク

- [公式ブログ記事](https://devblogs.microsoft.com/...)
- [ドキュメント](https://learn.microsoft.com/...)
- [クイックスタート](https://learn.microsoft.com/...)
```

### session（セッション要約）

```markdown
## セッション情報

| 項目 | 値 |
|------|------|
| コード | BRK155 |
| タイプ | Breakout / Lab / Demo / Lightning Talk |
| レベル | 200 Intermediate |
| スピーカー | 名前 |

## 概要

セッションの要約。公式 description をベースに、
視聴して得られた追加の知見を加える。

## キーポイント

1. ...
2. ...

## コンテンツ内容

セッションで扱われた技術的な内容の詳細。
スライドや配布資料の要点、コードサンプル、アーキテクチャ図の説明など。
資料が公開されている場合はその内容を構造化して記載する。

## プレゼンテーション内容

発表の流れ、デモの実演内容、スピーカーが強調した点、
Q&A で出た質問と回答、オフレコの補足情報など。
トランスクリプトが利用可能な場合は要点を整理して記載する。

## 関連セッション

- [BRK224: セッションタイトル](https://build.microsoft.com/sessions/BRK224)

## 参考リンク

- [セッションページ](https://build.microsoft.com/sessions/BRK155)
- [スライド](URL)
- [オンデマンド動画](URL)
- [デモリポジトリ](https://github.com/...)
```

### resource（リンク集・ツール紹介）

```markdown
## 概要

このリソース集が対象とする範囲の説明。

## リンク一覧

### カテゴリ名

- [リソース名](URL) — 一行説明
```

---

## アナウンスの粒度

### 基本粒度: 製品・サービス単位で 1 ファイル

- 1 ファイル = 1 製品/サービスのアップデートまとめ
- 例: `azure-sre-agent.md` — SRE Agent の発表 5 件をまとめる
- 例: `microsoft-foundry.md` — Foundry のアップデート全体をまとめる
- 独立性が高い発表は分離してよい（例: 料金変更は別ファイル）
- 判断基準: 「この製品について知りたい人が 1 ファイルで全体像を掴めるか」

### 対象範囲: Build の発表とみなす基準

- **含める**: Build キーノート/セッションで言及、`news.microsoft.com/build-2026` 掲載、公式ブログで「Build 2026」明示
- **含めない**: Build と無関係な通常リリース、Build 前の事前発表で当日追加情報なし
- **グレーゾーン**: Build 直前に公開されセッションで深掘りされたもの → 含める
- **スコープ管理**: `news.microsoft.com/build-2026` の掲載リストを正とする
