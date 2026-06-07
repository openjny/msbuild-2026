# Foundry Local

Foundry Local v1.2.0 を発表。多言語リアルタイム音声文字起こし（40 言語以上）、Linux ARM64 対応、Windows ML 2.0 による NPU/GPU アクセラレーション強化、推論キャンセル、クロスリージョンモデルカタログを追加。さらに Foundry Local on Azure Local（Preview）でオンプレミス・切断環境でのマルチノード推論と Agentic RAG を提供する。

## 概要

Foundry Local は、AI モデルをエンドユーザーのデバイス上で直接実行するためのエンドツーエンドのローカル AI ソリューションである。ネイティブ SDK（C#、Python、JavaScript、Rust、C++）、最適化済みモデルカタログ、自動ハードウェアアクセラレーションを約 20 MB の軽量パッケージで提供する。データはデバイス上に留まり、オフライン動作が可能で、Azure サブスクリプションも不要である。

Build 2026 では v1.2.0 リリースとして多言語 ASR、Linux ARM64 サポート、Windows ML 2.0 統合などの主要機能が追加された。同時に、エンタープライズスケールのオンプレミス推論プラットフォームとして Foundry Local on Azure Local が Preview で発表された。

## 主な発表

- **Foundry Local v1.2.0**: 多言語リアルタイム音声文字起こし（40 言語以上）、Linux ARM64 対応、Windows ML 2.0 統合、推論キャンセル、クロスリージョンカタログを含む大型アップデート
- **Windows ML (WinML) 2.0 統合**: Windows App SDK ランタイム依存を排除し、Python・JavaScript・Rust・C++ アプリで追加インストールなしに NPU/GPU アクセラレーションを利用可能に
- **Linux ARM64 サポート**: Raspberry Pi 5、NVIDIA Jetson、AWS Graviton、Ampere 等の ARM ベース Linux システムに対応
- **Foundry Local on Azure Local**: Azure Arc 管理の Kubernetes ワークロードとしてオンプレミス実行（**Preview**）
- **Model Catalog on Azure Local**: ONNX および vLLM 推論を単一ノードからマルチノードまで対応し、単一 API でモデル管理（**Preview**）
- **Agentic Retrieval in Foundry Local**: ローカルでのマルチステップ Agentic RAG とチャット体験（**Preview**）
- **カスタム MCP ツール**: Model Context Protocol 標準によるカスタムツールサーバーでエージェントを拡張

## 詳細

### アーキテクチャと SDK

Foundry Local は OpenAI 互換の REST API をローカルで公開するランタイムを中心に設計されている。開発者は既存の OpenAI SDK やHTTP クライアントをそのまま使用でき、エンドポイントをローカルに向けるだけで動作する。

コアコンポーネント:

- **ネイティブ SDK**: C#、Python、JavaScript、Rust、C++ の 5 言語に対応。各言語のネイティブパターン（async/await、キャンセルトークン等）をサポート
- **モデルカタログ**: オンデバイス用に最適化されたモデルを提供。ダウンロード・ロード・アンロードのライフサイクルを SDK が管理
- **自動ハードウェアアクセラレーション**: デバイスのハードウェアを検出し、最適な実行プロバイダー（NPU、GPU、CPU）を自動選択
- **ローカル Web サーバー**: 開発ワークフロー向けのオプションコンポーネント。OpenAI 互換 REST エンドポイントを localhost で公開

オプションの CLI ツール（`foundry` コマンド）は開発・テスト向けであり、プロダクションでは SDK をアプリケーションに直接統合する形が推奨される。

### v1.2.0 の新機能

Build 2026 で発表された v1.2.0 の主要な改善点:

- **多言語 ASR**: NVIDIA Nemotron 3.5 ASR Streaming Multilingual モデルにより 40 言語以上のリアルタイム音声文字起こしをサポート。マイクからのストリーミング入力に対し、言語自動検出（`language="auto"`）または明示的な言語指定が可能
- **Linux ARM64 サポート**: Raspberry Pi 5、NVIDIA Jetson、AWS Graviton、Ampere などの ARM ベース Linux システムでエッジ・組み込みシナリオに対応
- **クロスリージョンモデルカタログ**: Azure Traffic Manager によるルーティングで、ユーザーに最も近いリージョンからモデルをダウンロード。初回ダウンロード速度が向上
- **ダウンロード・EP キャンセル**: 5 言語すべての SDK でモデルおよび実行プロバイダーのダウンロードキャンセルをネイティブパターンで実装
- **推論キャンセル**: 進行中のチャット補完や文字起こしセッションをクリーンに中断。計算の無駄やストリームの孤立を防止
- **Windows ML 2.0 へのアップグレード**: WinML パッケージが WinML 2.0 を同梱。従来必要だった Windows App SDK ランタイム依存と初期化コードが不要に
- **WebGPU 実行プロバイダー for WinML**: より多くの Windows ハードウェアで GPU アクセラレーションカバレッジを拡大

### GitHub Copilot CLI 音声入力との統合

GitHub Copilot CLI の音声入力機能は Foundry Local 上に構築されている。ターミナルで `/voice on` を有効化すると、マイクからの音声がローカルの Nemotron ASR Streaming モデルで文字起こしされ、CLI の入力バッファに直接パイプされる。クラウドへのデータ送信なし、音声がデバイス外に出ることなく動作する。

パフォーマンス特性（公式ブログ記載の内部テスト値）:

- Word Error Rate: 約 8%
- CPU 使用率: 文字起こし中でも低い一桁パーセント台
- 推論キャンセル: Esc キーで発話途中のキャンセルが可能（v1.2.0 の新機能を利用）

### Foundry Local on Azure Local

Foundry Local on Azure Local は、エンタープライズスケールでモデル・エージェント・ツールをオンプレミス実行するための AI プラットフォームである。Azure Arc で管理される Kubernetes ワークロードとして動作し、エッジ・ハイブリッド・完全切断環境に一貫してデプロイできる。

Preview で発表された主要機能:

- **Model Catalog on Azure Local**: クラウドと同じカタログ API 体験でモデルを探索・デプロイし、ローカルで運用。ONNX と vLLM 推論に対応し、シングルノードからマルチノードデプロイメントまでスケール
- **マルチノードスケジューリング**: クラスタ内の GPU キャパシティに推論ワークロードを分散。単一ノードに限定されない
- **Agentic Retrieval**: エンタープライズデータでエージェントをグラウンディングするマルチステップ Agentic RAG とローカルチャット体験
- **カスタム MCP ツール**: Model Context Protocol 標準のカスタムツールサーバーでエージェントを拡張
- **ソリューションテンプレート**: Azure Local 上のチャットインターフェースや Azure AI Video Indexer を使用したビデオエージェントのコードサンプル
- **完全切断対応**: モデル重み・プロンプト・推論トラフィックがすべてクラスタ内に留まり、WAN 依存なし
- **GitHub Enterprise Local 連携**: オンプレミスでのリポジトリ・CI/CD・セキュリティスキャンによるエンドツーエンドの AI アプリ開発

### 対応プラットフォームとハードウェア

Foundry Local が対応するプラットフォーム:

- **Windows**: x64 / ARM64
- **Linux**: x64 / ARM64（v1.2.0 で追加）
- **macOS**: 対応（SDK 経由）

ハードウェアアクセラレーション:

- **NPU**: Windows ML 2.0 経由で AI PC の NPU を活用
- **GPU**: CUDA（NVIDIA）、DirectML（Windows）、WebGPU（WinML 経由）
- **CPU**: すべてのプラットフォームでフォールバック実行

デバイスの利用可能なハードウェアを自動検出し、最適な実行プロバイダーを選択する。開発者はハードウェア固有のコードを書く必要がない。

## 応用シナリオ

- プライバシー重視のドキュメント AI: Foxit PDF Editor がローカルで質問応答・要約・翻訳・文書理解を実行し、機密データをデバイス上に保持
- ヘテロジニアスシリコン対応アシスタント: Intel・AMD・Qualcomm・NVIDIA の CPU/NPU/iGPU/dGPU を自動検出し、最適なコンピュートユニットにワークロードをルーティング
- エンタープライズローカル RAG パイプライン: Model HQ のように AI PC やプライベートサーバー上で RAG パイプラインとマルチステップエージェントをオフライン実行
- エネルギー産業の切断環境: リモート施設・洋上プラットフォーム・フィールド拠点で接続が限定される環境での AI 意思決定（Chevron 事例）
- プライバシーレイヤー: Liquid AI ShieldFlow のようにデバイス上で PII レダクトとプロンプトインジェクション防止を実行し、外部への送信前にデータを保護
- 主権 AI・規制対応: データの国外移転不可環境でのコンプライアンス準拠 AI 推論。Azure Local との組み合わせで完全切断運用が可能

## 制約・注意点

- Foundry Local on Azure Local の各機能は **Preview** であり、本番ワークロードには制限がある
- Preview アクセスには申請が必要（aka.ms/FoundryLocalAzure_PreviewRequest）
- macOS での NPU アクセラレーションは未サポート（CPU フォールバック）
- モデルカタログのモデルはオンデバイス向けに最適化された小〜中規模モデルが中心

## 公式ソース

- [https://devblogs.microsoft.com/foundry/accelerate-edge-ai-development-with-foundry-local](https://devblogs.microsoft.com/foundry/accelerate-edge-ai-development-with-foundry-local)
- [https://techcommunity.microsoft.com/blog/azurearcblog/build-deploy-and-govern-sovereign-ai-with-foundry-local-on-azure-local/4522945](https://techcommunity.microsoft.com/blog/azurearcblog/build-deploy-and-govern-sovereign-ai-with-foundry-local-on-azure-local/4522945)
- [https://techcommunity.microsoft.com/blog/azurearcblog/scale-on-prem-ai-with-foundry-local-on-azure-local-multi-node-inference-and-vllm/4516692](https://techcommunity.microsoft.com/blog/azurearcblog/scale-on-prem-ai-with-foundry-local-on-azure-local-multi-node-inference-and-vllm/4516692)
