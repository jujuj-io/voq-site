---
title: "Wie Voq Text vorliest"
description: "Ein kurzer Blick darauf, wie Voq die Web Speech API und Browser-Stimmen nutzt, um jede Webseite vorzulesen — ganz ohne Server."
pubDate: 2025-02-01
lang: "de"
---

Text-to-Speech in einer Browser-Erweiterung ist einfacher, als man denkt. So macht Voq es.

## Die Web Speech API

Voq nutzt die im Browser integrierte [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API), um Sprache zu erzeugen. Das bedeutet: Es wird kein Audio an einen Server gesendet — alles geschieht lokal in Ihrem Browser, sodass Ihr Lesen privat bleibt.

## Stimmenauswahl

Chrome liefert eine Reihe von Systemstimmen mit, und welche Stimmen genau verfügbar sind, hängt von Ihrem Betriebssystem und Ihren Spracheinstellungen ab. Mit Voq können Sie aus allen in Ihrem Browser installierten Stimmen wählen, sodass Sie eine finden, die für Sie natürlich klingt.

## Das Lesepanel

Während Voq vorliest, wird jedes gesprochene Wort hervorgehoben. Das basiert auf dem `boundary`-Ereignis der Web Speech API, das vor jedem Wort ausgelöst wird. Das Lesepanel merkt sich Ihre Position, sodass Sie mitlesen oder zu einer verpassten Stelle zurückspringen können.

## Mehrsprachige Unterstützung

Da Voq die bereits auf Ihrem Gerät installierten Systemstimmen nutzt, unterstützt es automatisch alle Sprachen, die diese Stimmen abdecken. Wenn Sie eine spanische oder japanische Stimme installiert haben, kann Voq auch in dieser Sprache vorlesen.

## Erste Schritte

[Installieren Sie Voq aus dem Chrome Web Store](https://chrome.google.com/webstore/detail/ckkihjnakpnccnmdipbdibeaibigjjde) — es ist kostenlos. Markieren Sie danach einfach beliebigen Text auf einer Webseite und drücken Sie Play.
