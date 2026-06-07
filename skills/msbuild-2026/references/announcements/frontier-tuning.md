# Frontier Tuning

組織固有のデータ・プロセス・規約を用いて強化学習を行い、AI エージェントを組織の業務に適応させる Frontier Tuning を Private Preview で発表。コンプライアンス境界内で実行され、Copilot Studio および Microsoft Foundry での提供を予定。Microsoft HR での導入ではタスク成功率が13%から87%に向上。

## 概要

Frontier Tuning は、組織固有のデータ・プロセス・規約を使って AI エージェントを業務に適応させるための新しいアプローチである。従来の RAG やファインチューニングとは異なり、Reinforcement Learning Environment（RLE）と呼ばれるマネージド環境内で強化学習を適用し、エージェントが組織のワークフローから継続的に学習する仕組みを提供する。

Build 2026 の keynote で発表され、Private Preview として Forward Deployed Engineers（FDE）チームを通じて提供が開始された。今後 Microsoft Copilot Studio と Microsoft Foundry でも利用可能になる予定である。Microsoft 内部の HR ワークフローへの適用ではタスク成功率が 13% から 87% に向上し、McKinsey では汎用モデル比約 10 倍のコスト効率で最高の勝率を達成するなど、初期導入組織で顕著な成果が報告されている。

## 主な発表

- **Frontier Tuning**: 組織データによる強化学習ベースの AI エージェントカスタマイズ（**Private Preview**）
- **Copilot Studio 統合**: RLE を使ったエージェントチューニング。トランスクリプト・ナレッジベース・M365 アーティファクトを入力として利用可能（**Coming Soon**）
- **Foundry 統合**: RLE のセットアップ、MAI モデルのチューニング、ランタイム動作の調整（**Coming Soon**）
- **Forward Deployed Engineers（FDE）**: シナリオ定義から評価基準設定、チューニング実行、エージェント納品までをエンドツーエンドで支援（**Private Preview**）

## 詳細

### Reinforcement Learning Environment（RLE）

Frontier Tuning の中核は RLE（Reinforcement Learning Environment）と呼ばれるマネージド環境である。RLE はポストトレーニングと推論の両方に使用される:

- **トレーニング時**: 実際のワークフロー、ツール使用パターン、評価シグナルからモデルが学習する。本番システムには影響を与えない
- **推論時**: Microsoft AI および OpenAI のフロンティアモデルとファインチューニング済みモデルを複数ターンにわたって探索し、より強い候補パスを見つけてから応答を返す
- **継続的改善**: エージェントのインタラクションごとにシステムが改善される。環境内のナレッジが成長するにつれ、モデルとハーネスも進化する

RLE 内で学習されたモデルの重みは顧客環境内に留まり、知的財産と独自データは顧客の管理下に置かれる。

### 3 つの構成要素

Frontier Tuning は以下の 3 つのパーツが連携するループ構造を形成する:

1. **環境（Continuously Evolving Environment）**: マネージド RLE。学習と推論の両フェーズで使用され、本番システムに影響を与えずに実ワークフローから学習する
2. **入力（Your Company's Data, Domain Knowledge, and Workflows）**: 組織のコンテンツ・プロセス・規約・用語・ワークフローを RLE に投入する。ガイド付きインターフェースにより、データサイエンスの専門知識なしでセットアップ可能
3. **出力（Tuned Models, Skills, and Harness）**: チューニング済みモデル、エンベディング、スキル、オーケストレーションロジック、ランタイムハーネスを生成。すべて顧客のコンプライアンス境界内で実行され、元データへのアクセス制御を継承する

### RAG・ファインチューニングとの比較

| 手法 | 特徴 | 制約 |
|------|------|------|
| RAG | 外部知識を検索・参照。モデル自体は変わらない | コンテキストウィンドウの制約、深い組織知識の獲得が困難 |
| 従来のファインチューニング | モデルの重みを更新 | データサイエンスチームが必要、静的（学習後は改善しない） |
| Frontier Tuning | RLE で強化学習を適用。継続的に改善 | コンプライアンス境界内で動的に学習、ツール仮想化により本番影響なし |

Frontier Tuning は RAG のように「検索して参照する」のではなく、組織の業務遂行パターンそのものをモデルに内在化させる。従来のファインチューニングと異なり、運用しながら継続的に改善される点が最大の差別化要因である。

### 提供チャネル

Frontier Tuning は 3 つのチャネルから利用可能になる:

- **Copilot Studio**: メーカーが RLE にアクセスし、トランスクリプト・ナレッジベース・Microsoft 365 アーティファクトを使って既存エージェントを改善する
- **Microsoft Foundry**: 開発者が RLE をセットアップし、データを投入して MAI モデルとランタイム動作をチューニングする
- **FDE チーム**: シナリオ定義、評価基準の設定、チューニングプロセスの実行、エージェントの納品までを顧客環境内でエンドツーエンドで支援する

### セキュリティとコンプライアンス

- チューニング済みモデル・スキル・ハーネスはすべて顧客のコンプライアンス境界内で実行される
- モデルは元データのアクセス制御を継承する（データを閲覧できるユーザーのみがモデル出力にアクセス可能）
- ツールは仮想化され、エージェントの改善が本番システムに影響を与えない
- 組織の知的財産とデータは外部に流出しない

## 応用シナリオ

- **HR サービスデリバリー**: オンボーディング、ポリシー問い合わせ、危機管理（戦争・災害時の従業員サポート）など組織固有のワークフローをエージェントに学習させ、タスク完了率を大幅改善する
- **税務・法務アドバイザリー**: 組織固有のドメイン知識（税務規則、判例、クライアントコンテキスト）を RLE に投入し、専門家レベルのエージェントを大規模展開する（EY の 75,000 名への展開事例）
- **学習・コーチング**: 教育科学に基づくフィードバック品質を Copilot に内在化させ、学習者への個別対応品質を標準化する（Pearson Communication Coach）
- **エンタープライズナレッジの内在化**: コンサルティングファームの独自方法論・フレームワーク・品質基準をモデルに学習させ、汎用モデル比 10 倍のコスト効率で高品質な出力を実現する（McKinsey 事例）
- **Excel 等のプロダクティビティタスク**: 特定ドメインにチューニングした MAI モデルで GPT-5.4 相当のパフォーマンスを 10 倍の効率で達成する

## 制約・注意点

- Private Preview 段階。現時点では FDE チームとのエンドツーエンド協業が必要
- Copilot Studio / Foundry での一般提供時期は未定（Coming Soon）
- Foundry 統合の詳細は今後数ヶ月以内に発表予定
- 初期パートナー（Land O'Lakes、EY、Bristol Myers Squibb、Pearson、McKinsey、McCarthy Tétrault、Josh Bersin Company）との限定的な提供

## 公式ソース

- [https://devblogs.microsoft.com/microsoft365dev/frontier-tuning-teaching-ai-to-work-the-way-you-do](https://devblogs.microsoft.com/microsoft365dev/frontier-tuning-teaching-ai-to-work-the-way-you-do)
- [https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will](https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will)
