---
title: "Voq 是如何朗读文本的"
description: "简单了解一下 Voq 如何利用 Web Speech API 和浏览器自带语音，在无需服务器的情况下朗读任何网页。"
pubDate: 2025-02-01
lang: "zh-CN"
---

浏览器扩展程序中的文本转语音功能，其实比想象中简单。以下是 Voq 的实现方式。

## Web Speech API

Voq 使用浏览器内置的 [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) 来合成语音。这意味着不会有任何音频发送到服务器——一切都在你的浏览器本地完成，确保你的阅读内容保持私密。

## 语音选择

Chrome 自带一组系统语音，具体可用的语音取决于你的操作系统和语言设置。Voq 允许你从浏览器已安装的语音中任意选择，找到一个听起来自然的声音。

## 朗读面板

Voq 朗读时，会随着朗读进度逐词高亮显示。这依靠的是 Web Speech API 的 `boundary` 事件，该事件会在朗读每个单词之前触发。朗读面板会记住你的位置，方便你跟读，或返回到错过的内容。

## 多语言支持

由于 Voq 使用的是你设备上已安装的系统语音，因此它自然支持这些语音所覆盖的所有语言。如果你安装了西班牙语或日语语音，Voq 就能用该语言朗读。

## 开始使用

[从 Chrome 网上应用店安装 Voq](https://chrome.google.com/webstore/detail/ckkihjnakpnccnmdipbdibeaibigjjde)——完全免费。安装后，只需在网页上选中任意文本并点击播放即可。
