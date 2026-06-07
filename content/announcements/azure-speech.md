---
id: azure-speech
title: "Azure Speech"
summary: "Voice Live for Foundry Prompt Agents を GA、Hosted Agents 向けを Public Preview で発表。Azure-Realtime モデル（多言語 Speech-to-Speech）、MAI-Transcribe-1.5、Neural HD V3 音声、Photo Avatar GA、WebRTC Preview を新たに提供し、Foundry 内で Speech 全機能のプレイグラウンドとファインチューニングを統合。エンタープライズグレードのリアルタイム音声エージェント構築を大幅に簡素化。"
tags:
  - azure-speech
  - azure-ai-foundry
  - agent-framework
content_type: announcement
topic: agents-and-apps
official_sources:
  - https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/azure-speech-at-build-2026-powering-voice-agents-with-real-time-and-life-like-ex/4524638
---

## 概要

Azure Speech は Build 2026 で音声エージェントの本番デプロイを大幅に簡素化する更新を発表した。Voice Live（リアルタイム音声エージェント API）が Foundry Agent Service にネイティブ統合され、STT・TTS・ターン検出・割り込み処理・アバターを単一 API で提供する。

新世代の LLM パワード音声モデル群（Azure-Realtime、MAI-Transcribe-1.5、Neural HD V3）により精度と自然さが向上し、Foundry 内での統一プレイグラウンドとファインチューニング体験でプロトタイプから本番までの開発フローを一気通貫で完結させる。

## 主な発表

- **Voice Live for Foundry Prompt Agents**: リアルタイム音声エージェント API。STT + TTS + ターン検出 + 割り込み + アバター統合（**GA**）
- **Hosted Agents with Voice Live**: カスタムフレームワーク（LangChain, Pipecat, LiveKit 等）でのホスト型音声エージェント（**Public Preview**）
- **Azure-Realtime モデル**: 多言語 Speech-to-Speech（en-US, zh-CN, es-ES, fr-FR, de-DE, hi-IN 等）（**Public Preview**）
- **GPT-Realtime 1.5**: 高レスポンス音声体験（**Public Preview**）
- **MAI-Transcribe-1.5**: フレーズリスト対応・逐語モードの LLM 音声認識（**GA upgraded**）
- **Neural HD V3 voices**: プロンプトレベル指示制御付き高品質 TTS（**Public Preview**）
- **MAI-Voice 2.0**: 10+ 言語対応パーソナルボイス（**Public Preview**）
- **LLM Speech API**: 25 言語 / 90+ ロケール対応の LLM パワード文字起こし・翻訳（**GA**）
- **Photo Avatar / Custom Photo Avatar**: 写真ベースアバター生成（**GA**）
- **Full-body standard avatars**: 4 新アバター（**Public Preview**）
- **WebRTC connection**: Web/モバイルからの低レイテンシリアルタイム音声（**Public Preview**）
- **Voice Live Evaluation Harness**: 13 Foundry 評価指標による音声エージェント自動評価パイプライン（**Public Preview**）
- **Speech Playgrounds in Foundry**: 全 Speech 機能のハンズオンプレイグラウンドを統合（**GA**）
- **Speech Fine-tuning in Foundry**: Custom Speech / Custom Voice / Custom Avatar を Foundry 内でセルフサービス（**GA**）

## 詳細

### Voice Live アーキテクチャ

Voice Live は以下を単一 API に統合:
- Speech to Text（リアルタイム認識）
- Text to Speech（ストリーミング合成）
- ターン検出と割り込み処理
- アバターレンダリング
- マネージドエージェントオーケストレーション（Foundry Agent Service 連携）

WebSocket / WebRTC でフルデュプレックス双方向通信をサポートし、カスケードパイプラインとネイティブ Speech-to-Speech モデルの両方に対応。テレフォニー統合は Twilio・Infobip 等のサードパーティプロバイダーをサポート。

### 次世代音声モデル

- **LLM Speech API（GA）**: Open ASR Leaderboard No.1 の精度。5 時間長尺音声、20,000 文字プロンプトチューニング、2,000 フレーズリスト対応
- **Azure-Realtime**: 多言語でより自然な音声出力を実現する Speech-to-Speech モデル
- **Neural HD V3**: プロンプトレベルの指示制御（感情、スタイル、速度）で会話品質を向上
- **Photo Avatar GA**: 写真 1 枚からリアルなアバターを生成。Custom Photo Avatar でブランド固有アバターも可能

### Foundry 統合

- 全 Speech 機能（STT, TTS, Avatar, Voice Live, Translation）のプレイグラウンドを 1 箇所に集約
- Custom Speech / Custom Voice / Custom Avatar のファインチューニングを Foundry 内で完結
- コードなしでの実験 → 本番デプロイまでの統一ワークフロー

## 応用シナリオ

- コールセンターの音声エージェント（Voice Live + テレフォニー統合）で 24/7 自動応答を実現
- 多言語カスタマーサポート（Azure-Realtime + 10+ 言語）でグローバル展開
- ヘルスケアのインテーク面接（Photo Avatar + Voice Live）で患者体験を向上
- フィールドオペレーション（WebRTC + 低レイテンシ）でハンズフリー音声アシスタント
- ブランドボイス（Custom Voice + Neural HD V3）で企業固有の音声アイデンティティを構築

## 参考リンク

- [Azure Speech at Build 2026 ブログ](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/azure-speech-at-build-2026-powering-voice-agents-with-real-time-and-life-like-ex/4524638)
- [Voice Live ドキュメント](https://aka.ms/VoiceAgent)
- [Voice Live for Hosted Agents](https://aka.ms/VoiceLive-HostedAgent)
- [Azure-Realtime model](https://aka.ms/azure-realtime)
- [LLM Speech API](https://aka.ms/llm-speech)
- [Azure Speech ドキュメント](https://learn.microsoft.com/azure/ai-services/speech-service/)

## 関連エントリ

- [Microsoft Foundry](microsoft-foundry.md)
- [MAI Models](mai-models.md)
