# Microsoft Foundry

Microsoft Foundry の Agent Framework が GA に到達し、複数の AI フレームワークと統合可能なエージェント基盤を提供。Hosted Agents、Toolboxes、Memory、Foundry IQ などを Public Preview で追加し、エージェントの開発・デプロイ・運用までをカバーするプラットフォームを強化。Foundry Toolkit for VS Code も GA となり、ローカルでのエージェント開発体験が整備された。

## 概要

Microsoft Foundry は、エージェントの開発からデプロイ・運用までをカバーするプラットフォームである。Build 2026 では、ランタイム、ツール連携、メモリ、ナレッジ、ガバナンスの各レイヤーに大幅なアップデートが加わった。

## 主な発表

- **Microsoft Agent Framework**: エージェント・オーケストレーション基盤（**GA**）
- **Foundry Toolkit for VS Code**: エージェント開発用 VS Code 拡張（**GA**）
- **Hosted Agents**: サンドボックス付きエージェントホスティング（**GA 予定: 2026年7月**）
- **Toolboxes in Foundry**: ツールの管理・公開基盤（**Public Preview**）
- **Voice Live**: リアルタイム音声パス（**Public Preview**）
- **Memory in Foundry Agent Service**: 手続き型・ユーザー・セッションメモリの 3 種（**Public Preview**）
- **Foundry IQ**: サーバーレス検索とナレッジ統合（**Public Preview**）

## 詳細

### Agent Framework

複数の AI フレームワーク（Semantic Kernel、LangChain、AutoGen 等）と統合可能な抽象レイヤーとして機能する。

### Hosted Agents

サンドボックス環境でコード実行を安全に行い、ファイルシステムアクセスやフレームワーク柔軟性を備える。

### Toolboxes

MCP 準拠のツール登録・発見メカニズムを提供する。エージェントが利用するツールを組織内で管理・公開できる。

### Foundry IQ

ベクトル検索とグラフベースのナレッジを統合し、エージェントに構造化されたコンテキストを供給する。

## 応用シナリオ

- 社内ナレッジベースと連携したカスタマーサポートエージェントの構築（Foundry IQ + Memory）
- 複数の外部 API をツールとして登録し、タスク自動化エージェントを公開（Toolboxes + Teams 連携）
- ローカル環境でのエージェント開発・テスト（Foundry Toolkit for VS Code + Foundry Local）

## 制約・注意点

| 機能 | ステータス |
|------|------------|
| Agent Framework | **GA** |
| Foundry Toolkit for VS Code | **GA** |
| Hosted Agents | **GA 予定: 2026年7月** |
| Toolboxes | **Public Preview** |
| Voice Live | **Public Preview** |
| Memory in Foundry Agent Service | **Public Preview** |
| Foundry IQ | **Public Preview** |

- Public Preview 機能の SLA は非保証
- Hosted Agents は 2026年7月に GA 予定
- 利用には Azure サブスクリプションが必要

## 公式ソース

- [https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-build-2026](https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-build-2026)
