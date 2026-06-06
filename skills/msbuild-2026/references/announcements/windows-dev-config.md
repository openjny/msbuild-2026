# Windows Development Configurations

単一の WinGet 設定ファイルで新規 Windows 11 マシンを数分でコードレディ状態にする Windows Development Configurations が GA。WSL・PowerShell 7・Git・GitHub CLI・VS Code・Python をインストールし、ダークテーマ・開発者モード・ファイル拡張子表示などの設定も自動適用。ワークロード別スクリプト（コンテナ・クラウド・インフラ開発）にも対応し、Windows 365 にもプリコンフィグ済みイメージを Public Preview で提供。

## 概要

Windows Development Configurations は、WinGet Configuration を基盤として、新規マシンを宣言的に開発環境へセットアップする仕組みである。Build 2026 で GA。

## 主な発表

- **Windows Dev Config**: 単一コマンドで開発環境を構成（**GA**）
- **ワークロード別スクリプト**: コンテナ・クラウド・インフラ開発向けの追加構成
- **Windows 365 Developer Configuration**: クラウド PC にプリコンフィグ済み開発環境（**Public Preview**）

## 詳細

### インストールされるツール

`dev-config.winget` ファイルで以下をインストール:
- WSL（Ubuntu）
- PowerShell 7
- Git、GitHub CLI
- Visual Studio Code
- Python

### 適用される設定

- ダークテーマ
- 開発者モード有効化
- ファイルエクスプローラーで Git バージョン管理表示
- ファイル拡張子の表示、隠しファイルの表示

### カスタマイズ

WinGet Configuration の YAML 形式のため、サードパーティツールの追加やチーム固有の設定をファイルに記述して再利用可能。

## 公式ソース

- [https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development](https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development)
