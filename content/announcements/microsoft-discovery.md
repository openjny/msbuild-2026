---
id: microsoft-discovery
title: Microsoft Discovery
summary: 科学研究向けエージェンティック AI プラットフォーム Microsoft Discovery が GA に到達。グラフベースの知識エンジンと特化型エージェントにより、仮説生成・実験設計・シミュレーション・検証の反復ループを自動化。BHP（銅精錬）、Syensqo（半導体R&D）、GSK（創薬）、PNNL（エネルギー貯蔵）、Ginkgo Bioworks（生物学的発見）が採用。科学コミュニティ向けの無料ローカルアプリも Preview で発表。
tags:
  - microsoft-discovery
content_type: announcement
topic: agents-and-apps
official_sources:
  - https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work
  - https://azure.microsoft.com/en-us/blog/announcing-microsoft-discovery-general-availability-and-microsoft-discovery-app-preview
  - https://news.microsoft.com/source/features/innovation/majorana-2-microsoft-discovery-agentic-ai
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Microsoft Discovery は、科学者・研究者・エンジニア向けのエージェンティック AI プラットフォームである。Azure 上に構築され、エージェンティックオーケストレーション、高度な推論、グラフベースの知識基盤、ハイパフォーマンスコンピューティング（HPC）を統合し、研究ワークフロー全体（仮説生成、実験設計、シミュレーション、データ分析、検証）をカバーするエンタープライズグレードの基盤を提供する。

Build 2025 でプライベートプレビューとして発表された後、製薬・材料科学パートナーとの共同開発を経て、Build 2026（2026年6月2日）で GA に到達した。GA リリースによりすべての Azure エンタープライズ顧客が利用可能となり、Python SDK によるカスタムワークフロー構築にも対応する。併せて、研究者・学生・アカデミックラボ向けの無料ローカルデスクトップアプリが Preview で発表された。

Microsoft 自身も Discovery を活用し、データセンター向け non-PFAS 浸漬冷却液のプロトタイプを約 200 時間で発見するなど、従来数か月〜数年を要していた研究開発サイクルの劇的な短縮を実証している。

## 主な発表

- **Microsoft Discovery**: 科学研究・工学向けエージェンティック AI プラットフォーム（**GA**）。全 Azure エンタープライズ顧客に開放
- **Discovery ローカルアプリ**: 研究者・学生・科学チーム向けの無料ローカルデスクトップ体験（**Preview**）。GitHub Copilot アカウントのみで利用開始可能
- **Python SDK**: カスタム研究ワークフローの構築用 SDK（**GA**）
- **NVIDIA NIM 統合**: ALCHEMI NIM（化学シミュレーション最適化）および BioNeMo NIM（創薬向け事前学習済み AI ワークフロー）との統合

## 詳細

### Discovery Engine とアーキテクチャ

プラットフォームの中核は Microsoft Discovery Engine であり、科学研究のコアループ（エビデンス → 仮説 → 実行 → 分析 → 次の反復）を支援する。主な構成要素:

- **グラフベースの知識エンジン**: 機関固有の研究データと外部の科学情報を接続し、複雑な関係性を横断して推論。競合する研究結果の評価や探索空間の絞り込みを支援
- **特化型 AI エージェント**: 文献合成、仮説生成、実験シミュレーション、データ分析、検証の各ステップに専門化したエージェントを作成・連携
- **HPC 統合**: 数百万回のシミュレーションをスケールアウト。Azure のコンピューティングリソースを活用
- **ラボオートメーション接続**: 電子実験ノートブック（ELN）や自動ラボ機器へのコネクタを提供。デジタル発見から物理実験までをシームレスに接続
- **ガバナンスとトレーサビリティ**: 出力の推論パスを専門家が理解可能。再現性のある証拠駆動型探索を実現

本番 R&D 環境で必要とされる反復ループ、証拠保全、ツール協調を、個人支援を超えたレベルで実現することを設計目標としている。

### エージェンティックワークフロー

Discovery のエージェントは、従来の単一モデル応答とは異なり、計画・推論・ツール使用・マルチステッププロセスを実行する。キーノートデモでは、Cambridge Consultants（Capgemini 傘下）の PET プラスチック酵素分解研究を実演:

1. **知識グラフからの論文生成**: 科学文献を統合し研究論文を自動生成
2. **タンパク質発見**: HPC 統合で数百万回のシミュレーションを実行。存在しないタスクに対してエージェントがオンザフライで YAML エージェント定義と Python コードを生成
3. **自動ラボ実験**: 発見した DNA 配列を自動ラボ機器に直接投入

Copilot インターフェースが中央ハブとして機能し、研究者のプロンプトに基づいてどのエージェントを活用するかを判断し、エンドツーエンドのワークフローを設定する。

### Discovery ローカルアプリ

エンタープライズデプロイメントの準備が整っていない研究者・学生・アカデミックラボ向けに、VS Code ベースのローカルデスクトップ体験を無料で提供する。GitHub Copilot アカウントのみで利用開始でき、フルプラットフォームと同じエージェンティック AI 機能のサブセットにアクセス可能。導入障壁を下げ、科学コミュニティ全体への AI 駆動型発見の拡大を目指す。

### NVIDIA 統合

Microsoft Discovery は NVIDIA NIM マイクロサービスとの統合により、特定分野の研究を加速する:

- **NVIDIA ALCHEMI NIM**: 化学シミュレーション向け AI 推論の最適化。物性予測と候補物質推薦を加速
- **NVIDIA BioNeMo NIM**: 創薬向け事前学習済み AI ワークフロー。AI モデル開発を高速化

### 導入事例

| 組織 | 分野 | 活用内容 |
|------|------|----------|
| **BHP** | 鉱業・材料科学 | 先進的な銅浸出方法の研究。年単位から月単位にサイクルを短縮 |
| **Syensqo** | 半導体 R&D | AI エージェントを研究・販売・マーケティングに展開し、顧客需要と科学開発を接続 |
| **GSK** | 創薬 | 医薬品・ワクチンの発見・開発・デリバリーの加速 |
| **PNNL** | エネルギー貯蔵・バイオシステム工学 | セルフドライビング科学ワークフロー。AI エージェントとラボオートメーションを接続 |
| **Ginkgo Bioworks** | 生物学的発見 | データセット分析、仮説生成、実験設計を行う特化型エージェント |
| **Microsoft 社内** | データセンター冷却 | non-PFAS 浸漬冷却液プロトタイプを約 200 時間で発見（従来は数か月〜数年） |

### Majorana 2 との連携

Microsoft Quantum チームは Discovery のエージェンティック AI を活用して、次世代トポロジカル量子チップ Majorana 2 の材料スタック設計を加速した。鉛ベースの新超伝導体材料の探索・最適化において、AI エージェントが研究サイクルを短縮し、qubit パリティ寿命 1000 倍向上（前世代比）の達成に貢献した。

## 応用シナリオ

- 製薬企業での創薬パイプラインにおける仮説生成・候補化合物スクリーニング・実験設計の自動化。GSK のように反復的な薬剤発見サイクルを大幅に短縮
- 材料科学における新素材探索の加速。規制対応（PFAS 代替等）が必要な分野で、従来数年の開発サイクルを数か月〜数百時間に圧縮
- エネルギー貯蔵・バイオシステム工学でのセルフドライビング科学ワークフロー。AI エージェントがラボオートメーションと直接連携し、実験の設計・実行・解析を自律的にループ
- 半導体 R&D における新材料・新プロセスの発見と最適化。顧客需要から科学開発への接続を AI エージェントで自動化
- 研究機関・大学でのローカルアプリを使った小規模な探索的研究やプロトタイピング

## 参考リンク

- [Azure Blog: Announcing Microsoft Discovery general availability and Microsoft Discovery app preview](https://azure.microsoft.com/en-us/blog/announcing-microsoft-discovery-general-availability-and-microsoft-discovery-app-preview)
- [Microsoft Learn: Microsoft Discovery documentation](https://learn.microsoft.com/en-us/azure/microsoft-discovery/)
- [news.microsoft.com: Majorana 2 & Microsoft Discovery](https://news.microsoft.com/source/features/innovation/majorana-2-microsoft-discovery-agentic-ai)
- [Build 2026 ニュースハブ](https://news.microsoft.com/build-2026)
- [Tech Community: How MS Discovery Is Empowering Scientists to Do More](https://techcommunity.microsoft.com/blog/azurearchitectureblog/how-ms-discovery-is-empowering-scientists-to-do-more/4516670)

## 関連エントリ

- [Majorana 2](../announcements/majorana-2.md) — Discovery の AI が量子チップ材料設計を加速
- [Microsoft Foundry](../announcements/microsoft-foundry.md) — Discovery の基盤となるエージェントプラットフォーム
- [Foundry Local](../announcements/foundry-local.md) — ローカル AI 実行基盤
- [KEY01: Build 2026 キーノート](../sessions/key01.md) — Discovery デモの原典

## 制約・注意点

- Discovery ローカルアプリは Preview 段階
- ローカルアプリの利用には GitHub Copilot アカウントが必要

## 参考リンク

- [Announcing Microsoft Discovery general availability and Microsoft Discovery app preview](https://azure.microsoft.com/en-us/blog/announcing-microsoft-discovery-general-availability-and-microsoft-discovery-app-preview)
- [Microsoft Build 2026: Be yourself at work](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work)
- [Microsoft Build Live](https://news.microsoft.com/build-2026-live-blog/microsoft-build-2026-live)
- [Microsoft Discovery ドキュメント](https://learn.microsoft.com/azure/ai-foundry/)
