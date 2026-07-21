---
title: "Come Voq legge il testo ad alta voce"
description: "Uno sguardo veloce a come Voq utilizza la Web Speech API e le voci del browser per leggere ad alta voce qualsiasi pagina web — senza bisogno di un server."
pubDate: 2025-02-01
lang: "it"
---

La sintesi vocale in un'estensione del browser è più semplice di quanto si pensi. Ecco come funziona Voq.

## La Web Speech API

Voq utilizza la [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) integrata nel browser per sintetizzare la voce. Questo significa che nessun audio viene inviato a un server — tutto avviene localmente nel tuo browser, mantenendo privata la tua lettura.

## Selezione della voce

Chrome include una serie di voci di sistema, e le voci esattamente disponibili dipendono dal tuo sistema operativo e dalle impostazioni della lingua. Voq ti permette di scegliere tra le voci installate sul tuo browser, così puoi trovarne una che ti suoni naturale.

## Il pannello di lettura

Mentre Voq legge, evidenzia ogni parola man mano che viene pronunciata. Questo è reso possibile dall'evento `boundary` della Web Speech API, che si attiva prima di ogni parola. Il pannello di lettura tiene traccia della tua posizione, così puoi seguire il testo o tornare a qualcosa che ti sei perso.

## Supporto multilingue

Poiché Voq utilizza le voci di sistema già installate sul tuo dispositivo, supporta naturalmente tutte le lingue coperte da quelle voci. Se hai installato una voce in spagnolo o giapponese, Voq può leggere in quella lingua.

## Come iniziare

[Installa Voq dal Chrome Web Store](https://chrome.google.com/webstore/detail/ckkihjnakpnccnmdipbdibeaibigjjde) — è gratis. Una volta installato, seleziona qualsiasi testo su una pagina web e premi play.
