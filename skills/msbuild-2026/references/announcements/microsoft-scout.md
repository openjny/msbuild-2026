# Microsoft Scout

初の Autopilot カテゴリのエージェントとして Microsoft Scout を発表。Teams・Outlook・OneDrive・SharePoint を横断して常時稼働し、Work IQ をコンテキストエンジンとして利用する。OpenClaw オープンソース基盤で構築され、Entra Agent ID による個別のエージェント ID とポリシー制御を備えたエンタープライズグレードの自律型パーソナルエージェント。Frontier プログラム経由で Experimental Release として提供開始。

## 概要

Microsoft Scout は Microsoft 初の「Autopilot」エージェントである。従来の Copilot がユーザーのプロンプトに応答する「応答型」であるのに対し、Autopilot は常時バックグラウンドで稼働し、自律的にタスクを実行する新カテゴリのエージェントとして位置づけられる。Omar Shahine（Corporate Vice President of Microsoft Scout）が Build 2026 のキーノートで発表した。

Scout は Work IQ をコンテキストエンジンとして、Teams・Outlook・OneDrive・SharePoint のデータを理解し、ユーザーの働き方・優先事項・人間関係を学習する。OpenClaw オープンソース技術を基盤に構築され、Microsoft 365 上のエンタープライズ機能（ID 管理、認証、アクセス制御）を追加することで、オープンソースの能力を組織全体で安全に運用可能にしている。

Microsoft 社内では以前から早期バージョンが利用されており、「常時稼働エージェントが実際の業務でどう機能するか」の学習を経て、Frontier プログラム参加組織向けに Experimental Release として提供が開始された。

## 主な発表

- **Microsoft Scout**: 初の Autopilot エージェント（**Experimental Release / Frontier 組織向け**）
- **Autopilot カテゴリ**: 固有のアイデンティティを持ち常時バックグラウンドで稼働する新カテゴリのエージェント
- **OpenClaw ポリシー準拠機能**: OpenClaw 本体へのポリシー準拠機能のオープンソース還元
- **Scout デスクトップアプリ**: ローカルリソース・ブラウザ・MCP サーバーへのアクセスを可能にするネイティブアプリ
- **Work IQ 統合**: コンテキストエンジンとしてユーザーの作業パターンを学習し継続的に改善

## 詳細

### Autopilot カテゴリの定義

Build 2026 で導入された「Autopilot」は、Microsoft のエージェント分類における新カテゴリである。従来の Copilot（応答型）との違いは以下の通り:

- **Copilot**: ユーザーが指示を出し、AI が応答する。プロンプトベースのインタラクション
- **Autopilot**: バックグラウンドで常時稼働し、アプリやシステム全体の業務の進行を理解して、都度指示を受けることなく自ら行動する

Autopilot は固有のアイデンティティを持って動作し、ユーザーや組織が設定した権限とポリシーの範囲内でタスクを遂行する。ユーザーの意識が他のことに向いているときでも業務が前進し続ける、より持続的な仕組みを提供する。Scout はこのカテゴリの最初の公開プロダクトである。

### アーキテクチャと Work IQ

Scout のコンテキスト理解は Work IQ インテリジェンスレイヤーに依存する。Work IQ は Microsoft Graph の上位に位置し、生データへのアクセスだけでなく、作業パターン・意図推論・ユーザーおよびエージェントのアクティビティメモリを構築するレイヤーである。

Work IQ の 4 ドメイン API（Chat・Context・Tools・Workspaces）を通じて Scout は以下を実現する:

- **Context**: ユーザーの人間関係（Work Chart）、ファイルの関連性、プロジェクトの優先度を理解
- **Tools**: メール送信・会議設定・ドキュメント操作を安定した動詞ベースのインターフェースで実行
- **Workspaces**: 長時間稼働するエージェントとしての中間状態・進捗・メモリを M365 テナント境界内に安全に保持
- **Chat**: 他エージェントとの A2A 連携および REST ベースのアプリケーション連携

Scout の動作は Work IQ により時間の経過とともにパーソナライズされ、ユーザーの働き方、重視する点、次に必要なアクションを学習して改善し続ける。

### OpenClaw 技術基盤

Scout は OpenClaw オープンソース技術を基盤に構築されている。OpenClaw は 2026 年初頭にサンフランシスコで早期採用者の間で人気となったエージェントフレームワークで、永続的メモリ・スキル・自律性を備えた常時稼働型パーソナルエージェントを実現する。

Microsoft と OpenClaw の関係:

- Scout は当初「ClawPilot」と呼ばれていた（Build の約 1 週間前まで）
- OpenClaw の Peter Steinberger が 2026 年 1 月に Microsoft 開発者に DM を送り、協業が始まった
- Microsoft は OpenClaw Windows コンパニオンアプリの開発に貢献（ネイティブ WinUI アプリとして構築）
- ポリシー準拠機能を OpenClaw 本体にオープンソースとして還元
- OpenClaw を導入する組織は、環境がセキュリティ・コンプライアンス要件内で構成されているか検証し、監査対応の回答を得られるようになる

Windows 上では Microsoft Execution Containers（MXC）がエージェントの OS レベルのサンドボックスを提供する。OpenClaw は MXC の「究極のテストアプリ」と位置付けられており、広範な自律性を持つ OpenClaw が MXC 内で安全に動作できれば、あらゆるエージェントに対してコンテインメントが十分であることを意味する。

### エンタープライズガバナンス

Scout は Agent 365 ガバナンス基盤の下で運用される。セキュリティと制御の主要コンポーネント:

- **Entra Agent ID**: 各 Scout は固有の Entra ID を持ち、共有の匿名サービスアカウントではなく、組織のディレクトリが認識する既知のアクターとして動作する。エージェントの作業はすべて特定のアカウントに帰属
- **資格情報管理**: 資格情報はタスクにスコープされ、ログや診断から保護され、他の Microsoft ファーストパーティサービスと同じ基準で管理
- **Microsoft Purview**: 感度ラベルおよびデータ損失防止（DLP）ポリシーがエージェントのアクション時点で強制適用。エージェントの活動は監査可能かつ発見可能なビジネスレコードとして扱われる
- **Microsoft Defender**: AI 駆動アクションに調整された脅威検出（異常なファイルアクセスパターン、予期しない外部コネクタ、宣言された目的外の動作の検知）
- **Intune**: エンドポイント管理とポリシー構成。Scout のデプロイ要件として Intune ポリシーの構成が必須
- **Conditional Access**: エージェントに対する条件付きアクセスポリシーの適用

管理者はポリシールールを設定し、機密アクションには実行前の人間の承認を要求可能。エージェントの作業過程はユーザーに透明化され、常に状況が共有される。

### デスクトップアプリと MCP 統合

Scout はクラウドベースの M365 Copilot チャットとは異なり、ローカルデスクトップアプリケーションとしても動作する:

- **ローカル実行**: オンデバイスおよび M365 データを使用可能。ファイルシステムへのアクセスとローカルタスクの実行に対応
- **ブラウザ統合**: デスクトップアプリを通じて Web ブラウザの操作を拡張
- **MCP サーバー接続**: Model Context Protocol サーバーへの接続により、外部ツールやデータソースとの連携が可能
- **MXC サンドボックス**: Windows 上では Microsoft Execution Containers による OS レベルのコンテインメントでエージェントの動作を制限

Teams 上でのインタラクションを主要な操作面としながら、デスクトップアプリでローカルリソースへのリーチを拡張するハイブリッドアーキテクチャを採用している。

### 主な機能

Scout が提供する具体的な機能:

- **会議調整**: 時差をまたぐ会議のスケジュール設定・調整を能動的に実行
- **会議準備**: 重要な会議を通知し、準備に必要な資料を自動生成
- **成果物管理**: 今後必要な成果物を特定し、カレンダー上に作業時間を自動確保
- **リスク検知**: 意思決定の遅れなど、仕事が滞りそうな兆しを検知し事前に対処を促す
- **Teams チャット参加**: グループチャットに参加し会話を理解
- **Outlook スレッド処理**: メールのトリアージ・返信の下書き・フォローアップ管理
- **継続的学習**: Work IQ を通じて時間経過とともにユーザーの優先事項に沿った形で改善

## 応用シナリオ

- **グローバルチームのスケジュール管理**: 複数のタイムゾーンにまたがるチームの会議調整を Scout に委任。家族の夕食時間など個人的な境界を学習し、衝突する会議提案を検知して代替案を自動提示
- **会議準備の自動化**: 翌日の重要会議に向けて、関連ドキュメント・過去のやり取り・アジェンダを自動で集約し、準備資料を生成。参加者の関係性や前回の議論のコンテキストも含めて整理
- **プロジェクト進捗監視**: 複数チャネルにまたがるプロジェクトの進行状況を監視し、承認待ちや意思決定の停滞を早期に検知。ブロッカーとなっている項目をユーザーに通知し、対応を促す
- **ナレッジワーカーの日常コーディネーション**: メールのトリアージ、返信の優先順位付け、フォローアップタスクの追跡を継続的に実行し、ユーザーの認知負荷を軽減

## 制約・注意点

- Frontier プログラムへの登録、Intune ポリシーの構成、オプトイン同意が必要
- GitHub Copilot ライセンスが必要
- 現時点では Experimental Release（Frontier 組織向け）。GA 時期は未発表
- Windows 11+ および macOS 12+ に対応
- 米国内の Frontier 組織が初期対象
- Agent 365 ライセンスが必要（自律型エージェントの ID フローは Frontier Preview に含まれる）
- Microsoft 365 E5 または構成ライセンス（Entra ID P1/P2）がセキュリティ機能のフル活用に必要
- Microsoft 社内では早期テスト済みだが、外部向けの完成度についてはアナリストから「まだ完全に仕上がっていない」との評価もある

## 公式ソース

- [https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent)
- [https://news.microsoft.com/source/asia/features/introducing-microsoft-scout-your-always-on-personal-agent](https://news.microsoft.com/source/asia/features/introducing-microsoft-scout-your-always-on-personal-agent)
- [https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work)
