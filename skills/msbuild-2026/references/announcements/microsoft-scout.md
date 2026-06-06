# Microsoft Scout

初の Autopilot カテゴリのエージェントとして Microsoft Scout を発表。Teams・Outlook・OneDrive・SharePoint を横断して常時稼働し、Work IQ をコンテキストエンジンとして利用する。OpenClaw オープンソース基盤で構築され、Entra ID による個別のエージェント ID とポリシー制御を備えたエンタープライズグレードの自律型パーソナルエージェント。

## 概要

Microsoft Scout は Microsoft 初の「Autopilot」エージェントである。従来の Copilot がプロンプトに応答する形式であるのに対し、Autopilot は常時バックグラウンドで稼働し、自律的にタスクを実行する新カテゴリのエージェントとして位置づけられる。

Scout は Work IQ をコンテキストエンジンとして、Teams・Outlook・OneDrive・SharePoint のデータを理解し、ユーザーの働き方や優先事項を学習する。OpenClaw オープンソース技術を基盤に構築されている。

## 主な発表

- **Microsoft Scout**: 初の Autopilot エージェント（**Experimental Release / Frontier 組織向け**）
- **Autopilot カテゴリ**: エンタープライズグレードの常時稼働エージェントの新しいカテゴリ
- **OpenClaw ポリシー準拠機能**: OpenClaw 本体へのオープンソース還元

## 詳細

### アーキテクチャ

- Work IQ をコンテキストエンジンとして使用し、ユーザーの人間関係・ファイル・作業パターンを学習
- 各エージェントは固有の Entra ID を持ち、共有サービスアカウントではなく個別のアクターとして動作
- 管理者はポリシールールを設定可能。エージェントの作業過程はユーザーに透明化

### 主な機能

- Teams グループチャットへの参加と会話モニタリング
- Outlook でのスレッド処理・スケジュール設定・会議調整
- GitHub Discussion のモニタリングと担当者の特定
- デスクトップアプリ経由でのブラウザ・ローカルリソース・MCP サーバーへのアクセス

### OpenClaw との関係

Scout は OpenClaw オープンソース技術を基盤に構築。ポリシー準拠機能は OpenClaw 本体にオープンソースとして還元される。

## 制約・注意点

- Frontier プログラムへの登録、Intune ポリシーの構成、オプトイン同意が必要
- GitHub Copilot ライセンスが必要
- 現時点では Experimental Release（Frontier 組織向け）
- Windows 11+ および macOS 12+ に対応

## 公式ソース

- [https://news.microsoft.com/source/asia/features/introducing-microsoft-scout-your-always-on-personal-agent](https://news.microsoft.com/source/asia/features/introducing-microsoft-scout-your-always-on-personal-agent)
- [https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work)
