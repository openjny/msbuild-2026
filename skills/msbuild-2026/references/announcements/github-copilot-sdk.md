# GitHub Copilot SDK

GitHub Copilot のエージェントランタイムをプログラマブルなレイヤーとして公開する Copilot SDK が Node.js/TypeScript・Python・Go・.NET・Rust・Java の 6 言語で GA。ツール呼び出し、ストリーミング、ファイル操作、マルチターンセッションを備え、独自アプリケーションにエージェント機能を組み込める。Copilot クラウドエージェントや Copilot CLI と同じランタイム基盤を使用する。

## 概要

GitHub Copilot SDK は、GitHub Copilot クラウドエージェントおよび Copilot CLI を駆動する本番テスト済みエージェントランタイムを、プログラマブルなレイヤーとして外部に公開する SDK である。AI オーケストレーションレイヤーを自前で構築することなく、ツールループ、プランニング、マルチターンセッション管理をそのまま自アプリケーションに組み込める。

2026年1月に Technical Preview（Node.js/TypeScript、Python、Go、.NET の 4 言語）、2026年4月2日に Public Preview（Java 追加の 5 言語）を経て、Build 2026（2026年6月2日）で Rust を加えた 6 言語で GA に到達した。

SDK は「実行プラットフォーム」として位置付けられ、モデル管理・認証・MCP サーバー・カスタムエージェント・ストリーミングセッションを GitHub が一括管理する。開発者はその上にドメイン固有のツールやワークフローを構築する。

## 主な発表

- **GitHub Copilot SDK GA（6 言語）**: Node.js/TypeScript、Python、Go、.NET、Rust、Java で **GA**（2026-06-02）
- **Rust SDK 追加**: Copilot CLI バイナリをデフォルトでバンドルする新 SDK（**GA**）
- **マルチクライアントワークフロー**: 複数クライアントが同一セッションにツールと権限を提供可能（**GA**）
- **スラッシュコマンド・インタラクティブ入力プロンプト**: 全 SDK で利用可能（**GA**）
- **クラウドセッション・フリートモード**: リポジトリメタデータ付きのクラウドバックドセッション作成とマルチテナンシー対応（**GA**）

## 詳細

### アーキテクチャ

SDK は内部的に Copilot CLI プロセスのライフサイクルを管理する。Node.js/TypeScript、Python、.NET の 3 言語では CLI バイナリが自動バンドルされ、追加インストール不要で利用できる。Go、Java、Rust では手動インストールまたはアプリケーションレベルのバンドル機能を使用する（Rust SDK は GA でデフォルトバンドルに対応）。

外部の CLI サーバーに接続するモード（サーバーモード）も提供されており、CLI を別プロセスで起動して複数の SDK クライアントが接続する構成にも対応する。

### 主要機能

| 機能 | 説明 |
|------|------|
| カスタムツール・エージェント | ドメイン固有のツールをハンドラ付きで定義。エージェントが呼び出しタイミングを自律判断。MCP サーバーの接続やビルトインツール（`grep`、`edit_file`）のオーバーライドも可能 |
| システムプロンプトカスタマイズ | `replace`、`append`、`prepend`、動的 `transform` コールバックで Identity・Tone・Tool Instructions・Safety Rules をセクション単位で制御 |
| ストリーミング | トークン単位のリアルタイムレスポンス配信 |
| Blob アタッチメント | 画像・スクリーンショット・バイナリデータをディスク書き込み不要でインライン送信 |
| OpenTelemetry トレーシング | CLI 起動・JSON-RPC 呼び出し・セッション操作・ツール実行にまたがる W3C トレースコンテキスト伝搬 |
| フック（Hook）システム | pre/post ツール使用、セッション開始、MCP ツールコール、権限リクエストでエージェント挙動をインターセプト |
| クラウド・リモートセッション | リポジトリメタデータ付きクラウドバックドセッションの作成、リモートセッション URL のオンデマンド有効化 |
| マルチクライアントワークフロー | 異なるクライアントが同一セッションにツール・権限を提供 |
| スラッシュコマンド | 対話的な入力プロンプトとスラッシュコマンドを全言語で統一サポート |

### 認証モデル

柔軟な認証方式を提供し、用途に応じた選択が可能:

- **GitHub OAuth**: 個人ユーザー認証。Copilot サブスクリプションに基づくアクセス
- **GitHub Apps**: 組織・リポジトリスコープでの認証。サーバーサイドアプリに最適
- **環境トークン**: CI/CD パイプラインやサーバーレス環境向け
- **BYOK（Bring Your Own Key）**: OpenAI、Microsoft Foundry、Anthropic 等のプロバイダーキーを直接使用。Copilot サブスクリプション不要

セッション単位で `gitHubToken` を指定可能（`per-session gitHubToken`）で、マルチテナント環境での認証分離にも対応する。

### 対応言語とインストール

| 言語 | パッケージ / インストール | CLI バンドル |
|------|--------------------------|-------------|
| Node.js / TypeScript | `npm install @github/copilot-sdk`（TS 5.2+、Node 20+） | 自動 |
| Python | `pip install github-copilot-sdk` | 自動 |
| .NET | `dotnet add package GitHub.Copilot.SDK` | 自動 |
| Go | `go get github.com/github/copilot-sdk/go`（`ctx.Context` シグネチャ） | 手動 / アプリバンドル |
| Java | Maven（JDK 21+） | 手動 |
| Rust | Cargo | デフォルトバンドル |

### Public Preview → GA での変更点

GA（2026-06-02）では以下の改善が追加された:

- Rust SDK の新規追加（CLI バイナリデフォルトバンドル）
- マルチクライアントワークフローの改善（複数クライアントからツール・権限を同一セッションに提供）
- スラッシュコマンドとインタラクティブ入力プロンプトの全言語展開
- Preview フィードバックに基づく API サーフェスの安定化とクリーンアップ
- 接続の低速・失敗時の診断機能強化
- クラウドセッション、フリートモード、マルチテナンシーガイドの追加

### 課金モデル

各プロンプトは Copilot サブスクリプションのプレミアムリクエストクォータとしてカウントされる。利用可能なプラン:

- **Copilot Free**: 個人利用。月次クォータ内で利用可能
- **Copilot Pro / Pro+ / Business / Enterprise**: 各プランのクォータに準拠
- **BYOK**: Copilot サブスクリプション不要。自分のプロバイダーキーで利用

## 応用シナリオ

- 社内ポータルや管理ツールにエージェント機能を組み込み、ドメイン固有のタスク（契約審査、インフラ操作、データ変換等）を自然言語で自動化
- カスタマーサポートアプリにマルチターンセッションを統合し、コンテキストを維持した対話型トラブルシューティングを提供
- Microsoft Agent Framework のハーネスとして Copilot SDK を接続し、Foundry Agent Service でホスティングされるエージェントにコーディング能力を付与
- OpenTelemetry トレーシングとフックシステムを活用し、エージェントの全ツール呼び出しを既存の可観測性基盤（Datadog、Grafana 等）に統合
- BYOK 認証でエンタープライズの既存 LLM 契約（Azure OpenAI、Anthropic）を活かしつつ、SDK のツールループとセッション管理を利用

## 制約・注意点

- 各プロンプトが Copilot プレミアムリクエストクォータにカウントされる（BYOK 利用時を除く）
- Go・Java では CLI バイナリの手動インストールまたは PATH 設定が必要
- Node.js SDK は TypeScript 5.2 以上、Node 20 以上が必須
- Java SDK は JDK 21 以上が必須

## 公式ソース

- [https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk](https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk)
- [https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available](https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available)
- [https://github.blog/changelog/2026-04-02-copilot-sdk-in-public-preview](https://github.blog/changelog/2026-04-02-copilot-sdk-in-public-preview)
