---
id: dotnet-aspire
title: .NET Aspire
summary: .NET Aspire の Build 2026 関連更新として、TypeScript AppHost、Aspire CLI の成熟、エージェンティック開発統合を発表。TypeScript 開発者がC#なしでクラウドネイティブアプリを定義・実行でき、Aspire CLI がエージェントのワークフローと連携する開発体験を提供する。
tags:
  - dotnet
content_type: announcement
topic: developer-tools-and-frameworks
official_sources:
  - https://devblogs.microsoft.com/aspire/aspire-typescript-apphost
  - https://devblogs.microsoft.com/aspire/agentic-dev-aspirations
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

.NET Aspire はクラウドネイティブ分散アプリケーションの開発・実行・デプロイを簡素化するフレームワークである。Build 2026 前後の更新で、TypeScript AppHost のサポートと Aspire CLI の成熟、エージェンティック開発との統合が進んだ。

## 主な発表

- **TypeScript AppHost**: TypeScript で AppHost を記述可能（C# 不要）
- **Aspire CLI**: `aspire run`、`aspire deploy`、`aspire new` のクロスプラットフォーム CLI
- **エージェンティック開発統合**: AI コーディングエージェントとの連携最適化
- **AKS デプロイ**: `Aspire.Hosting.Azure.Kubernetes` パッケージ

## 詳細

### TypeScript AppHost

TypeScript 開発者が .NET SDK なしで Aspire のアプリモデルを利用可能。Express/React スターターテンプレートを含む。.NET プロジェクトとの混在もサポート。

### エージェンティック開発

`aspire init` で生成される Aspire スキルがエージェントに提供され、`aspire start` でスタック全体を起動。エージェントはログ、メトリクス、リソース状態を Aspire ダッシュボード経由で自動的に確認可能。

### Aspire CLI

スタンドアロン実行ファイルとしてインストール。`aspire run` でアプリ起動、`aspire deploy` でクラウドデプロイ、`aspire new` でテンプレートからプロジェクト作成。

## 参考リンク

- [TypeScript AppHost in Aspire 13.2](https://devblogs.microsoft.com/aspire/aspire-typescript-apphost)
- [Agentic development aspirations: build, run, observe](https://devblogs.microsoft.com/aspire/agentic-dev-aspirations)
- [What's New in Aspire 13.3](https://devblogs.microsoft.com/aspire/whats-new-aspire-13-3)
- [.NET Aspire ドキュメント](https://learn.microsoft.com/dotnet/aspire/)
