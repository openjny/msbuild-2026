---
id: azure-horizondb
title: Azure HorizonDB
summary: AI 時代向けに設計されたエンタープライズグレードの PostgreSQL サービス Azure HorizonDB を Public Preview で発表。Azure Database for PostgreSQL Flexible Server にも V6 SKU（NVMe）、pg_duckdb、Defender セキュリティ評価など14の新機能を追加し、PostgreSQL エコシステム全体を強化。
tags:
  - azure-horizondb
content_type: announcement
topic: cloud-platform-and-data
official_sources:
  - https://techcommunity.microsoft.com/blog/adforpostgresql/announcing-new-security-maintenance-and-analytics-features-for-postgresql-at-mic/4524559
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Azure HorizonDB は、AI 時代のワークロード向けに設計されたエンタープライズグレードの PostgreSQL サービスである。Build 2026 で Public Preview として発表された。

同時に、既存の Azure Database for PostgreSQL Flexible Server にも14の新機能が追加され、パフォーマンス、分析、セキュリティ、運用、移行の各領域で大幅に強化された。

## 主な発表

- **Azure HorizonDB**: AI 時代向けエンタープライズ PostgreSQL（**Public Preview**）
- **V6 SKU（NVMe ローカル SSD）**: 高性能ストレージ（**GA 予定: 2026年6月末**）
- **pg_duckdb エクステンション**: 分析クエリの高速化
- **pg_ivm エクステンション**: インクリメンタルマテリアライズドビュー
- **Defender セキュリティ評価**: セキュリティ態勢の自動評価
- **temporal_tables エクステンション**: テンポラルデータ対応
- **クロステナント CMK**: 暗号化キーの管理強化
- **自動 Entra トークンリフレッシュライブラリ**: 複数言語対応
- **AI 支援 Oracle → PostgreSQL 移行**: 移行サービスの強化
- **AlloyDB・EDB Extended Server からの移行サポート**: 新しい移行元の追加

## 詳細

### PostgreSQL Flexible Server の主要強化点

| カテゴリ | 機能 |
|---------|------|
| パフォーマンス | V6 SKU（NVMe）、pg_duckdb、pg_ivm |
| セキュリティ | Defender 評価、クロステナント CMK、Entra トークンリフレッシュ |
| 運用 | メンテナンスウィンドウ制御、アップグレード前検証、Grafana ダッシュボード |
| レジリエンス | Chaos Studio 対応 |
| 移行 | AI 支援 Oracle 移行、AlloyDB/EDB サポート |

## 参考リンク

- [Announcing new security, maintenance and analytics features for PostgreSQL at Microsoft Build 2026](https://techcommunity.microsoft.com/blog/adforpostgresql/announcing-new-security-maintenance-and-analytics-features-for-postgresql-at-mic/4524559)
- [Azure HorizonDB ドキュメント](https://learn.microsoft.com/azure/postgresql/)
- [Microsoft Build 2026 ニュースハブ](https://news.microsoft.com/build-2026)
- [Azure Database for PostgreSQL ドキュメント](https://learn.microsoft.com/azure/postgresql/flexible-server/)
