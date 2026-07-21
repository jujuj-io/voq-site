---
title: "Hoe Voq tekst hardop voorleest"
description: "Een korte blik op hoe Voq de Web Speech API en browserstemmen gebruikt om elke webpagina voor te lezen — zonder server."
pubDate: 2025-02-01
lang: "nl"
---

Tekst-naar-spraak in een browserextensie is eenvoudiger dan je zou denken. Zo doet Voq het.

## De Web Speech API

Voq gebruikt de ingebouwde [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) van de browser om spraak te genereren. Dit betekent dat er geen audio naar een server wordt gestuurd — alles gebeurt lokaal in je browser, zodat je leesgedrag privé blijft.

## Stemkeuze

Chrome wordt geleverd met een set systeemstemmen, en welke stemmen precies beschikbaar zijn hangt af van je besturingssysteem en taalinstellingen. Met Voq kun je kiezen uit alle stemmen die in je browser zijn geïnstalleerd, zodat je een stem kiest die natuurlijk voor je klinkt.

## Het voorleespaneel

Terwijl Voq voorleest, markeert het elk woord op het moment dat het wordt uitgesproken. Dit werkt via de `boundary`-gebeurtenis van de Web Speech API, die vóór elk woord wordt geactiveerd. Het voorleespaneel onthoudt je positie, zodat je kunt meelezen of terug kunt naar iets dat je gemist hebt.

## Meertalige ondersteuning

Omdat Voq de systeemstemmen gebruikt die al op je apparaat zijn geïnstalleerd, ondersteunt het vanzelf elke taal die door die stemmen wordt gedekt. Heb je een Spaanse of Japanse stem geïnstalleerd? Dan kan Voq ook in die taal voorlezen.

## Aan de slag

[Installeer Voq via de Chrome Web Store](https://chrome.google.com/webstore/detail/ckkihjnakpnccnmdipbdibeaibigjjde) — het is gratis. Selecteer daarna gewoon tekst op een webpagina en druk op afspelen.
