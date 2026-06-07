---
id: project-solara
title: Project Solara
summary: エージェントファーストのチップ・トゥ・クラウドプラットフォーム Project Solara を発表。AOSP ベースの Microsoft Device Ecosystem Platform（MDEP）を OS 基盤とし、Agent Shell による just-in-time UI、Intune/Entra ID/Defender 統合のエンタープライズセキュリティ、マルチエージェント対応の拡張性を 3 本柱として設計。Qualcomm/MediaTek と協業し、デスクデバイスとウェアラブルバッジの 2 参照デザインを公開。AccuWeather、Best Buy、CVS Health、Levi's、Target 等とのプライベートパイロットを予定。
tags:
  - windows-dev
  - copilot-studio
  - agent-framework
content_type: announcement
topic: windows
official_sources:
  - https://commandline.microsoft.com/project-solara-build-2026
  - https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work
  - https://techcommunity.microsoft.com/blog/microsoftdeviceecosystemplatformblog/powering-new-devices-and-agent-first-experiences-with-mdep/4524525
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Project Solara は、AI エージェントを第一級のインターフェースとして設計されたチップ・トゥ・クラウドプラットフォームである。従来のアプリ中心デバイスとは根本的に異なり、エージェントがユーザーとのインタラクションの主要手段となる新しいデバイスカテゴリを定義する。

Build 2026 キーノートで Steven Bathiche（Microsoft CVP & Technical Fellow, Applied Sciences Group）が発表し、Satya Nadella と Qualcomm CEO Cristiano Amon のステージ上対談でビジョンが共有された。Nadella は「アプリのためにOSやデバイスを構築する時代から、エージェントのために構築する時代への真のプラットフォームシフト」と位置付けた。

単一のエージェントが支配するのではなく、オープンなマルチエージェント環境を前提としており、組織が Microsoft のエージェントと自社・サードパーティエージェントを併用できるよう設計されている。デバイスは「長時間稼働するインテリジェンスとアクションへの窓」であり、人間とより大きなインテリジェント環境の間のヒューマンスケールなインターフェースレイヤーと位置付けられる。

## 主な発表

- **Project Solara プラットフォーム**: エージェントファーストのチップ・トゥ・クラウドプラットフォーム。シリコン・ソフトウェア・クラウドを統合
- **MDEP（Microsoft Device Ecosystem Platform）**: AOSP ベースのエンタープライズグレード OS を Solara デバイスの基盤として採用
- **Agent Shell**: エージェント駆動のインタラクションモデルと just-in-time UI。複数エージェントの動的ロードとフォームファクタ適応型レンダリング
- **2つの参照デザイン**: Qualcomm シリコン搭載のウェアラブルバッジ（ポータブル）と MediaTek IoT SoC 搭載のデスクデバイス（ステーショナリー）
- **プライベートパイロットプログラム**: AccuWeather、Best Buy、CVS Health、Levi's、Target 等との試験導入
- **シリコンパートナーシップ**: Qualcomm Technologies および MediaTek との協業による参照デザインの共同開発

## 詳細

### プラットフォームの 3 本柱

Project Solara は以下の 3 つの柱で構成される。

#### 1. エンタープライズレディネス（プライバシー・セキュリティ・制御・信頼）

エージェントへのシームレスなアクセスと、透明性・制御のバランスを実現する。エンタープライズ顧客・デバイスユーザー・周囲の人々がデバイスの使われ方を理解し制御できる設計。

- Microsoft Intune によるデバイス管理
- Microsoft Entra ID によるネイティブ ID 統合
- Windows Hello for Business による生体認証
- Microsoft Defender for Endpoint によるエンドポイント保護
- ハードウェアアテステーション（Microsoft PKI）によるデバイス整合性検証
- セキュアブート、OS 整合性検証、セキュアプロビジョニング
- 物理マイクミュートコントロールと録音/聴取時の可視インジケータ

#### 2. エージェント駆動のインタラクションモデル（Just-in-Time UI）

従来のアプリランチャーを Agent Shell に置き換え、タスクドリブンのインターフェースを実現する。

- Agent Shell が複数のクラウドベースエージェントを動的にロード
- エージェントディスパッチャーとエージェントタスクマネージャーが適切なエージェントを自動的に起動
- UI はフォームファクタに応じて適応的にレンダリング（同一エージェントが異なる画面サイズ・モダリティで動作）
- 開発者がデバイスごとに体験を再設計する必要なし

#### 3. 拡張性（Bring Your Own Agents）

単一エージェントが支配しないオープンなマルチエージェント環境を実現する。

- Microsoft 365 Copilot の宣言型エージェントまたはカスタムエンジンエージェント
- Copilot Studio によるエージェント構築
- Microsoft 365 Agents SDK および Microsoft Agent Framework による開発
- サードパーティエージェントの統合対応
- データ・ドメイン・ID・組織間の境界を尊重したマルチエージェント連携

### MDEP（Microsoft Device Ecosystem Platform）の技術アーキテクチャ

MDEP は Project Solara デバイスの OS 基盤であり、エンタープライズグレードの一貫した基盤を提供する。

**なぜ AOSP ベースか**: 小型・低電力のエージェントファーストデバイスはモバイル/組み込みハードウェアとの適合性が高く、従来の PC スタック（Windows）よりも適している。AOSP を基盤とすることで ARM ベースの省電力チップセットとの親和性を確保しつつ、Microsoft のエンタープライズツール群を統合する。

**MDEP が解決する断片化問題**: 各デバイスメーカーが独自に OS を構築・強化・パッチ適用する場合、セキュリティポスチャ・更新頻度・管理面・ライフサイクルコミットメントがすべて異なる。MDEP は統一されたセキュリティベースライン、Microsoft 主導の更新モデル、同一のライフサイクルコミットメント、Entra ID/Intune/Defender のネイティブ統合を提供し、IT 管理者が既存フリートと同じツール・ポリシー・信頼モデルで管理可能にする。

**主要な技術機能**（MDEP 2026.15.1 リリース）:
- Unified Component Model（UCM）: Microsoft 署名済みバイナリコンポーネントによる配布標準化
- MDEP AI モデル非依存ランタイム（ONNX）: オンデバイス AI 推論
- Zero Touch Enrollment: Autopilot ライクなデバイスプロビジョニング
- 802.1X ネットワーク認証サポート
- Configuration API によるデバイス設定カスタマイズ

### シリコンパートナーとの協業

#### Qualcomm Technologies（ポータブル参照デザイン）

Qualcomm との協業でウェアラブルバッジのコンセプトデバイスを開発。Qualcomm Snapdragon プラットフォームはエージェンティック AI に最適化されており、高性能と業界最先端の電力効率を両立する。Qualcomm Senior Vice President Dino Bekis は「Microsoft の Project Solara は幅広いデバイスとフォームファクタにわたってエージェントファースト体験を推進する重要な一歩」と述べた。

バッジコンセプトデバイスの仕様:
- 5G 接続
- 音声・ビジョン機能
- タッチスクリーンディスプレイ
- カメラ
- 軽量・常時接続のオンザゴー設計

#### MediaTek（ステーショナリー参照デザイン）

MediaTek との協業でデスクコンセプトデバイスを開発。MediaTek は IoT エコシステムで幅広いデバイスパートナーと深い専門知識を持つ。MediaTek Senior Vice President & General Manager Vince Hu は「Project Solara プラットフォームはエージェントファースト体験とデバイスの機会を大幅に加速する」と述べた。

デスクコンセプトデバイスの仕様:
- タッチスクリーンディスプレイ
- マイクおよびカメラ
- プレゼンスセンサー
- USB-C ポート（拡張用）
- MediaTek IoT SoC 搭載

### プライベートパイロットとエコシステム

パイロットプログラムでは業界リーダーとともにエージェントファーストデバイスエコシステムを検証する。参加企業:
- **AccuWeather**: 気象情報エージェントの配信
- **Best Buy**: 店舗スタッフ向けエージェント体験
- **CVS Health**: ヘルスケアワークフロー支援
- **Levi's**: リテールオペレーション
- **Target**: 店舗業務の効率化

Microsoft 社内でも数百人の従業員でバッジデバイスとデスクデバイスの両方をパイロット運用中。

シリコンパートナーとの参照デザインをもとに、OEM やプロダクトメーカーがヘルスケア・リテール・ホスピタリティ・金融サービス・法務・産業・フィールドサービスなど各業界向けの特化ソリューションを構築可能。IAdea Corporation CEO の John C Wang は「バッジとデスクコンパニオンはユーザーと共に生き、サイネージとインタラクティブディスプレイは場所と共に生きる。両方のサーフェス、1 つのプラットフォーム、1 つの ID ファブリック、1 つのエージェントモデル」と述べた。

## 応用シナリオ

- **フロントラインワーカー向けウェアラブルバッジ**: 看護師・小売スタッフ・フィールドワーカーがウェアラブルバッジを常時携帯し、音声でエージェントに指示。患者情報の照会、在庫確認、タスク管理をハンズフリーで実行
- **デスクコンパニオンによるアンビエントワーク支援**: Microsoft 365 のカレンダー・メール・ドキュメントをグランサブル（一目でわかる）インターフェースで表示。プレゼンスセンサーで着席を検知し、会議リマインドやタスクサマリーをプロアクティブに提示
- **医療施設でのエージェント体験**: Dragon Copilot との連携でケアフロー内のエージェント対話を実現。臨床現場でのドキュメンテーション・オーダー入力・患者情報アクセスを音声ファーストで提供
- **小売店舗の業務最適化**: 店舗スタッフがバッジ型デバイスで在庫管理エージェント・顧客対応エージェントにアクセス。レジ不在時の問い合わせ対応やフロアでの商品検索を即時実行
- **開発者向けマルチモーダルインターフェース**: GitHub Copilot が音声などの新しいモダリティで Project Solara デバイスに展開。コーディング中のハンズフリー質問やコードレビューの音声フィードバック

## 制約・注意点

- 現時点ではアーリーステージ。参照デザインのみ公開でありプロダクション製品ではない
- 一般向け販売時期・価格は未発表
- サードパーティ向けの追加ビルドオプションは今後発表予定
- Windows との関係: Windows は Microsoft のプラットフォーム戦略の中心に残るが、Solara はすべてのデバイスに Windows が必要ではない未来を示している
- Google Play サービスは非搭載（AOSP ベースだがライセンス版 Android ではない）

## 参考リンク

- [Composing a new platform for agent-first devices](https://commandline.microsoft.com/project-solara-build-2026)
- [Microsoft Build 2026: Be yourself at work](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work)
- [Powering new devices and Agent-First experiences with MDEP](https://techcommunity.microsoft.com/blog/microsoftdeviceecosystemplatformblog/powering-new-devices-and-agent-first-experiences-with-mdep/4524525)
- [Project Solara: The Shift to Agent-First Computing — Qualcomm](https://www.qualcomm.com/news/onq/2026/06/project-solara-agent-first-computing)
- [A new vision for agent-first computing: Project Solara — Build 2026 セッション動画](https://www.youtube.com/watch?v=hbnhMKckxTE)
- [Microsoft Device Ecosystem Platform ドキュメント](https://learn.microsoft.com/mdep/overview)
- [Microsoft Build 2026 キーノート](https://news.microsoft.com/build-2026)

## 関連エントリ

- [Windows Development](../announcements/windows-dev.md)
- [Copilot Studio](../announcements/copilot-studio.md)
- [Microsoft IQ](../announcements/microsoft-iq.md)
- [Build 2026 キーノート](https://build.microsoft.com/sessions/KEY01)
