---
id: azure-sql
title: Azure SQL
summary: Azure SQL の Build 2026 更新として、MSSQL Extension for VS Code v1.41 で SQL Notebooks（GA）、Schema Designer + GitHub Copilot 統合（GA）、Data API builder + GitHub Copilot 統合（GA）を提供。Fabric 統合、Edit Data、Data-tier Application も GA。AI 支援のスキーマ設計、インタラクティブノートブック、即時 API 生成を VS Code 内で完結。
tags:
  - azure-sql
content_type: announcement
topic: cloud-platform-and-data
official_sources:
  - https://devblogs.microsoft.com/azure-sql/vscode-mssql-june-2026
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Azure SQL は Build 2026 で MSSQL Extension for VS Code v1.41 を通じて大型アップデートを発表した。SQL Notebooks、Schema Designer + GitHub Copilot、Data API builder の 3 つが GA となり、VS Code での SQL 開発体験が大幅に進化した。

## 主な発表

- **SQL Notebooks**: Jupyter ベースの SQL ノートブック（**GA**）
- **Schema Designer + GitHub Copilot**: AI 支援のビジュアルスキーマ設計（**GA**）
- **Data API builder + GitHub Copilot**: データベースから即時 REST/GraphQL API 生成（**GA**）
- **Edit Data**: インラインデータ編集（**GA**）
- **Data-tier Application (DACPAC/BACPAC)**: インポート/エクスポート（**GA**）
- **Fabric 統合**: Microsoft Fabric との接続（**GA**）
- **SQL Database Projects 静的コード分析**: プロジェクト内のコード品質チェック（**GA**）

## 詳細

### SQL Notebooks

MSSQL Extension for VS Code にネイティブ Jupyter ノートブックサポートを追加。SQL クエリ実行と Markdown ドキュメントセルを組み合わせ、再現可能な分析、ランブックドキュメント、教育コンテンツの作成に対応。`.ipynb` 形式で保存・共有可能。

### Schema Designer + GitHub Copilot

自然言語でスキーマ変更を記述し、Copilot が生成した更新を Change Tracking パネルでレビュー。マイグレーション対応の ORM スクリプト生成も可能。

### Data API builder + GitHub Copilot

データベーステーブルから REST API と GraphQL API を自動生成。Copilot 統合により、API 設定の自然言語記述に対応。

## 参考リンク

- [MSSQL Extension for VS Code: Azure SQL Database Provisioning and More](https://devblogs.microsoft.com/azure-sql/vscode-mssql-june-2026)
- [Azure SQL ドキュメント](https://learn.microsoft.com/azure/azure-sql/)
- [MSSQL Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-mssql.mssql)
