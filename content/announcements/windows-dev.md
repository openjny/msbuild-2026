---
id: windows-dev
title: Windows Development
summary: Windows 開発者向けプラットフォーム全体の Build 2026 更新として、Windows Development Configurations（GA）、Coreutils for Windows（GA）、WSL containers、Intelligent Terminal v0.1、Windows AI APIs の拡張（Aion 1.0 SLM）、Microsoft Execution Containers（MXC）SDK による AI エージェントのポリシー駆動コンテインメント、開発者最適化 Windows 11 体験を発表。個別の発表は専用エントリに分離。
tags:
  - windows-dev
content_type: announcement
topic: windows
official_sources:
  - https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development
  - https://blogs.windows.com/windowsdeveloper/2026/06/02/windows-platform-security-for-ai-agents
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Windows は Build 2026 で「開発者とエージェントのための信頼されたプラットフォーム」としての位置づけを強化した。開発環境セットアップの自動化、Linux 互換ツール群、ターミナル刷新、ローカル AI API の拡張、そして AI エージェントの安全な実行を OS レベルで保証する Microsoft Execution Containers（MXC）が発表の柱である。

Windows 11 の品質向上（Explorer、Start、Search の安定性・セキュリティ改善）を基盤としつつ、開発者向けに最適化されたデスクトップ体験（ニュースフィード非表示、ウィジェット無効、通知静音、タスクバー移動可能）を新しい Surface デバイスにプリインストールして出荷する。AI ワークロードをオンデバイス・クラウド・ハイブリッドで安全に実行するプラットフォーム投資を推進し、エージェントをもはや通常のアプリではなく OS が制御すべき新しいソフトウェアクラスとして扱う方針を明確にした。

## 主な発表

- **[Windows Development Configurations](windows-dev-config.md)**: WinGet 設定ファイルで新規マシンを数分で開発環境に（**GA**）
- **[Coreutils for Windows](coreutils-for-windows.md)**: Linux ライクな CLI ユーティリティの Windows ネイティブ提供（**GA**）
- **[WSL containers](wsl-containers.md)**: Linux コンテナを Windows でネイティブ実行する `wslc.exe` CLI と API（**近日 Public Preview**）
- **[Intelligent Terminal](intelligent-terminal.md)**: ACP 対応の AI ネイティブターミナル（**Experimental Preview**）
- **[Windows AI APIs](windows-ai-apis.md)**: Aion 1.0 SLM / Speech Recognition API（**Preview**）
- **Microsoft Execution Containers（MXC）SDK**: ポリシー駆動のエージェント実行コンテインメント層（**Early Preview**）
- **Windows Development Skills**: WinUI3 スキルと WinApp CLI によるエージェント向け Windows アプリ構築知識（**GA**）
- **[Surface RTX Spark Dev Box](surface-rtx-spark-dev-box.md)**: NVIDIA RTX Spark 搭載の開発者向けデバイス
- **開発者最適化 Windows 11 体験**: ニュースフィード・ウィジェット・通知を無効化した集中環境

## 詳細

### Microsoft Execution Containers（MXC）とエージェントセキュリティ

AI エージェントがファイル読み書き・サービス呼び出し・環境変更・操作チェーンを自律的に行う時代において、OS レベルでのコンテインメントが不可欠となった。MXC は Windows と WSL の両方で動作するクロスプラットフォームのポリシー駆動実行層であり、開発者がエージェントのアクセス可能範囲（ファイル、ネットワーク等）を宣言し、Windows がランタイムで境界を強制する。

MXC は「コンポーザブル・サンドボックス・スペクトラム」を提供する。単一の SDK とポリシーモデルから、ワークロードのリスクと意図に応じて適切な分離レベル（プロセス分離、セッション分離等）を動的に構成する。Agent 365 とのネイティブ統合により、Defender・Entra・Intune・Purview の保護が自動適用され、セキュリティチームと IT チームがローカルエージェントを制約・監視できる。

Build 2026 のキーノートでは OpenClaw の創設者 Peter Steinberger（「Claw Father」）がステージに登場し、MXC によるコンテインメントのライブデモを実施。OpenClaw にデスクトップ上の全ファイル削除を指示したところ、IT ポリシーにより読み取り専用に制限されていたため削除が失敗する様子を実演した。Steinberger は「6 か月前なら完全に成功していた。今は失敗する。これで企業内でも OpenClaw を安心して実行できる」とコメントし、会場から最大の拍手を得た。

パートナーエコシステムとして以下が発表された:

- **OpenClaw**: Windows ノードとゲートウェイが MXC 上でネイティブ実行。Companion App で簡単セットアップ
- **NVIDIA OpenShell**: MXC 上に構築された、自律型常時稼働エージェントのデプロイパッケージ
- **Hermes Agent**: OpenShell と MXC を統合した新 Windows アプリケーション
- **OpenAI Codex**: MXC の実行環境と Codex の能力を組み合わせ、安全なコード生成・実行パターンを探索

### 開発者最適化 Windows 11

Surface Laptop Ultra と Surface RTX Spark Dev Box に出荷時プリインストールされる開発者向け構成。Build 2026 キーノートで Kayla Cinnamon が「すぐに落ち着いた環境を感じられる。ニュースフィードなし、ウィジェットのポップアップなし、通知なし」と紹介した。

主な最適化内容:

- ニュースフィードとウィジェットの無効化
- 通知の静音化
- タスクバーの移動対応（縦置きディスプレイ向けに垂直配置も可能）
- Visual Studio Code、GitHub Copilot（Windows Terminal 内インライン）、WSL、PowerShell 7 がプリインストール
- 開発向け Windows 設定のチューニング

この構成は任意の Windows 11 PC で `winget` コマンド一発で適用可能（Windows Developer Config リポジトリ経由）。Settings アプリへの統合も検討中。

### ターミナルと CLI エコシステム

GitHub Copilot が Windows Terminal にインライン統合され、ターミナルから離れずに AI 支援を受けられる。Coreutils for Windows（GA）により `ls`、`cat`、`head`、`tail`、`wc` 等の Linux 標準コマンドが Windows ネイティブで動作し、プラットフォーム間のコンテキストスイッチを解消する。

Intelligent Terminal（Experimental Preview）は ACP（Agent Communication Protocol）対応の AI ネイティブターミナルとして、エラーデバッグ・マルチステップタスク実行をコンテキスト認識型で支援する。

### WSL とコンテナ

WSL containers により、Docker Desktop なしで Linux コンテナの作成・実行・操作が可能になる。`wslc.exe` CLI と API を通じて、開発者が慣れ親しんだインターフェースでコンテナワークロードを管理できる。WSL は AI・開発者エージェントの戦略的レイヤーとして位置づけられ、MXC のコンテインメント対象にも含まれる。

### オンデバイス AI プラットフォーム

Aion 1.0 Instruct（より小型・高速・高精度なオンデバイス SLM）と Aion 1.0 Plan（推論・ツール呼び出し対応のエージェンティックモデル）を導入。Windows AI APIs を CPU・GPU・NPU に拡張し、Speech-to-Text API の NPU/CPU 対応、dGPU でのテキストインテリジェンス、CPU での Video Super Resolution を提供。クラウドへのラウンドトリップなしでリッチな AI 体験を実現する。

## 応用シナリオ

- MXC ポリシーを Intune で配布し、社内の全 Windows PC で AI エージェントのファイルアクセス・ネットワーク範囲を一括制御。エージェントの自律性を維持しつつ情報漏洩リスクを低減
- WinGet 設定ファイルで新入社員の開発環境セットアップを自動化し、数分で生産性の高い状態に。開発者最適化 Windows 構成で即座に集中できるデスクトップを提供
- Coreutils for Windows と WSL containers により、Linux/macOS と同じ CI スクリプトとコンテナワークフローを Windows でもネイティブ実行。プラットフォーム間の差異を解消
- OpenClaw や Hermes Agent を MXC 上で実行し、常時稼働の自律エージェントをエンタープライズガバナンス下で安全に運用

## 参考リンク

- [Build 2026: Furthering Windows as the trusted platform for development（Windows Developer Blog）](https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development)
- [Windows platform security for AI agents（Windows Developer Blog）](https://blogs.windows.com/windowsdeveloper/2026/06/02/windows-platform-security-for-ai-agents)
- [Microsoft Execution Containers（MXC）SDK GitHub リポジトリ](https://github.com/microsoft/mxc)
- [Windows Developer Config GitHub リポジトリ](https://github.com/microsoft/windows-dev-config)
- [Build セッションカタログ](https://build.microsoft.com/sessions)

## 関連エントリ

- [Windows 365](windows-365.md)
- [Windows Development Configurations](windows-dev-config.md)
- [Coreutils for Windows](coreutils-for-windows.md)
- [WSL containers](wsl-containers.md)
- [Intelligent Terminal](intelligent-terminal.md)
- [Windows AI APIs](windows-ai-apis.md)
- [Surface RTX Spark Dev Box](surface-rtx-spark-dev-box.md)
- [Surface RTX Spark Dev Box](surface-rtx-spark-dev-box.md)

## 参考リンク

- [Build 2026: Furthering Windows as the trusted platform for development](https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development)
- [Windows platform security for AI agents](https://news.microsoft.com/presskits/windows)
- [Windows Developer Blog](https://blogs.windows.com/windowsdeveloper/)
