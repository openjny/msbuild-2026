# GitHub Copilot Agent Mode

GitHub Copilot が自律的にタスクを計画・実行する Agent Mode の精度向上とターミナル統合強化に加え、 エディタ非依存のデスクトップアプリ GitHub Copilot App を Preview で発表。 また Copilot SDK により、Agent Mode と同じランタイムを使ったカスタムエージェントの構築が可能に。 マルチファイル編集の精度向上と MCP サーバー連携により、開発ワークフローの自動化範囲が拡大。

## 概要

GitHub Copilot の Agent Mode は、従来のコード補完やチャットベースの支援を超え、Copilot が自律的にタスクを計画・実行する新しいモードである。ユーザーが自然言語でゴールを記述すると、Copilot がファイルの読み書き、ターミナルコマンドの実行、エラーの自己修正を繰り返しながら目的を達成する。

Build 2026 では、Agent Mode のさらなる進化として GitHub Copilot App が発表された。エディタに依存しないスタンドアロンのデスクトップアプリケーションとして、エージェントネイティブな開発体験を提供する。

## 主な変更点

- **GitHub Copilot App**: エディタ非依存のエージェントネイティブ・デスクトップアプリ（**Preview**）
- **Agent Mode 改善**: マルチファイル編集の精度向上、ターミナル統合の強化
- **Copilot SDK**: Agent Mode と同じランタイムを使って独自のエージェント体験を構築可能（**Preview**）

## 技術的詳細

Agent Mode はタスクの実行計画を内部的に構築し、各ステップで以下のツールを利用する:

- ファイルシステムの読み書き
- ターミナルコマンドの実行と出力解析
- ビルドエラー・テスト失敗の自動検出と修正ループ
- MCP サーバー経由の外部ツール連携

Copilot SDK により、同じオーケストレーション基盤を使ったカスタムエージェントの構築が可能になった。

## 応用シナリオ

- 大規模リファクタリング: 自然言語でゴールを記述し、複数ファイルにまたがる変更を自律的に実行
- CI/CD 統合: ビルド失敗を検出し、修正コードを自動生成してコミット
- Copilot SDK でカスタムエージェントを構築し、社内ツールや独自の MCP サーバーと連携

## 制約・注意点

- **GitHub Copilot App** は **Preview**。対応 OS やサポート範囲は公式ブログを参照
- **Copilot SDK** は **Preview**。API は今後変更の可能性あり
- Agent Mode の自律的なファイル操作・ターミナル実行にはユーザーの承認が必要

## 公式ソース

- [https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience)
- [https://code.visualstudio.com/docs/copilot/chat/agent-mode](https://code.visualstudio.com/docs/copilot/chat/agent-mode)
