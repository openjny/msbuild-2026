# コンテンツ規約

## ファイル配置

- `content/announcements/{id}.md` — 個別の発表・新機能
- `content/sessions/{id}.md` — セッション要約
- `content/resources/{id}.md` — リンク集・ツール紹介
- `id` はファイル名と一致必須。kebab-case

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

## 主な発表

この製品/サービスに関して Build 2026 で発表された事項の一覧。
各項目は「何がどのステータスで発表されたか」を明示する。

- **機能名**: 一文の説明（**GA** / **Public Preview** / **Private Preview** を明記）
- **機能名**: ...

ここに書くのは「発表事項」であり、製品の既存機能や技術的な仕組みの説明ではない。
既存機能の詳細は「## 詳細」に書く。

## 詳細

製品の仕組み、機能、アーキテクチャなど、発表された内容をより深く理解するための情報。
セクション内で `###` を使ってサブトピックに分割してよい。

### サブトピック例

アーキテクチャの変更、新しい API、内部動作、対応プロトコル、
主要な機能の詳細説明、関連製品との統合方法など。

## 応用シナリオ

この発表がどのようなユースケースで活用できるかを具体的に記述。
既存のワークフローへの組み込み方、他サービスとの組み合わせなど。

## 制約・注意点

プレビューの制限事項、既知の問題、対応リージョン、
移行パス、非推奨化される既存機能、価格への影響など。
内容がなければセクションごと省略可。

## 参考リンク

最低 3 件を目標に、以下のカテゴリで整理する。

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

---

## ソースの階層

ソースは 3 階層に分類する。`official_sources` に記載できるのは **一次ソースのみ**。

### 一次ソース（`official_sources` に記載可）

Build 2026 イベントハブ（まずここから）:

- `build.microsoft.com` — 公式イベントサイト・セッションカタログ
- `news.microsoft.com/build-2026/` — 公式アナウンス集約ページ
- `news.microsoft.com/build-2026-live-blog/` — 公式ライブブログ
- `aka.ms/build2026-*` 系短縮リンク（リダイレクト先の正規 URL を引用すること）

製品・プラットフォームブログ:

- `devblogs.microsoft.com` — 開発者ブログ
- `techcommunity.microsoft.com` — Tech Community
- `blogs.microsoft.com` — Official Microsoft Blog
- `github.blog` / `github.blog/changelog` — GitHub 公式ブログ・Changelog

ドキュメント・リリース情報:

- `learn.microsoft.com` — 製品ドキュメント、What's New、リリースノート
- `azure.microsoft.com/en-us/updates/` — Azure Updates
- `docs.github.com` — GitHub ドキュメント（`github.com` のサブドメインとして `allowed-domains.json` のバリデーションを通過する。`official_sources` に記載可）
- `github.com/<microsoft-owned-org>/*/releases` — リリースページ

上記以外でも、Microsoft または Microsoft 傘下の組織が運営するドメインの公式アナウンスは一次ソースとして扱う。全リストは `content/allowed-domains.json` を参照。

### 二次ソース（調査補助のみ。`official_sources` に記載不可）

一次ソースの発見と文脈確認に使う。日本語・英語の両方を確認してバイアスを防ぐ。

- 日本語: Publickey、ITmedia、ASCII.jp、Impress Watch、CodeZine、Gihyo
- 英語: The Verge、Ars Technica、InfoQ、The Register、ZDNET

二次ソースから得た情報は、一次ソースまで辿って一次ソースの URL を `official_sources` に記載する。

### 三次ソース（調査補助のみ。`official_sources` に記載不可）

開発者の反応やニュアンスの把握に使うが、ファクトの根拠にはしない。

- 日本語: Zenn、Qiita、X
- 英語: Reddit、X、Hacker News

三次ソースの主張が一次ソースで裏付けられない場合、エントリには含めない。

---

## 品質基準

- **技術的正確性:** 日付、バージョン番号、スピーカー、機能、リージョン、価格を捏造しない
- **正式名称の正確な使用:** Microsoft の表記・大文字小文字に合わせる（例: `.NET 10`、`Azure AI Foundry`、`GitHub Copilot`）。リネームされた場合は新名称を使い、旧名称を一度だけ注記
- **正確なステータスラベル:** 一次ソースの記述と一致させる
- **中立的・事実的な文体:** 意見、ロードマップ推測、競合比較は入れない（一次ソース自体が比較している場合を除く）
- **再現可能性:** `official_sources` のリンクを辿れば、エントリのすべての主張を検証できること

---

## 引用ポリシー

- `official_sources` には **一次ソースのみ** を記載
- 本文中では初出時にインラインリンク。同じ URL の繰り返しは避ける
- 二次ソースが一次ソースにリンクしている場合、**一次ソースの URL** を記載する
- 引用は控えめに。言い換えてリンクする。直接引用は 25 語以下で、正確な文言が重要な場合のみ

---

## 文体ルール

同じ Markdown が人間のサイトとエージェントのコンテキストウィンドウで読まれるため、すべてのトークンに意味を持たせる。

- **短いセクション + 箇条書き** がデフォルト。並列するファクト（リージョン、SKU、ティア）にはテーブル
- `summary` は frontmatter 専属。本文で frontmatter の内容を繰り返さない
- 具体的な名詞とバージョン番号を優先。マーケティング用語（「パワフル」「革新的」「ゲームチェンジング」）は削除
