---
title: "How Voq Reads Text Aloud"
description: "A quick look at how Voq uses the Web Speech API and browser voices to read any webpage aloud — no server required."
pubDate: 2025-02-01
lang: "en"
---

Text-to-speech in a browser extension is simpler than you might expect. Here is how Voq does it.

## The Web Speech API

Voq uses the browser's built-in [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) to synthesize speech. This means no audio is sent to a server — everything happens locally in your browser, keeping your reading private.

## Voice selection

Chrome ships with a set of system voices, and the exact voices available depend on your operating system and language settings. Voq lets you pick from whatever voices your browser has installed, so you can choose one that sounds natural to you.

## The reading panel

When Voq reads, it highlights each word as it is spoken. This is powered by the `boundary` event in the Web Speech API, which fires before each word. The reading panel keeps your place so you can follow along or jump back to something you missed.

## Multilingual support

Because Voq uses the system voices already installed on your machine, it naturally supports whatever languages those voices cover. If you have a Spanish or Japanese voice installed, Voq can read in that language.

## Getting started

[Install Voq from the Chrome Web Store](https://chrome.google.com/webstore/detail/ckkihjnakpnccnmdipbdibeaibigjjde) — it is free. Once installed, select any text on a webpage and press play.
