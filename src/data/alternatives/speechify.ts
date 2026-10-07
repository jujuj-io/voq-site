// Content for /alternative/speechify. Competitor facts checked 6 Oct 2026 —
// re-check speechify.com/pricing before editing numbers.
import type { AltPage } from './types';

const page: AltPage = {
  competitor: 'Speechify',
  title: 'Free Speechify Alternative for Chrome — Voq',
  description: 'Looking for a Speechify alternative? Voq reads any webpage aloud in natural voices for free — no account, no trial. See how Voq and Speechify compare on price, voices and limits.',
  h1: 'The free Speechify alternative for Chrome',
  sub: 'Natural voices on any webpage. No account, no trial, no annual bill.',
  chips: ['Free natural voices', 'No account', 'No trial', '34 languages'],
  price: {
    voq: { big: '$0', note: 'Natural voices free every day · $2/mo founding rate removes the daily limit' },
    them: { label: 'Speechify Premium', big: '$139', unit: '/year', note: 'or $29/month · free plan: 10 robotic voices, 1.5x max' },
  },
  reviewsLede: 'Speechify is well rated. The complaints cluster around price, billing and limits.',
  ratings: [
    { score: '4.7', where: 'Apple App Store', count: '526K ratings' },
    { score: '4.6', where: 'Chrome Web Store', count: '22.7K ratings' },
    { score: '4.7', where: 'Trustpilot', count: '6.9K reviews · 8% are 1-star' },
  ],
  loves: [
    ['Premium voices.', 'Natural, expressive, good for long listening — including celebrity voices.'],
    ['Accessibility.', 'Often called life-changing by readers with dyslexia and ADHD.'],
    ['Speed.', 'Listening at 2–3x to get through study and work reading.'],
    ['Everywhere.', 'Apps on phone, desktop and Chrome, with progress synced between them.'],
  ],
  gripes: [
    ['Billing.', 'The 3-day trial auto-converts to a paid plan; unexpected charges and hard cancellations are the top complaint.'],
    ['Price.', '$139/year feels steep for casual use; monthly is $29.'],
    ['A weak free plan.', '10 robotic voices and a 1.5x speed cap give a poor preview of Premium.'],
    ['Usage caps.', 'Heavy listeners hit the monthly premium-voice word limit and drop back to robotic voices.'],
  ],
  pickVoq: ['Listening to webpages in Chrome', 'Natural voices without paying', 'No sign-up, nothing to cancel', 'A low price if you do upgrade'],
  pickThem: ['Phone and desktop apps', 'Scanning printed pages (OCR)', '60+ languages, 1,000+ voices', 'Audiobooks and AI summaries'],
  // [label, voq, voqTick, them, themTick]  tick: true = check, false = cross, null = none
  rows: [
    ['Free voices', 'Natural', true, '10 robotic voices', false],
    ['Premium price', '$2/month founding rate', null, '$139/year or $29/month', null],
    ['Free trial', 'None needed', true, '3 days, then auto-charges', false],
    ['Billing', 'Monthly, no annual plan', true, 'Annual refunds only within 7 days', false],
    ['Account to pay', 'No — just a code', true, 'Yes', false],
    ['Languages', '34 + auto-detect, free', true, '60+ (Premium)', true],
    ['Word highlighting', 'Yes', true, 'Yes', true],
    ['Apps', 'Chrome only', false, 'iOS, Android, Mac, Windows, Chrome', true],
    ['Scan printed text (OCR)', 'No', false, 'Premium', true],
  ],
  why: [
    ['$139', 'A big yearly bill', 'Hard to justify if you mostly listen in your browser.'],
    ['3 days', 'Short trial, auto-charge', 'Converts to a paid plan unless you cancel in time.'],
    ['1.5x', 'A limited free plan', 'Robotic voices and a speed cap until you pay.'],
    ['Caps', 'Monthly word limits', 'Even Premium has a cap on premium-voice listening.'],
  ],
  steps: [
    ['Add Voq to Chrome', 'Free, no sign-up'],
    ['Open any page', 'Articles, AI chats, Reddit…'],
    ['Press play', 'Words highlight as it reads'],
  ],
  faqs: [
    ['Is Voq a good free alternative to Speechify?', 'Yes, for reading in Chrome.', 'Voq’s free plan uses natural voices. Speechify’s free plan has 10 robotic voices and keeps natural ones for Premium.'],
    ['How much cheaper is Voq than Speechify?', 'Voq is free every day.', 'Removing the daily limit costs $2/month at the founding rate. Speechify Premium is $139/year or $29/month.'],
    ['Is Speechify free?', 'Partly.', 'The free plan has 10 robotic voices and a 1.5x speed limit. Natural voices, faster speeds and most features need Premium.'],
    ['I’m on a Speechify trial. How do I switch to Voq?', 'Install Voq, then cancel Speechify within the 3-day trial.', 'The trial auto-converts to a paid plan, and only annual plans can be refunded (within 7 days).'],
    ['Does Voq have a mobile app like Speechify?', 'No.', 'Voq is a Chrome extension. For phone apps, scanning printed pages or audiobooks, Speechify does more.'],
    ['Does Voq support as many languages as Speechify?', 'Fewer, but all free.', 'Voq has 34 languages with auto-detect on the free plan. Speechify lists 60+ on Premium.'],
    ['Does Speechify have usage limits?', 'Yes.', 'Premium includes a monthly allowance of premium-voice words; past it, users report dropping back to standard voices.'],
  ],
  sourcesNote: 'Ratings from the Apple App Store, Chrome Web Store and Trustpilot, checked 6 Oct 2026. Themes summarised from user reviews on those sites, Capterra and independent reviews.',
  tableNote: 'Speechify details from speechify.com/pricing and its published terms, checked 6 Oct 2026. Prices and limits can change.',
};
export default page;
