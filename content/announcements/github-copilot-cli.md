---
id: github-copilot-cli
title: GitHub Copilot CLI
summary: GitHub Copilot CLI を Build 2026 で大幅刷新。ラバーダックと音声入力が GA、プロンプトスケジューリングと新ターミナル UI が experimental で提供。クラウド/ローカルサンドボックスを Public Preview で追加し、Microsoft MXC ベースのセキュア分離環境でエージェンティックワークフローを実現する。
tags:
  - github-copilot
content_type: announcement
topic: developer-tools-and-frameworks
official_sources:
  - https://github.blog/changelog/2026-06-02-copilot-cli-improved-ui-rubber-duck-prompt-scheduling-and-voice-input
  - https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

GitHub Copilot CLI が Build 2026 で大幅にリフレッシュされた。対話的な開発体験を強化する新機能と、エージェンティックワークフローの安全性を担保するサンドボックス機能の2軸で進化している。

## 主な発表

- **ラバーダック**: セカンドオピニオン機能（**GA**）
- **音声入力**: Copilot への音声による指示（**GA**）
- **プロンプトスケジューリング**: `/every` と `/after` でプロンプトをスケジュール実行（**Experimental**）
- **新ターミナル UI**: タブ付きインターフェース（Issue、PR、Gist 表示）（**Experimental**）
- **ローカルサンドボックス**: Microsoft MXC ベースの分離実行環境（**Public Preview**）
- **クラウドサンドボックス**: GitHub ホスティングの完全分離クラウド環境（**Public Preview**）

## 詳細

### ラバーダック

エージェントが提案した変更に対してセカンドオピニオンを取得する機能。コードレビューの自動化やリスク検出に活用できる。

### サンドボックス

- **ローカル**: `/sandbox enable` で有効化。Copilot のシェルコマンド実行をファイルシステム・ネットワーク・システム機能から分離。macOS、Linux、Windows で一貫した体験を提供
- **クラウド**: `copilot --cloud` で起動。GitHub ホスティングのフルマネージド分離環境。リポジトリメタデータを含むリモートセッション
- Microsoft Intune 等の MDM でエンタープライズポリシーを一元管理可能

### プロンプトスケジューリング

- `/every "weekday morning"`: 定期実行
- `/after "tests pass"`: 条件付き実行

## 応用シナリオ

- 毎朝のリポジトリステータスサマリーをスケジュール実行
- エージェント生成コードをサンドボックス内で安全に実行・検証
- ローカルサンドボックスでエンタープライズポリシーを適用しつつ開発

## 参考リンク

- [Copilot CLI: Improved UI, rubber duck, prompt scheduling, and voice input](https://github.blog/changelog/2026-06-02-copilot-cli-improved-ui-rubber-duck-prompt-scheduling-and-voice-input)
- [Cloud and local sandboxes for GitHub Copilot now in public preview](https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview)
- [GitHub Copilot app: The agent-native desktop experience](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience)
