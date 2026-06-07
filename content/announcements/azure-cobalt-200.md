---
id: azure-cobalt-200
title: Azure Cobalt 200 VMs
summary: Azure Cobalt 200 Arm ベース仮想マシンの Early Access Preview を発表。カスタム Arm チップにより前世代比50%のパフォーマンス向上を実現し、エージェンティック AI ワークロードの推論とオーケストレーションに最適化された Linux ベース VM を提供する。エージェンティック時代のコンピュート需要に対応するクラウドインフラの再設計。
tags:
  - azure-compute
content_type: announcement
topic: cloud-platform-and-data
official_sources:
  - https://techcommunity.microsoft.com/blog/azurecompute/new-azure-cobalt-200-vms-deliver-50-performance-improvement-fully-optimized-for-modern-agentic-ai-workloads/4524500
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Azure Cobalt 200 Arm ベース仮想マシン（VM）が Build 2026 で Early Access Preview として発表された。Microsoft 独自設計の Arm プロセッサ「Cobalt 200」を搭載し、前世代比 50% のパフォーマンス向上を実現する。Linux ベースのエージェンティック AI ワークロード向けに設計されており、推論処理とエージェントオーケストレーションに最適化されている。

## 主な発表

- **Azure Cobalt 200 Arm ベース VM**: 前世代比 50% パフォーマンス向上の Linux VM（**Early Access Preview**）
- **エージェンティック AI 最適化**: AI ワークロードの推論・オーケストレーションに特化した設計
- **カスタム Arm チップ**: Microsoft 独自設計の Cobalt 200 プロセッサによる電力効率とスループットの改善
- **Azure Boost 次世代 GA**: ネットワーク・ストレージ処理をホスト CPU から専用ハードウェアにオフロードし、VM パフォーマンスを向上させるインフラ基盤（**GA**）
- **Confidential Live Migration**: Intel TDX ベースの Confidential VM をダウンタイムなしでライブマイグレーション。ホスト保守時のワークロード中断を排除（**Preview**）

## 詳細

### アーキテクチャ

Cobalt 200 は Microsoft がカスタム設計した Arm ベースプロセッサ。汎用 VM と異なり、AI ワークロードの推論パイプラインとエージェントオーケストレーションのスループットに最適化されている。前世代の Cobalt 100 と比較して 50% のパフォーマンス向上を実現しつつ、電力効率も改善されている。

### エージェンティック AI への最適化

エージェンティック AI 時代では、エージェントが複数のツールを呼び出し、推論結果をオーケストレーションする処理がコンピュートの中心になる。Cobalt 200 VM はこのパターンに特化し、高いシングルスレッド性能と効率的なメモリアクセスを提供する。GPU を必要としない推論タスク（テキスト処理、構造化データ分析、オーケストレーション）に適する。

### Linux ベース

Cobalt 200 VM は Linux OS のみをサポートする。Azure 上の Arm ベース VM は Linux エコシステムとの親和性が高く、コンテナワークロードや Kubernetes クラスタのワーカーノードとしても利用可能。

## 応用シナリオ

- エージェントオーケストレーションレイヤーのコンピュートとして Cobalt 200 VM を使用し、GPU を推論専用に確保することでコスト最適化
- コンテナ化されたマイクロサービスの実行基盤として、前世代比 50% のスループット向上を活用
- エネルギー効率の高い Arm アーキテクチャでサステナビリティ目標に貢献しつつ、AI ワークロードを実行

## 制約・注意点

- **Early Access Preview** であり、利用にはプレビュー登録が必要
- Linux OS のみサポート（Windows は非対応）
- GPU ワークロード（モデル学習、大規模推論）には別途 GPU VM が必要

## 参考リンク

- [New Azure Cobalt 200 VMs deliver 50% performance improvement](https://techcommunity.microsoft.com/blog/azurecompute/new-azure-cobalt-200-vms-deliver-50-performance-improvement-fully-optimized-for-modern-agentic-ai-workloads/4524500)
- [Announcing preview of Azure Cobalt 200 Arm-based Virtual Machines](https://aka.ms/Cobalt200VMs)
- [Announcing the General Availability of the Next Generation of Azure Boost](https://techcommunity.microsoft.com/blog/azurecompute/announcing-the-general-availability-of-the-next-generation-of-azure-boost/4519136)
- [Announcing Confidential Live Migration in Azure](https://techcommunity.microsoft.com/blog/azureconfidentialcomputingblog/announcing-confidential-live-migration-in-azure/4524558)
- [Azure Virtual Machines ドキュメント](https://learn.microsoft.com/azure/virtual-machines/)
