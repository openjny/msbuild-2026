# Scale agentic AI from on-device to cloud orchestration

エージェンティック AI をクライアント・エッジ・クラウドの三層で分散実行するアーキテクチャを Intel ハードウェアと Azure の 3 デモで実演。NPU 上の Aion 1.0 Instant、Thunderbolt VRAM プーリングで 180B モデル推論、Xeon 6+SGLang+OpenClaw による Kubernetes マルチエージェントオーケストレーションを提示した。

## セッション情報

| 項目 | 内容 |
|------|------|
| セッション ID | BRKSP92 |
| タイトル | Scale agentic AI from on-device to cloud orchestration |
| スピーカー | Colin Helms (Intel Desktop Design)、Imran Sheik Mohamed (Intel AI Solutions Architect)、Karthik Vijayan (Microsoft Principal Applied Scientist Manager)、Jayneel Vora (Intel OS Kernel Engineer) |
| レベル | Advanced (300) |
| トピック | Developer tools & frameworks |
| 日時 | 2026-06-03 17:15 UTC |
| 会場 | Festival Pavilion, Breakout 3 |
| オンデマンド | [視聴リンク](https://medius.microsoft.com/Embed/video-nc/9ae79b2c-a2bb-44f2-80a7-dfd57d740b73) |
| スライド | [ダウンロード](https://medius.microsoft.com/video/asset/PPT/9ae79b2c-a2bb-44f2-80a7-dfd57d740b73) |

## 概要

AI アプリケーションが単一モデル・単一環境で動作する時代は終わり、エージェンティック AI ワークロードはクライアント・エッジ・クラウドにまたがって分散実行される必要がある。本セッションでは Intel と Microsoft のエンジニアが 3 つのライブデモを通じて、推論をどこに配置すべきかの実践的ガイダンスを提供した。応答性・スケーラビリティ・コスト効率のバランスを取りながら、開発者が各環境の特性を活かしてエージェンティック AI システムを構築するためのアプローチを示した。

## キーポイント

1. **Aion 1.0 Instant on NPU**: Intel Panther Lake（Core Ultra Series 3）の 50 TOPS NPU 上で動作するオンデバイス AI。OS レベル API（OpenVINO + WinML）を利用し、NPU 使用率 20% 未満・メモリ増加最小限・CPU 負荷なしで高速推論を実現
2. **積極的量子化によるモデル圧縮**: Panther Lake の NPU 設計により、速度とインテリジェンスのトレードオフなく圧縮モデルを実行可能。ネットワーク接続不要・トークンコストゼロで稼働
3. **VRAM プーリングによるエッジ推論**: Intel NUC Pro 6（Core Ultra Series 3 X7）のグラフィックスドライバーで RAM の最大 93% を VRAM 化。Thunderbolt 4 接続で 3 台をプール（150GB VRAM）し、Llama.cpp RPC で最大 180B パラメータモデルを 12–18 tok/s で推論
4. **コスト効率の高い開発者向け構成**: 3 台スタック合計約 $7,000 で 80B–180B モデルを運用可能。チーム共有のロードバランシング構成や Copilot CLI でのローカルモデル接続にも対応
5. **Xeon 6 + AMX によるクラウド推論**: 96 vCPU・200GB RAM の Azure VM 上で Intel Xeon 6 の AMX（行列乗算高速化）を活用。Qwen 3.6 35B-A3B（MoE、アクティブパラメータ 3B）を SGLang で 15–16 tok/s で配信
6. **OpenClaw によるエージェントオーケストレーション**: Kubernetes 上で OpenClaw ハーネスを展開し、GitHub CLI 連携による Issue 分析・ファイルリスク評価を自動実行。レプリカのオートスケーリングでマルチエージェント・マルチペルソナ運用に対応
7. **MXC（Microsoft Execution Containers）**: Copilot CLI のセキュア実行環境。ファイルシステム・ネットワーク・MCP サーバーへのアクセスをポリシーで制御し、エンタープライズ管理者がエージェントの動作範囲を制限可能

## 詳細

### デモ 1: オンデバイス — Aion 1.0 Instant on Intel Panther Lake

Jayneel Vora（Intel OS Kernel Engineer）と Karthik Vijayan（Microsoft Principal Applied Scientist Manager）がデモを実施。Intel Panther Lake（Core Ultra Series 3）上で Aion 1.0 Instant（Build 2026 キーノートで Satya Nadella が発表）を動作させ、チャットインターフェースとシステムモニタリングパネルを並列表示した。

NPU の特徴:
- 50 TOPS の AI スループット
- プロンプト応答時の NPU 使用率は 20% 未満
- メモリ・CPU への影響は最小限（熱スロットリングなし、ファン動作なし）
- OS レベル API（OpenVINO + WinML）でスケジューリングを自動処理
- 開発者は NPU 固有コードを書く必要なし

ユースケースとして、病院・飛行機内など外部ネットワーク接続不可の環境での無制限・無料推論を強調。Microsoft がモデルと API サーフェスを提供し、Intel がハードウェア実行を保証する分担モデルを提示した。

### デモ 2: エッジ — Stackable AI（VRAM プーリング）

Colin Helms（Intel Desktop Design）が 3 台の ASUS NUC Pro 6（Core Ultra Series 3 X7、64GB RAM）を使用したデモを実施。

#### VRAM 拡張メカニズム

- Intel グラフィックスドライバーの「Shared GPU/NPU Override」スライダーで RAM の最大 93% を VRAM に割り当て可能（再起動要）
- 1 台で 51.3GB の VRAM を確保
- LPDDR5x 9200+ の高速メモリが OEM 要件として Intel が指定

#### 分散推論構成

- Thunderbolt 4 ケーブル（20 Gbps）で 3 台をポイントツーポイント接続（完全オフラインデモ）
- Llama.cpp を RPC 有効・Vulkan バックエンドでコンパイル
- モデルを 3 台にシャーディングして配置、RPC サーバー経由で Llama が自動的に各マシンのレイヤーを呼び出し
- 合計 150GB VRAM で最大 180B パラメータモデルをロード可能
- 対応モデル: Qwen 3 Next Instruct 80B、GPT-OSS 120B、Qwen 3.5 122B-A10B
- 推論速度: 8–18 tok/s（デモでは Qwen Next ADBA 3B で 16–18 tok/s）

#### Copilot CLI 連携

- 環境変数でモデル名・エンドポイント IP・API キーを設定するだけでローカルモデルに切り替え可能
- Visual Studio / VS Code から 80B モデルでのコードレビュー・支援を無料で実行
- MXC（Microsoft Execution Containers）によりエージェントのサンドボックス実行を実現
  - MCP サーバーアクセス・ファイルシステム・ネットワークのポリシー制御が可能
  - Microsoft プラットフォームの一部としてグループポリシーで管理者が設定を強制
  - ローカルモデル・クラウドモデル両方で利用可能

#### コスト

1 台約 $2,300–$2,500（最高スペック）、3 台スタックで約 $7,000。各台の消費電力は約 100W。

### デモ 3: クラウド — Intel Xeon 6 上のエンタープライズエージェント AI

Imran Sheik Mohamed（Intel AI Solutions Architect）が Azure VM 上でのエンタープライズ規模デモを実施。

#### インフラ構成

- Azure VM: 96 vCPU、200GB RAM
- プロセッサ: Intel Xeon 6（AMX 搭載）
- AMX はトランスフォーマーモデル実行の 80% 以上を占める行列乗算を高速化
- GPU メモリがボトルネックとなる場合の代替として、既存 VPC 内のプライベート VM を再活用

#### モデルとサービング

- Qwen 3.6 35B-A3B（Mixture of Experts、アクティブパラメータ 3B）
- コンテキストサイズ: 200,000 トークン（エージェンティックシステムの標準 128K+ に対応）
- SGLang で配信、15–16 tok/s（torch.compile 適用時は 21 tok/s）
- vLLM・SGLang・OpenVINO など主要推論フレームワークが Intel Xeon 最適化済み
- 投機的デコーディング（draft model）対応が SGLang で近日予定、vLLM では利用可能

#### エージェントオーケストレーション

- OpenClaw を Kubernetes 上に展開（`oc status` で管理）
- LLM がコマンド解釈 → GitHub CLI 実行 → 結果を LLM が要約、の 2 ステップパイプライン
- デモ: プライベート GitHub リポジトリの Issue/PR 一覧取得、特定 Issue のリスクファイル分析
- レプリカのオートスケーリング: CPU 使用率に応じてポッド数を自動増減
- マルチペルソナ（APM・レビュアー等）による夜間バッチジョブでの PR 完了ワークフローに対応
- 単一 VM 上で複数エージェントインスタンスをスケール可能

## 関連セッション

- Intel ブースデモ: NPU 上での推論ゲーム（2 つの単語間の関連性推論）

## 公式ソース

- [https://build.microsoft.com/sessions/BRKSP92](https://build.microsoft.com/sessions/BRKSP92)
