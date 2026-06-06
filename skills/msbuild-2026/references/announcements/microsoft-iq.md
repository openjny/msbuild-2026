# Microsoft IQ

Work IQ・Fabric IQ・Foundry IQ・Web IQ を統合するインテリジェンスレイヤー Microsoft IQ を発表。Work IQ APIs は 2026年6月16日に GA 予定で Chat・Context・Tools・Workspaces の4ドメインを提供。Web IQ はモデル非依存・MCP ネイティブのウェブグラウンディング API スイートとして限定提供開始。エージェントが組織データ・ウェブ・分析基盤のコンテキストに統一的にアクセスする基盤を構成する。

## 概要

Microsoft IQ は、エージェントが必要とするコンテキストを統一的に提供するインテリジェンスレイヤーファミリーである。Build 2026 で発表され、Work IQ（Microsoft 365）、Fabric IQ（Microsoft Fabric）、Foundry IQ（ナレッジ検索）、Web IQ（ウェブグラウンディング）の4つのレイヤーで構成される。GitHub Copilot・Microsoft Foundry・Copilot Studio から横断利用可能で、一度構築した組織コンテキストをどこでも再利用できる。

## 主な発表

- **Microsoft IQ**: 統合インテリジェンスレイヤー（**GA**）
- **Work IQ APIs**: エージェント向け M365 アクセス API セット（**GA 予定: 2026年6月16日**）
- **Fabric IQ**: Microsoft Fabric のビジネスコンテキスト基盤（**GA**）
- **Foundry IQ**: サーバーレス検索とナレッジ統合（**Public Preview**）
- **Web IQ**: エージェント向けウェブグラウンディング API スイート（**限定提供開始**）

## 詳細

### Microsoft IQ ファミリー

| レイヤー | 対象データ | ステータス |
|---------|-----------|-----------|
| Work IQ | Microsoft 365（メール、カレンダー、ファイル、Teams） | APIs GA 予定: 2026年6月16日 |
| Fabric IQ | Microsoft Fabric（業務データ、分析基盤） | GA |
| Foundry IQ | ナレッジベース、ファイル検索、Azure SQL、MCP | Public Preview |
| Web IQ | ウェブページ、ニュース、画像、動画 | 限定提供開始 |

### Work IQ APIs の4ドメイン

| ドメイン | 機能 |
|---------|------|
| Chat | エージェントとユーザー間の会話管理 |
| Context | 組織データへのセマンティックアクセス |
| Tools | M365 アプリの操作呼び出し |
| Workspaces | 作業空間とコラボレーション管理 |

### Work IQ の特徴

1. **Intelligence**: セマンティックインデックス、パーソナルメモリ、組織スキル、ファイルの構造化スキーマ、ビジネス固有のナレッジチューニング
2. **Speed**: 超低レイテンシのセマンティックインデックス
3. **パーミッション対応**: 既存の M365 権限モデルに準拠

Fortune 500 企業における Work IQ の平均データフットプリントは600テラバイト以上（2026年5月時点）。

### Web IQ

AI ネイティブかつモデル非依存・MCP ネイティブなウェブグラウンディング API スイート。次点比で約 2.5 倍の速度で関連パッセージを返す。Azure の一部顧客に限定提供開始。

### Foundry IQ

Foundry IQ は Work IQ・Fabric IQ・File Search・Azure SQL・MCP を1つの SLA 付き検索エンドポイントに統合する。詳細は [Foundry IQ エントリ](foundry-iq.md) を参照。

## 応用シナリオ

- 社内エージェントが M365 のメール・カレンダー・ファイルを理解してタスクを自動実行
- Copilot と同じインテリジェンスレイヤー上にカスタムエージェントを構築
- Web IQ でリアルタイムのウェブ情報を組み合わせたリサーチエージェント
- Fabric IQ で業務データのセマンティクスを共有したデータエージェント

## 公式ソース

- [https://devblogs.microsoft.com/microsoft365dev/announcing-the-new-work-iq-apis](https://devblogs.microsoft.com/microsoft365dev/announcing-the-new-work-iq-apis)
- [https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work)
