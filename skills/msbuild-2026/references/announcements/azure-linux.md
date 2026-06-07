# Azure Linux

Microsoft ファーストパーティの Linux ディストリビューション Azure Linux 4.0 を Public Preview で発表。Fedora 派生・RPM ベースで、Azure VM / VMSS / コンテナイメージに対応。Kernel 6.18 LTS、dnf5、OpenSSL 3.5（ポスト量子暗号対応）、SELinux 標準有効化、FIPS 140-3 認証予定など、セキュリティとパフォーマンスを大幅に強化。AKS・WSL 対応も GA 後に予定。

## 概要

Azure Linux 4.0 は Microsoft が構築・保守するファーストパーティの Linux ディストリビューション。Fedora 派生・RPM ベースで、Azure インフラストラクチャに最適化されたミニマルかつセキュアな OS である。Azure の内部サービス（AKS、Azure SQL、Azure Cosmos DB 等）で数百万コアの本番ワークロードを支えてきた実績を持つ。

Build 2026 では Azure VM / VMSS / コンテナイメージ向けの Public Preview を発表。Azure のすべてのコンピュートサーフェスに一貫した Linux 基盤を提供し、複数ディストリビューションの運用負荷（パッチスケジュール調整、セキュリティベースライン検証）を削減する。追加 OS ライセンスコストなしで利用可能。

## 主な発表

- **Azure Linux 4.0 Public Preview**: Azure VM、VMSS、コンテナイメージで利用可能（**Public Preview**）
- **Kernel 6.18 LTS**: Azure 向けチューニング済み。新ハードウェアドライバ、Hyper-V 統合改善、GPU/AI アクセラレータサポート（**Public Preview**）
- **dnf5 パッケージマネージャー**: Python 依存を排除した完全書き直し。高速パッケージ解決と低メモリ使用量（**Public Preview**）
- **OpenSSL 3.5**: ポスト量子暗号サポート、QUIC サポート改善（**Public Preview**）
- **SELinux 標準有効化**: 全イメージで Supported、Enforcing モードをデフォルト化（**Public Preview**）
- **FIPS 140-3 認証**: GA 時に利用可能予定（**Coming Soon**）
- **AKS 対応**: GA 後に提供予定（**Coming Soon**）
- **WSL 対応**: Build 直後に提供予定（**Coming Soon**）

## 詳細

### アーキテクチャとコンポーネント

Azure Linux 4.0 のスタック構成:

| コンポーネント | バージョン | 変更点 |
|---|---|---|
| Kernel | 6.18 LTS | Azure チューニング、新 HW ドライバ、Hyper-V 統合、GPU/AI アクセラレータ |
| パッケージマネージャー | dnf5 | Python 依存排除、高速解決、低メモリ |
| glibc | 2.42 | 文字列操作・メモリ確保・スレッド処理の性能改善 |
| OpenSSL | 3.5 | ポスト量子暗号、QUIC、暗号化アップデート |
| systemd | 258 | 高速ブート、サービス管理改善 |
| Python | 3.14 | JIT コンパイラ、新構文 |
| RPM | 6.0 | モダン DB バックエンド、署名検証改善 |

### セキュリティ

セキュリティはアドオンではなく基盤設計:

| 機能 | 詳細 |
|---|---|
| Secure Boot & Trusted Launch | 署名済み shim、GRUB、kernel、systemd-boot |
| SELinux | 全イメージで Supported。デフォルト Enforcing |
| FIPS 140-3 | 認証進行中。ビルトイン暗号モジュール |
| Kernel hardening | ASLR、スタック保護、seccomp、systemd サービスサンドボックス |
| サプライチェーンセキュリティ | 全パッケージ・リポジトリ暗号署名。SBOM 公開 |
| ID | Entra ID SSH サポート |
| CVE 対応 | Microsoft 所有サプライチェーンで Critical/High CVE 高速パッチ |
| ライフサイクル | LTS カーネルをディストリビューション存続期間中保守 |

### デプロイサーフェス

- **Azure VM / VMSS**: Azure Marketplace から直接デプロイ。全 Azure VM SKU で検証済み
- **コンテナイメージ**: MCR（Microsoft Container Registry）から Base / Distroless イメージを提供。Runtime イメージ（Python, Node.js, Java, .NET）は GA 後に提供予定
- **AKS**: Azure Linux は 2023 年からコンテナホストとして動作中。4.0 対応は GA 後
- **WSL**: 開発環境と本番環境で同一 OS を使用し環境差異を解消。Build 直後に提供予定

### エコシステムパートナー

Day-1 バリデーション済みパートナー:

- Dynatrace（APM・オブザーバビリティ）
- Qualys（脆弱性管理・コンプライアンス）
- Isovalent（eBPF ネットワーキング / Cilium）
- Elastic（ログ分析・SIEM/XDR）
- Upwind（ランタイムクラウドセキュリティ）
- SAP（S/4HANA・NetWeaver 認定）
- Databricks（データ・AI プラットフォーム）
- Arm（Arm64 ネイティブサポート）

### 開発者ツール（azldev）

[Azure Linux Dev Tools](https://github.com/microsoft/azure-linux-dev-tools) は Azure Linux ディストリビューションの開発向けユーティリティ集。Go 製の CLI ツール `azldev` を中心に構成される:

- TOML ベースのパッケージメタデータの解析・解決・クエリ
- ソースコンポーネントの準備（mock / koji 等の標準ビルドツール向け）
- Lookaside キャッシュからのソースアーカイブ取得
- 個別パッケージおよびイメージのローカルビルド

`go install github.com/microsoft/azure-linux-dev-tools/cmd/azldev@main` でインストールし、bash / zsh / fish の補完にも対応。Azure Linux へのパッケージ貢献やカスタムイメージ構築のワークフローを効率化する。

### 導入事例

- **Databricks**: 10 万台超の VM・100 万 CPU コア以上を Azure Linux に移行。顧客影響ゼロ。イメージプル 27% 高速化、クエリ実行約 5% 高速化
- **LinkedIn**: Azure Linux 3 へのインフラ全体移行を完了。Configuration as Code の採用とモダンカーネル統合を実現

## 応用シナリオ

- クラウドネイティブワークロード（Web アプリ、データベース、マイクロサービス）を一貫した OS 基盤で統合し、パッチ管理・セキュリティベースラインの運用負荷を削減
- GPU アクセラレーション付き AI/ML トレーニング・推論ワークロードのセキュアな実行基盤
- FIPS 140-3・SELinux Enforcing を活用した規制対応ワークロード（金融、医療、政府機関）
- WSL での開発→ VM / AKS での本番デプロイまで同一ディストリビューションで環境差異を解消する dev-to-cloud ワークフロー
- Distroless コンテナイメージによる最小攻撃面のマイクロサービスデプロイ

## 制約・注意点

- 現時点は Public Preview。GA 時期は未発表
- AKS 上での Azure Linux 4.0 ノードプールは Preview 時点では未対応（GA 後に提供）
- WSL 対応は Build 直後に提供予定
- Runtime コンテナイメージ（Python, Node.js, Java, .NET）は Preview では未提供
- FIPS 140-3 認証は GA 時に利用可能予定（現時点では進行中）
- デスクトップ / GUI アプリケーションは非対応（クラウド・サーバーワークロード専用）

## 公式ソース

- [https://techcommunity.microsoft.com/blog/linuxandopensourceblog/announcing-azure-linux-4-0-purpose-built-for-azure-now-in-public-preview/4524267](https://techcommunity.microsoft.com/blog/linuxandopensourceblog/announcing-azure-linux-4-0-purpose-built-for-azure-now-in-public-preview/4524267)
- [https://opensource.microsoft.com/blog/2026/05/18/from-open-source-to-agentic-systems-microsoft-at-open-source-summit-north-america-2026](https://opensource.microsoft.com/blog/2026/05/18/from-open-source-to-agentic-systems-microsoft-at-open-source-summit-north-america-2026)
