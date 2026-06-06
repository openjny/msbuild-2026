---
id: foundry-local
title: Foundry Local
summary: Foundry Local の Build 2026 更新として、プラットフォームサポートの拡大、ハードウェアアクセラレーション制御の改善、新しいオンデバイス API、Azure Local 統合を発表。AI PC、エッジデバイス、切断環境、主権 AI 要件に対応し、ローカルでの AI 推論とエージェント実行を簡素化する。
tags:
  - foundry-local
  - azure-ai-foundry
content_type: announcement
topic: agents-and-apps
official_sources:
  - https://devblogs.microsoft.com/foundry/accelerate-edge-ai-development-with-foundry-local
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Foundry Local は、AI モデルとエージェントをローカル環境（AI PC、エッジデバイス、エンタープライズインフラ）で実行するためのプラットフォームである。Build 2026 では、プラットフォーム対応の拡大、推論制御の強化、Azure Local との統合が発表された。

## 主な発表

- **プラットフォームサポート拡大**: より多くのデバイスとハードウェアに対応
- **ハードウェアアクセラレーション制御**: 推論とアクセラレーションのきめ細かな制御
- **オンデバイス API**: 新しいローカル推論 API
- **Foundry Local on Azure Local**: Azure Arc 経由の Kubernetes ワークロードとして実行（**Preview**）
- **Model Catalog on Azure Local**: ローカルでのモデル管理・交換を単一 API で実現（**Preview**）
- **AKS / Azure IoT Operations サポート**: エッジシナリオの拡大

## 詳細

### Foundry Local on Azure Local

Azure Local 上でコンテナ化された Kubernetes ワークロードとして実行。Azure Arc で統制され、エッジ、ハイブリッド、完全切断環境で一貫したデプロイが可能。主権 AI 要件（データ制御・コンプライアンス）と産業エッジシナリオ（リアルタイム・ローカル実行）の両方に対応する。

### 対応シナリオ

- AI PC でのローカル推論
- エンタープライズアプリでのオフライン AI
- エッジデバイスでのリアルタイム処理
- 切断環境での AI 実行

## 応用シナリオ

- 工場のエッジデバイスでの品質検査 AI のローカル実行
- 規制産業での主権 AI 要件への対応（データの国外移転不可環境）
- AI PC 上での開発者向けローカルエージェント実行

## 参考リンク

- [Accelerate Edge AI Development with Foundry Local](https://devblogs.microsoft.com/foundry/accelerate-edge-ai-development-with-foundry-local)
- [Unlocking the possibilities of physical AI with Foundry Local and Azure Local](https://techcommunity.microsoft.com/blog/azurearcblog/unlocking-the-possibilities-of-physical-ai-with-foundry-local-and-azure-local/4524600)
- [Foundry Local ドキュメント](https://learn.microsoft.com/azure/ai-foundry/)
