# Azure Content Understanding

Foundry Tools のマルチモーダルコンテンツ AI サービスとして Build 2026 で機能拡張を発表。ドキュメント・音声・画像・動画を取り込み、構造化データを抽出してエージェントのグラウンディングに活用する包括的プラットフォーム。新たにマルチモーダル分類器、カスタムフィールド抽出の精度向上、長尺動画処理、Enterprise Knowledge Graph 統合を追加し、Azure Document Intelligence の従来 AI と LLM ベースの推論を統合。

## 概要

Azure Content Understanding（CU）は Microsoft Foundry Tools の包括的コンテンツ AI サービスである。ドキュメント、音声、画像、動画など多様なデータ形式を取り込み、最も重要な情報を抽出してエージェントのグラウンディングに活用する。Azure Document Intelligence の実績ある従来 AI と、先進的な LLM ベースのコンテンツ推論を統合し、構造化・非構造化の両方のコンテンツ抽出とマルチモーダル理解を実現する。

Build 2026 では精度向上、新しい分類機能、動画処理の拡張、エンタープライズナレッジとの統合が発表された。

## 主な発表

- **マルチモーダル分類器**: ドキュメントタイプの自動分類。カスタムカテゴリ定義対応（**Public Preview**）
- **カスタムフィールド抽出の精度向上**: LLM 推論による複雑なドキュメントからのデータ抽出精度改善（**GA improved**）
- **長尺動画処理**: 長時間動画からのキーフレーム抽出・要約・構造化メタデータ生成（**Public Preview**）
- **Enterprise Knowledge Graph 統合**: 抽出データを組織のナレッジグラフに自動接続（**Public Preview**）
- **テーブル・Markdown・図表・JSON 出力**: エージェントが直接消費可能な構造化フォーマットへの変換（**GA**）
- **Foundry Toolbox 統合**: Content Understanding を MCP 互換ツールとして Toolbox から利用可能（**GA soon**）

## 詳細

### 対応コンテンツ形式

- **ドキュメント**: PDF、Office ファイル（Word, Excel, PowerPoint）、画像内テキスト
- **音声**: 音声ファイルからの文字起こし＋構造化データ抽出
- **画像**: 写真、スキャン文書、図表からの情報抽出
- **動画**: キーフレーム分析、シーン検出、音声トラック処理

### Document Intelligence との関係

Content Understanding は Azure Document Intelligence を内包し、以下を統合:
- **従来 AI（高精度）**: レイアウト分析、テーブル抽出、キーバリューペア認識
- **LLM 推論（柔軟）**: 文脈理解、カスタムフィールド定義、自然言語による抽出指示
- **ハイブリッドパイプライン**: 定型フォーマットは従来 AI で高速処理し、非定型部分は LLM で補完

### エージェントのグラウンディング

Foundry Toolbox の Content Understanding ツールを通じて:
- PDF をテーブル・Markdown・JSON に変換しエージェントのコンテキストに投入
- 図表をテキスト記述に変換し、マルチモーダルモデルなしでもビジュアル情報を活用
- 動画からの要約とタイムスタンプ付きメタデータでエージェントが映像コンテンツを参照可能

## 応用シナリオ

- 保険金請求書類の自動分類 → カスタムフィールド抽出 → エージェントによる審査判定
- 製造業の品質検査画像からの欠陥検出データ構造化
- 法務部門の契約書 PDF をエージェント可読フォーマットに変換し、条項比較・リスク検出を自動化
- 教育コンテンツ動画からのチャプタリング・要約・クイズ生成

## 公式ソース

- [https://devblogs.microsoft.com/foundry/whats-new-in-azure-content-understanding-at-build-2026/](https://devblogs.microsoft.com/foundry/whats-new-in-azure-content-understanding-at-build-2026/)
