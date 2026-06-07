# Microsoft IQ

Work IQ・Fabric IQ・Foundry IQ・Web IQ を統合するインテリジェンスレイヤー Microsoft IQ を発表。Work IQ APIs は 2026年6月16日に GA 予定で Chat・Context・Tools・Workspaces の4ドメインを提供。Web IQ はモデル非依存・MCP ネイティブのウェブグラウンディング API スイートとして限定提供開始。エージェントが組織データ・ウェブ・分析基盤のコンテキストに統一的にアクセスする基盤を構成する。

## 概要

Microsoft IQ は、エージェントが必要とするコンテキストを統一的に提供するインテリジェンスレイヤーファミリーである。Build 2026 で GA として発表され、Work IQ（Microsoft 365）、Fabric IQ（Microsoft Fabric）、Foundry IQ（ナレッジ検索）、Web IQ（ウェブグラウンディング）の4つのレイヤーで構成される。GitHub Copilot・Microsoft Foundry・Copilot Studio から横断利用可能で、一度構築した組織コンテキストをどこでも再利用できる。

組織が持つ会話、ドキュメント、アプリ、ワークフロー、オペレーショナルシステムに散在するインテリジェンスを、エージェントがアクセスできる共通基盤として集約する。コンテキストがインフラストラクチャとなるエージェント時代において、アイデンティティ・パーミッション・ガバナンスが一貫して適用される設計が特徴。

## 主な発表

- **Microsoft IQ**: 統合インテリジェンスレイヤー（**GA**）
- **Work IQ APIs**: エージェント向け M365 アクセス API セット。A2A・リモート MCP サーバー・REST API を含む（**GA 予定: 2026年6月16日**）
- **Work IQ CLI**: MCP サーバーモードで AI コーディングアシスタントに M365 コンテキストを供給（**Preview**）
- **Fabric IQ**: Microsoft Fabric のビジネスコンテキスト基盤。オントロジーによるオペレーショナルインテリジェンス（**GA**、オントロジーは **Preview**）
- **Foundry IQ**: サーバーレス検索と統合ナレッジベース。回答品質ベンチマーク最大 20% 向上（**GA**、Serverless は **Public Preview**）
- **Web IQ**: AI ネイティブのウェブグラウンディング API スイート。P95 レイテンシ 164ms（**限定提供開始**）

## 詳細

### Microsoft IQ アーキテクチャ

Microsoft IQ は4つのインテリジェンスレイヤーで構成され、各レイヤーが異なるデータドメインを担当する:

| レイヤー | 対象データ | 役割 | ステータス |
|---------|-----------|------|-----------|
| Work IQ | Microsoft 365（メール、カレンダー、ファイル、Teams、人、コラボレーションパターン） | ワークプレースインテリジェンス | APIs GA: 2026年6月16日 |
| Fabric IQ | Microsoft Fabric（OneLake、セマンティックモデル、オントロジー、リアルタイムシグナル） | ビジネスインテリジェンス＆オペレーショナルインテリジェンス | GA |
| Foundry IQ | ナレッジベース、ファイル検索、Azure SQL、MCP ソース | 統合検索エンドポイント | GA（Serverless は Public Preview） |
| Web IQ | ウェブページ、ニュース、画像、動画 | ライブ外部情報グラウンディング | 限定提供開始 |

エージェントは Foundry IQ を単一の SLA 付きエンドポイントとして利用し、その背後で Work IQ・Fabric IQ・Web IQ のコンテキストを統合的に取得できる。これにより、開発者はデータソースごとに個別の RAG パイプラインを構築する必要がなくなる。

### Work IQ

Work IQ は Microsoft 365 のワークプレースインテリジェンスレイヤーで、Microsoft 365 Copilot を動かしている同じ基盤をサードパーティエージェントに開放する。

#### 4ドメイン構成

| ドメイン | 機能 | プロトコル |
|---------|------|-----------|
| Chat | Copilot 品質の会話応答を API 経由で取得。エージェント間委譲（A2A）にも対応 | A2A, REST |
| Context | メール・ファイル・会議・カレンダー・人を横断するセマンティック検索とグラウンディング | MCP, REST |
| Tools | M365 エンティティへのアクション実行（メール送信、会議スケジュール、ドキュメントアップロード等）。シンプルな動詞＋リソースパスで定義 | REST |
| Workspaces | エージェントの中間状態・ファイル・メモリ・進捗を M365 テナント境界内に安全に保存。長時間実行エージェント向け | REST |

#### 主要特性

- **セマンティックインデックス**: メール・ファイル・会議・カレンダー・人のセマンティック理解を継続的に構築。Fortune 500 企業の平均データフットプリントは 600TB 以上
- **パーミッション対応**: サインインユーザーのコンテキストで動作し、既存の M365 権限モデルを自動適用
- **ライセンス独立**: Microsoft 365 Copilot ライセンスとは独立。消費ベース（Copilot Credits）で利用可能
- **MCP サーバーモード**: Work IQ CLI（Preview）により開発環境の AI コーディングアシスタントから M365 データに直接アクセス

#### 価格モデル

| 種別 | 対象 | 課金 |
|------|------|------|
| Variable | Chat API / Context API | クエリ複雑度に応じた従量課金（$0.20〜$0.40/コール目安） |
| Static | Tools API | 0.1 Copilot Credits/コール |

#### パートナーエコシステム

GA 時点で Cisco、Miro、darwinbox、kor.ai 等がパートナーとして Work IQ API を統合。Miro は M365 コンテキスト（メール・ドキュメント・チャット・会議）をキャンバスに取り込み、AI 機能（Sidekicks・Flows）で活用している。

### Web IQ

Web IQ は Bing の 20 年以上の検索インフラストラクチャを LLM とマルチステップエージェントの時代向けに再設計したグラウンディングサービス。Microsoft Copilot と ChatGPT のグラウンディング体験を既に支えている。

#### 主要特性

1. **業界最高水準のグラウンディング品質**: DeepSearchQA、グラウンディング満足度、鮮度のベンチマークで検証済み
2. **サブ秒のエンドツーエンドグラウンディング**: P95 レイテンシ 164ms。マルチステップエージェントチェーン向けに最適化
3. **コンテンツ供給**: ライセンスソース、構造化データソース、オープンウェブを組み合わせ。SERP スクレイピングではない
4. **モデル非依存・MCP ネイティブ**: JSON-RPC 2.0 経由の MCP プロトコル対応。推論ロックインなし
5. **フルスペクトラムカバレッジ**: コマース含む 6 以上のバーティカルに対応。ウェブ・ニュースだけでなく画像・動画も

#### アクセス方法

REST、MCP（JSON-RPC 2.0）、SDK のいずれかでクエリ送信。自然言語・構造化パラメータ・両方の組み合わせに対応。タイトル、URL、スニペット、タイムスタンプ、プロベナンスを含む構造化 JSON ペイロードを返し、モデルのコンテキストウィンドウにポストプロセスなしで注入可能。

Foundry IQ 内で MCP ツールとして構成することも可能で、他のナレッジソースと統合したグラウンディングを実現する。

### Foundry IQ

Foundry IQ は Microsoft Foundry の専用ナレッジレイヤーとして、Work IQ・Fabric IQ・File Search・Azure SQL・Web IQ・MCP を1つの SLA 付きリトリーバルエンドポイントに統合する。

#### Build 2026 での主な改善

- **回答品質ベンチマーク最大 20% 向上**: バッチクエリの効率化、セマンティックランカーの改善、サーバーサイドトークンキャッシングにより実現
- **シングルショット RAG 比でリコール最大 54% 向上**: ナレッジベースによるイテレーティブ検索の優位性
- **Serverless ティア Public Preview**: インフラ管理不要（Developer ティア: $0.24 CU/時間）
- **MCP サーバーとしてのネイティブ公開**: 任意の MCP 互換ホストから利用可能

詳細は [Foundry IQ エントリ](foundry-iq.md) を参照。

### Fabric IQ

Fabric IQ は Microsoft Fabric のデータを3層構造でエージェントに供給する:

1. **統合データ**: OneLake が分析データ・オペレーショナルデータを単一のアクセス可能なレイヤーに統合
2. **ビジネスインテリジェンス**: セマンティックモデルが信頼性の高いビジネスメトリクスの構造化表現を提供
3. **オペレーショナルインテリジェンス**: オントロジーがビジネスエンティティとリレーションシップを定義し、エージェントがビジネスの言語で推論可能に。Fabric Real-Time Intelligence からのライブシグナルも含む

Fabric IQ は Foundry IQ のナレッジソースとしても接続可能で、データエージェントが NL→SQL 変換を処理し構造化データへの自然言語クエリを実現する。GitHub Copilot CLI からも Agent Skills for Fabric を通じて Fabric IQ のツール・スキルにアクセス可能。

詳細は [Microsoft Fabric エントリ](microsoft-fabric.md) を参照。

## 応用シナリオ

- **常時稼働パーソナルエージェント**: Microsoft Scout のような Autopilot エージェントが Work IQ をコンテキストエンジンとして使用し、メール・会議・ファイルの文脈を理解して自律的にタスクを実行する
- **クロスプラットフォームリサーチエージェント**: Foundry IQ を通じて社内ナレッジ（Work IQ）＋ビジネスデータ（Fabric IQ）＋最新ウェブ情報（Web IQ）を統合的に検索し、包括的なリサーチレポートを生成する
- **サードパーティ SaaS 連携**: Miro・Cisco 等のサードパーティアプリが Work IQ API で M365 コンテキストを取得し、自社の AI 機能をユーザーの作業コンテキストに基づいて強化する
- **オペレーショナルインテリジェンス**: Fabric IQ のオントロジーでビジネスエンティティの関係を定義し、データエージェントが自然言語でオペレーショナルデータを照会・分析する
- **開発者のコンテキスト強化**: Work IQ CLI を MCP サーバーモードで起動し、VS Code や GitHub Copilot の AI アシスタントに会議の決定事項や設計ドキュメントのコンテキストを自動供給する

## 制約・注意点

- Work IQ APIs は M365 テナント境界内で動作し、テナント管理者の同意が必要
- Web IQ は現時点で限定アクセス。Microsoft アカウントチーム経由でのリクエストが優先
- Foundry IQ Serverless は Public Preview であり、課金は 2026 年後半に開始予定
- Work IQ の価格は Copilot Credits 建ての従量課金。M365 Copilot ライセンスとは独立した契約
- Fabric IQ オントロジーは Preview。セマンティックモデルからのオントロジー自動生成は一部制約あり

## 公式ソース

- [https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/announcing-the-new-work-iq-apis](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/announcing-the-new-work-iq-apis)
- [https://devblogs.microsoft.com/microsoft365dev/work-iq-production-ready-intelligence-for-every-agent](https://devblogs.microsoft.com/microsoft365dev/work-iq-production-ready-intelligence-for-every-agent)
- [https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq)
- [https://blogs.bing.com/search/June-2026/Announcing-Microsoft-Web-IQ](https://blogs.bing.com/search/June-2026/Announcing-Microsoft-Web-IQ)
- [https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work)
- [https://news.microsoft.com/build-2026-live-blog/microsoft-build-2026-live](https://news.microsoft.com/build-2026-live-blog/microsoft-build-2026-live)
