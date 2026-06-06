---
id: frontier-tuning
title: Frontier Tuning
summary: 組織固有のデータ・プロセス・規約を用いて強化学習を行い、AI エージェントを組織の業務に適応させる Frontier Tuning を Private Preview で発表。コンプライアンス境界内で実行され、Copilot Studio および Microsoft Foundry での提供を予定。Microsoft HR での導入ではタスク成功率が13%から87%に向上。
tags:
  - m365-copilot
  - azure-ai-foundry
content_type: announcement
topic: working-with-models
official_sources:
  - https://devblogs.microsoft.com/microsoft365dev/frontier-tuning-teaching-ai-to-work-the-way-you-do
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Frontier Tuning は、組織固有のデータ・プロセス・規約を使って AI エージェントを業務に適応させるための新しいアプローチである。従来のファインチューニングとは異なり、強化学習（Reinforcement Learning Environment: RLE）をコンプライアンス境界内で適用する。

Build 2026 で Private Preview として発表され、Forward Deployed Engineers（FDE）チームを通じて提供される。今後 Copilot Studio と Microsoft Foundry でも利用可能になる予定。

## 主な発表

- **Frontier Tuning**: 組織データによる強化学習ベースの AI カスタマイズ（**Private Preview**）
- **Copilot Studio 統合**: RLE を使ったエージェントチューニング（予定）
- **Foundry 統合**: モデルチューニングとランタイム調整（予定）

## 詳細

### 3つの構成要素

1. **環境（Environment）**: 学習が行われるコンプライアンス境界内のインフラ
2. **入力（Inputs）**: 組織固有のデータ、ドメイン知識、ワークフロー
3. **出力（Outputs）**: チューニングされたモデル、スキル、ハーネス

### コスト効率

GPT-5.5 と比較して、技術ドキュメント生成等のタスクで10倍以上のコスト効率を実現。

### 導入事例

- **Microsoft HR**: タスク成功率が13%から87%に向上。組織知識を統合した HR ワークフローに適用
- **The Josh Bersin Company**: 人事インテリジェンスを Copilot エクスペリエンスに統合

## 制約・注意点

- Private Preview 段階。FDE チームとの協業が必要
- Copilot Studio / Foundry での一般提供は今後発表予定

## 参考リンク

- [Frontier Tuning: Teaching AI to work the way you do](https://devblogs.microsoft.com/microsoft365dev/frontier-tuning-teaching-ai-to-work-the-way-you-do)
- [What's new in Microsoft Foundry | Build Edition](https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-build-2026)
- [Microsoft Build 2026: Be yourself at work](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work)
