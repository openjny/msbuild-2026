---
id: github-copilot-sdk
title: GitHub Copilot SDK
summary: GitHub Copilot のエージェントランタイムをプログラマブルなレイヤーとして公開する Copilot SDK が Node.js/TypeScript・Python・Go・.NET・Rust・Java の 6 言語で GA。ツール呼び出し、ストリーミング、ファイル操作、マルチターンセッションを備え、独自アプリケーションにエージェント機能を組み込める。Copilot クラウドエージェントや Copilot CLI と同じランタイム基盤を使用する。
tags:
  - github-copilot
  - github-copilot-sdk
content_type: announcement
topic: developer-tools-and-frameworks
official_sources:
  - https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk
  - https://github.blog/changelog/2026-04-02-copilot-sdk-in-public-preview
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

GitHub Copilot SDK は、Copilot のエージェントランタイムをプログラマブルなレイヤーとして公開する SDK である。2026年4月2日に Public Preview として提供開始され、Build 2026 で Node.js/TypeScript、Python、Go、.NET、Rust、Java の 6 言語で GA に到達した。

AI オーケストレーションレイヤーを自前で構築することなく、ツール呼び出し、ストリーミング、ファイル操作、マルチターンセッションを自アプリケーションに組み込める。

## 主な発表

- **GitHub Copilot SDK GA**: Node.js/TypeScript、Python、Go、.NET、Rust、Java の 6 言語で **GA**

## 詳細

### ランタイム基盤

Copilot SDK は GitHub Copilot クラウドエージェントおよび Copilot CLI を駆動する本番テスト済みランタイムを公開する。MCP サーバー連携、マルチターンセッション管理、ツールオーケストレーションを標準で備える。

### 主要機能

- **カスタムツール・エージェント**: ドメイン固有のツールをハンドラ付きで定義し、エージェントが呼び出しタイミングを判断
- **システムプロンプトカスタマイズ**: `replace`、`append`、`prepend`、動的 `transform` コールバックでプロンプトの部分制御が可能
- **ストリーミング**: トークン単位のリアルタイムレスポンス
- **Blob アタッチメント**: 画像・スクリーンショット・バイナリデータをディスク書き込み不要でインライン送信
- **OpenTelemetry サポート**: W3C トレースコンテキスト伝搬による分散トレーシング

### 対応言語

Python（`pip install github-copilot-sdk`）、JavaScript/TypeScript、Go、C#、Java、Rust

### 課金

各プロンプトは Copilot サブスクリプションのプレミアムリクエストクォータとしてカウントされる。Copilot Free（個人利用）および BYOK（エンタープライズ）でも利用可能。

## 応用シナリオ

- 社内ツールにエージェント機能を組み込み、ドメイン固有のタスク自動化を実現
- カスタマーサポートアプリにエージェントセッションを統合し、コンテキストを維持した対話を提供
- OpenTelemetry 連携でエージェントの実行トレースを既存の監視基盤に統合

## 制約・注意点

- 2026年4月2日に Public Preview 開始、Build 2026 で **GA** に到達
- 各プロンプトが Copilot プレミアムリクエストクォータにカウントされる
- 2026年4月2日に Public Preview 開始（Build 2026 以前）

## 参考リンク

- [Build an agent into any app with the GitHub Copilot SDK](https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk)
- [Copilot SDK in public preview — Changelog](https://github.blog/changelog/2026-04-02-copilot-sdk-in-public-preview)
