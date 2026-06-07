---
id: azure-postgresql
title: "Azure Database for PostgreSQL"
summary: "Build 2026 で 14 の新機能を発表。V6 SKU（NVMe 対応、192 vCores）GA、pg_duckdb による高速分析 GA、AI アシスト Oracle→PostgreSQL 移行 GA、Defender セキュリティ評価 Preview、Chaos Studio 連携 Preview、temporal_tables GA、組み込み Grafana ダッシュボード GA、計画メンテナンスの自主制御 GA など、パフォーマンス・セキュリティ・運用・移行を包括的に強化。"
tags:
  - azure-postgresql
  - azure-kubernetes-service
content_type: announcement
topic: cloud-platform-and-data
official_sources:
  - https://techcommunity.microsoft.com/blog/adforpostgresql/announcing-new-security-maintenance-and-analytics-features-for-postgresql-at-mic/4524559
---

## 概要

Azure Database for PostgreSQL flexible server は Build 2026 で 14 の新機能を発表した。HorizonDB（新 Postgres 互換 DB）と並行して、既存マネージド PostgreSQL サービスのパフォーマンス、セキュリティ、運用性、レジリエンス、移行を大幅に強化する更新群である。

特に注目されるのは V6 SKU（NVMe ローカル SSD、最大 192 vCores）の GA、pg_duckdb による DuckDB エンジン統合による高速分析の GA、AI アシスト Oracle→PostgreSQL 移行の GA である。

## 主な発表

- **V6 SKU with NVMe local SSD**: 5th Gen Intel Xeon / AMD EPYC 9004、最大 192 vCores / 1.8 TiB メモリ。6 月末 GA（**GA**）
- **pg_duckdb Extension**: DuckDB エンジンによるベクトル化実行の高速分析。Azure Blob Storage 書き込み、Parquet 直接クエリ対応（**GA**）
- **pg_ivm Extension**: インクリメンタルマテリアライズドビュー自動保守（**GA**）
- **AI-assisted Oracle to PostgreSQL migration**: VS Code PostgreSQL 拡張 + GitHub Copilot + Foundry でスキーマ・アプリコード変換（**GA**）
- **Migration Service 拡張**: AlloyDB・EDB Extended Server からの移行対応（**GA**）
- **Defender Security Assessments**: PostgreSQL 固有のセキュリティ姿勢評価（**Preview**）
- **temporal_tables Extension**: 履歴データ追跡・時系列クエリ（**GA**）
- **Cross-tenant CMK**: 別テナントの Key Vault 鍵で暗号化（**Preview**）
- **Automatic Entra token refresh libraries**: .NET / JavaScript / Python 向け（**Preview**）
- **Az.PostgreSQLFlexibleServer PowerShell module**: PostgreSQL 18・Elastic Clusters 対応（**GA**）
- **計画メンテナンス自主制御**: リスケジュール・オンデマンド適用（**GA**）
- **Pre-Upgrade Validation Checks**: アップグレードブロッカーの事前検出（**Preview**）
- **Built-in Grafana dashboards**: Azure Portal 組み込み、追加コスト不要（**GA**）
- **Chaos Studio 連携**: ゾーンダウンシミュレーションで HA フェイルオーバー検証（**Preview**）

## 詳細

### パフォーマンスとアナリティクス

V6 SKU は NVMe バックのローカル SSD ストレージと Premium SSD v2 をサポートし、IO 集約型ワークロードに最大限のスループットを提供する。pg_duckdb はベクトル化実行エンジンで集約パフォーマンスを大幅に向上させ、Azure Blob への書き込みと Parquet 直接クエリで外部データとのシームレスな分析を実現する。

### セキュリティと ID

- Defender Security Assessments が PostgreSQL 固有のベストプラクティスに基づくプロアクティブな脆弱性評価を提供
- Cross-tenant CMK で SaaS プロバイダーが暗号化鍵のライフサイクル管理を保持
- Entra トークン自動リフレッシュライブラリが長時間接続ワークロードのパスワードレス認証を簡素化

### 運用と監視

- 計画メンテナンスの最大 2 週間リスケジュール・オンデマンド適用で業務クリティカル期間の制御を確保
- Built-in Grafana ダッシュボードでメトリクス + ログを一箇所に集約。カスタマイズ・チーム共有可能
- Pre-Upgrade Validation Checks で pg_upgrade --check を含む事前検証を独立実行

### レジリエンスと移行

- Chaos Studio 連携でゾーンダウンシミュレーションを実行し、HA フェイルオーバーの信頼性を事前検証
- AI アシスト Oracle 移行は GitHub Copilot + Foundry + 専用 Language Model Tools で Oracle スキーマ・DB コード・クライアントアプリを PostgreSQL に変換し、running flexible server で検証
- AlloyDB と EDB Extended Server からのオンライン/オフライン移行に対応

## 応用シナリオ

- DuckDB エンジン統合（pg_duckdb）により、PostgreSQL 内で OLAP 分析を完結させ、別途データウェアハウスを用意せずにリアルタイムダッシュボードを構築
- Oracle からの大規模マイグレーションを AI アシストで加速し、変換精度を向上させつつ工数を削減
- SaaS マルチテナント環境で Cross-tenant CMK によりテナントごとの暗号化鍵分離を実現
- Chaos Studio で定期的なゾーンダウンテストを CI/CD に組み込み、DR プレイブックの有効性を継続検証

## 参考リンク

- [PostgreSQL Build 2026 発表ブログ](https://techcommunity.microsoft.com/blog/adforpostgresql/announcing-new-security-maintenance-and-analytics-features-for-postgresql-at-mic/4524559)
- [Azure Database for PostgreSQL ドキュメント](https://learn.microsoft.com/azure/postgresql/overview)
- [pg_duckdb Extension](https://learn.microsoft.com/azure/postgresql/extensions/concepts-extensions-versions#pg_duckdb)
- [AI-assisted Oracle migration](https://learn.microsoft.com/azure/postgresql/migrate/oracle-schema-conversions/schema-conversions-overview)
- [Build セッション: PostgreSQL on Azure](https://aka.ms/Postgres-on-Azure_Build-2026)

## 関連エントリ

- [Azure HorizonDB](azure-horizondb.md)
- [Azure SQL](azure-sql.md)
