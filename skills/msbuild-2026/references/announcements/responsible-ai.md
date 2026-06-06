# Responsible AI

Build 2026 で Responsible AI 関連として、ASSERT（ポリシー駆動のオープンソースエージェント評価フレームワーク）と Agent Control Specification（ACS、エージェント安全制御のオープン標準）を発表。任意のフレームワークで構築されたエージェントに対して、評価・ランタイム制御・モニタリングを提供する信頼フレームワーク。

## 概要

Build 2026 で Microsoft は、AI エージェントの信頼性を確保するための新しいフレームワークと2つのオープンソースプロジェクトを発表した。任意のフレームワーク（Semantic Kernel、LangChain、AutoGen 等）で構築されたエージェントに対して、ポリシー評価、ランタイム安全制御、継続的モニタリングを提供する。

## 主な発表

- **ASSERT**: ポリシー駆動のオープンソースエージェント評価フレームワーク
- **Agent Control Specification（ACS）**: エージェント安全制御のオープン標準
- **Guided Guardrail Setup**: Foundry Agent Builder でのガードレール推奨機能
- **Rubric**: コンテキスト対応のスケール評価
- **トレーシング・評価の GA**: Foundry でのプロダクション対応オブザーバビリティ

## 詳細

### ASSERT

自組織のポリシーに基づいてエージェントを評価するオープンソースフレームワーク。ポリシーから評価基準を定義し、エージェントの出力を自動的に検証する。

### Agent Control Specification（ACS）

エージェントが失敗しうるチェックポイントにランタイム制御を配置するためのオープン標準。ポリシーからプロダクション信頼性への変換を標準化する。

### Foundry での継続的ガバナンス

- トレーシングと評価が **GA** に到達
- Guided Guardrail Setup でエージェントに推奨ガードレールを自動提案
- Agent Optimizer と Agent ROI でエージェントの改善と価値測定

## 応用シナリオ

- 社内ポリシーに基づいたエージェントの自動評価パイプライン構築
- ACS でエージェントのランタイム安全制御を標準化
- Foundry のトレーシングでプロダクションエージェントの継続的モニタリング

## 公式ソース

- [https://devblogs.microsoft.com/foundry/build-2026-open-trust-stack-ai-agents](https://devblogs.microsoft.com/foundry/build-2026-open-trust-stack-ai-agents)
