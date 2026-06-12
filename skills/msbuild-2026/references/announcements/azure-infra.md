# Azure Infrastructure

Build 2026 の Azure インフラストラクチャ発表まとめ。Cobalt 200 Arm VM（前世代比 50% 性能向上）の Early Access Preview、Maia 200 AI アクセラレータ（5+ PFLOPS FP8）のキーノート言及、Fairwater AI スーパーファクトリー（垂直 2 階建て・90% 液冷）の初公開、Azure Boost 次世代 GA、Confidential Live Migration（Intel TDX）Preview、Lasv5/Laosv5 VM（AMD Turin）Preview、Azure Infrastructure Resiliency Manager（Public Preview）を包括。

## 概要

Build 2026 では Azure のコンピュート・ハードウェア・データセンターインフラストラクチャに複数の発表が行われた。Microsoft 独自設計チップ（Cobalt 200 / Maia 200）、次世代データセンターアーキテクチャ（Fairwater）、ネットワーク/ストレージオフロード基盤（Azure Boost）、セキュリティ強化（Confidential Live Migration）、新 VM SKU（Lasv5/Laosv5）を横断的にカバーする。

## 主な発表

- **Azure Cobalt 200 Arm VM**: Microsoft 独自設計 Arm チップ搭載。前世代比 50% パフォーマンス向上、エージェンティック AI 推論に最適化（**Early Access Preview**）
- **Azure Boost 次世代**: ネットワーク・ストレージ処理を専用ハードウェアにオフロードし VM パフォーマンスを最大化するインフラ基盤（**GA**）
- **Maia 200 AI アクセラレータ**: Microsoft 独自設計 AI 推論チップ第 2 世代。5+ ペタ FLOPS（FP8）、750W SoC。キーノートで言及（1 月事前発表）
- **Fairwater AI スーパーファクトリー**: 垂直 2 階建て設計、90% 以上閉ループ液冷の次世代データセンターアーキテクチャ。キーノートで初公開
- **Confidential Live Migration**: Intel TDX ベース Confidential VM のダウンタイムなしライブマイグレーション（**Preview**）
- **Azure Lasv5 / Laosv5 VM**: AMD EPYC Turin ベースの新 VM SKU（**Preview**）
- **Azure Infrastructure Resiliency Manager**: アプリケーションのレジリエンシーを設計・評価・改善するゴール駆動型の統合エクスペリエンス（**Public Preview**）

## 詳細

### Azure Cobalt 200

Microsoft がカスタム設計した Arm ベースプロセッサ。汎用 VM と異なり、AI ワークロードの推論パイプラインとエージェントオーケストレーションのスループットに最適化。前世代 Cobalt 100 比で 50% のパフォーマンス向上を実現し、電力効率も改善。Linux OS のみサポートし、コンテナ/Kubernetes ワークロードに適する。

### Maia 200

2026 年 1 月に発表された Microsoft 独自の AI アクセラレータ第 2 世代。5 ペタ FLOPS 超（FP8）を 750W SoC エンベロープで実現し、現行最大モデルの推論を単チップで処理可能。Build 2026 キーノートで Satya Nadella が Jensen Huang との対談中に言及。Amazon Trainium / Google TPU に対抗する自社チップ戦略の柱。

### Fairwater

Build 2026 キーノートで初公開された次世代 AI データセンター（AI スーパーファクトリー）。垂直 2 階建て構造で設置面積を最適化し、90% 以上が閉ループ液冷。残りの部分は外気冷却を使用し、最も暑い日のみ水冷に切り替え。1GW 規模の電力容量でエージェンティック AI 時代の計算需要に対応。

### Azure Boost 次世代

ネットワーキングとストレージの I/O 処理をホスト CPU から専用ハードウェアにオフロードする Azure のインフラ基盤。次世代版が GA となり、全 Azure VM のベースラインパフォーマンスが向上。Cobalt 200 VM を含む新 SKU の基盤技術。

### Confidential Live Migration

Intel TDX（Trust Domain Extensions）を使用した Confidential VM のライブマイグレーション。ホスト保守時にワークロードを停止させることなく別ホストに移動可能。機密データを扱うワークロードの可用性を大幅に向上。

### Lasv5 / Laosv5 VM

AMD EPYC Turin プロセッサベースの新 VM SKU。ストレージ集約型ワークロード向けに最適化。

### Azure Infrastructure Resiliency Manager

Build 2026（2026年6月2日）で Public Preview として発表された、Azure 全体でアプリケーションのレジリエンシーを設計・評価・改善するためのゴール駆動型の統合エクスペリエンス。全 Azure 顧客に開放されている。AI が実際のオペレーションを動かす時代に向けて、障害シナリオを想定したレジリエンシー計画の策定を支援する。

## 応用シナリオ

- Cobalt 200 VM でエージェントオーケストレーションを実行し、GPU リソースを推論専用に確保してコスト最適化
- Confidential Live Migration で金融・医療の規制対応ワークロードのダウンタイムを排除
- Azure Boost GA によりネットワーク・ストレージ性能が自動的に向上（ユーザーアクション不要）
- Arm ベース VM + Linux でサステナビリティ目標に貢献しつつ AI ワークロードを実行
- Azure Infrastructure Resiliency Manager で本番 AI オペレーションのレジリエンシーをゴール駆動型に設計・評価・改善

## 制約・注意点

- Cobalt 200 VM は **Early Access Preview**（プレビュー登録必要、Linux のみ）
- Maia 200 は Build 2026 新発表ではなく 1 月の事前発表。開発者が直接利用する SKU としてはまだ未提供
- Fairwater は開発者への直接的影響なし（Azure サービスの性能改善として間接的に恩恵）
- Lasv5/Laosv5 は Preview

## 公式ソース

- [https://techcommunity.microsoft.com/blog/azurecompute/new-azure-cobalt-200-vms-deliver-50-performance-improvement-fully-optimized-for-modern-agentic-ai-workloads/4524500](https://techcommunity.microsoft.com/blog/azurecompute/new-azure-cobalt-200-vms-deliver-50-performance-improvement-fully-optimized-for-modern-agentic-ai-workloads/4524500)
- [https://techcommunity.microsoft.com/blog/azurecompute/announcing-the-general-availability-of-the-next-generation-of-azure-boost/4519136](https://techcommunity.microsoft.com/blog/azurecompute/announcing-the-general-availability-of-the-next-generation-of-azure-boost/4519136)
- [https://techcommunity.microsoft.com/blog/reliability-and-resiliency-in-azure/announcing-azure-infrastructure-resiliency-manager-public-preview/4523710](https://techcommunity.microsoft.com/blog/reliability-and-resiliency-in-azure/announcing-azure-infrastructure-resiliency-manager-public-preview/4523710)
