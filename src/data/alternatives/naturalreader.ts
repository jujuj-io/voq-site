// /alternative/naturalreader — facts checked 7 Oct 2026 (app listings, Chrome Web Store, independent pricing reviews).
import { type AltPage, VOQ_PRICE, STEPS } from './types';

const page: AltPage = {
  competitor: 'NaturalReader',
  title: 'Free NaturalReader Alternative for Chrome — Voq',
  description: 'Looking for a NaturalReader alternative? Voq reads any webpage aloud in natural voices for free, with no account. See how Voq and NaturalReader compare on price, voices and limits.',
  h1: 'The free NaturalReader alternative for Chrome',
  sub: 'Natural voices on any webpage, free every day. No account, no plan to choose.',
  chips: ['Free natural voices', 'No account', 'Reads in the page', '34 languages'],
  price: {
    voq: VOQ_PRICE,
    them: { label: 'NaturalReader Plus', big: '$119', unit: '/year', note: 'or $20.90/month · free: basic voices, AI voices 5 min/day' },
  },
  reviewsLede: 'NaturalReader is a solid, long-running reader. The complaints are mostly about price and how its best voices are rationed.',
  ratings: [
    { score: '4.6', where: 'Apple App Store', count: '9K+ ratings' },
    { score: '4.2', where: 'Chrome Web Store', count: '2.4K ratings · 1M+ users' },
  ],
  loves: [
    ['Documents.', 'Reads PDFs, two-column textbooks and scanned pages (OCR) in the right order.'],
    ['Accessibility.', 'Popular with readers with ADHD and dyslexia for seeing and hearing text together.'],
    ['Voice range.', '200+ voices in 90+ languages, plus voice cloning on paid plans.'],
    ['Everywhere.', 'Web app, Chrome extension, iOS and Android.'],
  ],
  gripes: [
    ['Price.', 'Over $100 a year for the AI voices; Pro is $159/year.'],
    ['Rationed free voices.', 'Free AI voices are capped at a few minutes a day; unlimited listening uses basic voices.'],
    ['Confusing plans.', 'Free, Lite, Plus, Pro and separate Commercial plans are hard to tell apart.'],
    ['Copy-paste on mobile.', 'Listening to web pages on a phone often means copying text into the app.'],
  ],
  pickVoq: ['Listening to webpages in Chrome', 'Natural voices without paying', 'No sign-up, nothing to cancel', 'A low price if you do upgrade'],
  pickThem: ['Scanned documents (OCR)', '90+ languages, 200+ voices', 'Phone apps and voice cloning', 'Exporting MP3s'],
  rows: [
    ['Free voices', 'Natural', true, 'Basic; AI voices 5 min/day', false],
    ['Paid price', '$2/month founding rate', null, '$79–$159/year', null],
    ['Plans to choose from', 'One', true, 'Free, Lite, Plus, Pro + Commercial', false],
    ['Account to pay', 'No — just a code', true, 'Yes', false],
    ['Languages', '34 + auto-detect, free', true, '90+', true],
    ['Word highlighting', 'Yes', true, 'Yes', true],
    ['Apps', 'Chrome only', false, 'Web, Chrome, iOS, Android', true],
    ['Scan printed text (OCR)', 'No', false, 'Paid plans', true],
    ['MP3 export', 'No', false, 'Paid plans', true],
  ],
  why: [
    ['$119', 'For the AI voices', 'Plus is $119/year; Pro is $159/year.'],
    ['5 min', 'Of AI voice a day, free', 'After that it’s back to basic voices.'],
    ['5 plans', 'Confusing tiers', 'Free, Lite, Plus, Pro and Commercial.'],
    ['Copy', 'And paste on mobile', 'Web pages often need copying into the app.'],
  ],
  steps: STEPS,
  faqs: [
    ['Is Voq a good free alternative to NaturalReader?', 'Yes, for reading webpages in Chrome.', 'Voq’s free plan uses natural voices. NaturalReader’s free plan gives unlimited basic voices but only a few minutes a day of its AI voices.'],
    ['Is NaturalReader free?', 'Partly.', 'Basic voices are free and unlimited. AI voices are limited to a few minutes a day, and OCR and MP3 export need a paid plan.'],
    ['How much does NaturalReader cost?', 'From $79/year.', 'Lite is $79/year, Plus (with AI voices) $119/year and Pro $159/year. Voq removes its daily limit for $2/month at the founding rate.'],
    ['Does Voq have OCR like NaturalReader?', 'No.', 'Voq reads text on webpages. For scanned pages and photos of text, NaturalReader’s OCR does more.'],
    ['Does Voq have mobile apps like NaturalReader?', 'No.', 'Voq is a Chrome extension. NaturalReader has iOS and Android apps.'],
    ['Does Voq support as many languages as NaturalReader?', 'Fewer, but all free.', 'Voq has 34 languages with auto-detect on the free plan. NaturalReader lists 90+.'],
  ],
  sourcesNote: 'Ratings from the Apple App Store and Chrome Web Store, checked 7 Oct 2026. Themes summarised from user reviews on those sites and independent reviews.',
  tableNote: 'NaturalReader details from its app and Chrome Web Store listings and published plan pricing, checked 7 Oct 2026. Prices and limits can change.',
};
export default page;
