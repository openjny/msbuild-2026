# Orchestrate special agents with NVIDIA Nemotron models on Foundry

NVIDIA Nemotron モデルファミリー（Nano/Super/Ultra）と Microsoft Foundry Hosted Agents を組み合わせた階層型エージェント・アーキテクチャを解説。Hermes Agent ハーネスによるマルチモデル・オーケストレーション、Foundry Toolbox による MCP サーバー統合管理、Entra ID を活用したエージェント ID ガバナンス、スキル学習メカニズムによる継続的改善のデモを通じて、コスト効率とタスク品質を両立するエンタープライズ・エージェント構築手法を提示するセッション。

## セッション情報

| 項目 | 値 |
|------|------|
| コード | BRKSP94 |
| タイプ | Breakout |
| レベル | 300 Advanced |
| スピーカー | Joey Conway, Aysen Ilkbahar, Stephen McCullough |
| 日時 | 2026年6月2日 22:45–23:30 UTC |
| 会場 | Festival Pavilion, Breakout 3 |
| 録画 | [オンデマンド](https://medius.microsoft.com/Embed/video-nc/6c7fb279-6292-41b9-8bf5-5d5b12d9eb25) |
| スライド | なし |

## 概要

本セッションでは、NVIDIA Nemotron モデルファミリーを Microsoft Foundry 上で活用し、階層型システム・オブ・モデル・アーキテクチャによるエンタープライズ向けエージェント AI を構築する手法を解説する。フロンティアモデルによる推論、Nemotron Super/Ultra による複雑なサブタスク処理、ローカルモデルによる低レイテンシ実行を組み合わせた plan-and-execute パターンにより、タスクあたりのコストを最小化しつつ品質を最大化するアプローチが提示される。後半では Foundry Hosted Agents 上で Hermes Agent を稼働させ、実際のビジネスタスクを自律的に遂行するデモが披露された。

## キーポイント

1. **Nemotron 3 Ultra の発表**: 550B パラメータ（アクティブ 55B）の最大・最高性能オープンモデル。マルチティーチャー・オンポリシー蒸留、NVFP4 精度フォーマット（Blackwell/Hopper 両対応の単一チェックポイント）、100万トークンのコンテキスト長を特徴とする
2. **システム・オブ・モデル・アーキテクチャ**: Nemotron Nano（30B/3B アクティブ）・Super・Ultra の 3 階層でタスクをルーティングし、コストと品質のパレート最適を追求
3. **Hermes Agent によるスキル学習**: ユーザーフィードバックを再利用可能なスキルとして保存し、組織全体で共有・蓄積する自己改善メカニズム
4. **Foundry Hosted Agents との統合**: 独自コンテナ持ち込み、Entra ID によるエージェント ID 管理、Foundry Toolbox による MCP サーバー一元管理、セキュアセッション分離を活用したエンタープライズ展開
5. **Foundry Toolbox によるツール管理**: Outlook・GitHub・Teams・Cosmos DB 等を単一のコントロールプレーンで管理し、エージェントのアクセス権限を粒度細かく制御
6. **Microsoft 365 統合**: Foundry Hosted Agents を Teams に公開し、日常のコラボレーションツールからエージェントを利用可能に

## 詳細

### NVIDIA Nemotron モデルファミリーの進化

NVIDIA は Nemotron を推論・ビジョン・情報検索・安全性・音声をカバーするオープンモデルファミリーとして位置付けている。エージェント用途では以下の 3 サイズを提供する:

- **Nemotron Nano**: 30B（アクティブ 3B）の小型 MoE モデル。小規模データセンター GPU 向け（2025年12月リリース）
- **Nemotron 3 Super**: 1～2 基の H100 80GB クラス GPU 向け（2026年3月リリース）
- **Nemotron 3 Ultra**: 2 基の B200 クラス GPU 向け。フロンティア精度と 5 倍の推論高速化を両立（本セッションで発表）

Nemotron 3 Ultra のトレーニング手法上のブレイクスルーとして、複数の特化ウルトラモデルから知識を蒸留するマルチティーチャー・オンポリシー蒸留が挙げられる。また NVFP4 精度フォーマットにより、Blackwell（NVFP4）と Hopper（FP8 フォールバック）の両方に単一チェックポイントで対応する。

### エージェント・ベンチマークにおける成果

Nemotron 3 Ultra は以下のエージェント向けベンチマークで評価されている:

- **PinchBench**: エージェントの生産性（正しいツール呼び出し、効率的なタスク完了）
- **EnterpriseOps-Gym**（ServiceNow）: パスワードリセット等の複数システムを跨ぐ長期ホライズン計画タスク
- **コスト効率フロンティア**: CoreWeave・DeepInfra の価格ベースでタスク完了コストと正答率のパレート曲線を算出し、上位左（高精度・低コスト）に位置

### Hermes Agent とスキルメカニズム

デモでは小規模企業の製品ローンチシナリオが示された。4 名の担当者がそれぞれ Hermes Agent + Nemotron 3 Ultra を使い、マーケティング・プロダクト・セールス等のタスクを遂行する。ユーザーがエージェントの出力を修正すると、その修正が「スキル」として保存される。Hermes Curator（Nemotron 3 Super 上で稼働）がスキルのマージ・重複排除・テスト・承認を行い、組織全体のスキルライブラリとして蓄積される。

### Foundry Hosted Agents による実デプロイ

Stephen McCullough によるライブデモでは、以下のエンドツーエンドのフローが示された:

1. **タスク委任**: 「同僚 Alex からの機能リクエストメールを処理して PR を作成」と自然言語で指示
2. **ツール連携**: Foundry Toolbox 経由で Outlook（メール検索）・GitHub（PR 作成）・コーディングサンドボックス（コードテスト）にアクセス
3. **PR 作成と修正**: レビュアー追加・docstring 追加のフィードバックをスキルとして保存
4. **スキルの永続化**: 別セッション・別サービス（Teams）からも同一スキルを参照可能
5. **Entra ID によるガバナンス**: エージェントに Storage Account の Reader ロールを付与するデモ。人間の同僚と同一の IAM フローでアクセス制御
6. **Teams への公開**: Foundry Hosted Agents を Microsoft 365 アプリとして公開し、Teams UI から直接対話

### オブザーバビリティとセキュリティ

Foundry はエージェントが使用したツール・MCP サーバー・実行ステップを可視化するトレース機能を提供する。エンタープライズ監査に不可欠なトレーサビリティが確保され、開発者はワークフローのデバッグと改善に活用できる。セキュアセッション管理により、エージェントが生成するコードやドキュメントはセッション単位で分離される。

## 公式ソース

- [https://build.microsoft.com/sessions/BRKSP94](https://build.microsoft.com/sessions/BRKSP94)
