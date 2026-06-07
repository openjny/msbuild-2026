# Rayfin

オープンソースの SDK/CLI として Rayfin を Preview で発表。開発者やコーディングエージェントがコードでアプリケーションバックエンド（データベース、認証、ガバナンス）を定義し、Microsoft Fabric に直接デプロイ可能。データは OneLake に格納され、Fabric の分析・AI エンジンと即座に統合される。Replit がローンチパートナー。

## 概要

Rayfin は、AI コーディングエージェント時代のために設計されたオープンソースの Backend-as-a-Service（BaaS）プラットフォームである。TypeScript デコレータでデータモデルを宣言的に定義し、`rayfin up` コマンド一つで Microsoft Fabric にバックエンド全体（データベース、認証、API、アクセスポリシー）をデプロイする。Build 2026 で **Public Preview** として発表された。

AI コーディングエージェントによりアプリの構築自体は容易になったが、プロダクション環境で必要なバックエンド（データベース構築、認証設定、コンプライアンス対応、既存データへの安全な接続）の構築が依然としてボトルネックとなっている。Rayfin はこのギャップを埋め、Fabric のセキュリティ・ガバナンス基盤を活用して初日からエンタープライズグレードのアプリケーションを実現する。

デプロイされたアプリケーションは Fabric 上のファーストクラスアーティファクトとして動作し、アプリデータは OneLake に直接格納される。これにより、追加のパイプラインやデータ複製なしに、Fabric の分析・レポーティング・AI エンジンと即座に統合される。

## 主な発表

- **Rayfin SDK/CLI**: TypeScript デコレータによるスキーマ定義と `rayfin up` によるワンコマンドデプロイ（**Public Preview**）
- **Fabric Apps**: Rayfin で構築したアプリの Fabric 上でのファーストクラスアーティファクトとしてのホスティング（**Public Preview**）
- **データアプリテンプレート**: Power BI チームと共同開発した React + Vega Lite ベースのエンタープライズビジュアルテンプレート
- **Replit パートナーシップ**: ブラウザベース IDE から Fabric への直接デプロイ（**Private Beta**）
- **セルフホステッドランタイム**: Rayfin ランタイムのオープンソース化ロードマップを発表

## 詳細

### アーキテクチャとワークフロー

Rayfin はコードファーストのワークフローでバックエンド開発を完結させる:

1. **定義**: Rayfin SDK（TypeScript）でデータモデル、API、アクセスポリシー、ビジネスロジック、既存データソースへの接続を一箇所で定義。構造化・強く型付けされた定義により、GitHub Copilot 等のエージェントがスキャフォールド・拡張・リファクタリングを人間と同等の確実性で実行可能
2. **デプロイ**: `rayfin up` コマンドで Fabric にデプロイ。データベース、認証、アクセスポリシー、API を自動プロビジョニング。手動セットアップやインフラ作業は不要
3. **運用**: Fabric 上のファーストクラスアーティファクトとして動作。OneLake に直接接続し、ガバナンス・セキュリティ・コンプライアンスの統一フレームワーク内で運用

### SDK パッケージ構成

Rayfin はモノレポ構成で以下のパッケージを提供する（npm スコープ: `@microsoft`）:

| パッケージ | 役割 |
|-----------|------|
| `@microsoft/create-rayfin` | プロジェクトスキャフォールディング（`npm create @microsoft/rayfin@latest`） |
| `@microsoft/rayfin-cli` | デプロイ・マイグレーション・リソース管理 |
| `@microsoft/rayfin-core` | エンティティデコレータ、スキーマ定義、コア型 |
| `@microsoft/rayfin-client` | Rayfin サービスへのメインクライアント SDK |
| `@microsoft/rayfin-data` | Data API Builder エンドポイントへの型安全クライアント |
| `@microsoft/rayfin-auth` | 認証ユーティリティ |
| `@microsoft/rayfin-auth-provider-fabric` | Fabric ブローカード認証プロバイダー |
| `@microsoft/rayfin-functions` | サーバーレス関数ランタイム |
| `@microsoft/rayfin-storage` | ストレージ操作 |
| `@microsoft/rayfin-mcp` | MCP サーバー統合 |

### TypeScript デコレータによるスキーマ定義

Rayfin SDK では TypeScript クラスデコレータでバックエンドを宣言的に定義する:

- **`@Entity` デコレータ**: クラスを Fabric SQL Database のテーブルにマッピング
- **プロパティデコレータ**: カラム型、min/max 制約をデータベース制約に自動変換
- **`@Role` デコレータ**: ポリシー関数で行レベルセキュリティを実現（例: 認証済みユーザーが自分のデータのみ閲覧可能）
- **自動マイグレーション**: スキーマ変更を検出し、マイグレーションスクリプトを自動生成・実行

### OneLake と Fabric データスタックとの統合

従来の BaaS プラットフォームはデータ基盤の外部に位置するが、Rayfin はアプリを Fabric 内部で実行する点が根本的に異なる:

- アプリデータは OneLake に直接格納
- Fabric の全ワークロード（セマンティックモデル、リアルタイム分析、AI エンジン）で即座に利用可能
- データ複製や追加 ETL パイプラインが不要
- コネクタにより OneLake 内の既存データソース（データベース、ウェアハウス、セマンティックモデル）への接続も可能
- 単一の Fabric Capacity で分析ワークロードとアプリワークロードの両方を課金

### 認証とガバナンス

Fabric のセキュリティモデルが自動適用される:

- 現在は Microsoft Entra ID 認証必須
- すべてのアーティファクトに Fabric のセキュリティ・コンプライアンスルールが自動適用
- HIPAA、SOC 2、FedRAMP High、PCI DSS、GDPR、ISO 27001、HITRUST 認証を継承
- ワークスペース間移動により dev → staging → production のデプロイフローを構築可能

### Replit パートナーシップ

Replit をローンチパートナーとし、ブラウザベースの AI コーディング環境から Fabric への直接デプロイを実現:

- 非技術・半技術ユーザーが Replit のエージェンティック IDE でアプリを構築
- Rayfin 経由で Fabric にデプロイし、セキュリティ・ガバナンスを自動継承
- アプリ・データ・サービスはユーザー自身の Fabric テナント内で管理
- Replit CEO Amjad Masad: 「Rayfin はユーザーに新しい開発モデルを提供する。エージェントがコードを書き、Fabric が素早く安全に出荷する。アイデアからエンタープライズグレードのプロダクションまで時間単位で到達可能になる」

### ロードマップ

| 時期 | 機能 |
|------|------|
| 現在（Preview） | データベース（SQL）、Enterprise Auth（Entra）、Fabric アプリ/DB 管理、Fabric データへの接続 |
| Coming Soon | Functions、RBAC、追加データコネクタ、Observability、Free Tier |
| 年内 | OIDC 認証、Blob Storage、リアルタイムサービス、エージェンティックアプリ、ソーシャルログイン、Postgres サポート |

ランタイムの一部をオープンソースとして公開し、Fabric 外の多様なインフラ上でのセルフホスト実行も目指す。

## 応用シナリオ

- AI コーディングエージェント（GitHub Copilot 等）が生成したアプリを、インフラ管理なしにエンタープライズ基準でプロダクション化。`rayfin up` 一つでデータベース・認証・API がプロビジョニングされる
- OneLake に格納されたアプリデータを、追加パイプライン不要で Fabric のセマンティックモデル・Power BI レポート・AI エンジンと直接統合した分析アプリケーション開発
- Replit 等のブラウザベース IDE から非技術ユーザーがアプリを構築し、Fabric のガバナンス基盤で管理されたテナントにデプロイ
- データアプリテンプレートを用いた、既存 Fabric データ上のインタラクティブ分析ダッシュボードの迅速な構築
- 複数アプリが同一バックエンドを共有するマルチテナントアプリケーション構成（スコープによるアプリごとの読み書き権限制御）

## 制約・注意点

- 現在は Microsoft Fabric へのデプロイのみ対応。セルフホステッドランタイムは将来の計画
- 認証は現時点で Microsoft Entra ID のみ。OIDC・ソーシャルログインは年内対応予定
- データベースダイアレクトは Microsoft SQL のみ。Postgres サポートは年内予定
- ローカル開発は Docker コンテナによる Experimental サポート
- Replit 統合は Private Beta 段階

## 公式ソース

- [https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases](https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases)
- [https://community.fabric.microsoft.com/t5/Fabric-Updates-Blog/Introducing-Rayfin-A-new-AI-first-way-to-build-deploy-and-govern/ba-p/5191676](https://community.fabric.microsoft.com/t5/Fabric-Updates-Blog/Introducing-Rayfin-A-new-AI-first-way-to-build-deploy-and-govern/ba-p/5191676)
- [https://github.com/microsoft/rayfin](https://github.com/microsoft/rayfin)
