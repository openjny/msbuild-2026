---
id: azure-databricks
title: Azure Databricks
summary: Azure Databricks の Build 2026 更新として、ワークスペース全体の MCP エンドポイント（Public Preview）と GitHub Copilot agent mode での Lakebase デバッグ（Public Preview）を発表。Copilot Studio エージェントが1つの MCP 接続で全 Genie Space と Unity Catalog データセットにアクセス可能に。Unity Catalog ガバナンスを維持しながらエージェント開発を効率化。
tags:
  - azure-databricks
  - microsoft-fabric
  - mcp
content_type: announcement
topic: cloud-platform-and-data
official_sources:
  - https://techcommunity.microsoft.com/blog/analyticsonazure/building-ai-apps-and-agents-with-azure-databricks-copilot-studio-and-github-copi/4524065
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Azure Databricks は Build 2026 で、エージェント開発向けの 2 つの新機能を Public Preview で発表した。ワークスペース全体の MCP エンドポイントにより Copilot Studio との接続が大幅に簡素化され、GitHub Copilot agent mode でのデバッグにより本番データリスクが低減される。

## 主な発表

- **ワークスペース全体の MCP エンドポイント**: 1 つのエンドポイントで全 Genie Space と Unity Catalog データセットにアクセス（**Public Preview**）
- **GitHub Copilot agent mode での Lakebase デバッグ**: 本番 AI エージェントを実データに対してデバッグ（**Public Preview**）

## 詳細

### ワークスペース全体の MCP エンドポイント

従来、Copilot Studio から Azure Databricks の Genie に接続するには各 Genie Space を個別のツールとして追加する必要があった。ワークスペース全体の MCP エンドポイントにより、1 つの接続で複数の Genie Space にアクセス可能になり、管理オーバーヘッドを削減。

### GitHub Copilot agent mode でのデバッグ

本番 AI エージェントを実際の Lakebase データに対してデバッグ可能。Unity Catalog のガバナンスと既存のコンプライアンス制御を維持しながら、開発からデプロイまでの一貫したツールチェーンを実現。

### 統合の利点

- Copilot Studio エージェントが Azure Databricks ワークスペース全体を推論対象に
- Unity Catalog ガバナンスをオーサリングからデプロイまで維持
- GitHub・Azure Databricks・Microsoft 365 でデータ・エージェント・開発者ツールチェーンを標準化

## 参考リンク

- [Building AI apps and agents with Azure Databricks, Copilot Studio, and GitHub Copilot](https://techcommunity.microsoft.com/blog/analyticsonazure/building-ai-apps-and-agents-with-azure-databricks-copilot-studio-and-github-copi/4524065)
- [Azure Databricks ドキュメント](https://learn.microsoft.com/azure/databricks/)
