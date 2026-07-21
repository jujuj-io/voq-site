---
title: "Cómo lee Voq el texto en voz alta"
description: "Un vistazo rápido a cómo Voq usa la Web Speech API y las voces del navegador para leer cualquier página web en voz alta, sin necesidad de servidor."
pubDate: 2025-02-01
lang: "es"
---

La conversión de texto a voz en una extensión de navegador es más sencilla de lo que parece. Así es como lo hace Voq.

## La Web Speech API

Voq usa la [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) integrada en el navegador para sintetizar voz. Esto significa que no se envía audio a ningún servidor — todo ocurre localmente en tu navegador, manteniendo tu lectura privada.

## Selección de voz

Chrome incluye un conjunto de voces del sistema, y las voces exactas disponibles dependen de tu sistema operativo y configuración de idioma. Voq te permite elegir entre las voces que tengas instaladas en tu navegador, para que elijas la que te suene más natural.

## El panel de lectura

Mientras Voq lee, resalta cada palabra a medida que se pronuncia. Esto funciona gracias al evento `boundary` de la Web Speech API, que se dispara antes de cada palabra. El panel de lectura recuerda tu posición para que puedas seguir el texto o volver a algo que te perdiste.

## Soporte multilingüe

Como Voq usa las voces del sistema ya instaladas en tu equipo, admite de forma natural los idiomas que esas voces cubren. Si tienes instalada una voz en español o japonés, Voq puede leer en ese idioma.

## Cómo empezar

[Instala Voq desde la Chrome Web Store](https://chrome.google.com/webstore/detail/ckkihjnakpnccnmdipbdibeaibigjjde) — es gratis. Una vez instalado, selecciona cualquier texto en una página web y pulsa reproducir.
