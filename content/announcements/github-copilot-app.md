---
id: github-copilot-app
title: GitHub Copilot App
summary: エディタに依存しないエージェントネイティブのデスクトップアプリ GitHub Copilot App を Technical Preview で発表。GitHub Copilot CLI 上に構築され、Issue・PR・セッションを起点に並列ワークストリームでエージェント駆動開発を行う。音声入力、クラウドセッション、エージェンティックブラウジング、Canvas モデルによるユーザー・エージェント・アプリの三者協調を特徴とする。
tags:
  - github-copilot
  - github-copilot-app
content_type: announcement
topic: developer-tools-and-frameworks
official_sources:
  - https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience
  - https://github.blog/changelog/2026-05-14-github-copilot-app-is-now-available-in-technical-preview
  - https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app
  - https://docs.github.com/en/copilot/concepts/agents/github-copilot-app
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

GitHub Copilot App は、Build 2026 で発表されたエージェントネイティブのデスクトップアプリケーションである。[GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli) 上に構築され、GitHub のリポジトリ・ブランチ・CI パイプラインとネイティブに統合する。Windows・macOS・Linux に対応。

従来の IDE 内 Agent Mode がエディタ内でのタスク実行に焦点を当てていたのに対し、Copilot App は Issue からプルリクエスト、レビューフィードバックからマージまでの開発ライフサイクル全体を、複数エージェントの並列実行で管理する新しいサーフェスを提供する。GitHub は「エージェント体験（AX: Agent Experience）」という概念を提唱し、人間とエージェントが同じインターフェース上で協調する開発パラダイムを打ち出した。

## 主な発表

- **GitHub Copilot App**: エディタ非依存のエージェントネイティブ・デスクトップアプリ（**Technical Preview**）
- **Technical Preview 拡張（2026-06-02）**: Copilot Pro / Pro+ / Business / Enterprise 全プランに提供拡大（**Technical Preview**）
- **Canvas**: エージェントと人間が協調する双方向作業サーフェス（**Technical Preview**）
- **クラウド / ローカルサンドボックス**: エージェントのコード実行を隔離する実行環境（**Public Preview**）
- **エージェンティックブラウジング**: 統合ブラウザによるエージェントの UI 操作・検証（**Technical Preview**）
- **クラウドオートメーション**: 定期タスクのクラウドスケジュール実行（**Technical Preview**）

## 詳細

### アーキテクチャと Copilot CLI との関係

Copilot App は [GitHub Copilot CLI](./github-copilot-cli.md) と同じランタイム基盤上で動作する。CLI で開始したセッションはアプリの My Work ビューにそのまま表示され、両サーフェスが単一の情報源を共有する。CLI の `copilot --cloud` コマンドと同等のクラウド実行もアプリ UI から直接利用可能。

セッション状態はローカルの `~/.copilot/session-state/{session-id}/` に永続化され、`events.jsonl`（セッション履歴）、`workspace.yaml`（メタデータ）、`plan.md`（実装計画）などで構成される。セッションの一時停止・再開が可能で、複数プロジェクトのタスクを並列管理できる。

### My Work ビュー

アプリの中心となるダッシュボード。接続されたリポジトリ全体の進行中の作業を一元表示する:

- アクティブなエージェントセッション
- 関連する Issue・プルリクエスト
- バックグラウンドで実行中のオートメーション
- Copilot CLI で開始したセッション

### GitHub コンテキスト統合

セッションは以下の起点から開始できる:

- **Issue**: Issue の詳細・コメントがセッションコンテキストに引き継がれ、エージェントが Issue を起点にブランチ作成・実装・PR 作成まで自律的に実行
- **プルリクエスト**: レビューコメントへの対応、追加修正を PR コンテキスト付きで開始
- **プロンプト**: 自由記述でタスクを定義
- **過去のセッション**: 前回のセッション状態を引き継いで再開

リポジトリの状態、レビューコメント、CI チェックの結果がセッションに自動的に接続される。

### Canvas（キャンバス）

Canvas は Build 2026 で導入された双方向作業サーフェスであり、チャットとは別の「作業が可視化される場所」として機能する。チャットが指示と曖昧さの解消に適しているのに対し、Canvas はエージェントの作業結果を検査・操舵・検証するためのインターフェースである。

**Canvas の種類:** プラン、プルリクエストビュー、ブラウザセッション、ターミナル、デプロイダッシュボード、ワークフロー状態、カンバンボード、リリースチェックリスト、スプレッドシートなど

**Canvas の三者協調モデル:**

- **ユーザー**: Canvas 上の状態を検査し、方向を修正し、直接編集し、進捗を検証する
- **エージェント**: Canvas の状態を読み取り、構造化アクションを実行し、サーフェスを更新し、完了の証拠として利用する
- **アプリ**: Canvas をアーティファクトやランタイムに接続し、許可されるアクションを制御する

**Canvas 拡張:** `/create-canvas` スキルでカスタム Canvas を作成可能。プロジェクトスコープ（`.github/extensions`）またはユーザースコープ（`~/.copilot/extensions`）に保存される。例えば、エージェントがカードを作成・移動できるカンバンボード Canvas や、会議と Issue を統合したダッシュボード Canvas を自然言語で定義できる。

### クラウド / ローカルサンドボックス

エージェントがコードを実行する際の隔離環境として、**Public Preview** で提供開始。

**ローカルサンドボックス:**

- `/sandbox enable` でセッション内で有効化
- ファイルシステム、ネットワーク、システム機能への制限付きアクセスで実行
- Microsoft MXC テクノロジーにより macOS・Linux・Windows で一貫した隔離体験を提供
- Microsoft Intune 等の MDM プラットフォームによるエンタープライズポリシーの一元管理・適用が可能
- Copilot サブスクリプションに含まれる（追加コスト不要）

**クラウドサンドボックス:**

- GitHub がホストする完全に隔離された一時的な Linux 環境で実行
- セッションの最大実行時間は 59 分（`copilot-setup-steps.yml` で短縮設定可能）
- 組織ごとに独自のポリシーを定義可能
- リモートコントロールにより任意のデバイスからセッションを引き継げる

### エージェンティックブラウジング

統合ブラウザ（Playwright MCP サーバー経由）を通じて、エージェントが自律的に UI を操作する。クリック・入力・スクリーンショット取得といったブラウザアクションを実行し、フロントエンドの変更を end-to-end で検証する。ネイティブのシークレットスキャンとプッシュ保護により、エージェントが認証情報を漏洩するリスクを防止する。

### 音声入力

オンデバイスの音声認識により、音声でエージェントに指示を出せる。音声データはデバイス外に送信されない。Copilot CLI と同じアプローチを採用。

### クラウドオートメーション

定期実行タスクをクラウドでスケジュールし、ローカルマシンの起動状態に依存せず実行する。トリアージ、依存関係更新、リリースノート生成、クリーンアップ、定期的な PR 作成などを自動化できる。

### その他の組み込みスキル

- **Rubber duck**: コードを書く前に問題を整理する対話スキル。思考の整理を支援する
- **`/chronicle`**: 過去のエージェントセッション（アプリ外で開始したものを含む）のデータをクエリ。セッション履歴から学んだ教訓や改善提案（`/chronicle tips`）を自動生成し、`.github/copilot-instructions.md` に反映する機能も備える
- **Quick Chat**: リポジトリ接続やブランチ作成なしで、素早く質問・ブレインストーミングを行うモード

## 応用シナリオ

- **並列エージェント開発**: 朝の時点で 3 つのエージェントが並行稼働 — 1 つは本番バグの調査、1 つはバックログ Issue の実装、1 つは PR レビューフィードバックへの対応。開発者は My Work ビューから全体を監督し、必要に応じて介入する
- **Issue 駆動の自律開発**: Issue を起点にセッションを開始し、エージェントがブランチ作成・コード変更・テスト・PR 作成まで一連のワークフローを自律実行。開発者はレビューとマージに集中する
- **クラウドオートメーション**: トリアージ、依存関係更新、リリースノート生成、コードクリーンアップを定期スケジュールで自動化。ローカルマシンの起動不要
- **エージェンティックブラウジングによる UI 検証**: フロントエンドの変更後、エージェントが統合ブラウザで実際に UI を操作・スクリーンショット取得し、変更の正しさを end-to-end で検証
- **Canvas によるチーム協調**: カンバンボード Canvas で Issue の優先順位付けとエージェントセッションの起動をひとつの画面で管理
- **CLI ↔ App のシームレスな移行**: ターミナルで `copilot` コマンドで開始したセッションを、デスクトップアプリの My Work ビューでそのまま視覚的に管理・操舵

## 制約・注意点

- **Technical Preview** であり変更の可能性がある
- 対応プラン: Copilot Pro / Pro+ / Business / Enterprise（組織でプレビューと Copilot CLI の有効化が必要）
- Copilot Free ユーザーは[ウェイトリスト](https://github.com/features/preview/github-app)から登録可能
- 「Suggestions matching public code」ポリシーを「Block」に設定していても、公開コードに一致するコードが生成される場合がある
- クラウドセッションの最大実行時間は 59 分。超過するとタイムアウトで停止する
- ローカルサンドボックスのポリシー適用には Microsoft Intune 等の MDM プラットフォームが必要

## 関連エントリ

- [GitHub Copilot CLI](./github-copilot-cli.md) — Copilot App の基盤ランタイム。CLI で開始したセッションはアプリの My Work ビューに表示される
- [GitHub Copilot SDK](./github-copilot-sdk.md) — Copilot のエージェントランタイムをプログラマブルに公開する SDK。App/CLI と同じランタイム基盤を使用

## 参考リンク

- [GitHub Copilot App 公式ブログ: The agent-native desktop experience](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience)
- [Changelog: Technical Preview 公開（2026-05-14）](https://github.blog/changelog/2026-05-14-github-copilot-app-is-now-available-in-technical-preview)
- [Changelog: Technical Preview 拡張（2026-06-02）](https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app)
- [Changelog: GitHub Copilot App Preview（2026-06-02）](https://github.blog/changelog/2026-06-02-github-copilot-app-preview/)
- [GitHub Blog: GitHub Copilot — The agent-native app](https://github.blog/news-insights/product-news/github-copilot-the-agent-native-app/)
- [Changelog: Cloud and local sandboxes for GitHub Copilot（Public Preview）](https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview)
- [GitHub Docs: About the GitHub Copilot app](https://docs.github.com/en/copilot/concepts/agents/github-copilot-app)
- [GitHub Docs: Getting started](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started)
- [GitHub Docs: Working with canvas extensions](https://docs.github.com/copilot/how-tos/github-copilot-app/working-with-canvas-extensions)
- [GitHub Docs: About cloud agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent)
- [GitHub Copilot App リポジトリ](https://github.com/github/app)
- [GitHub Copilot CLI リポジトリ・Changelog](https://github.com/github/copilot-cli/blob/main/changelog.md)
- [Build セッション LIVE104: GitHub, Copilot, VS Code, and More](https://build.microsoft.com/sessions/LIVE104)
- [YouTube: GitHub Copilot App ウォークスルー](https://www.youtube.com/watch?v=NKIX0g9RPxw)
