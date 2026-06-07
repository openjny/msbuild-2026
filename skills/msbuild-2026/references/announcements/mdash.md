# MDASH

Microsoft Security Multi-model Agentic Scanning Harness (MDASH) の Expanded Preview を発表。100 以上の特化 AI エージェントを 5 段階パイプラインでオーケストレーションし、コードベースの脆弱性を自動検出・検証・証明するエージェンティックセキュリティシステム。Build 2026 で Microsoft Defender 統合を追加し、CyberGym ベンチマークで 96.55% のスコアを達成。Windows カーネルの重大 RCE 脆弱性 16 件を発見した実績を持つ。

## 概要

MDASH（Microsoft Security Multi-model Agentic Scanning Harness）は、100 以上の特化 AI エージェントを 5 段階のパイプラインでオーケストレーションし、ソフトウェアの脆弱性を自動的に発見・検証・エクスプロイト可能性の証明までを行うエージェンティックセキュリティスキャンシステムである。Microsoft の Autonomous Code Security チームが構築し、2024 年の DARPA AI Cyber Challenge で優勝した Team Atlanta のメンバーが中心的な役割を担う。

従来の静的解析ツール（CodeQL 等）がパターンマッチングベースで既知の脆弱性パターンを検出するのに対し、MDASH は複数の AI モデル（フロンティアモデル + 蒸留モデル）のアンサンブルがデータフロー・ビジネスロジック・エクスプロイトチェーンを推論し、未知の脆弱性を発見する。Build 2026 のキーノートで Sarah Young がライブデモを行い、大きな注目を集めた。

Build 2026 直前の 2026 年 5 月 12 日に初公開され、Windows ネットワーキング・認証スタックの 16 件の新規脆弱性（うち 4 件が Critical RCE）を発見した実績と共に発表。Build 2026 では Expanded Preview への拡大と Microsoft Defender 統合を追加発表した。

## 主な発表

- **MDASH Expanded Preview**: 対象組織を拡大した Expanded Preview として提供開始。MISA パートナーおよび対象顧客が参加可能に（**Expanded Preview**）
- **Microsoft Defender 統合**: MDASH の検出結果を Microsoft Defender ポータルに直接連携し、セキュリティチームの既存ワークフローに統合（**Preview**）
- **CyberGym ベンチマーク 96.55%**: 3 週間で約 10% 向上し 96.55% を達成。業界リーダーボード首位
- **16 件の Windows 脆弱性発見**: Windows カーネル TCP/IP スタック、IKEv2 サービス等で Critical RCE 4 件を含む 16 件を発見し、May 2026 Patch Tuesday で修正済み

## 詳細

### 5 段階パイプラインアーキテクチャ

MDASH はコードベースを入力とし、検証済みの脆弱性レポートを出力する構造化パイプラインとして動作する。各ステージに専門化されたエージェント群が配置される:

1. **Prepare（準備）**: ソースコードを取り込み、言語対応インデックスを構築。コミット履歴を分析してアタックサーフェスとスレッドモデルを描画
2. **Scan（スキャン）**: 専門化された監査エージェントが候補コードパスを走査し、仮説と証拠付きの脆弱性候補を出力
3. **Validate（検証）**: 第二のエージェントコホート（ディベーター）が各発見の到達可能性とエクスプロイト可能性について賛否を論争。モデル間の不一致は信頼度シグナルとして活用
4. **Dedup（重複排除）**: 意味的に同等の発見を統合（パッチベースのグルーピング等）
5. **Prove（証明）**: トリガー入力を構成・実行し、脆弱性の存在を動的に証明（C/C++ では ASan 等）。前提条件を検証したうえでバグ発火入力を生成

### マルチモデルアンサンブル設計

単一モデルではなく、構成可能なモデルパネルを使用する:

- **フロンティアモデル（重量級推論）**: Scan・Validate ステージで高精度な推論を担当
- **蒸留モデル（高スループット）**: Validate・Dedup ステージで大量の高速パスを実行。コスト効率を最適化
- **独立フロンティアモデル（反論者）**: ディベーターとして独立した視点から反論を提供

この設計により速度・再現率・コストのトレードオフを構成可能にし、特定モデルへの依存を最小化する。新モデルが利用可能になった際は構成変更 1 つで A/B テストが可能で、スコープファイル・ドメインプラグイン・キャリブレーション等の既存投資はすべて引き継がれる。

### ドメインプラグインと専門知識注入

基盤モデルが自力で推論できないドメイン固有の知識を注入する仕組みとしてドメインプラグインを提供:

- カーネル呼び出し規約
- ロック不変条件
- プロセス間通信の信頼境界
- 言語固有のセキュリティパターン

これにより、汎用モデルではカバーしきれないシステムレベルの脆弱性検出を実現する。

### CyberGym ベンチマーク実績

CyberGym は UC Berkeley が運営する公開ベンチマークで、188 の OSS-Fuzz プロジェクトから抽出された 1,507 件の実世界脆弱性再現タスクで構成される。AI システムが未知のコードベースの既知のセキュリティ欠陥をどの程度効果的に特定できるかを測定する:

- **初回スコア（2026 年 5 月）**: 88.45%（リーダーボード首位、次点の Anthropic Claude Mythos Preview の 83.1% を約 5 ポイント上回る）
- **Build 2026 時点（2026 年 6 月）**: 3 週間で約 10% 向上し **96.55%** を達成
- **StorageDrive テスト**: 21 個の意図的脆弱性を含む非公開 Windows ドライバーに対し、偽陽性ゼロで全 21 件を検出
- **MSRC 後方検証**: clfs.sys の 5 年分の確認済み脆弱性に対し 96% 再現率、tcpip.sys で 100% 再現率

### Defender 統合

Build 2026 で追加された Microsoft Defender 統合により、MDASH の検出結果が企業のセキュリティ運用基盤に直接統合される:

- スキャン結果が Microsoft Defender ポータルのセキュリティアラートとして表示
- セキュリティチームが既存のインシデント対応ワークフロー内で脆弱性を管理可能
- プロダクトコンテキスト（ランタイムシグナル）で脆弱性の優先順位付けを強化
- 開発者チームとセキュリティチームの間のギャップを埋める統合ビュー
- 1 日あたり 100 兆以上のシグナルと組み合わせ、理論的リスクではなく実際に悪用可能なリスクを特定

### GitHub Code Security との関係

MDASH と GitHub Code Security（CodeQL, Copilot Autofix）は補完的に機能する:

- **CodeQL**: 確定的な静的解析。既知のパターンマッチングによる高速・低偽陽性の検出
- **Copilot Autofix**: CodeQL や MDASH が検出した脆弱性に対する自動修正提案
- **MDASH**: AI エージェントによる探索的な脆弱性発見。パターン外の未知の脆弱性、複数ファイルにまたがるエクスプロイトチェーンの追跡が可能

### 開発チーム

Microsoft の Autonomous Code Security チームが開発。VP of Agentic Security の Taesoo Kim（Georgia Tech 教授）が率いる。Team Atlanta は 2024 年の DARPA AI Cyber Challenge で $29.5M の賞金を獲得したグループで、その技術・人材が MDASH の基盤となっている。

## 応用シナリオ

- エンタープライズのコードベース全体に対するエクスプロイト可能な脆弱性の自動発見・証明。従来の静的解析では発見できない複雑なエクスプロイトチェーンを追跡
- OS カーネル・ドライバー等のシステムレベルコードのセキュリティ監査。手動のセキュリティリサーチャーと同等の推論能力で脆弱性を発見
- セキュリティチームと開発チームの協調ワークフロー構築。MDASH の検出結果を Defender ポータル経由でセキュリティ運用に統合し、開発チームへのフィードバックを自動化
- Patch Tuesday 前のプロアクティブな脆弱性発見。リリース前にエクスプロイト可能な欠陥を特定し、パッチ提供の優先順位付けに活用
- MISA パートナーによる顧客コードベースのセキュリティ評価。Accenture 等のパートナーが自社の顧客向けセキュリティサービスに MDASH を統合

## 制約・注意点

- 現時点は Expanded Preview（MISA パートナーおよび対象組織限定）。GA 時期は未発表
- 対応言語は「popular programming languages」と記載されているが具体的な対応言語リストは非公開
- Prove ステージはバグクラスによって適用可否が異なる（メモリ安全性系は ASan で証明可能だが、ロジックバグ系は証明が困難な場合がある）
- 単体での CI/CD 統合や IDE プラグインとしての提供は現時点では未発表（Defender 経由のフローが主）

## 公式ソース

- [https://www.microsoft.com/en-us/security/blog/2026/06/02/microsoft-build-2026-securing-code-agents-and-models-across-the-development-lifecycle](https://www.microsoft.com/en-us/security/blog/2026/06/02/microsoft-build-2026-securing-code-agents-and-models-across-the-development-lifecycle)
- [https://www.microsoft.com/en-us/security/blog/2026/05/12/defense-at-ai-speed-microsofts-new-multi-model-agentic-security-system-tops-leading-industry-benchmark](https://www.microsoft.com/en-us/security/blog/2026/05/12/defense-at-ai-speed-microsofts-new-multi-model-agentic-security-system-tops-leading-industry-benchmark)
