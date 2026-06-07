---
id: mai-models
title: MAI Models
summary: Microsoft AI の Superintelligence チームが自社開発した7つの新モデルを発表。フラッグシップ推論モデル MAI-Thinking-1（35B active / 1T total MoE、256K コンテキスト、SWE-Bench Pro 52.8%）、コーディング特化の MAI-Code-1-Flash（5B、GitHub Copilot 統合）、画像生成の MAI-Image-2.5（Arena 画像編集2位）、音声の MAI-Voice-2、文字起こしの MAI-Transcribe-1.5 を含む。すべてゼロ蒸留・商用ライセンスデータのみで訓練。
tags:
  - azure-ai-foundry
  - mai-models
  - github-copilot
content_type: announcement
topic: working-with-models
official_sources:
  - https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work
  - https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/new-mai-models-in-microsoft-foundry-across-text-image-voice-and-speech/4524632
  - https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/foundry-labs--build-2026/4524581
deliveries:
  site: true
  llms: true
  skills: true
---

## 概要

Microsoft AI の Superintelligence チーム（Mustafa Suleyman 率いる）は Build 2026 で自社開発の7つの新モデルを発表した。推論、コーディング、画像生成、音声合成、文字起こしの各領域をカバーし、すべてゼロ蒸留（第三者モデルからの知識蒸留なし）、商用ライセンスデータのみで訓練された初のフルスタック MAI モデルファミリーである。

フラッグシップの MAI-Thinking-1 は 35B active パラメータの sparse Mixture of Experts モデルで、SWE-Bench Pro で Claude Opus 4.6 に匹敵し、AIME 2025 で 97.0% を達成。モデル単体ではなく、継続的に能力を向上させる「Hill-Climbing Machine」（再現可能な学習パイプライン）として設計されている点が特徴的である。

MAI モデルは GitHub Copilot、Microsoft 365、Microsoft Foundry を通じて利用可能なほか、Baseten、OpenRouter、Fireworks AI でも提供され、マルチプロバイダー戦略を明確にした。

## 主な発表

- **MAI-Thinking-1**: Microsoft AI 初のフラッグシップ推論モデル。35B active / ~1T total MoE、256K コンテキスト（**Private Preview** on Foundry）
- **MAI-Code-1-Flash**: 5B パラメータのエージェント型コーディングモデル。GitHub Copilot と VS Code に統合（**GA ロールアウト中**）
- **MAI-Image-2.5**: 画像生成・編集モデル。Arena 画像編集リーダーボード2位（**GA** on Foundry）
- **MAI-Image-2.5-Flash**: 高速・低コスト版画像モデル（**GA** on Foundry）
- **MAI-Voice-2**: 多言語音声合成。15以上の追加言語、音声クローニング対応（**GA** via Azure Speech）
- **MAI-Voice-2-Flash**: 低コスト・高効率版音声合成（**Coming Soon**）
- **MAI-Transcribe-1.5**: 43言語対応の文字起こし。FLEURS ベンチマーク1位（**GA** via Azure Speech）
- **Superintelligence Lab**: Humanist Superintelligence を目指す長期研究組織の設立

## 詳細

### MAI-Thinking-1: 推論モデル

MAI-Thinking-1 は Microsoft AI のフラッグシップ推論モデルで、「Hill-Climbing Machine」哲学に基づいて構築された。

| 項目 | 仕様 |
|------|------|
| アーキテクチャ | Sparse Mixture of Experts (MoE) |
| Active パラメータ | 約 35B |
| Total パラメータ | 約 1T |
| コンテキスト長 | 256,000 トークン |
| 訓練データ | クリーン・商用ライセンスデータのみ。AI 生成コンテンツを事前学習から除外 |
| 蒸留 | なし（ゼロ蒸留） |

**ベンチマーク結果:**

| ベンチマーク | スコア |
|-------------|--------|
| SWE-Bench Pro | 52.8%（Claude Opus 4.6 と同等） |
| AIME 2025 | 97.0% |
| AIME 2026 | 94.5% |
| 人間盲検評価 | Sonnet 4.6 より選好（Surge による独立評価） |

**3つの設計哲学:**

1. **能力は学習で獲得する（Learned, not inherited）**: 蒸留に頼らず、タスクを真に学習させる。模倣者は教師の設計選択に縛られ、新しい状況への適応が困難
2. **クリーンデータ**: 出自を説明できないデータで訓練されたモデルは、挙動の理解も改善も困難
3. **Hill-Climbing Machine**: 単一モデルではなく、より良いデータ・報酬・環境・計算資源を吸収して継続的に改善する再現可能なパイプライン

### MAI-Code-1-Flash: コーディングモデル

MAI-Code-1-Flash は GitHub Copilot と VS Code のプロダクションハーネスで直接訓練された、エージェント型コーディングモデルである。

| 項目 | 仕様 |
|------|------|
| アーキテクチャ | MoE |
| Total パラメータ | 約 137B |
| Active パラメータ | 約 5B |
| コンテキスト長 | 256,000 トークン |
| 訓練期間 | 2026年3月〜5月 |
| 依存モデル | MAI-Thinking-1 |

**ベンチマーク（vs Claude Haiku 4.5、同一 VS Code ハーネスで評価）:**

| ベンチマーク | MAI-Code-1-Flash | Claude Haiku 4.5 |
|-------------|-----------------|-----------------|
| SWE-Bench Verified | 71.6% | 66.6% |
| SWE-Bench Pro | 51.2% | 35.2% |
| IF Bench（命令追従） | 75.0% | 46.1% |
| τ²-Bench（ツール使用） | 71.7% | 54.7% |

SWE-Bench Verified ではハードな問題を最大 60% 少ないトークンで解決。GitHub Copilot のトークンベース課金では Claude Haiku 4.5 より安価に設定されている。

**特徴:**
- ベンチマークではなく開発者が実際に使うエディタ環境に最適化
- Adaptive Thinking: 簡単なリクエストには簡潔に、複雑なタスクにはより多くの推論予算を使用
- VS Code モデルピッカーで選択可能。Auto 選択時にもルーティング対象
- 初期ロールアウトは Copilot Free / Pro / Pro+ / Max の約10%のユーザーから段階拡大

### MAI-Image-2.5: 画像生成・編集モデル

MAI-Image-2.5 は Microsoft の最強画像モデルで、20B パラメータ、32K コンテキストを持つ。

**Arena リーダーボード実績（2026年6月2日時点）:**
- 画像編集: **2位**（Nano Banana 2.1 を上回る）
- テキスト→画像: **3位**（Arena スコア 1254±8）
- MAI-Image-2 から全体で +75 ポイント改善、Text Rendering +107、Cartoon/Anime/Fantasy +90

**主要機能:**
- テキスト→画像生成の品質向上（テキストレンダリング、製品画像、プロンプト忠実度）
- 画像→画像編集: 局所的な編集で残りを変更しない「Control with Preservation」
- 顔・アイデンティティの一貫性保持
- 複雑な視覚推論（シーン構造、ライティング、スケール、空間関係の理解）

**価格（Foundry）:**
- MAI-Image-2.5: テキスト入力 $5/1M tokens、画像入力 $8/1M tokens、画像出力 $47/1M tokens
- MAI-Image-2.5-Flash: テキスト/画像入力 $1.75/1M tokens、画像出力 $33/1M tokens

PowerPoint で利用可能、OneDrive にロールアウト中。

### MAI-Voice-2: 音声合成モデル

MAI-Voice-2 は多言語対応の次世代テキスト→音声モデルで、自然で表現豊かな音声を低レイテンシで生成する。

**主要機能:**
- 15以上の追加言語に対応
- 音声クローニング: 短いオーディオサンプルから話者の声を再現（悪用防止のセーフガード付き）
- Voice Prompting: テキストだけでなく音声サンプルで出力スタイルを制御
- 長時間生成でも品質を維持

Azure Speech 経由で提供。価格は $22/1M 文字。MAI-Voice-2-Flash は低コスト・高効率版として近日提供予定。

### MAI-Transcribe-1.5: 文字起こしモデル

MAI-Transcribe-1.5 は 43 言語に対応する高精度文字起こしモデル。

**ベンチマーク:**
- FLEURS ベンチマーク: 上位 25 グローバル言語中 11 言語で **1位**
- 残り 14 言語でも Whisper-large-v3 に勝利、うち 11 言語で Gemini 3.1 Flash にも勝利
- Artificial Analysis Speed Factor: 競合モデルの **5倍** のインファレンス速度

**特徴:**
- ドメイン固有用語のサポート
- ストリーミング対応（近日提供）

Azure Speech 経由で提供。価格は $0.36/時間。

### Superintelligence Lab

「Humanist Superintelligence」を目指す長期研究組織として設立。人間に奉仕し、人間の監督に従い、人間の意図に沿う高度な AI システムの構築を使命とする。MAI-Thinking-1 の公式ブログ記事も「Superintelligence team」名義で公開されている。

次世代 GB200 クラスタが稼働中であり、今後1年で計算資源と能力の急速なスケールアップを予定。Maia 200 シリコンとの共同設計も進行中。

### マルチプロバイダー戦略

MAI モデルは Microsoft Foundry に加え、以下のサードパーティでも利用可能:

- **Baseten**: MAI-Thinking-1
- **OpenRouter**: MAI-Image-2.5、MAI-Voice-2、MAI-Transcribe-1.5
- **Fireworks AI**: Foundry 上で **GA**。エンタープライズガバナンスと Azure データレジデンシーを維持しつつサードパーティモデルも利用可能

Microsoft Frontier Tuning（強化学習によるモデルカスタマイズ）を適用した MAI モデルは、GPT-5.5 比で出力トークンあたり最大10倍のコスト効率を実現すると予測されている。

### GitHub Copilot との統合

MAI-Code-1-Flash は GitHub Copilot のプロダクションハーネスで直接訓練された初のモデル。統合方式:

- VS Code のモデルピッカーで手動選択可能
- Auto ピッカー選択時にルーティング対象として自動選択される場合あり
- Copilot Free / Pro / Pro+ / Max 全プランで利用可能（段階ロールアウト）
- GitHub Copilot CLI への対応も計画中
- トークンベース課金で Claude Haiku 4.5 より安価

## 応用シナリオ

- GitHub Copilot でのエージェント型コーディング: MAI-Code-1-Flash による高効率なコード生成・リファクタリング・バグ修正。複雑なマルチステップタスクでも少ないトークンで完了
- Foundry 上でのマルチモーダルエージェント構築: MAI-Thinking-1 の推論能力と MAI-Image-2.5 の画像生成、MAI-Voice-2 の音声合成を組み合わせたエンドツーエンドエージェント
- エンタープライズドキュメント処理: MAI-Thinking-1 の 256K コンテキストを活用した長文ドキュメントの分析・要約・推論
- PowerPoint・OneDrive での AI 画像生成: MAI-Image-2.5 による資料作成効率化、ブランドアセットの一貫性を保った編集
- リアルタイム多言語文字起こし: MAI-Transcribe-1.5 による 43 言語対応の会議文字起こし、コールセンター分析
- 音声エージェント: MAI-Voice-2 の音声クローニングと低レイテンシ生成を活用した自然な対話型エージェント

## 制約・注意点

- MAI-Thinking-1 は **Private Preview** 段階。Foundry でアクセスリクエストが必要
- MAI-Code-1-Flash は段階ロールアウト中（初期は約10%のユーザー）
- MAI-Voice-2-Flash は Coming Soon（未提供）
- モデルの重みは非公開。商用サービスの利用規約に準拠（オープンウェイト公開は未定）
- MAI-Thinking-1 の EU 提供は Coming Soon
- Frontier Tuning は Private Preview で Forward Deployed Engineers チームとの協業が必要

## 参考リンク

- [Building a hill-climbing machine: Launching seven new MAI models](https://aka.ms/MAI-Build)
- [New MAI models in Microsoft Foundry across text, image, voice, and speech](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/new-mai-models-in-microsoft-foundry-across-text-image-voice-and-speech/4524632)
- [Foundry Labs @ Build 2026](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/foundry-labs--build-2026/4524581)
- [MAI-Code-1-Flash is now available for GitHub Copilot](https://github.blog/changelog/2026-06-02-mai-code-1-flash-is-now-available-for-github-copilot)
- [Microsoft Build 2026: Be yourself at work](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work)
- [Microsoft Build 2026 ニュースハブ](https://news.microsoft.com/build-2026)

## 関連エントリ

- [Frontier Tuning](../announcements/frontier-tuning.md) — MAI モデルを組織固有データで強化学習カスタマイズ
- [Microsoft Foundry](../announcements/microsoft-foundry.md) — MAI モデルのホスティング基盤
- [GitHub Copilot SDK](../announcements/github-copilot-sdk.md) — MAI-Code-1-Flash の統合先
- [Foundry Local](../announcements/foundry-local.md) — ローカル実行環境
