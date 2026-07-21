---
title: "Como o Voq lê texto em voz alta"
description: "Um breve panorama de como o Voq usa a Web Speech API e as vozes do navegador para ler qualquer página da web em voz alta — sem precisar de servidor."
pubDate: 2025-02-01
lang: "pt"
---

A conversão de texto em fala em uma extensão de navegador é mais simples do que parece. Veja como o Voq faz isso.

## A Web Speech API

O Voq usa a [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) integrada ao navegador para sintetizar a fala. Isso significa que nenhum áudio é enviado a um servidor — tudo acontece localmente no seu navegador, mantendo sua leitura privada.

## Seleção de voz

O Chrome vem com um conjunto de vozes do sistema, e as vozes exatamente disponíveis dependem do seu sistema operacional e das configurações de idioma. O Voq permite escolher entre as vozes instaladas no seu navegador, para que você encontre uma que soe natural para você.

## O painel de leitura

Enquanto o Voq lê, ele destaca cada palavra à medida que é pronunciada. Isso é feito através do evento `boundary` da Web Speech API, disparado antes de cada palavra. O painel de leitura guarda sua posição, para que você possa acompanhar ou voltar a algo que perdeu.

## Suporte a vários idiomas

Como o Voq usa as vozes do sistema já instaladas no seu dispositivo, ele naturalmente oferece suporte a qualquer idioma coberto por essas vozes. Se você tiver uma voz em espanhol ou japonês instalada, o Voq pode ler nesse idioma.

## Como começar

[Instale o Voq na Chrome Web Store](https://chrome.google.com/webstore/detail/ckkihjnakpnccnmdipbdibeaibigjjde) — é gratuito. Depois de instalado, basta selecionar qualquer texto em uma página da web e apertar play.
