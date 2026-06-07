# Turn foundation models into production AI on Microsoft Foundry

Fireworks AI と Microsoft Foundry の統合による本番グレードのオープンモデル推論・学習パイプラインを解説。FireOptimizer による 13 倍高速推論、3 段階の学習プラットフォーム（Training Agent / Managed Training / Training API）、Foundry 上のデプロイモード（Serverless / PTU / BYOW）、Harvey AI との共同研究によるハイブリッドアドバイザーエージェントの品質・コスト最適化事例を実演。

## セッション情報

| 項目 | 内容 |
|------|------|
| セッション ID | BRKSP91 |
| タイトル | Turn foundation models into production AI on Microsoft Foundry |
| スピーカー | Vivek Chauhan (Fireworks AI)、Alicia Frame、Jetashree Ravi |
| ゲスト | Nico Grupin (Head of Applied Research, Harvey AI) |
| レベル | Intermediate (200) |
| トピック | Developer tools & frameworks |
| 日時 | 2026-06-03 18:30 UTC |
| 会場 | Festival Pavilion, Breakout 3 |
| オンデマンド | [視聴リンク](https://medius.microsoft.com/Embed/video-nc/1ce61725-4e6d-40e0-902f-a17d1366824a) |
| スライド | [ダウンロード](https://medius.microsoft.com/video/asset/PPT/1ce61725-4e6d-40e0-902f-a17d1366824a) |

## 概要

オープンウェイトモデルがクローズドモデルと品質差を埋めつつある現在、企業が真に差別化するには自社データによるモデルカスタマイズと継続的改善のフライホイールが鍵となる。本セッションでは Fireworks AI のプロダクション AI プラットフォームと Microsoft Foundry の統合を紹介し、推論最適化・学習・デプロイ・運用のエンドツーエンドフローをライブデモで実演した。

さらに Harvey AI の Nico Grupin をゲストに迎え、法律ドメイン向けエージェントベンチマーク（LAB）の紹介と、オープンウェイトモデル＋フロンティアモデルのハイブリッドアドバイザーシステムによるコスト 2.4 倍削減・品質 30% 向上の事例を発表した。

## キーポイント

1. **オープンモデルの品質ギャップ解消**: 多くのエンタープライズユースケースでオープンウェイトモデルがクローズドモデルと同等品質に到達。コスト削減と差別化の両立が可能に
2. **FireOptimizer による推論最適化**: 84,000 以上のパラメータ組み合わせ（スペキュラティブデコーディング、量子化、並列実行、カスタム CUDA カーネル）をワークロード固有に自動最適化し、最大 13 倍の高速化を実現
3. **3 段階の学習プラットフォーム**: Training Agent（ノーコード / PM 向け）、Managed Training（ML エンジニア向け）、Training API（研究者向けフルコントロール）で組織の AI 成熟度に応じた選択肢を提供
4. **データフライホイール**: 学習→デプロイ→監視→データ収集→再学習のサイクルを単一プラットフォームで完結。ワンクリックデプロイと数秒のホットローディングで反復速度を劇的に向上
5. **Foundry 上 3 つのデプロイモード**: Serverless（従量課金）、PTU（プロビジョンドスループット）、BYOW（カスタムモデル持ち込み）で実験から本番まで対応
6. **Harvey AI のハイブリッドアドバイザーシステム**: GLM 5.1 等のオープンモデル Worker + Opus 4.7 等の Advisor による推論時ルーティングで、品質・コスト・レイテンシの Pareto 最適を実現
7. **Fireworks on Foundry GA**: Fireworks AI の推論エンジンが Microsoft Foundry で一般提供開始。既存 Azure サブスクリプションで追加セットアップ不要

## 詳細

### AI の 3 つの基本的真実

Vivek Chauhan が提示した現在の AI ランドスケープの前提:

1. **オープンウェイトモデルの品質がクローズドモデルに追いついた** — E メール要約のような用途に Claude Opus 4.7 を使う必要はない。小さなオープンモデルで同等品質をはるかに低コストで実現可能
2. **差別化は自社データの組み込みから生まれる** — 全員が同じクローズドモデルを使っていては差別化できない。ファインチューニングが鍵
3. **先進企業は推論だけでなく継続的改善のフライホイールを回している** — 推論最適化やファインチューニングを超え、学習→デプロイ→改善のサイクルを高速に回すことが真の差別化モートになる

### Fireworks AI プラットフォーム概要

- 1 日あたり 30 兆トークン以上を処理（フロンティアラボに次ぐ規模）
- 10,000 以上のエンタープライズ顧客（Cursor、Vercel、Genspark、Uber、DoorDash 等）
- Cursor は Fireworks の RL ロールアウト機能で Composer 2 / 2.5 モデルを構築
- PyTorch（Meta）と Vertex AI（Google Cloud）の創設メンバーによる開発チーム
- シリーズ C で $327M 調達（2025 年 10 月）

### FireOptimizer: 推論最適化エンジン

LLM 推論は巨大な組み合わせ最適化問題:
- 3 つのスペキュラティブデコーディングモード
- 5 つの量子化モード
- 7 つのハードウェア SKU
- 4 つの並列実行モード
- 5 つのクロスホストセットアップ
- 10 のカーネルオプション

合計 84,000 以上の組み合わせを FireOptimizer がワークロード固有に自動探索し、最適な推論構成を決定する。FireAttention（カスタム CUDA カーネル）による低レベル最適化も含む。

### 学習プラットフォーム: 3 段階のアプローチ

#### Training Agent（GA）

ML の専門知識不要のエージェント駆動学習:
- 自然言語でビジネスゴールとデータセットを指定
- エージェントがデータ整形、Eval 作成、モデル選択、ハイパーパラメータサーチを自動実行
- 実行前にコスト見積もりを提示
- サンプルデータでグリッドサーチ後、フルデータセットで本番学習
- スキルファイルとして GitHub Copilot / Claude / Cursor 等の任意のハーネスから呼び出し可能
- SFT、DPO、分類タスクに対応

#### Managed Training

ML エンジニア向けの GUI ベース学習ワークフロー:
- SFT / RFT / DPO を選択してワンクリック実行
- BYOB（Bring Your Own Blob）でセキュアなデータストリーミング
- Weights & Biases 統合でリアルタイム監視
- Compound Training: SFT → DPO → RL の連鎖学習に対応
- オープンウェイトモデルのデイゼロサポート

#### Training API

研究者・上級 ML チーム向け:
- カスタム損失関数、報酬関数の定義
- GRPO 等の最新アルゴリズムサポート
- LoRA およびフルパラメータファインチューニング
- 265K+ コンテキストウィンドウ
- ハーネス内からの学習実行（ツールオーケストレーションを含む環境での学習）
- GitHub 上のレシピクックブックで即座に開始可能

### データフライホイール

単一プラットフォームで実現する継続的改善サイクル:

| 能力 | 詳細 |
|------|------|
| オンデマンド GPU | スピンアップ/ダウンが数分。GPU 確保やアイドルコストの心配不要 |
| ホットローディング | 新チェックポイント→数秒でライブデプロイ（WeightSyncer） |
| 数値忠実性 | CUDA レベルの正確性保証。学習結果と推論結果の数値的一致を保証 |
| ベンダー一元化 | 学習と推論が同一プラットフォーム。データエクスポートやフォーマット変換不要 |

### Fireworks on Foundry: 統合アーキテクチャ

Fireworks AI の推論エンジンが Microsoft Foundry で **GA**。3 つのデプロイモードを提供:

#### Serverless / Pay-As-You-Go

- Foundry カタログからワンクリックデプロイ
- 共有インフラ上のトークン単位課金
- データゾーン対応ルーティング（現在 US のみ）
- 対応モデル: GLM 5.1、Kimi 2.6、GPT OSS 120B 等
- 実験・初期ワークロード・可変トラフィックに最適

#### PTU（Provisioned Throughput）

- Azure PTU にマッピングされた予約容量
- 起動時 5〜10 のベースモデルを計画
- 安定需要の本番ワークロードに最適
- 既存の Azure コミットを活用可能

#### BYOW（Bring Your Own Weights）

- Fireworks で学習→重みダウンロード→Azure Blob に格納→Foundry でサーブ
- カスタムモデルの専用デプロイメント（レートリミットなし）
- PTU 数を任意に設定可能
- プロプライエタリモデルや深くカスタマイズされたシステムに最適

### Azure Agents との統合

Foundry 上の Fireworks モデルを Azure エージェントに統合するデモを実演:
- Build ページからエージェントを作成
- 背後のモデルとして Fireworks モデルまたはカスタムモデルを選択
- Web 検索ツール、カスタム関数等のツール統合が可能

### Harvey AI: 法律 AI の最前線

#### Legal Agent Benchmark（LAB）

Harvey AI が 3 週間前に公開した法律エージェントベンチマーク:
- 長期的ホライズンの法律タスクにおけるエージェント性能を測定
- エージェント環境としてクライアントマター（文書群）を提供
- パートナーレベルの曖昧な指示から実際の法律成果物（Word 文書、Excel、PowerPoint）を生成
- 専門家ルブリック（タスクあたり 50 以上の基準）で評価
- 24 の法律実務領域、1,200 以上のタスク、75,000 以上のルブリック基準

#### ハイブリッドアドバイザーエージェントシステム

Harvey と Fireworks の共同研究（セッション当日に論文公開）:
- **Worker エージェント**: GLM 5.1 等のオープンウェイトモデルで駆動
- **Advisor モデル**: Opus 4.7 等のフロンティアクローズドモデル
- 推論時ルーティングにより品質・コスト・レイテンシの Pareto 最適を実現
- 結果: **2.4 倍のコスト削減**かつ **all-pass メトリックで 30% 向上**

#### Harvey がオープンモデルを重視する 4 つの理由

1. **ドメイン専門性**: ポストトレーニングでモデルの「ジャグドインテリジェンス」（得意不得意のムラ）を平滑化
2. **コスト・レイテンシ**: 高リスク業務にはフロンティアモデル、定型業務にはオープンモデルというバイモーダル分布
3. **セキュリティ・ガバナンス**: VPC 内のセキュアデプロイ、完全な推論トレースによる解釈可能性・監査性
4. **反復速度の向上**: マネージドインフラにより学習実験の並列実行とイテレーションサイクルの圧縮を実現

### 顧客事例

| 企業 | 課題 | 成果 |
|------|------|------|
| UiPath | クローズド Sonnet 4.6 を上回る品質をより低コストで | Fireworks + Foundry のオープンモデルで達成 |
| Bolt | 本番スケールでのスループット・レイテンシ最適化 | Azure エコシステムと Fireworks モデルで解決 |
| Motif | 反復タスクの高ボリュームワークロード | Fireworks エンジンで最適化した Foundry デプロイメントで対応 |

## 関連セッション

- BRK241: From prototype to production: build and run agents at scale

## 公式ソース

- [https://build.microsoft.com/sessions/BRKSP91](https://build.microsoft.com/sessions/BRKSP91)
