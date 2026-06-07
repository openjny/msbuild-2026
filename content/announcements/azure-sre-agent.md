---
id: azure-sre-agent
title: Azure SRE Agent
summary: Azure SRE Agent に VNet 統合、マネージドコネクタ、ツール単位の権限モデル、GitHub Enterprise ネイティブ対応、プライベートプラグインマーケットプレイスの 5 機能が Preview で追加。プライベートネットワーク内でのエージェント実行、エンタープライズのガバナンス要件への対応、組織内での運用スキル共有を実現し、プロダクション環境での SRE Agent 本格導入を可能にする。
tags:
  - azure-sre-agent
  - azure-kubernetes-service
  - azure-container-apps
content_type: announcement
topic: cloud-platform-and-data
official_sources:
  - https://techcommunity.microsoft.com/blog/appsonazureblog/azure-sre-agent-at-microsoft-build-2026-bringing-agentic-operations-to-the-enter/4524669
  - https://techcommunity.microsoft.com/blog/appsonazureblog/shaping-what-azure-sre-agent-does-tool-permissions-and-hooks/4524791
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Azure SRE Agent は、AI を活用してインシデント対応と運用トイルの自動化を行うエージェントサービスである。2026年3月の GA 以降、プロダクション環境での利用が拡大しており、Build 2026 ではエンタープライズ環境への本格導入を可能にする5つの機能が発表された。

## 主な発表

- **VNet 統合**: SRE Agent をプライベートネットワーク内で実行（**Preview**）
- **マネージドコネクタ**: Azure サービスとの事前構築された接続（**Preview**）
- **権限モデル**: ツール単位のアクセスポリシーと人間承認フロー（**Preview**）
- **GitHub Enterprise ネイティブ対応**: GHE テナントのコードとイシューに安全にアクセス（**Preview**）
- **プライベートプラグインマーケットプレイス**: 組織内でスキル・MCP ツール・運用ワークフローを共有（**Preview**）

## 詳細

### VNet 統合

プライベートエンドポイント経由で Azure リソースにアクセスでき、egress ルールが厳格な環境でも動作する。エンタープライズのネットワーク境界とプライベート接続に完全対応。

### 権限モデル

多層防御の設計思想に基づく。マネージド ID をベースに、ツール単位のポリシー、実行前の人間承認フック、監査ログを組み合わせてエージェントの行動をガバナンスする。

### 推論アーキテクチャ

SRE Agent はテレメトリとソースコードを横断して推論し、インシデントの根本原因分析を自動化する。

### マネージドコネクタ

監視、インシデント管理、コードリポジトリ、コラボレーションツールなど幅広いサービスとの事前構築された接続。セットアップ不要で即利用可能。

### GitHub Enterprise ネイティブ対応

GHE テナントのコードベースとイシューに安全にアクセスし、テレメトリとの横断調査を可能にする。

### プライベートプラグインマーケットプレイス

プラットフォームチームが承認済みスキルをガバナンス付きで組織全体に配布できる。

## 応用シナリオ

- プライベートネットワーク内の AKS / Container Apps ワークロードに対するインシデント自動調査
- GitHub Enterprise のコードベースとテレメトリを横断した根本原因分析
- プラットフォームチームが承認済みスキルをプラグインマーケットプレイスで全テナントに配布

## 制約・注意点

- VNet 統合、マネージドコネクタ、権限モデル、GHE 対応、Plugin Marketplace はすべて **Preview**
- GA 済み機能との組み合わせで動作するが、プレビュー機能の SLA は適用外
- 2026年4月15日以降、AAU（Active Agent Unit）ベースの課金に変更

## 参考リンク

- [Azure SRE Agent at Build 2026](https://techcommunity.microsoft.com/blog/appsonazureblog/azure-sre-agent-at-microsoft-build-2026-bringing-agentic-operations-to-the-enter/4524669)
- [Tool Permissions and Hooks](https://techcommunity.microsoft.com/blog/appsonazureblog/shaping-what-azure-sre-agent-does-tool-permissions-and-hooks/4524791)
- [GA リリース](https://techcommunity.microsoft.com/blog/appsonazureblog/announcing-general-availability-for-the-azure-sre-agent/4500682)
- [Azure Infrastructure Resiliency Manager (Preview)](https://techcommunity.microsoft.com/blog/reliability-and-resiliency-in-azure/announcing-azure-infrastructure-resiliency-manager-public-preview/4523710)

## 関連エントリ

- [Azure Monitor](azure-monitor.md)
- [Azure Kubernetes Service](azure-kubernetes-service.md)
