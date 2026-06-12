---
id: microsoft-foundry
title: Microsoft Foundry
summary: Microsoft Foundry の Agent Framework が GA に到達し、複数の AI フレームワークと統合可能なエージェント基盤を提供。Hosted Agents、Toolboxes、Memory、Foundry IQ などを Public Preview で追加し、エージェントの開発・デプロイ・運用までをカバーするプラットフォームを強化。Foundry Toolkit for VS Code も GA となり、ローカルでのエージェント開発体験が整備された。
tags:
  - azure-ai-foundry
  - agent-framework
  - mcp
content_type: announcement
topic: agents-and-apps
official_sources:
  - https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-build-2026
  - https://devblogs.microsoft.com/foundry/agent-service-build2026
  - https://devblogs.microsoft.com/foundry/toolbox-build-26/
  - https://devblogs.microsoft.com/foundry/memory-build2026/
  - https://devblogs.microsoft.com/foundry/agent-optimizer-build2026/
  - https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-at-build-2026-announce
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Microsoft Foundry は、AI エージェントの構築（Build）・デプロイ（Deploy）・運用（Operate）をエンドツーエンドでカバーするプラットフォームである。Build 2026 では、ランタイム、ツール連携、メモリ、ナレッジ、ガバナンス、最適化の各レイヤーに大幅なアップデートが加わった。

Microsoft Agent Framework が 2026年4月に v1.0 GA に到達して以降、Build では Hosted Agents によるマネージドランタイム、Toolboxes による MCP 準拠のツール管理、3 種類の Memory、Agent Optimizer による自動改善ループなど、プロトタイプから本番運用までのギャップを埋める機能群が一斉に発表された。フレームワーク非依存の設計により、Microsoft Agent Framework だけでなく GitHub Copilot SDK、LangGraph、Claude Agent SDK で構築したエージェントもそのままデプロイ可能である。

## 主な発表

- **Microsoft Agent Framework v1.0**: Python/.NET 対応のエージェント・オーケストレーション SDK（**GA**、2026年4月2日到達）
- **Agent Harness**: シェル・ファイルシステム・コード実行・承認フローをフレームワーク内で提供（**GA**）
- **CodeAct**: コードベースの推論で LLM ターン数を削減するエージェント実行モード（**Public Preview**）
- **Foundry Toolkit for VS Code**: テンプレート生成・ローカルデバッグ・トレース可視化・デプロイを統合した VS Code 拡張（**GA**）
- **Hosted Agents in Foundry Agent Service**: サンドボックス付きマネージドランタイム（**GA 予定: 2026年7月初旬**）
- **Routines**: タイマー/スケジュールベースのエージェント自動実行（**Public Preview**）
- **Toolboxes in Foundry**: MCP 準拠のツール管理・検索・ガバナンス基盤（**Public Preview**）
- **Voice Live**: プロンプトエージェント向けリアルタイム音声パス（**GA**）／ホステッドエージェント向け（**Public Preview**）
- **Memory in Foundry Agent Service**: Procedural・User・Session の 3 種メモリ（**Public Preview**）
- **Foundry IQ**: サーバーレス検索とナレッジ統合（**Public Preview**）
- **Agent Optimizer**: 本番トレースからシステムプロンプト・ツール・モデルの改善候補を自動生成（**Private Preview**、30日以内に Public Preview）
- **A2A プロトコル対応**: Hosted Agents への受信 A2A リクエスト（**Public Preview**）
- **Teams / Microsoft 365 Copilot 公開**: Foundry エージェントを Teams・M365 Copilot に直接公開（**GA 予定: 2026年6月**）
- **Tracing and Evaluations**: 任意フレームワーク対応のトレース・評価基盤（**Public Preview**）
- **Rubric Evaluator**: カスタム評価次元を定義可能な Rubric 方式の評価（**Public Preview**）
- **Azure AI Document Intelligence SDK**: Python・Java・.NET・JavaScript・TypeScript 向け（**GA**）

## 詳細

### Agent Framework v1.0

Microsoft Agent Framework（MAF）は 2026年4月2日に v1.0 GA に到達した。AutoGen と Semantic Kernel を統合し、Python と .NET で同じ概念・API を提供するオープンソース SDK である。主要コンポーネント:

- **Chat Clients**: OpenAI・Azure OpenAI・Anthropic 等の複数プロバイダーに対応するモデル抽象化
- **Tools / MCP 統合**: ツール定義と MCP サーバー接続を標準化
- **Agent Workflows**: グラフベースのワークフローエンジン。条件分岐・並列実行・チェックポイント・ハイドレーションに対応
- **Multi-Agent Orchestration**: Sequential・Concurrent・Handoff・Group Chat・Magentic-One パターンを安定サポート。ストリーミング・Human-in-the-Loop 承認・Pause/Resume 対応
- **Agent Harness**: シェル実行・ファイルシステムアクセス・コード生成・承認フロー・コンテキスト圧縮を提供する本番パターン集
- **CodeAct**: コードベースの推論で LLM ターン数を削減。Hyperlight パッケージによるサンドボックス実行

GitHub Copilot SDK および Claude Agent SDK とのインテグレーションも v1.0 で安定化し、Copilot のコーディング能力（シェル実行・ファイル操作・URL フェッチ・MCP サーバー統合）をエージェントに統合可能。

### Hosted Agents

Hosted Agents in Foundry Agent Service（2026年7月初旬に GA 予定）は、本番エージェントのためのマネージドランタイムである。

**アーキテクチャの特徴:**

- **セッション分離**: 各会話が専用のサンドボックスで実行され、独自のコンピュート・メモリ・ファイルシステムを持つ。テナント間のデータ漏洩を防止
- **永続状態**: アイドルセッションでもファイルシステムの状態を保持。再開時にコンテキストを完全復元
- **ゼロコストアイドル**: アイドル中は課金なし。サブ秒のコールドスタートで再開
- **フレームワーク非依存**: Microsoft Agent Framework、GitHub Copilot SDK、LangGraph、Claude Agent SDK、OpenClaw、Hermes 等で構築したエージェントを書き換えなしでデプロイ可能
- **2 つのプロトコル**: Responses API（OpenAI 互換のステートフル対話）と Invocations プロトコル（スキーマフリーのパススルー）

長時間自律エージェントにも対応し、Durable Task Scheduler と統合してセッションがアイドル中でも人間承認待ち等の状態をサーバーレスで監視する。

### Toolboxes

Toolboxes in Foundry（**Public Preview**）は MCP 準拠の単一マネージドエンドポイントで、ツールの登録・検索・実行・ガバナンスを一元管理する。

**ツール検索の仕組み:**

エージェントは `tool_search` と `call_tool` の 2 つの操作のみを使用する。エージェントが意図を記述すると、Toolbox が関連ツールを検索して返却する。ツールビルダーは一部のツールを「常に表示」「高頻度キャッシュ」に設定でき、コンテキストウィンドウの利用効率を最適化する。

**カタログの主要コンポーネント:**

- **Work IQ**（Preview）: Microsoft 365 のデータ・コンテキストへのアクセス。既存の権限・ポリシーを尊重しつつ、エージェントが職場のコンテキストを理解
- **Fabric IQ**（Preview）: ビジネスデータへの接続。構造化データ・分析結果をエージェントに供給
- **Browser Automation**（Preview）: Playwright ワークスペースを使用した MCP ネイティブの Web 自動化
- **Managed MCP Servers**（Preview）: Azure Connector Namespace からの事前構築統合。Jira・Confluence・LinkedIn・Box 等の SaaS をカスタム統合なしで接続
- **Skills**（Preview）: 再利用可能なエージェント機能の構築・管理・公開

認証管理・PII 漏洩防止等のガードレール・ツール検索フィルタリングを Toolbox 側で一括管理する。

### Routines

Routines（**Public Preview**）はエージェントをリアクティブからプロアクティブに転換する仕組みである。タイマー（cron）やイベントベースのトリガーでエージェントを自動起動し、継続的な監視・レポート・トリアージを無人で実行する。

例: 毎晩 GitHub リポジトリの新規 Issue をトリアージし、朝の standup 前に Teams にサマリーを投稿するエージェント。Foundry がキュー管理・実行・トラッキングを一括管理する。

### Memory

Memory in Foundry Agent Service（**Public Preview**）は 3 種類のメモリで構成される:

- **Procedural Memory**: セッション横断でエージェントがワークフロー・手順を学習する。成功パターンを蓄積し、運用するほど一貫性と精度が向上。STATE-Bench（Stateful Task Agent Evaluation Benchmark）での評価で約 5% の改善を確認
- **User Memory**: 個人の好み・履歴を保持し、パーソナライズされた応答を提供
- **Session Memory**: 会話内のコンテキストを維持し、長期タスクでの一貫性を確保

**2026年6月の追加機能:**

- **Multimodal サポート**: 画像からの情報を記憶。E コマース・カスタマーサポートに有用
- **Memory TTL（Time-to-Live）**: メモリストア作成時に設定し、古い低価値メモリを自動廃棄。ストレージコスト制御と検索品質向上
- **Direct Memory Commands**: ユーザーが明示的に「覚える」「忘れる」を指示可能。透明性とユーザー制御を実現

Foundry ポータルでの新しい管理 UI により、格納されたメモリの閲覧・CRUD 操作が可能になった。

### Agent Optimizer

Agent Optimizer in Foundry Agent Service（**Private Preview**、30日以内に Public Preview）は、本番エージェントの品質を自動改善するクローズドループシステムである。

**最適化ターゲット（3 種類を個別または組み合わせ）:**

1. **Instruction**: エージェントの応答が不足する箇所を分析し、代替システムプロンプトを生成
2. **Tools**: ツール構成・パラメータの最適化
3. **Model**: 品質・コスト・レイテンシのバランスを考慮したモデル選択

**ワークフロー:**

1. `azd ai agent eval init` で評価データセットと評価基準を既存のエージェント指示から自動生成（コールドスタート問題を解決）
2. カスタム Rubric で評価次元を重み付き定義
3. `azd ai agent optimize` で最適化ループを起動
4. 複数の改善候補を生成し、品質・コスト・レイテンシを比較表示
5. 環境変数による候補注入で、本番コードの変更なしに A/B テスト可能

デモでは音声エージェントの簡潔性を重視した最適化で 11% のスコア改善を実演した。

### Foundry Toolkit for VS Code

Foundry Toolkit for VS Code（**GA**）は、エージェント開発のためのエンドツーエンド VS Code 拡張である:

- テンプレートまたは GitHub Copilot からのエージェント生成
- ローカルでのテスト・デバッグ（F5 でブレークポイント付き実行）
- ステップバイステップのエージェント挙動検査
- トレースの可視化
- Toolboxes への接続
- Foundry Agent Service への直接デプロイ

### Foundry IQ

Foundry IQ（**Public Preview**）はベクトル検索とグラフベースのナレッジを統合し、エージェントに構造化されたコンテキストを供給するサーバーレス検索基盤。Agentic RAG ベンチマークで最大 20% の回答品質改善を報告。

### Voice Live

Voice Live は Foundry エージェントにリアルタイム音声対話を追加する機能:

- **プロンプトエージェント向け**（**GA**）: 最短パスで音声体験を実現。ワンクリックで音声モードを有効化し、業界最先端の音声モデルを自動ラッピング
- **ホステッドエージェント向け**（**Public Preview**）: 独自のランタイム・オーケストレーションフレームワークを使いつつ Voice Live に接続。WebSocket 経由のリアルタイムストリーミング応答

## 応用シナリオ

- 社内ナレッジベースと連携したカスタマーサポートエージェント: Foundry IQ で契約書・FAQ をインデックス化し、Memory でユーザー履歴を蓄積、Voice Live で電話対応を自動化
- インフラ障害の自律対応エージェント: IoT シグナルで障害検知 → Routines でプロアクティブ起動 → Toolboxes 経由で監視ツール・チケットシステムを操作 → Teams に自動通知
- 複数 SaaS を横断する業務自動化: Toolboxes の Managed MCP Servers で Jira・Confluence・Box を接続し、Browser Automation で Web UI 操作も含めたエンドツーエンド自動化
- エージェントの継続的改善ループ: Agent Optimizer で本番トレースから自動最適化 → Rubric 評価で品質監視 → Procedural Memory で運用知見を蓄積

## 制約・注意点

| 機能 | ステータス | 備考 |
|------|------------|------|
| Agent Framework v1.0 | **GA** | 2026年4月2日到達。Python・.NET 対応 |
| Foundry Toolkit for VS Code | **GA** | — |
| Hosted Agents | **GA 予定: 2026年7月初旬** | Responses API + Invocations プロトコル |
| Toolboxes | **Public Preview** | MCP 準拠 |
| Voice Live（プロンプトエージェント） | **GA** | — |
| Voice Live（ホステッドエージェント） | **Public Preview** | — |
| Memory | **Public Preview** | Procedural / User / Session の 3 種 |
| Foundry IQ | **Public Preview** | — |
| Agent Optimizer | **Private Preview** | 30日以内に Public Preview |
| A2A プロトコル対応 | **Public Preview** | — |
| Routines | **Public Preview** | — |
| Teams / M365 Copilot 公開 | **GA 予定: 2026年6月** | — |
| Document Intelligence SDK | **GA** | — |

- Public Preview 機能の SLA は非保証
- 利用には Azure サブスクリプションが必要
- Agent Optimizer の Private Preview は [aka.ms/Agent-Optimizer-Private-Preview](https://aka.ms/Agent-Optimizer-Private-Preview) から申し込み可能

## 顧客事例

- **Twilio**: Twilio Agent Connect を Hosted Agents のサーバーレスランタイムに直接デプロイ。高速起動でリアルタイム音声に対応し、ゼロコストアイドルでメッセージング会話にも最適（Ryan Rouleau, Staff Software Engineer, Twilio）
- **KPMG**: グローバル KPMG Workbench プラットフォームを Hosted Agents 上に構築。柔軟性・可観測性・制御を活用し、クライアント案件・内部ユースケースの両方でエージェント駆動ソリューションを開発（Werner Vanzyl, Sr. Director, KPMG AI & Data Labs）
- **Iberdrola**: 14 か国のミッションクリティカルなエネルギーオペレーションに Hosted Agents を採用。ID・メモリ・セキュリティ・可観測性を組み合わせた本番基盤として活用（Xabier Muruaga, Global Head of AI and Data, Iberdrola）
- **Telefonica Spain**: モバイルネットワーク最適化に Foundry Agent Service と Agent Framework を活用。6G に向けたネットワーク開発の加速に貢献（Jaime Lluch, Head of Mobile Network Technology & Optimization, Telefonica Spain）

## 参考リンク

- [What's new in Microsoft Foundry | Build Edition](https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-build-2026)
- [Build and run agents at scale with Microsoft Foundry at Build 2026](https://devblogs.microsoft.com/foundry/agent-service-build2026)
- [Microsoft Agent Framework at Build 2026](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-at-build-2026-announce)
- [Microsoft Agent Framework Version 1.0](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0)
- [Agent Harness in Agent Framework](https://devblogs.microsoft.com/agent-framework/agent-harness-in-agent-framework)
- [Introducing Agent Optimizer in Foundry Agent Service](https://devblogs.microsoft.com/foundry/agent-optimizer-build2026/)
- [Making agent memory more reliable and production-ready](https://devblogs.microsoft.com/foundry/memory-build2026/)
- [Scaling Agents with Toolboxes and Routines](https://devblogs.microsoft.com/foundry/toolbox-build-26/)
- [Enterprise Agent Distribution in Microsoft Foundry](https://devblogs.microsoft.com/foundry/from-building-agents-to-working-with-them-enterprise-agent-distribution-in-microsoft-foundry/)
- [Announcing Foundry Managed Compute](https://devblogs.microsoft.com/foundry/announcing-foundry-managed-compute)
- [Foundry Labs @ Build 2026](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/foundry-labs--build-2026/4524581)
- [Build agents you can trust — open evals and control standard](https://devblogs.microsoft.com/foundry/build-2026-open-trust-stack-ai-agents)
- [Microsoft Agent Framework GitHub リポジトリ](https://github.com/microsoft/agent-framework)
- [BRK241: From prototype to production — build and run agents at scale](https://build.microsoft.com/sessions/BRK241)
- [Build 2026 recap（developer.microsoft.com）](https://developer.microsoft.com/blog/build-recap)
- [3 things leaders need to know from Microsoft Build 2026（Azure Blog）](https://azure.microsoft.com/en-us/blog/3-things-leaders-need-to-know-from-microsoft-build-2026/)

## 関連エントリ

- [Foundry IQ](../announcements/foundry-iq.md) — サーバーレス検索とナレッジ統合の詳細
- [GitHub Copilot SDK](../announcements/github-copilot-sdk.md) — Agent Framework との SDK 統合
- [Foundry Local](../announcements/foundry-local.md) — ローカル推論エンジン
- [Azure Content Understanding](../announcements/azure-content-understanding.md) — Foundry のドキュメント理解基盤
- [Azure Speech](../announcements/azure-speech.md) — Voice Live が利用する音声基盤
- [Agent 365](../announcements/agent-365.md) — エージェントの運用・ガバナンス基盤
- [BRK241: From prototype to production](../sessions/brk241.md) — エージェントのエンドツーエンド開発ライフサイクルのライブデモ
- [Microsoft Foundry ドキュメント](https://learn.microsoft.com/azure/ai-foundry/)
