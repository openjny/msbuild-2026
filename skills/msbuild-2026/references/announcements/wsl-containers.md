# WSL Containers

Linux コンテナを Windows 上でネイティブ実行する WSL containers を発表。wslc.exe CLI と API を提供し、サードパーティツールに依存せずにコンテナのビルド・実行・操作が可能に。ローカル開発、AI/ML ワークフロー、コンテナ化テストに対応。近日 Public Preview 予定。

## 概要

WSL containers は、Windows 上で Linux コンテナをネイティブに作成・実行・操作するための組み込み機能である。サードパーティのコンテナツールに依存せず、`wslc.exe` CLI と API を通じてコンテナワークフローを提供する。Build 2026 で発表、近日 Public Preview 予定。

## 主な発表

- **WSL containers**: Linux コンテナの Windows ネイティブ実行（**近日 Public Preview**）
- **wslc.exe CLI**: コンテナの作成・実行・操作用 CLI
- **WSL containers API**: プログラマティックなコンテナ操作

## 詳細

### 背景

従来の Windows 上のコンテナワークフローはサードパーティツールに依存しており、セットアップのオーバーヘッド、ライセンスコスト、エンタープライズ制御の制限があった。IT チームにも、何が実行されホストとどう相互作用するかの一貫した可視性が欠けていた。

### 対応ワークロード

- ローカル開発環境
- AI/ML ワークフロー
- コンテナ化テスト

## 公式ソース

- [https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development](https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development)
