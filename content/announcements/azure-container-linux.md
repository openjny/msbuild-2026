---
id: azure-container-linux
title: "Azure Container Linux"
summary: "Flatcar Container Linux をベースとしたイミュータブル・コンテナ最適化 OS を GA で発表。イメージベースの自動更新、SELinux Enforcing デフォルト、dm-verity によるルートファイルシステム整合性検証を備え、AKS 上の規制対応・高セキュリティ環境向けコンテナホストとして提供。構成ドリフトを排除し、プラットフォームチームの運用負荷を大幅に削減する。"
tags:
  - azure-container-linux
  - azure-linux
  - azure-kubernetes-service
content_type: announcement
topic: cloud-platform-and-data
official_sources:
  - https://techcommunity.microsoft.com/blog/linuxandopensourceblog/introducing-azure-container-linux-acl/4523411
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Azure Container Linux（ACL）は、AKS 上のクラウドネイティブワークロード向けに設計されたセキュア・イミュータブルなコンテナホスト OS。Flatcar Container Linux エコシステムの上に構築され、Azure Linux のイノベーションを統合した Microsoft 保守のディストリビューションである。

Build 2026 で GA を発表。イメージベースの原子的アップデート、最小パッケージフットプリント、デフォルト Enforcing の SELinux により、構成ドリフトを排除し、攻撃面を最小化する。規制対応やセキュリティ要件の厳しい環境で Kubernetes ワークロードを実行するプラットフォームチーム向け。

## 主な発表

- **Azure Container Linux GA**: AKS 上のイミュータブル・コンテナ最適化ホスト OS として一般提供開始（**GA**）
- **イメージベース自動更新**: 原子的なアップデートモデルにより、パッケージの不整合や部分適用を排除（**GA**）
- **SELinux Enforcing デフォルト**: 全ノードでセキュリティポリシーをデフォルト強制（**GA**）
- **dm-verity ルートファイルシステム検証**: ブート時にファイルシステム整合性を暗号的に検証（**GA**）
- **Azure Linux カーネル共有**: Azure Linux と同一カーネル、同一セキュリティ更新サイクルを採用（**GA**）

## 詳細

### Azure Linux との違い

ACL は Azure Linux ファミリーの一部だが、運用モデルが根本的に異なる:

| 特性 | Azure Linux（汎用） | Azure Container Linux（ACL） |
|---|---|---|
| 更新モデル | パッケージベース（dnf5） | イメージベース、イミュータブル、自動更新 |
| カスタマイズ | フルパッケージ管理 | ロックダウン、最小サーフェス |
| 最適用途 | 汎用 AKS ワークロード | 規制対応・高セキュリティ環境 |
| SELinux | Supported | Enforcing デフォルト |

両者は同一カーネル、同一セキュリティ更新サイクル、同一 Azure 統合を共有し、Microsoft がエンドツーエンドでサポートする。

### イミュータブルアーキテクチャ

ACL のイミュータブルデザインの特徴:

- **読み取り専用ルートファイルシステム**: OS 層への実行時変更を防止
- **dm-verity**: ブート時にファイルシステムブロックの暗号ハッシュを検証し、改ざんを検出
- **原子的イメージ更新**: OS 全体を新イメージに置換。部分パッチの失敗やロールバック不能を排除
- **構成ドリフト排除**: ノード間で常に同一状態を保証

### セキュリティモデル

多層防御をデフォルトで提供:

- SELinux Enforcing モード標準
- Secure Boot / Trusted Launch
- 最小パッケージフットプリント（シェルやパッケージマネージャーを含まない運用が可能）
- Microsoft 所有サプライチェーンによる高速 CVE パッチ
- Azure Linux と共有する LTS カーネルの保守

### Flatcar との関係

ACL は CNCF に寄贈された Flatcar Container Linux プロジェクトを基盤とする。2021 年の Kinvolk 買収により Flatcar の開発専門知識を Azure に統合し、アップストリームへの貢献を継続しながら Azure 固有の最適化を加えている。

## 応用シナリオ

- 金融・医療・政府機関など規制対応が求められる Kubernetes ワークロードのセキュアなコンテナホスト
- 大規模 AKS フリートにおけるノード OS の一貫性確保と構成ドリフトの排除
- ゼロトラストアーキテクチャにおける不変インフラストラクチャレイヤーの実現
- CI/CD パイプラインでのイメージベース更新によるパッチ運用の自動化・簡素化
- マルチテナント環境でのワークロード分離とセキュリティ境界の強化

## 制約・注意点

- AKS 専用。Azure VM 上でのスタンドアロン利用は非対応
- イミュータブル設計のため、ノード上でのパッケージ追加インストール不可
- 汎用ワークロードには Azure Linux（パッケージベース）が適切
- Flatcar からの移行パスは提供されるが、既存ノードのインプレースアップグレードではなくノードプール再作成が必要

## 参考リンク

- [Azure Container Linux 発表ブログ](https://techcommunity.microsoft.com/blog/linuxandopensourceblog/introducing-azure-container-linux-acl/4523411)
- [What's new in AKS at Build 2026](https://techcommunity.microsoft.com/blog/appsonazureblog/whats-new-in-azure-kubernetes-service-at-microsoft-build-2026/4524862)
- [Build セッション: Build, deploy, and run Linux workloads on Azure](https://build.microsoft.com/en-US/sessions/OD827)
- [Azure Linux 製品ページ](https://aka.ms/AzureLinuxProduct)
- [Flatcar Container Linux (CNCF)](https://www.flatcar.org/)

## 関連エントリ

- [Azure Linux](azure-linux.md)
- [Azure Kubernetes Service](azure-kubernetes-service.md)
