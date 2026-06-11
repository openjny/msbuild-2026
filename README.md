# Microsoft Build 2026 Skill

2026 年 6 月 2 日 〜 3 日に開催された Microsoft の開発者向けカンファレンス「Build 2026」のアナウンスとセッション情報を、GitHub Copilot で調査・要約してキュレーションしたプロジェクトです。

> [!NOTE]
> AI エージェントによる情報収集をベースにしたプロジェクトであり、正確な内容については１次情報を参照して確認してください。

## 使い方


### 🌐 人間向け WEB サイト

<https://openjny.github.io/msbuild-2026/> にアクセスして、アナウンスやセッションの情報を確認できます。

### 🤖 AI エージェント向け WEB サイト

<https://openjny.github.io/msbuild-2026/llms.txt> を AI エージェントに参照させることで、アナウンスやセッションの情報をエージェントが利用できるようになります。たとえば、次のように利用します。

```txt
私はクラウドインフラエンジニアです。Build 2026 でのアナウンスやセッションの内容を加味して、私が知るべきトレンドやインサイトを教えてください。

情報源: https://openjny.github.io/msbuild-2026/llms.txt
```

### 🤖 AI エージェント向けスキル

以下のような方法で、リポジトリに配置された [msbuild-2026](./skills/msbuild-2026/SKILL.md) スキルをインストールして利用することができます。

```bash
# VS Code Agent Plugins (ref: https://code.visualstudio.com/docs/agent-customization/agent-skills)
/plugin install openjny/msbuild-2026

# GitHub CLI (ref: https://github.blog/changelog/2026-04-16-manage-agent-skills-with-github-cli)
gh skill install openjny/msbuild-2026 msbuild-2026

# Vercel Skills CLI (ref: https://vercel.com/docs/agent-resources/skills)
npx skills add openjny/msbuild-2026 --skill msbuild-2026
```

利用する際は、Microsoft Build 2026 スキルが発火されるよう、適切なプロンプトやコマンドを使用してください。例えば：

```txt
キーノートを中心に Build 2026 のトレンドや注目ポイントを教えてください。
```

## 参考情報

- [AI で楽してキャッチアップしたい人向けの Microsoft Build 2026 まとめ](https://zenn.dev/openjny/articles/64dfd5707240b7): このリポジトリの紹介・解説記事です

## ライセンス

- コード: [MIT](LICENSE-MIT)
- コンテンツ: [CC BY 4.0](LICENSE-CC-BY-4.0)
