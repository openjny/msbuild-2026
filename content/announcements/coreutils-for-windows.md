---
id: coreutils-for-windows
title: Coreutils for Windows
summary: Linux ライクなコマンドラインユーティリティを Windows 上でネイティブ実行する Coreutils for Windows が GA。Rust 製の uutils オープンソースプロジェクトをベースに、ls・cat・grep 等のコマンドを Windows がビルド・出荷・保守する。Linux・macOS・WSL・コンテナ・クラウド環境間でのコマンドとワークフローの一貫性を実現。
tags:
  - windows-dev
content_type: announcement
topic: windows
official_sources:
  - https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Coreutils for Windows は、GNU Coreutils の Rust 製クロスプラットフォーム再実装である uutils プロジェクトをベースに、Linux ライクなコマンドラインユーティリティを Windows 上でネイティブに提供する。Build 2026 で GA。

## 主な発表

- **Coreutils for Windows**: Linux ライクな CLI ユーティリティの Windows ネイティブ提供（**GA**）

## 詳細

### 背景

開発者はプラットフォーム間を常に移動するが、馴染みのコマンドが一貫して動作しないため、回避策やコンテキストスイッチが発生していた。Coreutils for Windows は、WSL を使わずとも Windows 上で Linux のコマンド体験を提供する。

### 特徴

- Rust 製の uutils オープンソースプロジェクトがベース
- Windows がビルド・出荷・保守を担当
- Linux・macOS・WSL・コンテナ・CI 環境で構築したワークフローがそのまま動作
- メモリ安全なクロスプラットフォーム実装

## 参考リンク

- [Build 2026: Furthering Windows as the trusted platform for development](https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development)
- [Coreutils for Windows](https://developer.microsoft.com/en-us/windows/dev-tools)
