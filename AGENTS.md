# AGENTS.md

AI エージェント（GitHub Copilot、Claude 等）がこのリポジトリでコンテンツを追加・更新する際のガイドライン。規約の詳細は [`docs/`](docs/) を参照。

## このプロジェクトについて

Microsoft Build 2026 の発表情報を集約したナレッジベース。
[`content/`](content/) の Markdown が Single Source of Truth であり、人間向けサイト・`llms.txt`・Agent Plugin（skills）はすべてビルドスクリプトで生成される派生物。

設計の背景は [`docs/architecture.md`](docs/architecture.md) と [`docs/decisions.md`](docs/decisions.md) を参照。構造的な変更を提案する前に読むこと。

## ゴールデンルール

1. **正確性 > 網羅性** ファクトベースのリファレンスである。アナウンス、日付、スピーカー、バージョン番号、リンクを捏造しない。検証できない事実は本文にその旨を明記する。
2. **必ずソースを引用** すべてのコンテンツは `official_sources` に少なくとも 1 つの一次ソース URL を持つ。
3. **1 製品/サービスにつき 1 ファイル** エントリは焦点を絞り、サイトとエージェントが必要な部分だけロードできるようにする。
4. **生成物は手で編集しない:** `site/`、`public/`、`skills/` はビルドスクリプトの出力物。`skills/` は CI が自動コミットする。手動でのビルド・コミットは不要。

## エージェント

コンテンツの調査・生成には [`.github/agents/researcher.agent.md`](.github/agents/researcher.agent.md) を使用する。エージェント定義には調査ワークフロー（ツールの使い分け、ソース探索深度、例外ハンドリング）が定義されている。コンテンツ規約（品質基準、引用ポリシー、文体等）は `docs/content-guide.md` に集約されており、エージェントはそちらを参照する。

## コンテンツ規約

[`docs/content-guide.md`](docs/content-guide.md) を参照。frontmatter 仕様、本文テンプレート、ファイル配置、ソース階層、品質基準、引用ポリシー、文体ルール、対象範囲はすべてそこに集約されている。

## 変更時の手順

1. `content/` 配下のファイルを追加・編集する
2. CI が自動で `skills/` を再生成してコミットする（`site/` と `public/` は `.gitignore` 対象）
3. CI は frontmatter の検証とリンク整合性チェックを実行する

### メタデータ JSON の更新ポリシー

`content/` 直下の JSON ファイルはコンテンツの分類とバリデーションの基盤である。変更は慎重に行う。

**`tags.json`** — 新しい製品・サービスのエントリを追加するとき:
- 既存タグで対応できないか先に確認する（`aka` フィールドで吸収できる場合は新規追加不要）
- `slug` は kebab-case。Microsoft の正式な製品名に準拠する
- `name` は公式表記に合わせる（大文字小文字、スペース含む）
- `aka` に曖昧な短縮名や旧名称を登録して名寄せを助ける

**`topics.json`** — Build の公式セッションカタログの Topic 分類に準拠する:
- 新しい Topic が公式に追加された場合のみ追加する
- 独自の Topic を勝手に作らない

**`allowed-domains.json`** — `official_sources` に記載可能なドメインを制御する:
- Microsoft または Microsoft 傘下の組織が運営するドメインの公式アナウンスページのみ追加可
- 二次・三次ソースのドメインは追加しない
- 新ドメイン追加時はそのドメインが一次ソースとして妥当な根拠を PR に記載する

**`build-info.json`** — イベントのメタ情報:
- Build の日程・会場・URL が公式に変更された場合のみ更新する

## ドキュメントの更新

各ドキュメントはリビングドキュメントである。更新は責務に応じたファイルに対して提案する:

- **このファイル (AGENTS.md)**: ゴールデンルールの追加・変更、変更手順の見直し、メタデータ JSON ポリシーの更新
- **`docs/content-guide.md`**: コンテンツルール（引用、命名、ステータスラベル、ソース階層、対象範囲）の更新
- **`.github/agents/researcher.agent.md`**: 調査ツールの挙動変更、例外ハンドリングの更新、探索カテゴリの追加
