# Azure Functions

Azure Functions の Build 2026 更新として、サーバーレスエージェントランタイム（Preview）、1400以上のマネージドコネクタ統合、Go 言語サポート、MCP サーバー対応、新 CLI v5 を発表。Microsoft Copilot が Durable Task Scheduler で週数億の実行を処理する事例も公開。

## 概要

Azure Functions は Build 2026 でイベント駆動型アプリとエージェントの最適なプログラミングモデルとして大幅に進化した。サーバーレスエージェントランタイム、コネクタ統合、新言語サポート、MCP 対応が主要な柱である。

## 主な発表

- **サーバーレスエージェントランタイム**: Azure Functions 上でエージェントを実行（**Preview**）
- **マネージドコネクタ**: Logic Apps / Power Platform と同じ1400以上のコネクタを Functions で利用（**Preview**）
- **Go 言語サポート**: Azure Functions の Go 対応
- **MCP サーバー対応**: ワンクリック認証設定、AI タブ
- **新 Azure Functions CLI v5**: 次世代ローカル開発ツール（**Public Preview**）
- **Durable Task Scheduler**: Microsoft Copilot 事例での大規模採用実績

## 詳細

### サーバーレスエージェントランタイム

任意の Azure Functions トリガー（HTTP、Timer、Service Bus、Event Hubs、Cosmos DB、新しいコネクタトリガー）でエージェントを起動可能。MCP ツールサーバー、Azure Container Apps Dynamic Sessions でのサンドボックス実行、1400以上のコネクタカタログを利用できる。

### マネージドコネクタ

Office 365 新着メール、Teams メッセージ投稿、SharePoint アイテム作成、Dataverse 行変更、Salesforce レコード更新等の SaaS イベントをファーストクラスのトリガーとして利用。型付き SDK クライアント（OutlookClient、TeamsClient 等）で呼び出し。

### Durable Task Scheduler

Microsoft Copilot が複雑な長時間 AI ワークフローを Durable Task Scheduler で統一し、週数億回の実行を処理。状態管理、リトライ、リカバリーをサービス横断で標準化。

## 応用シナリオ

- タイマートリガーで毎日のニュースを要約しメール送信するエージェント
- SaaS イベント（メール受信、Teams メッセージ等）をトリガーにした自動化エージェント
- Durable Task Scheduler で長時間 AI ワークフローの信頼性確保

## 公式ソース

- [https://techcommunity.microsoft.com/blog/appsonazureblog/azure-functions-at-build-2026-update/4524075](https://techcommunity.microsoft.com/blog/appsonazureblog/azure-functions-at-build-2026-update/4524075)
