---
title: "Comment Voq lit le texte à voix haute"
description: "Un aperçu rapide de la façon dont Voq utilise la Web Speech API et les voix du navigateur pour lire n'importe quelle page web à voix haute — sans serveur."
pubDate: 2025-02-01
lang: "fr"
---

La synthèse vocale dans une extension de navigateur est plus simple qu'on ne le pense. Voici comment Voq procède.

## La Web Speech API

Voq utilise la [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) intégrée au navigateur pour synthétiser la voix. Cela signifie qu'aucun audio n'est envoyé à un serveur — tout se passe localement dans votre navigateur, ce qui garde votre lecture privée.

## Choix de la voix

Chrome est livré avec un ensemble de voix système, et les voix exactement disponibles dépendent de votre système d'exploitation et de vos paramètres de langue. Voq vous permet de choisir parmi les voix installées sur votre navigateur, afin d'en trouver une qui vous semble naturelle.

## Le panneau de lecture

Pendant que Voq lit, il surligne chaque mot au fur et à mesure qu'il est prononcé. Cela s'appuie sur l'événement `boundary` de la Web Speech API, déclenché avant chaque mot. Le panneau de lecture garde votre position pour que vous puissiez suivre ou revenir en arrière sur un passage manqué.

## Prise en charge multilingue

Comme Voq utilise les voix système déjà installées sur votre machine, il prend naturellement en charge les langues couvertes par ces voix. Si vous avez une voix espagnole ou japonaise installée, Voq peut lire dans cette langue.

## Pour commencer

[Installez Voq depuis le Chrome Web Store](https://chrome.google.com/webstore/detail/ckkihjnakpnccnmdipbdibeaibigjjde) — c'est gratuit. Une fois installé, sélectionnez n'importe quel texte sur une page web et appuyez sur lecture.
