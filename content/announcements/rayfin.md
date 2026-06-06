---
id: rayfin
title: Rayfin
summary: オープンソースの SDK/CLI として Rayfin を Preview で発表。開発者やコーディングエージェントがコードでアプリケーションバックエンド（データベース、認証、ガバナンス）を定義し、Microsoft Fabric に直接デプロイ可能。データは OneLake に格納され、Fabric の分析・AI エンジンと即座に統合される。Replit がローンチパートナー。
tags:
  - rayfin
  - microsoft-fabric
content_type: announcement
topic: cloud-platform-and-data
official_sources:
  - https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases
  - https://community.fabric.microsoft.com/t5/Fabric-Updates-Blog/Introducing-Rayfin-A-new-AI-first-way-to-build-deploy-and-govern/ba-p/5191676
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Rayfin は、開発者やコーディングエージェントがアプリケーションバックエンドをコードで定義・デプロイするためのオープンソース SDK/CLI である。Build 2026 で Preview として発表された。

コーディングエージェントがアプリを高速に生成できる一方、プロダクション移行にはバックエンド（データベース、認証、権限管理、状態管理）の構築が課題となる。Rayfin はこのギャップを埋め、Microsoft Fabric へのデプロイにより初日からエンタープライズグレードのセキュリティとスケールを提供する。

## 主な発表

- **Rayfin SDK/CLI**: コードでバックエンドを定義・デプロイするオープンソースツール（**Preview**）
- **Fabric Apps**: Rayfin で構築したアプリの Fabric 上でのホスティング
- **Replit パートナーシップ**: ローンチパートナーとして統合

## 詳細

### アーキテクチャ

- GitHub ベースのワークフローでデータモデル、バックエンドロジック、アクセスポリシーをコードで定義
- `rayfin up` コマンドで Microsoft Fabric に直接デプロイ
- アプリデータは OneLake に格納され、Fabric の分析スタック（セマンティックモデル、リアルタイムデータ、AI エンジン）と即座に統合

### 今後のロードマップ

- Postgres サポート
- RBAC（ロールベースアクセス制御）
- 拡張コネクタ
- セルフホステッドランタイム

## 応用シナリオ

- コーディングエージェントが生成したアプリをエンタープライズ基準でプロダクション化
- Fabric のデータ分析基盤と統合したアプリケーション開発
- Replit 上での AI アプリ開発 → Fabric へのデプロイ

## 参考リンク

- [Microsoft Build 2026: Building agentic apps with Microsoft Fabric and Microsoft Databases](https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases)
- [Introducing Rayfin（Fabric Community）](https://community.fabric.microsoft.com/t5/Fabric-Updates-Blog/Introducing-Rayfin-A-new-AI-first-way-to-build-deploy-and-govern/ba-p/5191676)
- [GitHub App + Rayfin: Microsoft Build 2026（デモ動画）](https://news.microsoft.com/build-2026)
