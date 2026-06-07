# Surface RTX Spark Dev Box

AI 開発者向けに設計されたコンパクトデスクトップデバイス Surface RTX Spark Dev Box を発表。NVIDIA RTX Spark（N1X）搭載で最大 1 PFLOPS の FP4 AI 計算能力と 128 GB 統合メモリを備え、最大 1200 億パラメータの LLM をローカル実行可能。開発者最適化 Windows 11 Pro イメージ、WSL ネイティブ GPU パススルー、GitHub Copilot in Terminal をプリコンフィグ。同プラットフォームの Surface Laptop Ultra、エンタープライズ向け DGX Station for Windows と合わせ、ローカル AI 開発デバイスの新カテゴリを形成する。

## 概要

Surface RTX Spark Dev Box は、Build 2026 で発表された AI 開発者向けのコンパクトデスクトップデバイスである。NVIDIA RTX Spark スーパーチップ（N1X）を搭載し、長時間のモデルトレーニング、1200 億パラメータ超の LLM ローカル推論、エージェンティック AI パイプライン実行に対応する。100W の持続的熱設計ながら、デスクトップに置けるコンパクトフォームファクタを実現した。

NVIDIA CEO Jensen Huang と Microsoft CEO Satya Nadella が Build キーノートで共同発表し、「PC が personal computer から personal AI に進化する」ビジョンの具現化として位置づけた。同じ RTX Spark プラットフォームを搭載する Surface Laptop Ultra（モバイル向け）と、エンタープライズ向けの DGX Station for Windows と合わせ、Windows をローカル AI 開発の標準ワークベンチにする戦略の中核デバイスである。

## 主な発表

- **Surface RTX Spark Dev Box**: NVIDIA RTX Spark（N1X）搭載、1 PFLOPS AI 計算・128 GB 統合メモリのコンパクト開発者デスクトップ（**今年後半発売予定**）
- **Surface Laptop Ultra**: 同じ RTX Spark プラットフォームの 15 インチモバイルデバイス。mini-LED PixelSense Ultra ディスプレイ、2,000 nits HDR（**今年後半発売予定**）
- **DGX Station for Windows**: GB300 Grace Blackwell Ultra Desktop Superchip 搭載の企業向けデスクサイドスーパーコンピュータ。最大 1 兆パラメータモデル対応、748 GB コヒーレントメモリ（**Q4 2026 予定**）
- **開発者最適化 Windows 11 Pro イメージ**: ウィジェット除去・通知静音・Developer Mode 有効化・開発ツール群プリインストールの専用イメージ（**GA**）

## 詳細

### NVIDIA RTX Spark アーキテクチャ

RTX Spark は NVIDIA が MediaTek と共同開発した Arm ベースのスーパーチップで、コードネーム N1X。Computex 2026（2026 年 6 月 1 日）で発表された。

| 項目 | 仕様 |
|------|------|
| CPU | NVIDIA Grace CPU — 20 コア Arm（Cortex-X925 x10 + Cortex-A725 x10） |
| GPU | NVIDIA Blackwell RTX GPU — 48 SM / 6,144 CUDA コア / 第 5 世代 Tensor Cores（FP4） |
| チップ間接続 | NVLink-C2C |
| メモリ | 最大 128 GB LPDDR5X（CPU/GPU で動的共有、単一メモリアドレス空間） |
| AI 計算性能 | 最大 1 PFLOPS（FP4） |
| 製造プロセス | TSMC 3nm |
| GPU 相当性能 | デスクトップ GeForce RTX 5070 相当 |

CUDA、RTX、DLSS 4.5、TensorRT、OptiX、Reflex、G-SYNC を含む NVIDIA フルスタック AI プラットフォームがネイティブ動作する。NVIDIA は「33 年分のエンジニアリング工数を投入して Windows 完全互換を実現した」と表明している。

RTX Spark は世代ロードマップを持つ長期プラットフォームである:

| 世代 | CPU | GPU | メモリ | 時期 |
|------|-----|-----|--------|------|
| 第 1 世代 | Grace | Blackwell | LPDDR5X | 2026 年秋 |
| 第 2 世代 | Vera | Rubin | LPDDR6 | 2028 年 |
| 第 3 世代 | Rosa | Feynman | TBD | 2030 年 |

### Surface RTX Spark Dev Box ハードウェア

| 項目 | 仕様 |
|------|------|
| プロセッサ | NVIDIA RTX Spark（N1X） |
| メモリ | 128 GB 統合 LPDDR5X |
| AI 計算性能 | 最大 1 PFLOPS |
| 熱設計 | 100W 持続 |
| 筐体 | モノリシック陽極酸化アルミニウム（3D プリント、約 1,000 個の通気孔） |
| ポート | USB-C x2、USB-A、HDMI、Ethernet（RJ45）、3.5mm ヘッドフォンジャック |
| セキュリティ | Secured-core PC（BitLocker、Microsoft Defender、Entra ID、Intune） |
| OS | Windows 11 Pro（開発者最適化イメージ） |

アルミニウム筐体自体がヒートシンクとして機能する設計で、長時間のトレーニングジョブ中も一貫した計算性能を維持する。デザインは積層構造で、Xbox Series X のトップパネルに類似したビジュアルが特徴。

### 開発者最適化 Windows 11 Pro

Surface RTX Spark Dev Box には、イメージレベルで開発者向けにプリコンフィグされた Windows 11 Pro が搭載される。サインイン直後にコーディングを開始できる環境を目指す。

**OS 設定チューニング:**

- ダークテーマ
- タスクバーを開発向けに簡素化
- ウィジェット除去
- おやすみモード（Do Not Disturb）有効化
- Developer Mode 有効化

**プリインストール開発ツール:**

- Visual Studio Code
- GitHub Copilot（Windows Terminal にインライン統合）
- WSL + ネイティブ GPU パススルー + フル CUDA サポート
- PowerShell 7（デフォルトシェル）
- Git、GitHub CLI

**AI 開発スタック:**

- AI Toolkit for VS Code（モデル変換・ファインチューニング・評価）
- Windows ML with TensorRT（ローカル推論サーフェス）
- Windows Copilot Runtime
- Microsoft Foundry 連携（ローカルプロトタイプ → プロダクションデプロイ）
- NVIDIA フルスタック AI プラットフォーム

### Surface Laptop Ultra

Surface Laptop Ultra は、同じ NVIDIA RTX Spark（N1X）プラットフォームを搭載するモバイルデバイスとして Computex 2026 で発表された。

| 項目 | 仕様 |
|------|------|
| ディスプレイ | 15 インチ mini-LED PixelSense Ultra タッチスクリーン |
| 解像度 | 2880 x 1920（262 ppi、3:2） |
| 輝度 | 最大 2,000 nits ピーク HDR |
| リフレッシュレート | 120Hz（VRR 対応） |
| 熱設計 | 45-80W（Surface Laptop 7 比 2.5 倍の熱容量） |
| 重量 | 2 kg 未満（4.5 ポンド未満） |
| 厚さ | 18mm 未満 |
| ポート | HDMI、USB-C、USB-A、SD カードリーダー、ヘッドフォンジャック |
| タッチパッド | Surface 史上最大の精密ハプティックタッチパッド（30% 以上大型化） |
| カラー | Platinum / Nightfall |
| バッテリー | 終日バッテリー |

Dev Box が 100W 持続熱設計で据え置き長時間ワークロードに特化するのに対し、Laptop Ultra は 45-80W でモバイル性とパフォーマンスを両立する。

### DGX Station for Windows

NVIDIA DGX Station for Windows は、エンタープライズ開発チーム向けのデスクサイド AI スーパーコンピュータとして GTC Taipei / Build 2026 で発表された。

| 項目 | 仕様 |
|------|------|
| チップ | GB300 Grace Blackwell Ultra Desktop Superchip |
| CPU | 72 コア Grace（Neoverse V2） |
| GPU | Blackwell Ultra x1 |
| GPU メモリ | 279 GB HBM3e（8 TB/s） |
| CPU メモリ | 496 GB LPDDR5X（396 GB/s） |
| 合計コヒーレントメモリ | 748-775 GB |
| チップ間接続 | NVLink-C2C（900 GB/s） |
| AI 計算性能 | 最大 20 PFLOPS（FP4） |
| ネットワーク | ConnectX-8 SuperNIC（800 Gb/s Ethernet） |
| 消費電力 | 1,600W |
| 対応モデル規模 | 最大 1 兆パラメータ |

Windows エンタープライズマネージャビリティスタック完全対応。エアギャップ構成をサポートし、規制産業やソブリン環境に適合する。ローカルで開発したワークロードはアーキテクチャ変更なしで GB300 NVL72（データセンター/クラウド）にスケール可能。

ASUS、Dell、GIGABYTE、HP、MSI、Supermicro から Q4 2026 に提供予定。

### NVIDIA・Microsoft 協業のビジョン

NVIDIA と Microsoft は RTX Spark 発表を「PC の再発明」と位置づけた。Jensen Huang は次のように述べている:

> "The PC is being reinvented. For forty years, you launched apps. Click. Type. With RTX Spark and Microsoft Windows, you ask — and the PC does the work. This is the new PC. The personal AI computer."

Build キーノートでの Satya Nadella との対談では、RTX Spark を「unmetered intelligence at the edge（エッジでの無制限インテリジェンス）」として紹介。クラウド課金なしでフロンティアモデルをローカル実行できる環境が、AI 開発の民主化を加速するとのビジョンを示した。

協業の技術的柱:

- **NVIDIA OpenShell**: GitHub Copilot に統合されるセキュアエージェントランタイム。ローカルエージェントに containment・identity・permissions を付与
- **Windows セキュリティプリミティブ**: エージェントが許可されたツール・データのみにアクセスするガードレール
- **統合メモリスケジューリング**: Windows カーネルレベルでの CPU/GPU 間メモリ動的割り当て最適化

## 応用シナリオ

- 1200 億パラメータの LLM を 100 万トークンコンテキストでローカル実行し、クラウド API コストやレイテンシなしでエージェンティックワークフローをプロトタイプ
- Foundry Local + AI Toolkit for VS Code でモデルファインチューニングからローカル評価まで完結し、検証済みモデルを Microsoft Foundry 経由でプロダクションデプロイ
- WSL + CUDA ネイティブ GPU パススルーで Linux コンテナベースの ML パイプラインをローカル実行し、クラウドと同一の開発体験を実現
- オフライン環境や機密データを扱う規制産業で、エアギャップ対応のローカル AI 推論・エージェント実行
- Surface Laptop Ultra で移動中にプロトタイプ → Dev Box に戻って長時間トレーニングジョブを実行する、同一プラットフォームでのシームレスなワークフロー

## 制約・注意点

- FCC 認証は取得前。リリース前に変更される可能性がある
- 米国のみで販売（microsoft.com/devbox 限定）
- 価格未発表
- RTX Spark は Windows on Arm プラットフォームであり、一部の x86 アプリケーションは Microsoft Prism（エミュレーション層）経由で動作
- DGX Station for Windows の OS サポート詳細（DGX OS との関係）は追加情報待ち

## 公式ソース

- [https://blogs.windows.com/devices/2026/06/02/building-the-next-generation-of-devices-for-developers-surface-rtx-spark-dev-box](https://blogs.windows.com/devices/2026/06/02/building-the-next-generation-of-devices-for-developers-surface-rtx-spark-dev-box)
- [https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development](https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development)
- [https://www.microsoft.com/en-us/surface/devices/surface-rtx-spark-dev-box](https://www.microsoft.com/en-us/surface/devices/surface-rtx-spark-dev-box)
- [https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work)
