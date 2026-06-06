---
id: intelligent-terminal
title: Intelligent Terminal
summary: AI エージェントをターミナル体験に統合するオープンソース実験的フォーク Intelligent Terminal v0.1 を発表。Windows Terminal ベースで、エージェントステータスバー・エージェントペイン・自動エラー検出を搭載し、ACP（Agent Client Protocol）互換エージェントと連携。GitHub Copilot CLI をデフォルトエージェントとして提供し、コマンド失敗時にコンテキストをエージェントに自動ロードして修正提案を行う。
tags:
  - intelligent-terminal
  - windows-dev
content_type: announcement
topic: windows
official_sources:
  - https://devblogs.microsoft.com/commandline/announcing-intelligent-terminal-version-0-1
  - https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Intelligent Terminal は Windows Terminal のオープンソース実験的フォークであり、AI エージェントをターミナル体験のファーストクラスの要素として統合する。v0.1 が Build 2026 で Experimental Preview として発表。

## 主な発表

- **Intelligent Terminal v0.1**: AI ネイティブターミナル（**Experimental Preview**）

## 詳細

### 主要機能

- **エージェントステータスバー**: エージェントの状態を常時表示
- **エージェントペイン**: ターミナルを分割し、コマンドラインペインと AI エージェントタスクペインを並列表示
- **自動エラー検出**: コマンド失敗時にシェル出力・エラーコンテキストをエージェントペインに自動ロード
- **ACP（Agent Client Protocol）対応**: コマンド履歴・作業ディレクトリ・終了コード・git 状態をエージェントに提供

### エージェント連携

- GitHub Copilot CLI がデフォルトのエージェント体験
- ACP 互換の他のエージェントも設定で切り替え可能
- エージェントはシェル出力にアクセスでき、エラーをブラウザや別セッションにコピーする必要がない

## 参考リンク

- [Announcing Intelligent Terminal 0.1](https://devblogs.microsoft.com/commandline/announcing-intelligent-terminal-version-0-1)
- [Build 2026: Furthering Windows as the trusted platform for development](https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development)
- [Intelligent Terminal](https://developer.microsoft.com/en-us/windows/dev-tools)
