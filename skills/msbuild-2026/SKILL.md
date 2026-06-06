---
name: msbuild-2026
description: 'Microsoft Build 2026 でのアナウンス、セッション情報や関連リソース情報を提供するスキル。Triggers: Build 2026, アナウンス, セッション, 新機能, GA, Preview'
---

# Microsoft Build 2026 Info Hub

Microsoft Build 2026 (2026/06/02-03, Fort Mason Center) の発表情報を集約したスキル。
アナウンス、セッション要約、リソースリンクを提供する。

各アナウンスの詳細は references/ 配下を参照。

## Agents & apps

- [Microsoft Foundry](references/announcements/microsoft-foundry.md): Microsoft Foundry の Agent Framework が GA に到達し、複数の AI フレームワークと統合可能なエージェント基盤を提供。Hosted Agents、Toolboxes、Memory、Foundry IQ などを Public Preview で追加し、エージェントの開発・デプロイ・運用までをカバーするプラットフォームを強化。Foundry Toolkit for VS Code も GA となり、ローカルでのエージェント開発体験が整備された。

## Developer tools & frameworks

- [GitHub Copilot App](references/announcements/github-copilot-app.md): エディタに依存しないエージェントネイティブのデスクトップアプリ GitHub Copilot App を Technical Preview で発表。GitHub Copilot CLI 上に構築され、Issue・PR・セッションを起点に並列ワークストリームでエージェント駆動開発を行う。音声入力、クラウドセッション、エージェンティックブラウジング、Canvas モデルによるユーザー・エージェント・アプリの三者協調を特徴とする。
- [GitHub Copilot SDK](references/announcements/github-copilot-sdk.md): GitHub Copilot のエージェントランタイムをプログラマブルなレイヤーとして公開する Copilot SDK が Node.js/TypeScript・Python・Go・.NET・Rust・Java の 6 言語で GA。ツール呼び出し、ストリーミング、ファイル操作、マルチターンセッションを備え、独自アプリケーションにエージェント機能を組み込める。Copilot クラウドエージェントや Copilot CLI と同じランタイム基盤を使用する。

## Cloud platform & data

- [Azure SRE Agent](references/announcements/azure-sre-agent.md): Azure SRE Agent に VNet 統合、マネージドコネクタ、ツール単位の権限モデル、GitHub Enterprise ネイティブ対応、プライベートプラグインマーケットプレイスの 5 機能が Preview で追加。プライベートネットワーク内でのエージェント実行、エンタープライズのガバナンス要件への対応、組織内での運用スキル共有を実現し、プロダクション環境での SRE Agent 本格導入を可能にする。
