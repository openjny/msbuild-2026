# Azure Monitor

AI エージェント・コーディングエージェント・OpenTelemetry を軸とした大規模アップデートを発表。エージェントをファーストクラスオブジェクトとして監視するフリートビュー・評価統合・トレースツリー、GitHub Copilot / Claude Code 等のコーディングエージェント OTel 監視（GA）、OTLP 直接取り込みによるアプリトラブルシューティング（GA）、SLI/SLO（GA）、ログ検索アラート動的しきい値（GA）、Health Model 拡張など包括的な可観測性強化。

## 概要

Azure Monitor は Build 2026 で、AI エージェントワークロードから OpenTelemetry ネイティブなアプリケーション監視、VM/VMSS インフラストラクチャインサイト、SLI/SLO まで、フルスタックの可観測性を大幅に強化した。

特に注力されたのがエージェント可観測性で、エージェントを Azure Monitor のファーストクラスオブジェクトとして監視できるようになった。フリートビュー、自動評価、コスト分析、トレースツリー、人間参加型評価が新たに利用可能。Microsoft Foundry でエージェントを構築・評価し、Azure Monitor でフルスタックの可観測性を提供する二層アーキテクチャが確立された。

## 主な発表

- **Agent Observability in Azure Monitor**: エージェントフリートビュー、評価統合、トレースツリー、会話コンテキスト表示、プロンプト/レスポンス検索、手動アノテーション（**GA**）
- **Monitor AI coding agents with OpenTelemetry**: GitHub Copilot・Claude Code・Codex・OpenClaw・Gemini CLI 等の OTel シグナル取り込みと専用ダッシュボード（**GA**）
- **OpenTelemetry App Troubleshooting via OTLP Ingestion**: 標準 OTLP エクスポートによるメトリクス・ログ・トレースの直接取り込みとトラブルシューティング（**GA**）
- **SLI and SLO**: サービスレベル指標・目標の定義とエラーバジェット/バーンレート追跡（**GA**）
- **Dynamic thresholds for log search alerts**: ML ベースの季節性学習による自動しきい値設定（**GA**）
- **Simple log alerts**: 行単位評価の低レイテンシアラート。Basic Logs 対応（**GA**）
- **Resource-scoped querying of AMW metrics**: Azure Monitor Workspace の PromQL をリソーススコープで実行（**GA**）
- **OpenTelemetry Metrics for Azure VMs and Arc-enabled Servers**: OTel メトリクスと Grafana ダッシュボード統合（**GA**）
- **Azure Copilot Observability agent**: 自然言語によるテレメトリ調査。AKS・Application Insights からの調査エントリポイント拡張（**Preview**）
- **Health Model 拡張**: Application Insights・ARG ベースのディスカバリー、推奨シグナル、集約ルール（**Preview**）
- **Microsoft OpenTelemetry Distro**: Foundry・Azure Monitor・Agent 365 統一の OTel ディストリビューション（**GA**）

## 詳細

### エージェント可観測性

エージェントが Azure Monitor のファーストクラスオブジェクトとなり、15 の新機能が発表された:

- **フリートビュー**: 監視中の全エージェント一覧。Microsoft Agent Framework・LangChain・Copilot Studio・Foundry Hosting・AKS Hosting 等フレームワーク問わず表示
- **パイプラインレイテンシ削減**: テレメトリ可用時間を 60 秒超から P90 で 7.5 秒に短縮
- **大容量イベント対応**: 1MB/イベント、256KB/属性。プロンプト・レスポンスの切り捨てを防止
- **評価スコア統合**: エンドツーエンドトランザクションビューに評価スコアを表示、スコアでソート可能
- **トレースツリー**: エージェントの推論ロジックをグラフで可視化
- **会話コンテキスト**: チャットエージェントの会話をトレース横断で接続
- **テキスト検索**: プロンプト/レスポンスのキーワード検索
- **手動アノテーション（Human-in-the-loop）**: トランザクション詳細から直接評価を記録
- **エンドユーザーフィードバック**: thumbs up/down を他テレメトリと統合
- **AI パワードトラブルシューティング**: Observability agent がエージェントにも対応

### コーディングエージェント監視

GitHub Copilot・Claude Code・Codex・OpenClaw・Gemini CLI・OpenCode の OTel シグナルを Azure Monitor に取り込み:

- OTel Collector 経由で OTLP を Azure Monitor データ収集エンドポイントに転送
- Application Insights のエージェント専用ビューでトラブルシューティング
- Grafana ダッシュボードで機能利用状況・コミット数・コード変更受入率・ユーザー詳細を可視化
- 組織全体の採用率と ROI を把握

### OpenTelemetry OTLP 直接取り込み

Azure Monitor が標準 OpenTelemetry インスツルメンテーションと OTLP エクスポートを直接受け付け:

- データ収集エンドポイントへの OTLP 送信（Entra 認証）
- OpenTelemetry セマンティクスでログ・トレースを保存
- Application Insights と Grafana ダッシュボードでアプリパフォーマンスを監視・トリアージ
- VM からアプリケーション、AI エージェントまで一元的なオブザーバビリティ

### SLI/SLO

サービスレベル指標と目標を Azure Monitor でネイティブサポート:

- Service Groups 横断でリソースをまたいだ SLI 定義
- Azure OTel メトリクスと Prometheus メトリクスに SLO ターゲットを設定
- エラーバジェットとバーンレートの単一ビュー追跡
- エンジニアリング・SRE チームの日常業務をカスタマー体験に整合

### スマートモニタリング

- **動的しきい値（GA）**: ML が時間・日・週の季節性を自動学習。ディメンション組み合わせ別に個別ベースライン
- **Simple log alerts（GA）**: 行単位評価で低レイテンシ検出。Basic Logs 対応でコスト削減と検出能力を両立
- **リソーススコープクエリ（GA）**: AMW への直接アクセス権不要で PromQL をリソーススコープ実行

### Health Model 拡張

- Application Insights ベースのディスカバリー（アプリケーション中心のモデリング）
- Azure Resource Graph（ARG）ディスカバリー（スケーラブルなクエリベースリソース選択）
- 推奨シグナル（Azure Monitor Baseline Alerts 統合）
- 既存アラートルールのインポート
- 数値/パーセンテージしきい値による集約ルール（リージョン冗長、クラスタヘルス）
- カスタムヘルスレポート取り込み
- データアノテーション（デプロイ、インシデント、構成変更のオーバーレイ）

## 応用シナリオ

- AI エージェントフリートの品質・コスト・パフォーマンスを統合監視し、本番運用での品質劣化を即時検出
- 組織内のコーディングエージェント（GitHub Copilot 等）の採用率・生産性向上効果を定量的に把握
- SLI/SLO とエラーバジェットで SRE チームの優先度判断を自動化し、カスタマー影響に基づく運用を実現
- OpenTelemetry 標準による VM・コンテナ・アプリ・エージェントの統一監視パイプライン構築
- Health Model で複雑な分散アプリケーションの依存関係を可視化し、障害の影響範囲を即座に特定

## 制約・注意点

- Azure Copilot Observability agent は Preview
- Health Model の新機能は Preview（新 API バージョンへの移行ウィザードが必要）
- コーディングエージェント監視は OTel Collector 経由の構成が必要（エージェント/IDE 側での OTLP エクスポート設定）
- プロンプト/レスポンスのキャプチャは組織のプライバシーポリシーに準拠した設定が必要

## 公式ソース

- [https://techcommunity.microsoft.com/blog/azureobservabilityblog/what%E2%80%99s-new-in-observability-at-build-2026/4524927](https://techcommunity.microsoft.com/blog/azureobservabilityblog/what%E2%80%99s-new-in-observability-at-build-2026/4524927)
- [https://techcommunity.microsoft.com/blog/azureobservabilityblog/new-capabilities-to-observe-agents-in-azure-monitor/4524896](https://techcommunity.microsoft.com/blog/azureobservabilityblog/new-capabilities-to-observe-agents-in-azure-monitor/4524896)
