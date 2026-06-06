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

GitHub Copilot App は、Build 2026 で発表されたエージェントネイティブのデスクトップアプリケーションである。[GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli) 上に構築され、GitHub のリポジトリ・ブランチ・CI パイプラインとネイティブに統合する。

従来の Agent Mode がエディタ内でのタスク実行に焦点を当てていたのに対し、Copilot App は Issue からプルリクエスト、レビューフィードバックからマージまでの開発ライフサイクル全体を、複数エージェントの並列実行で管理する新しいサーフェスを提供する。Windows・macOS・Linux に対応。

## 主な発表

- **GitHub Copilot App**: エディタ非依存のエージェントネイティブ・デスクトップアプリ（**Technical Preview**）
- **Technical Preview 拡張**: Copilot Business / Enterprise 向けに提供拡大（**Technical Preview**）

## 詳細

### アーキテクチャ

Copilot App は [GitHub Copilot CLI](https://github.com/github/copilot-cli) と同じランタイム基盤上で動作する。Copilot CLI で開始したセッションはアプリの My Work ビューにそのまま表示され、両サーフェスが単一の情報源を共有する。

### GitHub コンテキスト統合

Issue・PR・プロンプト・過去のセッションからセッションを開始できる。リポジトリの状態やレビューコメントがセッションに引き継がれる。

### フォーカスセッション

セッションごとにブランチ・ファイル・会話・タスク状態を分離。一時停止・再開が可能で、複数プロジェクトのタスクを並列管理できる。

### Canvas モデル

ユーザー・エージェント・アプリの三者が協調する作業モデル:

- **ユーザー**: 状態の検査、方向の修正、直接編集、進捗の検証
- **エージェント**: Canvas の状態読み取り、構造化アクションの実行、サーフェスの更新、完了証拠としての利用
- **アプリ**: Canvas をアーティファクトやランタイムに接続し、許可されるアクションを制御

### 主要機能

- **音声入力**: オンデバイス音声認識（音声データは外部送信されない）
- **クラウドセッション**: `copilot --cloud` と同等のクラウド実行をアプリ UI から利用可能
- **クラウドオートメーション**: 定期実行タスクをクラウドでスケジュール
- **エージェンティックブラウジング**: 統合ブラウザでエージェントが UI 操作（クリック・入力・スクリーンショット）して変更を検証
- **Rubber duck スキル**: コードを書く前に問題を整理する対話スキル
- **`/chronicle`**: 過去のエージェントセッションのデータをクエリ

## 応用シナリオ

- Issue からプルリクエストまでのワークフローを複数エージェントが並列で自律実行し、開発者はレビューに集中
- クラウドオートメーションでトリアージ、依存関係更新、リリースノート生成、クリーンアップを定期自動化
- エージェンティックブラウジングで UI 変更を自動検証し、スクリーンショットで完了を確認
- Copilot CLI ユーザーが同じセッションをデスクトップアプリで視覚的に管理

## 制約・注意点

- **Technical Preview**。対応プラン: Copilot Business / Enterprise（組織でプレビューと Copilot CLI を有効化が必要）。Copilot Pro / Pro+ / Max はウェイトリスト
- Copilot Free ユーザーは[ウェイトリスト](https://github.com/features/preview/github-app)から登録可能
- 「Suggestions matching public code」ポリシーを「Block」に設定していても、公開コードに一致するコードが生成される場合がある

## 参考リンク

- [GitHub Copilot App 公式ブログ](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience)
- [Changelog: Technical Preview 公開](https://github.blog/changelog/2026-05-14-github-copilot-app-is-now-available-in-technical-preview)
- [Changelog: Technical Preview 拡張](https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app)
- [GitHub Docs: About the GitHub Copilot app](https://docs.github.com/en/copilot/concepts/agents/github-copilot-app)
- [GitHub Docs: Getting started](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started)
- [GitHub Copilot App リポジトリ](https://github.com/github/app)
- [GitHub Copilot CLI リポジトリ・Changelog](https://github.com/github/copilot-cli/blob/main/changelog.md)
- [Build セッション LIVE104: GitHub, Copilot, VS Code, and More](https://build.microsoft.com/sessions/LIVE104)
- [YouTube: GitHub Copilot App ウォークスルー](https://www.youtube.com/watch?v=NKIX0g9RPxw)
