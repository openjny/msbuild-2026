---
id: visual-studio
title: Visual Studio
summary: Visual Studio 2026 の Build 2026 アナウンスとして、デバッグ・プロファイリング・テストの各エージェント統合、GitHub Copilot SDK ベースへの移行、AI 支援マージ競合解決、Azure MCP Server の組込み、.NET モダナイゼーション強化、BYOK（Bring Your Own Key）モデル対応を発表。
tags:
  - visual-studio
  - github-copilot
content_type: announcement
topic: developer-tools-and-frameworks
official_sources:
  - https://devblogs.microsoft.com/visualstudio/whats-coming-next-in-visual-studio-our-microsoft-build-2026-announcements
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Visual Studio 2026 は「コードは資産であり、成果物ではない」という思想のもと、コードの健全性維持と進化を支援するツールとしての進化が発表された。AI エージェントがデバッグ、プロファイリング、テストに統合され、開発者のワークフローに直接参加する。

## 主な発表

- **デバッガーエージェント**: ライブランタイムの動作からバグの根本原因を特定
- **プロファイリングエージェント**: パフォーマンスボトルネックの自動検出
- **テストエージェント**: リグレッション防止のためのテストカバレッジ構築
- **AI 支援マージ競合解決**: 競合の理解と意思決定を支援
- **Azure MCP Server 組込み**: 自然言語で Azure リソースを管理（**GA**）
- **GitHub Copilot SDK ベース化**: AI 統合の基盤を統一
- **BYOK モデル対応**: ローカル/クラウドの任意の AI モデルを利用可能に
- **.NET モダナイゼーション**: .NET スタックへのアップグレード支援エージェント強化

## 詳細

### エージェント統合

エージェントが「作業の隣」ではなく「作業に参加」する設計。デバッガーエージェントはライブランタイムの動作を分析し、修正が実際のランタイム動作に対して検証される。

### Azure MCP Server

Model Context Protocol 準拠のサーバーが VS 2026 に標準搭載。Azure リソースの作成・管理・デプロイを自然言語で実行可能。

### GitHub Copilot SDK ベース化

Visual Studio の AI 統合基盤を GitHub Copilot SDK に統一。VS Code、CLI、Copilot コーディングエージェントと同じランタイム基盤を使用する。

## 参考リンク

- [What's Coming Next in Visual Studio: Our Microsoft Build 2026 Announcements](https://devblogs.microsoft.com/visualstudio/whats-coming-next-in-visual-studio-our-microsoft-build-2026-announcements)
- [Azure MCP Server Now Built-In with Visual Studio 2026](https://devblogs.microsoft.com/visualstudio/azure-mcp-server-now-built-in-with-visual-studio-2026-a-new-era-for-agentic-workflows)
- [GitHub, Copilot, VS Code, and More: Live from San Francisco（LIVE104）](https://build.microsoft.com)
