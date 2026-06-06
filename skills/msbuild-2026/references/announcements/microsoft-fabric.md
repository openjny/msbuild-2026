# Microsoft Fabric

Microsoft Fabric の Build 2026 更新として、GPU アクセラレーション Data Warehouse（CoddSpeed エンジン、最大7倍高速化）、エージェンティックアプリ構築、Power BI のエージェンティック分析を発表。Rayfin によるアプリバックエンドの Fabric デプロイも新たに対応。

## 概要

Microsoft Fabric は Build 2026 で GPU アクセラレーションを軸に大幅な性能向上とエージェンティック AI 対応を発表した。CoddSpeed エンジンは SIGMOD 2026 Best Industry Paper を受賞し、Fabric は初のフルマネージド SaaS データウェアハウスとしてこの技術を搭載する。

## 主な発表

- **GPU アクセラレーション Data Warehouse**: CoddSpeed エンジンによる最大7倍の高速化
- **エージェンティックアプリ構築**: Fabric データ基盤上でのエージェント開発
- **Power BI エージェンティック分析**: Power BI のエージェント対応
- **Rayfin 統合**: アプリバックエンドの Fabric 直接デプロイ

## 詳細

### CoddSpeed

SIGMOD 2026 Best Industry Paper。内部ベンチマーク（2026年5月）で、GPU アクセラレーション Fabric Data Warehouse は主要3クラウドウェアハウスと比較して最大7倍の高速化を実現。UNC Health はワークロードで最大5倍のクエリ速度改善を確認。

### OneLake 統合

Rayfin でデプロイされたアプリのデータは OneLake に直接格納され、分析、オペレーショナル/リアルタイムデータ、AI エンジンとデフォルトで統合される。

## 応用シナリオ

- 対話型レポート、エージェントツール呼び出し、アプリバックエンドを同一ウェアハウスで実行
- Power BI のエージェンティック分析でビジネスインサイトを自動生成
- Rayfin + Fabric でアプリ開発からデータ分析までの統合パイプライン構築

## 公式ソース

- [https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases](https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases)
