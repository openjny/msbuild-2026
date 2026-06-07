# Azure Container Apps

Azure Container Apps の Build 2026 更新として、エージェンティックワークロード向けの Container Apps Sandboxes を発表。AI エージェントが生成したコードの実行やウェブブラウジングをメインアプリケーション環境から安全に分離するインフラストラクチャを提供し、Azure Functions や GitHub Copilot のサンドボックス基盤としても連携する。

## 概要

Azure Container Apps は Build 2026 でエージェンティックワークロード向けの機能を中心に更新された。新たに Container Apps Sandboxes が発表され、エージェントのコード実行やブラウジングをセキュアに分離するインフラストラクチャを提供する。

## 主な発表

- **Azure Container Apps Sandboxes**: エージェンティックワークロード向けのセキュア分離コード実行環境（**Public Preview**）
- **Dynamic Sessions の強化**: AI エージェントのサンドボックス実行環境の拡張
- **プラットフォーム全体の機能強化**: コンテナアプリケーション基盤の改善

## 詳細

### Container Apps Sandboxes

AI エージェントが生成したコードの実行やウェブブラウジングを、メインのアプリケーション環境から分離して安全に実行するインフラストラクチャ。エフェメラルなコンテナ環境で実行し、ファイルシステム・ネットワーク・システムリソースへのアクセスを制限する。Azure Functions のサーバーレスエージェントランタイムや GitHub Copilot のクラウドサンドボックスの基盤技術として連携する。

### Dynamic Sessions

Container Apps Dynamic Sessions は、AI エージェントが生成したコードをセッション単位で隔離実行する機能。セッションごとに独立したランタイムを提供し、セッション間のデータ漏洩を防止する。Python、Node.js 等の言語ランタイムを標準で提供。

### エージェンティックアーキテクチャにおける位置づけ

Azure Container Apps は、Azure Functions（イベント駆動エージェント）と App Service（Web アプリ）の中間に位置し、コンテナベースのエージェントワークロードのホスティングに適する。マイクロサービスアーキテクチャのエージェントデプロイ、Dapr 連携によるサービス間通信、KEDA によるイベント駆動スケーリングを組み合わせて利用できる。

### Agent Governance Toolkit（AGT）連携

[Agent Governance Toolkit](https://github.com/microsoft/agent-governance-toolkit) の `agt-sandbox` パッケージが ACA Sandboxes をバックエンドとしてネイティブサポート。ACASandboxProvider により、エージェント生成コードの実行に対して多層ガバナンスを適用する:

- **ホストサイドポリシー評価**: YAML PolicyDocument の deny ルール・ツール許可リスト・AST スキャンをコード実行前に適用。拒否されたコードは Azure へのラウンドトリップなしで即座にブロック
- **Azure 側エグレスポリシー**: `network_allowlist` に基づく fail-closed のエグレスプロキシ。許可リスト外のホストへの通信は HTTP 403 で遮断
- **リソース制限**: PolicyDocument の `max_cpu` / `max_memory_mb` / `timeout_seconds` を ACA サンドボックスの CPU・メモリ上限・実行タイムアウトに投影

3 つのプロバイダー（Docker / Hyperlight / ACA）で同一の SandboxProvider インターフェースを共有し、ローカル開発から本番 Azure 環境まで同じエージェントコードで動作する。

## 応用シナリオ

- AI エージェントが生成したコードをサンドボックス内で安全に実行・検証し、本番環境への影響を排除
- エージェンティックワークフローでのウェブブラウジングを分離環境で実行し、セキュリティリスクを低減
- マルチテナント環境でのエージェント実行を Dynamic Sessions で安全にホスティング

## 関連エントリ

- [Azure Functions](azure-functions.md) — サーバーレスエージェントランタイムが Container Apps Sandboxes を利用

## 公式ソース

- [https://techcommunity.microsoft.com/blog/appsonazureblog/whats-new-in-azure-container-apps-at-build-2026/4524080](https://techcommunity.microsoft.com/blog/appsonazureblog/whats-new-in-azure-container-apps-at-build-2026/4524080)
