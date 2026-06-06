---
name: msbuild-2026
description: 'Microsoft Build 2026 でのアナウンス、セッション情報や関連リソース情報を提供するスキル。Triggers: Build 2026, アナウンス, セッション, 新機能, GA, Preview'
---

# Microsoft Build 2026 Info Hub

Microsoft Build 2026 (2026/06/02-03, Fort Mason Center) の発表情報を集約したスキル。
アナウンス、セッション要約、リソースリンクを提供する。

各アナウンスの詳細は references/ 配下を参照。

## Agents & apps

- [Microsoft Copilot Studio](references/announcements/copilot-studio.md): Copilot Studio の Build 2026 更新として、コンピューター操作エージェントの強化、ワークフロー体験の刷新、リアルタイム音声エージェント、Azure Databricks Genie 連携（MCP 経由）を発表。新オーケストレーションレイヤーにより評価パフォーマンスが約 20% 向上・トークン消費が 50% 削減。Agent Builder から Copilot Studio への移行パスも整備。
- [Foundry IQ](references/announcements/foundry-iq.md): Foundry IQ を Public Preview で発表。サーバーレス検索、ナレッジベース、Web IQ 統合、エージェンティック検索改善を提供し、エージェントにエンタープライズナレッジとウェブナレッジの統合コンテキストを供給する。カスタム RAG パイプラインの構築を不要にする統合ナレッジプレーンとして機能する。
- [Foundry Local](references/announcements/foundry-local.md): Foundry Local の Build 2026 更新として、プラットフォームサポートの拡大、ハードウェアアクセラレーション制御の改善、新しいオンデバイス API、Azure Local 統合を発表。AI PC、エッジデバイス、切断環境、主権 AI 要件に対応し、ローカルでの AI 推論とエージェント実行を簡素化する。
- [Microsoft 365 Copilot](references/announcements/m365-copilot.md): Microsoft 365 Copilot の Build 2026 更新として、新デザイン（チャット中心のストリームライン UI）、Copilot Health（Preview）、Copilot Notebooks の強化（インフォグラフィック生成、Excel 連携）、Apple CarPlay 対応を発表。Autopilot カテゴリの導入で Copilot エコシステム全体が拡大。
- [Microsoft Discovery](references/announcements/microsoft-discovery.md): 科学研究向けエージェンティック AI プラットフォーム Microsoft Discovery が GA に到達。Azure 上で研究ワークフロー全体をカバーするエンタープライズグレードの AI エージェント基盤を提供する。BHP（銅精錬）、Syensqo（半導体R&D）、GSK（創薬）が採用。科学コミュニティ向けの無料ローカルアプリも Preview で発表。
- [Microsoft Foundry](references/announcements/microsoft-foundry.md): Microsoft Foundry の Agent Framework が GA に到達し、複数の AI フレームワークと統合可能なエージェント基盤を提供。Hosted Agents、Toolboxes、Memory、Foundry IQ などを Public Preview で追加し、エージェントの開発・デプロイ・運用までをカバーするプラットフォームを強化。Foundry Toolkit for VS Code も GA となり、ローカルでのエージェント開発体験が整備された。
- [Microsoft IQ](references/announcements/microsoft-iq.md): Work IQ・Fabric IQ・Foundry IQ・Web IQ を統合するインテリジェンスレイヤー Microsoft IQ を発表。Work IQ APIs は 2026年6月16日に GA 予定で Chat・Context・Tools・Workspaces の4ドメインを提供。Web IQ はモデル非依存・MCP ネイティブのウェブグラウンディング API スイートとして限定提供開始。エージェントが組織データ・ウェブ・分析基盤のコンテキストに統一的にアクセスする基盤を構成する。
- [Microsoft Scout](references/announcements/microsoft-scout.md): 初の Autopilot カテゴリのエージェントとして Microsoft Scout を発表。Teams・Outlook・OneDrive・SharePoint を横断して常時稼働し、Work IQ をコンテキストエンジンとして利用する。OpenClaw オープンソース基盤で構築され、Entra ID による個別のエージェント ID とポリシー制御を備えたエンタープライズグレードの自律型パーソナルエージェント。
- [Microsoft Teams Platform](references/announcements/microsoft-teams-platform.md): Microsoft Teams Platform の Build 2026 更新として、エージェントの Teams 統合強化、新 Teams CLI、パートナーエージェント（Linear、Cursor、Atlassian Rovo）、コラボレーション機能（引用返信、スラッシュコマンド、リアクション）を発表。エージェントが日常業務のチームメイトとして機能する開発者体験を提供する。

## Developer tools & frameworks

- [.NET Aspire](references/announcements/dotnet-aspire.md): .NET Aspire の Build 2026 関連更新として、TypeScript AppHost、Aspire CLI の成熟、エージェンティック開発統合を発表。TypeScript 開発者がC#なしでクラウドネイティブアプリを定義・実行でき、Aspire CLI がエージェントのワークフローと連携する開発体験を提供する。
- [GitHub Code Security](references/announcements/github-code-security.md): Build 2026 で GitHub のセキュリティ・プラットフォーム関連として、Azure Repos 向け Copilot Code Review（Technical Preview）、Code Review のチームカスタマイズ、Agent Apps（エージェント拡張機能）を発表。GitHub Copilot のセキュリティとプラットフォーム拡張性を強化。
- [GitHub Copilot App](references/announcements/github-copilot-app.md): エディタに依存しないエージェントネイティブのデスクトップアプリ GitHub Copilot App を Technical Preview で発表。GitHub Copilot CLI 上に構築され、Issue・PR・セッションを起点に並列ワークストリームでエージェント駆動開発を行う。音声入力、クラウドセッション、エージェンティックブラウジング、Canvas モデルによるユーザー・エージェント・アプリの三者協調を特徴とする。
- [GitHub Copilot CLI](references/announcements/github-copilot-cli.md): GitHub Copilot CLI を Build 2026 で大幅刷新。ラバーダックと音声入力が GA、プロンプトスケジューリングと新ターミナル UI が experimental で提供。クラウド/ローカルサンドボックスを Public Preview で追加し、Microsoft MXC ベースのセキュア分離環境でエージェンティックワークフローを実現する。
- [GitHub Copilot SDK](references/announcements/github-copilot-sdk.md): GitHub Copilot のエージェントランタイムをプログラマブルなレイヤーとして公開する Copilot SDK が Node.js/TypeScript・Python・Go・.NET・Rust・Java の 6 言語で GA。ツール呼び出し、ストリーミング、ファイル操作、マルチターンセッションを備え、独自アプリケーションにエージェント機能を組み込める。Copilot クラウドエージェントや Copilot CLI と同じランタイム基盤を使用する。
- [Visual Studio](references/announcements/visual-studio.md): Visual Studio 2026 の Build 2026 アナウンスとして、デバッグ・プロファイリング・テストの各エージェント統合、GitHub Copilot SDK ベースへの移行、AI 支援マージ競合解決、Azure MCP Server の組込み、.NET モダナイゼーション強化、BYOK（Bring Your Own Key）モデル対応を発表。

## Cloud platform & data

- [Azure API Management](references/announcements/azure-api-management.md): Azure API Management の Build 2026 更新として、エージェンティック API 管理、API スキルの自動品質評価、AI ゲートウェイ機能の強化を発表。エージェントが利用する API・スキルのガバナンスとディスカバリーを統合し、エンタープライズ API エコシステムのエージェンティック時代への対応を推進する。
- [Azure App Service](references/announcements/azure-app-service.md): Azure App Service の Build 2026 更新として、エージェンティックワークロード対応の強化、Easy Auth によるエージェント認証の簡素化、パフォーマンス改善を含む複数の機能更新を発表。AI エージェントのホスティング基盤としての App Service の位置づけを強化する。
- [Azure Cobalt 200 VMs](references/announcements/azure-cobalt-200.md): Azure Cobalt 200 Arm ベース仮想マシンの Early Access Preview を発表。カスタム Arm チップにより前世代比50%のパフォーマンス向上を実現し、エージェンティック AI ワークロードの推論とオーケストレーションに最適化された Linux ベース VM を提供する。エージェンティック時代のコンピュート需要に対応するクラウドインフラの再設計。
- [Azure Container Apps](references/announcements/azure-container-apps.md): Azure Container Apps の Build 2026 更新として、エージェンティックワークロード向けの Container Apps Sandboxes を発表。AI エージェントが生成したコードの実行やウェブブラウジングをメインアプリケーション環境から安全に分離するインフラストラクチャを提供し、Azure Functions や GitHub Copilot のサンドボックス基盤としても連携する。
- [Azure Cosmos DB](references/announcements/azure-cosmos-db.md): Azure Cosmos DB の Build 2026 更新として、MCP Toolkit、セマンティック再ランキング（Public Preview）、グローバルセカンダリインデックス、Backup サポート、エージェンティック検索/メモリツールキットを発表。エージェント向けのデータアクセスと検索基盤を強化。
- [Azure Databricks](references/announcements/azure-databricks.md): Azure Databricks の Build 2026 更新として、ワークスペース全体の MCP エンドポイント（Public Preview）と GitHub Copilot agent mode での Lakebase デバッグ（Public Preview）を発表。Copilot Studio エージェントが1つの MCP 接続で全 Genie Space と Unity Catalog データセットにアクセス可能に。Unity Catalog ガバナンスを維持しながらエージェント開発を効率化。
- [Azure Functions](references/announcements/azure-functions.md): Azure Functions の Build 2026 更新として、サーバーレスエージェントランタイム（Preview）、1400以上のマネージドコネクタ統合、Go 言語サポート、MCP サーバー対応、新 CLI v5 を発表。Microsoft Copilot が Durable Task Scheduler で週数億の実行を処理する事例も公開。
- [Azure HorizonDB](references/announcements/azure-horizondb.md): AI 時代向けに設計されたエンタープライズグレードの PostgreSQL サービス Azure HorizonDB を Public Preview で発表。Azure Database for PostgreSQL Flexible Server にも V6 SKU（NVMe）、pg_duckdb、Defender セキュリティ評価など14の新機能を追加し、PostgreSQL エコシステム全体を強化。
- [Azure Kubernetes Service](references/announcements/azure-kubernetes-service.md): AKS の Build 2026 更新として、Anyscale on Azure（Ray on AKS）の Public Preview を発表。Ray フレームワークを AKS 上でフルマネージドに実行し、AI トレーニング・推論・データ処理のスケーラブルな分散処理基盤を提供する。エージェンティック AI ワークロード向けのクラウドネイティブスケーリングを強化。
- [Azure Logic Apps](references/announcements/azure-logic-apps.md): Azure Logic Apps の Build 2026 更新として、MCP サーバー統合、A2A 標準準拠の会話型エージェント、マルチエージェンティックビジネスプロセス自動化の強化を発表。Logic Apps を MCP サーバーとして公開し、AI エージェントが1400以上のコネクタを活用した既存ワークフローを安全に呼び出せるエージェント基盤としてのシナリオが拡大。
- [Azure Managed Redis](references/announcements/azure-managed-redis.md): Azure Managed Redis の Build 2026 更新として、AI エージェント/Copilot 向けのセマンティックキャッシュ強化、エンタープライズグレードのセキュリティ機能、既存環境からの移行ツールを発表。エージェントのメモリ・コンテキストレイヤーとして Redis を位置づけ、AI アプリケーションのリアルタイム基盤を強化する。
- [Azure SQL](references/announcements/azure-sql.md): Azure SQL の Build 2026 更新として、MSSQL Extension for VS Code v1.41 で SQL Notebooks（GA）、Schema Designer + GitHub Copilot 統合（GA）、Data API builder + GitHub Copilot 統合（GA）を提供。Fabric 統合、Edit Data、Data-tier Application も GA。AI 支援のスキーマ設計、インタラクティブノートブック、即時 API 生成を VS Code 内で完結。
- [Azure SRE Agent](references/announcements/azure-sre-agent.md): Azure SRE Agent に VNet 統合、マネージドコネクタ、ツール単位の権限モデル、GitHub Enterprise ネイティブ対応、プライベートプラグインマーケットプレイスの 5 機能が Preview で追加。プライベートネットワーク内でのエージェント実行、エンタープライズのガバナンス要件への対応、組織内での運用スキル共有を実現し、プロダクション環境での SRE Agent 本格導入を可能にする。
- [Microsoft Fabric](references/announcements/microsoft-fabric.md): Microsoft Fabric の Build 2026 更新として、GPU アクセラレーション Data Warehouse（CoddSpeed エンジン、最大7倍高速化）、エージェンティックアプリ構築、Power BI のエージェンティック分析を発表。Rayfin によるアプリバックエンドの Fabric デプロイも新たに対応。
- [Rayfin](references/announcements/rayfin.md): オープンソースの SDK/CLI として Rayfin を Preview で発表。開発者やコーディングエージェントがコードでアプリケーションバックエンド（データベース、認証、ガバナンス）を定義し、Microsoft Fabric に直接デプロイ可能。データは OneLake に格納され、Fabric の分析・AI エンジンと即座に統合される。Replit がローンチパートナー。

## Responsible AI

- [Responsible AI](references/announcements/responsible-ai.md): Build 2026 で Responsible AI 関連として、ASSERT（ポリシー駆動のオープンソースエージェント評価フレームワーク）と Agent Control Specification（ACS、エージェント安全制御のオープン標準）を発表。任意のフレームワークで構築されたエージェントに対して、評価・ランタイム制御・モニタリングを提供する信頼フレームワーク。

## Working with models

- [Frontier Tuning](references/announcements/frontier-tuning.md): 組織固有のデータ・プロセス・規約を用いて強化学習を行い、AI エージェントを組織の業務に適応させる Frontier Tuning を Private Preview で発表。コンプライアンス境界内で実行され、Copilot Studio および Microsoft Foundry での提供を予定。Microsoft HR での導入ではタスク成功率が13%から87%に向上。
- [MAI Models](references/announcements/mai-models.md): Microsoft AI が自社開発した7つの新モデルファミリーを発表。推論特化の MAI-Reasoning-1、コーディング特化の MAI-Code-1 / MAI-Code-1-Flash、画像生成の MAI-Image-1、音声の MAI-Voice-2、文字起こしの MAI-Transcribe-1.5 を含む。超知能研究所（Superintelligence Lab）の設立も発表し、Humanist Superintelligence を掲げた長期的な AI 能力向上を目指す。
- [Majorana 2](references/announcements/majorana-2.md): 次世代量子コンピューティングチップ Majorana 2 を発表。トポロジカル超伝導体を基盤とし、前世代比で信頼性1000倍、平均 qubit 寿命20秒（最大1分）を達成。手のひらに収まるチップ上で100万 qubit への道筋を示し、エージェンティック AI の支援によ2029年までにスケーラブルな量子マシンの実現を目指す。

## Windows

- [Coreutils for Windows](references/announcements/coreutils-for-windows.md): Linux ライクなコマンドラインユーティリティを Windows 上でネイティブ実行する Coreutils for Windows が GA。Rust 製の uutils オープンソースプロジェクトをベースに、ls・cat・grep 等のコマンドを Windows がビルド・出荷・保守する。Linux・macOS・WSL・コンテナ・クラウド環境間でのコマンドとワークフローの一貫性を実現。
- [Intelligent Terminal](references/announcements/intelligent-terminal.md): AI エージェントをターミナル体験に統合するオープンソース実験的フォーク Intelligent Terminal v0.1 を発表。Windows Terminal ベースで、エージェントステータスバー・エージェントペイン・自動エラー検出を搭載し、ACP（Agent Client Protocol）互換エージェントと連携。GitHub Copilot CLI をデフォルトエージェントとして提供し、コマンド失敗時にコンテキストをエージェントに自動ロードして修正提案を行う。
- [Project Solara](references/announcements/project-solara.md): エージェントファーストのデバイスプラットフォーム Project Solara を発表。Microsoft Device Ecosystem Platform（MDEP、Android ベース）上で動作し、従来のアプリではなく AI エージェントを中心に設計された新しいデバイスカテゴリを定義する。デスクデバイスとウェアラブルバッジの2つの参照デザインを公開。AccuWeather、Best Buy、CVS Health、Target 等とのプライベートパイロットを予定。
- [Surface RTX Spark Dev Box](references/announcements/surface-rtx-spark-dev-box.md): AI 開発者向けに設計されたコンパクトデスクトップデバイス Surface RTX Spark Dev Box を発表。NVIDIA RTX Spark 搭載で最大 1 PFLOPS の AI 計算能力と 128 GB 統合メモリを備え、最大 1200 億パラメータの LLM をローカル実行可能。WSL 2 + ネイティブ GPU パススルー + フル CUDA サポートをプリコンフィグで提供し、VS Code・GitHub Copilot をプリインストール。米国で今年後半に販売予定。
- [Windows 365](references/announcements/windows-365.md): Windows 365 の Build 2026 更新として、エージェントランタイム、32vCPU Cloud PC、GPU Select プラン、Autopilot device preparation、Azure Compute Gallery サポート GA を発表。開発者とエージェントのためのクラウド PC プラットフォームを強化。
- [Windows AI APIs](references/announcements/windows-ai-apis.md): Windows AI APIs のハードウェア対応を Copilot+ PC を超えて拡大。Speech Recognition API を Preview で提供、新 SLM Aion 1.0 Instruct を Preview で公開、14B パラメータの推論・ツール呼び出しモデル Aion 1.0 Plan を近日提供予定。ローカル AI をより幅広い Windows デバイスで利用可能にする。
- [Windows Development Configurations](references/announcements/windows-dev-config.md): 単一の WinGet 設定ファイルで新規 Windows 11 マシンを数分でコードレディ状態にする Windows Development Configurations が GA。WSL・PowerShell 7・Git・GitHub CLI・VS Code・Python をインストールし、ダークテーマ・開発者モード・ファイル拡張子表示などの設定も自動適用。ワークロード別スクリプト（コンテナ・クラウド・インフラ開発）にも対応し、Windows 365 にもプリコンフィグ済みイメージを Public Preview で提供。
- [Windows Development](references/announcements/windows-dev.md): Windows 開発者向けプラットフォーム全体の Build 2026 更新として、Windows Development Configurations（GA）、Coreutils for Windows（GA）、WSL containers、Intelligent Terminal v0.1、Windows AI APIs の拡張（Aion 1.0 SLM）、Windows プラットフォームセキュリティ for AI エージェントを発表。個別の発表は専用エントリに分離。
- [WSL Containers](references/announcements/wsl-containers.md): Linux コンテナを Windows 上でネイティブ実行する WSL containers を発表。wslc.exe CLI と API を提供し、サードパーティツールに依存せずにコンテナのビルド・実行・操作が可能に。ローカル開発、AI/ML ワークフロー、コンテナ化テストに対応。近日 Public Preview 予定。
