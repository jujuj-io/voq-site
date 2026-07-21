---
title: "Jak Voq czyta tekst na głos"
description: "Krótkie spojrzenie na to, jak Voq wykorzystuje Web Speech API i głosy przeglądarki do czytania dowolnej strony internetowej na głos — bez potrzeby serwera."
pubDate: 2025-02-01
lang: "pl"
---

Zamiana tekstu na mowę w rozszerzeniu przeglądarki jest prostsza, niż mogłoby się wydawać. Oto jak robi to Voq.

## Web Speech API

Voq korzysta z wbudowanego w przeglądarkę [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) do syntezowania mowy. Oznacza to, że żadne dźwięki nie są wysyłane na serwer — wszystko dzieje się lokalnie w przeglądarce, dzięki czemu Twoje czytanie pozostaje prywatne.

## Wybór głosu

Chrome jest wyposażony w zestaw głosów systemowych, a dostępne głosy zależą od systemu operacyjnego i ustawień języka. Voq pozwala wybrać dowolny głos zainstalowany w przeglądarce, dzięki czemu możesz znaleźć taki, który brzmi dla Ciebie naturalnie.

## Panel czytania

Podczas czytania Voq podświetla każde słowo w momencie jego wypowiadania. Umożliwia to zdarzenie `boundary` z Web Speech API, wywoływane przed każdym słowem. Panel czytania zapamiętuje Twoją pozycję, dzięki czemu możesz podążać za tekstem lub wrócić do fragmentu, który przeoczyłeś.

## Obsługa wielu języków

Ponieważ Voq korzysta z głosów systemowych już zainstalowanych na Twoim urządzeniu, naturalnie obsługuje każdy język, który te głosy obejmują. Jeśli masz zainstalowany głos hiszpański lub japoński, Voq może czytać w tym języku.

## Jak zacząć

[Zainstaluj Voq ze Chrome Web Store](https://chrome.google.com/webstore/detail/ckkihjnakpnccnmdipbdibeaibigjjde) — jest darmowy. Po instalacji po prostu zaznacz dowolny tekst na stronie i naciśnij odtwórz.
