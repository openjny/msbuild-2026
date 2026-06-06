---
id: work-iq
title: Work IQ
summary: エージェントが Microsoft 365 のデータ・アプリにアクセスするための新しいインテリジェンスレイヤー Work IQ と、その API セットを発表。Work IQ APIs は 2026年6月16日に GA 予定で、Chat・Context・Tools・Workspaces の4ドメインを提供。併せて Web IQ（エージェント向けウェブグラウンディング API スイート）も発表。
tags:
  - m365-copilot
content_type: announcement
topic: agents-and-apps
official_sources:
  - https://devblogs.microsoft.com/microsoft365dev/announcing-the-new-work-iq-apis
  - https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Work IQ は Microsoft 365 のインテリジェンスレイヤーであり、エージェントが組織のデータ・コンテキスト・ツールにアクセスするための基盤を提供する。Build 2026 で発表され、Work IQ APIs は 2026年6月16日に GA 予定。

Microsoft IQ ファミリーの一部として、Work IQ（Microsoft 365）、Fabric IQ（Microsoft Fabric）、Foundry IQ（ナレッジ検索）、Web IQ（ウェブグラウンディング）が統合的なインテリジェンスレイヤーを構成する。

## 主な発表

- **Work IQ APIs**: エージェント向け M365 アクセス API セット（**GA 予定: 2026年6月16日**）
- **Microsoft Web IQ**: エージェント向けウェブグラウンディング API スイート

## 詳細

### Work IQ APIs の4ドメイン

| ドメイン | 機能 |
|---------|------|
| Chat | エージェントとユーザー間の会話管理 |
| Context | 組織データへのセマンティックアクセス |
| Tools | M365 アプリの操作呼び出し |
| Workspaces | 作業空間とコラボレーション管理 |

### Work IQ の特徴

1. **Intelligence**: セマンティックインデックス、パーソナルメモリ、組織スキル、ファイルの構造化スキーマ、ビジネス固有のナレッジチューニング
2. **Speed**: 超低レイテンシのセマンティックインデックス
3. **パーミッション対応**: 既存の M365 権限モデルに準拠

Fortune 500 企業における Work IQ の平均データフットプリントは600テラバイト以上（2026年5月時点）。

### Web IQ

ウェブページ、ニュース、画像、動画を含むリアルタイムのウェブ情報にエージェントがアクセスするための API スイート。エンタープライズナレッジとワールドナレッジの両方をエージェントに提供。

## 応用シナリオ

- 社内エージェントが M365 のメール・カレンダー・ファイルを理解してタスクを自動実行
- Copilot と同じインテリジェンスレイヤー上にカスタムエージェントを構築
- Web IQ でリアルタイムのウェブ情報を組み合わせたリサーチエージェント

## 参考リンク

- [Announcing the new Work IQ APIs](https://devblogs.microsoft.com/microsoft365dev/announcing-the-new-work-iq-apis)
- [Work IQ: Production-ready intelligence for every agent](https://devblogs.microsoft.com/microsoft365dev/work-iq-production-ready-intelligence-for-every-agent)
- [Microsoft Build 2026: Be yourself at work](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work)
