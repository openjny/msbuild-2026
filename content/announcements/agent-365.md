---
id: agent-365
title: "Agent 365"
summary: "エージェントガバナンス基盤 Agent 365 を GA で発表。エージェントフリートの統合レジストリ・マップビュー・アクティビティ監視、Shadow AI 検出・ブロック、Conditional Access / Identity Protection for agents、Purview DLP・eDiscovery・Communication Compliance のエージェント拡張、Defender による脅威検出・ブロック・ポスチャ管理を提供し、エージェントを人・デバイス・アプリと同じゼロトラスト管理モデルに統合。"
tags:
  - agent-365
  - microsoft-entra
  - azure-ai-foundry
content_type: announcement
topic: agents-and-apps
official_sources:
  - https://techcommunity.microsoft.com/blog/agent-365-blog/what%E2%80%99s-new-in-agent-365-may-2026/4516340
  - https://techcommunity.microsoft.com/blog/microsoft-security-blog/securing-ai-agents-end%E2%80%91to%E2%80%91end-connecting-purview-dspm-agent-365-and-the-ai-secur/4521155
  - https://techcommunity.microsoft.com/blog/coreinfrastructureandsecurityblog/conditional-access-for-agent-identities-in-microsoft-entra/4489915
---

## 概要

Agent 365 は Microsoft のエージェントガバナンス基盤で、Build 2026 で GA を発表した。組織内のすべての AI エージェント（Microsoft 製・自社製・パートナー製）を統合レジストリに登録し、ID・セキュリティ・コンプライアンスの既存フレームワーク（Entra, Defender, Purview）をエージェントに拡張する。

「観察（Observe）→ 統制（Govern）→ 防御（Secure）」の 3 層構造で、エージェントフリートの可視化からライフサイクル管理、脅威検出・ブロックまでをカバーし、エージェントを人・デバイス・アプリと同じゼロトラスト管理モデルに統合する。Microsoft 365 管理センター内に統合管理面を持ち、IT チームとセキュリティチームが共通の制御プレーンからエージェントリスクを評価・対応可能にする。

Agent 365 の根幹には Microsoft Entra Agent ID がある。エージェントに固有の ID を割り当てることで、すべてのセキュリティ制御（DLP ポリシー、Conditional Access、監査ログ、リスクスコアリング）がエージェント ID を起点に動作する。Foundry・Copilot Studio・Agent 365 エコシステムパートナーで構築されたエージェントに対し、人間やデバイスと同じ ID ガバナンスが適用される。

## 主な発表

- **Agent 365 Overview Dashboard**: エージェントフリートの KPI・リスクシグナル・推奨アクション一覧（**GA**）
- **Unified Registry**: 全エージェントのメタデータ・権限・コンプライアンス状態を一元管理（**GA**）
- **Agent Map View**: プラットフォーム別クラスタリングと依存関係グラフ（**GA**）
- **Agent-level Activity Metrics**: 使用セッション数・エンゲージメントトレンド・アクティブユーザー数の可視化（**GA**）
- **Registry Sync**: AWS Bedrock・Google Cloud・Salesforce Agentforce・Databricks Genie からのエージェント同期（**Preview**）
- **Shadow AI Detection & Blocking**: ローカルエージェント（OpenClaw, Copilot CLI, Claude Code）のエンドポイント検出・Intune ブロック（**Preview**）
- **Agent Lifecycle Actions**: インストール・公開・ブロック・削除・オーナー再割当をレジストリから直接実行（**GA**）
- **Agent Distribution Controls**: ユーザー/グループ単位のエージェント利用制御（**GA**）
- **Admin Approval Flow**: エージェント公開前の審査ワークフロー（**GA**）
- **Agent Management Rules**: 自動化ルール（非活動エージェント期限切れ、オーナーレス再割当等）（**GA**）
- **Policy Templates**: Entra・Purview・Defender・SharePoint のポリシーを再利用可能テンプレート化（**GA**）
- **Tools Management**: MCP サーバー等のツール許可/ブロックをテナント全体で制御（**GA**）
- **Conditional Access for Agents**: 委任アクセスエージェント向け（**GA**）/ 独自アクセスエージェント向け（**Preview**）
- **Identity Protection for Agents**: エージェント ID のリスク評価と自動応答（**GA** / **Preview**）
- **Identity Governance for Agents**: アクセスパッケージとスポンサーライフサイクルワークフロー（**Preview**）
- **SASE for Agents**: プロンプトインジェクション保護・脅威インテリジェンスフィルタリング・ネットワークファイルフィルタリング（**Preview**）
- **Threat Detection & Blocking**: Defender によるランタイム脅威検出とツール実行ブロック（**Preview**）
- **Threat Hunting & Investigation**: Advanced Hunting によるエージェント環境の脅威プロアクティブ検索（**Preview**）
- **Agent Security Posture Management**: 過剰権限・設定不備の検出と優先順位付き修正提案（**Preview**）
- **DSPM AI Observability**: エージェントのデータアクセスリスク姿勢の統合可視化（**Preview**）
- **DLP for Agents**: エージェントによるデータ漏洩防止。グラウンディングデータへのアクセス制御（**Preview**）
- **eDiscovery for Agents**: エージェント対話のリーガルホールド・検索・レビュー（**Preview**）
- **Communication Compliance**: エージェント対話の不適切行動検出（**Preview**）
- **Insider Risk Management**: エージェントの異常データアクセス検出（**Preview**）
- **Data Lifecycle Management**: エージェント対話の保持・削除ポリシー（**Preview**）

## 詳細

### 観察（Observe）— リアルタイム可視化

Agent 365 の Overview Dashboard は Microsoft 365 管理センター内のエージェント管理の起点となる。登録エージェント総数、アクティブユーザー数、成長トレンド、接続プラットフォーム数、総稼働時間、リスクシグナルをリアルタイムで表示する。推奨アクションとして、保留中のエージェントリクエストの審査、オーナー未割当エージェントの是正、例外発生エージェント（会話エラー等）への対処が優先度付きで提示される。

**Unified Registry** はエージェントフリートの「単一の真実の源」として機能する。各エージェントには名前・説明・パブリッシャー・プラットフォーム・所有者・可用性・デプロイステータス・Microsoft Graph 権限・データ/ツールアクセス・セキュリティ/コンプライアンス詳細・認証情報・使用アクティビティが記録される。Microsoft 製・組織独自・エコシステムパートナー製を問わず、すべてのエージェントに完全なメタデータレコードが付与される。

**Agent Map View** はプラットフォーム別にエージェントをクラスタリングし、個別エージェントの他エージェントへの接続（依存関係）を可視化する。静的リストでは発見しにくいパターンや相互作用を、ズームインによって個別エージェントレベルまで展開して確認できる。

**Agent-level Activity** は各エージェントの使用セッション数・エンゲージメントトレンド・アクティブユーザー数を表示し、アクティビティとユーザー・ポリシーシグナルの相関から異常行動や設定不備を迅速に検出可能にする。アクティビティデータはエクスポートに対応し、詳細分析・レポーティングに使用できる。

**Registry Sync** により、AWS Bedrock・Google Cloud に加え Salesforce Agentforce・Databricks Genie（2026年5月20日追加）からエージェントメタデータを Agent 365 レジストリに同期し、マルチクラウド環境のエージェントを統合管理する。同期されたプラットフォームがサポートする場合、レジストリからの直接削除等のガバナンスアクションも可能。

### Agent ID — Entra によるエージェント ID 基盤

Microsoft Entra Agent ID はエージェント専用に設計された新しい ID タイプである。エージェントは人間やアプリケーションとは異なり、自律的に行動し、継続的に動作し、ユーザー入力なしに判断を下すため、専用の ID モデルが必要とされる。

Agent ID は以下の 2 つのアクセスパターンをサポートする:

- **委任アクセス（Delegated Access）**: ユーザーがエージェントアプリにサインインし、エージェントはユーザーの ID と委任された権限で下流リソースにアクセスする。トークンの主体はユーザーであり、Conditional Access ポリシーはユーザーに対して評価される
- **独自アクセス（Own Access / Autonomous）**: エージェントが自身の Agent ID と資格情報を使用してアクセストークンを要求する。ポリシーはエージェント ID に対してスコープされる。ターゲットリソースには Microsoft Graph、MCP サーバー、Open API ツール、カスタムツールが含まれる

Identity Governance for Agents では、アクセスパッケージでエージェント権限の範囲を管理し、スポンサーライフサイクルワークフローで各エージェント ID に責任者を割り当ててアカウンタビリティを維持する。

### Shadow AI 検出とブロック

会社デバイスにローカルインストールされたエージェントは、IT/セキュリティの可視性の外でファイル読み取り・コード実行・ユーザー代理操作を行うエンドポイントリスクである。Agent 365 は Microsoft Defender と Microsoft Intune を活用し、Shadow AI を 3 段階で制御する:

1. **検出（Detect）**: Agent 365 の Shadow AI ページで環境全体のローカルエージェント稼働状況を一元表示。Windows デバイス上のエージェント実行を Defender が識別し、どのデバイスでどのエージェントが動作しているかをレジストリに統合
2. **ブロック（Block）**: Intune ポリシーで未承認エージェントの実行パスをエンドポイントレベルで遮断。Microsoft 365 管理センターの Shadow AI ページから直接ポリシーを適用
3. **スケーラブルな保護（Protect at scale）**: 初期サポートは OpenClaw から開始し、GitHub Copilot CLI・Claude Code・その他広く使用されるエージェントへ順次カバレッジを拡大

### 統制（Govern）— ライフサイクルとポリシー管理

**Agent Lifecycle Actions** により、インストール・公開・ブロック・アンブロック・削除・オーナー再割当をレジストリから一元実行する。Agent Distribution Controls は「誰に公開しないか / 全員に公開するか / 特定ユーザー・グループに限定するか」を制御し、ロール・準備状況・ビジネスニーズに合わせた段階的ロールアウトを実現する。

**Admin Approval Flow** は Copilot Studio・Microsoft Foundry・拡張プラットフォームで構築されたエージェントの公開前に、機能・データアクセス・権限・セキュリティ/コンプライアンスポスチャを審査する集中制御ポイントを提供する。エージェントスプロールの防止、過剰権限の抑制、ガバナンス付きオンボーディングを単一ワークフローで実現する。

**Agent Management Rules** はルールベースの自動化で、条件合致時に自動実行される。初期ルールには Microsoft 製エージェントの自動デプロイおよび Agent Builder で作成されたオーナーレスエージェントの自動再割当が含まれる。非活動エージェントの自動期限切れやリスクフラグ付きエージェントのブロックなど、拡張が予定されている。

**Policy Templates** は Entra・Purview・Defender・SharePoint の既存ポリシーを再利用可能なテンプレートにグループ化し、エージェントの承認またはオンボーディング時に標準化された設定を一括適用する。個々のエージェントごとにポリシーを個別設定する必要がなく、一貫したガバナンスを大規模に維持可能にする。

**Tools Management** はエージェントが使用するツール（MCP サーバー等）の許可・ブロックをテナント全体で制御する管理面を提供する。例えば Teams MCP を通じた会議スケジュール・会話要約・チャネル投稿といったアクションに対し、管理者承認済みのツールポリシーを一貫して適用する。

### 防御（Secure）— ゼロトラスト保護

**Conditional Access for Agents** は Entra Conditional Access をエージェント ID に拡張する。委任アクセスエージェント（ユーザー代理動作）には既存ユーザーポリシーが拡張適用され（**GA**）、独自アクセスエージェント（自律動作）には「全エージェント ID」または「個別エージェント ID」を対象にカスタム属性ベースのポリシーが適用される（**Preview**）。リアルタイムのコンテキストとリスクに基づく動的アクセス制御を、新しいポリシーモデルを導入せずに実現する。

**Identity Protection for Agents** は Agent ID の侵害リスクを動的に評価する。エージェントリスク・ユーザーリスク・サインインリスクのシグナルを Conditional Access ポリシーと連携し、リスク検知時にアクセスをブロックまたは制約する。委任アクセスは **GA**、独自アクセスは **Preview**。

**SASE for Agents** は Global Secure Access クライアント経由で Copilot Studio エージェントおよびローカルエンドポイントデバイスのエージェントトラフィックに対し、プロンプトインジェクション保護・脅威インテリジェンスフィルタリング・Web/URL フィルタリング・ネットワークファイルフィルタリングを適用する。

**Threat Detection & Blocking** は Defender がエージェントのランタイム脅威をリアルタイムで検出・ブロック・調査する。例えばエージェントがメール MCP サーバーの権限を悪用してセキュリティインシデントを引き起こす可能性のある不審な動作を示した場合、Defender がメール呼び出しをブロックしてインシデント影響を軽減し、Defender ポータルでアラートを発行する。

**Threat Hunting & Investigation** は Agent 365 の統合観測ログを Advanced Hunting で横断検索し、エージェント環境の脅威・脆弱性・潜在的露出をプロアクティブに発見する。例えばメーカー資格情報を使用する MCP ツールを持つエージェント（権限昇格リスク）を KQL クエリで特定し、チーム間連携で修正する。

**Agent Security Posture Management** は Foundry および Copilot Studio エージェントのセキュリティポスチャを継続評価し、過剰権限・設定不備等の脆弱性を検出。優先順位付きセキュリティ推奨・リスクコンテキスト・攻撃パス分析をサーフェスし、ライフサイクル全体で安全なエージェント運用を支援する。

### Purview 統合 — データセキュリティとコンプライアンス

Agent 365 は Microsoft Purview の既存コンプライアンス機能をエージェント対話に拡張する。Purview はデータ層で、Agent 365 は ID 層でそれぞれ enforcement を行い、両者は補完関係にある。

**DLP for Agents** はエージェントによるデータ漏洩を防止する。エージェントが機密ファイルを外部受信者にメールする行為をブロックするだけでなく、グラウンディングデータ（エージェントが推論・応答に使用するデータソース）に DLP ポリシーと機密ラベルを直接適用し、機密情報がエージェントの判断や出力に利用されることを防ぐ。

**eDiscovery for Agents** はエージェント対話をリーガルホールドに配置し、agent-to-human / human-to-agent の対話を横断検索し、エージェントが実行時にアクセスしたドキュメントを含めてレビューする。既存のリーガル/コンプライアンスワークフロー内で防御可能なエンドツーエンドのディスカバリー体験を提供する。

**Communication Compliance** はエージェントと人間の対話に対してポリシーを定義・適用し、非倫理的・不適切・非準拠な行動を検出・レビュー・調査する。

**Insider Risk Management** はエージェントをファーストクラスの ID として扱い、異常データアクセスや出力中の機密コンテンツ等のリスキーなエージェント行動を検出する。

**Data Lifecycle Management** はエージェント対話の保持・削除ポリシーをユーザー・エージェント・グループ単位で定義し、カスタム保持期間と保持後アクションを設定する。

**DSPM AI Observability** は Microsoft / 非 Microsoft を問わず環境内のすべてのエージェントに対して統合的にデータリスクポスチャを評価し、機密データ露出を早期に特定する。

### AI Security Dashboard — シグナル統合

Purview DSPM・Agent 365・Defender のシグナルを統合する AI Security Dashboard が、3 つのセキュリティ柱からのリスクを相関分析する:

- **Entra**: Conditional Access の判定結果、認証異常、特権 ID 使用状況
- **Purview**: DLP 違反、機密ラベル不一致、Insider Risk Management シグナル
- **Defender**: 脅威検出、アプリケーションポスチャ評価、不審なアクティビティ指標

これらのシグナルはエージェント ID と時間で相関され、コンテキスト付き重大度と推奨修正アクションを持つリスクカードとして表示される。Dashboard は基盤ツールを置き換えるものではなく、最も影響の大きいリスクへの優先対応を支援する統合ビューとして機能する。

## 応用シナリオ

- 全社エージェントフリートの Shadow AI 可視化と未承認エージェントのプロアクティブなブロック。Defender + Intune で Windows デバイス上のローカルエージェント稼働を検出し、IT ポリシーに基づいて実行パスを遮断
- エージェント公開ワークフローによる「デプロイ前ガバナンス」の実現。Admin Approval Flow + Policy Templates + Distribution Controls で、審査 → ポリシー適用 → 段階的配布を単一管理面から制御
- Purview DLP によるエージェントのデータ漏洩防止。機密ラベル付きドキュメントへのエージェントアクセスをブロックし、グラウンディングデータの安全性を確保
- eDiscovery + Communication Compliance によるエージェント対話の法的保全・行動監視。訴訟ホールド・検索・レビューを既存の Purview ワークフロー内で完結
- Conditional Access + Identity Protection でエージェント ID のゼロトラスト化。独自アクセスエージェントにカスタム属性ベースのポリシーを適用し、リスク検知時に自動ブロック
- Registry Sync + Map View で AWS / GCP / Salesforce / Databricks のマルチクラウドエージェントを統合可視化し、プラットフォーム横断の依存関係を把握
- Defender の Advanced Hunting でメーカー資格情報を使用する MCP ツールを持つリスキーなエージェントを KQL クエリで検出し、権限昇格リスクを事前に排除

## 制約・注意点

- GA 対象はレジストリ・ライフサイクル・配布制御の基本機能。セキュリティ・コンプライアンス機能の大半は Preview
- Registry Sync は Preview（初期サポート: AWS Bedrock, Google Cloud, Salesforce Agentforce, Databricks Genie）
- Shadow AI Detection は OpenClaw から開始。GitHub Copilot CLI・Claude Code は段階的追加予定
- 独自アクセスエージェント向け Conditional Access / Identity Protection は Preview。委任アクセスエージェント向けのみ GA
- レジストリに記録されるメタデータはソースプラットフォームにより差異あり（全フィールドが埋まるとは限らない）
- Agent 365 ライセンスは Microsoft Entra ID P1 または P2 に加えて必要
- SASE for Agents は Global Secure Access クライアントがインストールされたエンドポイントおよび Copilot Studio エージェントが対象

## 参考リンク

- [What's New in Agent 365: May 2026](https://techcommunity.microsoft.com/blog/agent-365-blog/what%E2%80%99s-new-in-agent-365-may-2026/4516340)
- [Agent 365 GA announcement](https://aka.ms/A365GAblog)
- [Securing AI Agents End-to-End: Connecting Purview DSPM, Agent 365, and the AI Security Dashboard](https://techcommunity.microsoft.com/blog/microsoft-security-blog/securing-ai-agents-end%E2%80%91to%E2%80%91end-connecting-purview-dspm-agent-365-and-the-ai-secur/4521155)
- [Conditional Access for Agent Identities in Microsoft Entra](https://techcommunity.microsoft.com/blog/coreinfrastructureandsecurityblog/conditional-access-for-agent-identities-in-microsoft-entra/4489915)
- [Agent 365 | Your Security & Compliance Controls (Microsoft Mechanics)](https://techcommunity.microsoft.com/blog/microsoftmechanicsblog/agent-365--your-security--compliance-controls/4517882)
- [Conditional Access for Agents — Microsoft Learn](https://learn.microsoft.com/entra/identity/conditional-access/agent-id)
- [What is Microsoft Entra Agent ID](https://learn.microsoft.com/entra/agent-id/what-is-agent-id-platform)
- [Agent 365 on Microsoft Learn](https://learn.microsoft.com/microsoft-agent-365/overview)

## 関連エントリ

- [Microsoft Foundry](microsoft-foundry.md)
- [Responsible AI](responsible-ai.md)
- [M365 Copilot](m365-copilot.md)
- [Microsoft Scout](microsoft-scout.md)
