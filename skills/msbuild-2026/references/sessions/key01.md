# Build 2026 Opening Keynote

Satya Nadella が登壇した Build 2026 オープニングキーノート。Microsoft IQ・7つの MAI モデル・Microsoft Agent Platform・Majorana 2 量子チップ・Surface RTX Spark Dev Box・Project Solara を含む主要発表を行い、「エージェントが組織固有の知識を持つ」「フルスタックを自分流に構築する」「科学と量子の未来」の3テーマを展開した。

## セッション情報

| 項目 | 値 |
|------|------|
| コード | KEY01 |
| タイプ | Keynote |
| レベル | 200 Intermediate |
| スピーカー | Satya Nadella (Chairman and CEO) |
| ゲストスピーカー | Mustafa Suleyman (EVP and CEO, Microsoft AI)、Jensen Huang (CEO, NVIDIA)、Cristiano Amon (CEO, Qualcomm) |
| 日時 | 2026年6月2日 9:30 AM – 12:00 PM PDT |
| 会場 | Fort Mason Center, San Francisco + Online |
| 録画 | あり |

## 概要

Build 2026 オープニングキーノートは Satya Nadella がホストし、約2時間半にわたって Microsoft の開発者向けプラットフォーム戦略を発表した。核心メッセージは「How do you all participate fully in this frontier intelligence ecosystem?」であり、開発者が frontier intelligence エコシステムにフル参加するための技術スタックを、コンピュートファブリック（Edge＋Cloud）→ モデル・コンテキスト・ツール → ランタイム → セキュリティ・ガバナンスの層構造として解説した。

キーノートは AI スタックのボトムアップで構成された:

1. **Edge: Windows とデバイス** — Windows AI APIs の拡張、Aion ローカルモデル、Surface RTX Spark Dev Box、Project Solara
2. **開発者スタック** — Windows 開発者構成、OpenClaw + MXC、GitHub Copilot App、Rayfin、Agent 365 + MDASH セキュリティ
3. **Copilot エコシステムと Autopilots** — Copilot の進化（Chat → Cowork → Code の統合）、Microsoft Scout
4. **Frontier Intelligence** — Microsoft IQ、Frontier Tuning、MAI モデルファミリー（Mustafa Suleyman 登壇）
5. **科学と量子の未来** — Microsoft Discovery（GA）、Majorana 2 量子チップ

## キーポイント

1. **Microsoft IQ** が GA — Work IQ・Fabric IQ・Foundry IQ・Web IQ を統合するコンテキストレイヤーとして GitHub Copilot、Microsoft Foundry、Copilot Studio に提供
2. **7つの MAI モデル** を発表 — MAI-Thinking-1（推論特化、35B active params、256K context、**Private Preview**）、MAI-Image-2.5、MAI-Code-1、MAI-Voice-2、MAI-Transcribe-1.5 など
3. **Microsoft Scout** — Work IQ と OpenClaw 基盤の常時稼働パーソナルエージェント（Frontier 顧客向け）
4. **Frontier Tuning** — 組織のコンプライアンス境界内で強化学習を行いエージェントを適応させる（**Private Preview**）
5. **Surface RTX Spark Dev Box** — NVIDIA RTX Spark 搭載、最大 1 PFLOPS AI 計算、128 GB 統合メモリ（米国で今年後半販売予定）
6. **Microsoft Execution Containers (MXC)** — OS レベルでエージェントをサンドボックス化（**Preview**）
7. **GitHub Copilot App** — エージェントネイティブのデスクトップ開発環境（**Preview**）
8. **Rayfin** — Microsoft Fabric 上のマネージド Backend-as-a-Service（**Preview**）
9. **Microsoft Discovery** — 科学研究向けエージェンティック AI プラットフォーム（**GA**）
10. **Majorana 2** — 次世代量子チップ、前世代比 1000 倍の信頼性、平均 qubit 寿命 20 秒、2029 年までにスケーラブル量子マシン実現を目標
11. **Project Solara** — エージェントファーストデバイスの新カテゴリ（2つの参照デザイン公開）
12. **Agent 365 + ASSERT + Agent Control Specification** — エージェントのセキュリティ・ガバナンスのオープン信頼スタック

## 詳細

### オープニング（Satya Nadella）

「How do you all participate fully in this frontier intelligence ecosystem?」を軸に AI スタックの全体像を提示。コンピュートファブリック（Edge＋Cloud）→ モデル・コンテキスト・ツール → ランタイム → セキュリティ・ガバナンスの層構造を説明し、ボトムアップで各層を解説する構成。

### Edge: Windows AI とローカルコンピューティング

Windows ML / Windows AI の GPU 対応を拡張し、全インストールベースの GPU でローカル AI アプリを構築可能に。2 つの新しいオンデバイスモデルを発表:

- **Aion Instruct**: 高効率な推論 SLM
- **Aion Plan**: ローカルエージェンティックループを駆動するプランニングモデル。ツールアクセス付きでクラウドラウンドトリップ不要の完全オンデバイスエージェントを実現

### Surface RTX Spark Dev Box

紹介動画の後、Satya が「1 PFLOPS AI 計算、20 CPU コア、128 GB 統合メモリ」のスペックを解説。

### Windows 開発者体験デモ（Kayla Cinnamon）

Windows 開発者構成ツールで開発環境をワンクリックセットアップ。WSL Containers によるコンテナ対応を実演。

### Jensen Huang との対談（台北からリモート出演）

RTX Spark と「unmetered intelligence at the edge」のビジョンを議論。NVIDIA AI Factory、OpenShell、DGX Station for Windows の協業を確認。Jensen が「RTX Spark は Satya との 3 年前の会話から始まった」と経緯を説明。

### Project Solara（Steven Bathiche）

デバイスラボで 2 つのエージェントファースト参照デザイン（デスクデバイス＋ウェアラブルバッジ）を披露。

### Cristiano Amon との対談（デバイスラボ内）

Qualcomm とのエッジ AI デバイスパートナーシップ。次世代フォームファクタに必要な省電力 CPU・センサー・パーソナライズド体験について。

### Microsoft IQ

Work IQ（職場インテリジェンス）、Fabric IQ（ビジネスデータの意味論基盤）、Foundry IQ（検索計画）、Web IQ（リアルタイムウェブグラウンディング）の 4 層コンテキストレイヤー。GitHub Copilot、Microsoft Foundry、Copilot Studio を横断して提供。Work IQ APIs は 2026年6月16日に GA。

**デモ（Elijah Manor）**: エージェントが IQ コンテキストを活用する実演。

### OpenClaw + MXC デモ（Scott Hanselman, Samantha Song, Peter Steinberger）

OpenClaw を Windows 上の MXC（Microsoft Execution Containers）サンドボックスで実行。WinUI 3 コンパニオンアプリでエージェントの活動を可視化。サンドボックスがファイルシステムアクセスを制限するデモ（デスクトップアイコンへのアクセスをブロック）。Peter Steinberger（PSPDFKit 創業者）がゲスト出演し Open Plugins 標準について言及。

### GitHub Copilot App + Rayfin デモ（Cassidy Williams）

Copilot App でコード生成 → Rayfin で Fabric 上にバックエンドをデプロイする end-to-end ワークフロー。

### Microsoft Foundry + Agent 365 デモ（Amanda Foster）

エージェントのデプロイとガバナンス。ASSERT によるセキュリティ制御。「エージェントを構築するのは難しい部分ではなくなった。セキュリティとガバナンスが本当の課題」というメッセージ。

### MDASH デモ（Sarah Young）

コードネーム MDASH の多モデルセキュリティシステム。100 以上のエージェントがデータフロー・ビジネスロジック・エクスプロイトチェーンを推論し脆弱性を検出。従来のセキュリティスキャンより大幅に高速化。

### Copilot エコシステムと Autopilots（Satya）

Copilot の進化を振り返り（Chat → Cowork → Code）、夏に「coding を all knowledge work に拡張する Copilot super app」が登場と発表。

新カテゴリ **Autopilots** を導入: エンタープライズグレードの自律型長時間実行エージェント。名前・パーソナリティ・カスタムコネクタ・コンテキスト・メモリを持つ。最初の Autopilot として **Microsoft Scout** を発表（Copilot Frontier 顧客向けに即日提供開始）。

### Frontier Tuning + MAI モデル（Mustafa Suleyman 登壇）

Satya が「every organization needs to build their own hill-climbing machine」と提唱し、Frontier Tuning の概念を説明。組織のプライベート eval・RLE・トレースでモデルを hill-climb させ、差別化された IP を構築する。

Mustafa Suleyman が登壇し MAI モデルファミリーを発表:

- **MAI-Thinking-1**: 推論特化、蒸留なしフルスクラッチ訓練
- その他 6 モデル（MAI-Image-2.5、MAI-Code-1、MAI-Voice-2、MAI-Transcribe-1.5 等）
- 「効率的な推論モデル＋コーディングモデルの組み合わせで、環境整備さえすれば frontier レベルの性能を達成できる」新しい operating point を提示

### Microsoft Discovery デモ（David Carmona）

Cambridge Consultants（Capgemini 傘下）の PET プラスチック酵素分解研究を実演。VS Code ベースの Discovery アプリで:

1. **論文作成**: 知識グラフから科学文献を統合し研究論文を自動生成
2. **タンパク質発見**: HPC 統合で数百万回のシミュレーション。エージェントが存在しないタスクに対してオンザフライで YAML エージェント定義と Python コードを生成
3. **自動ラボ実験**: DNA 配列を自動ラボ機器に直接投入。「Iron Man, but for chemistry」

### Majorana 2 発表（Satya）

次世代トポロジカル量子チップの実機を紹介:

- Qubit 平均寿命 **20 秒**（Majorana 1 の 1000 倍。他のアプローチはマイクロ秒〜ミリ秒）
- オペレーション速度 **1 マイクロ秒**（寿命内に複雑な量子計算が可能）
- Majorana 1 と同じ qubit フォームファクタ（1/100 mm）でデジタル制御
- **クレジットカードサイズに 100 万 qubit** 集積可能な設計
- Discovery のエージェンティックループで材料スタックの R&D を加速

### クロージング

「frontier ecosystem にフル参加する」という冒頭テーマに回帰。「technology が power を集中させる」物語ではなく「developer・scientist・enterprise にオポチュニティを解放する」物語を実現することが使命であると宣言し、「Let's all go build together」で締めくくった。

## 関連セッション

- [BRK206: Your agent, anywhere — GitHub Copilot SDK](../sessions/brk206.md) — キーノートで言及された SDK の詳細セッション
- [Build 2026 セッションカタログ](https://build.microsoft.com/en-US/sessions)

## 公式ソース

- [https://build.microsoft.com/en-US/speakers/1768245294609build26-1775670526436001p1Pd](https://build.microsoft.com/en-US/speakers/1768245294609build26-1775670526436001p1Pd)
- [https://news.microsoft.com/build-2026](https://news.microsoft.com/build-2026)
- [https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work)
- [https://news.microsoft.com/build-2026-live-blog/microsoft-build-2026-live](https://news.microsoft.com/build-2026-live-blog/microsoft-build-2026-live)
