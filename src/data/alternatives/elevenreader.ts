// /alternative/elevenreader — facts checked 7 Oct 2026 (elevenreader.io pricing, ElevenLabs help centre, Chrome Web Store, app reviews).
import { type AltPage, VOQ_PRICE, STEPS } from './types';

const page: AltPage = {
  competitor: 'ElevenReader',
  title: 'ElevenReader Alternative for Chrome — Voq',
  description: 'Looking for an ElevenReader alternative? Voq reads the page you’re on in natural voices — no account, no importing. See how Voq and ElevenReader compare on price, limits and how they work.',
  h1: 'An ElevenReader alternative that reads in your browser',
  sub: 'Voq reads the page you’re on, in natural voices. No account, no importing into another app.',
  chips: ['Reads in the page', 'No account', 'Free every day', '34 languages'],
  price: {
    voq: VOQ_PRICE,
    them: { label: 'ElevenReader Ultra', big: '$99', unit: '/year', note: 'or $11/month · free: 10 hours a month' },
  },
  reviewsLede: 'ElevenReader has some of the most natural voices around. The complaints are about reliability, desktop use and needing an account.',
  ratings: [
    { score: '4.1', where: 'Chrome Web Store', count: '63 ratings · 20K users' },
  ],
  loves: [
    ['Voices.', 'Very natural, expressive narration that’s easy to listen to for hours.'],
    ['A generous free plan.', '10 hours of AI audio a month, plus free audiobooks.'],
    ['Audiobooks.', 'A large premium audiobook library on Ultra.'],
    ['Mobile.', 'A strong iOS app, with sync to Android and web.'],
  ],
  gripes: [
    ['Stalling.', 'Users report playback stopping after a minute or two.'],
    ['No real desktop reader.', 'The Chrome extension sends pages to the ElevenReader web app instead of reading in place.'],
    ['Account required.', 'You must sign in to import or listen.'],
    ['Android.', 'The Android app lags behind iOS.'],
  ],
  pickVoq: ['Listening right on the page you’re reading', 'No account or sign-in', 'Chrome-first reading', 'A $2/month upgrade'],
  pickThem: ['The most expressive voices', 'Audiobooks', 'Listening on your phone', 'AI podcast summaries (GenFM)'],
  rows: [
    ['Free listening', 'Free daily, natural voices', true, '10 hours/month', true],
    ['Paid price', '$2/month founding rate', null, '$99/year or $11/month', null],
    ['Account', 'Not needed', true, 'Required', false],
    ['In Chrome', 'Reads on the page', true, 'Imports page into its web app', false],
    ['Languages', '34 + auto-detect', true, '32+', true],
    ['Apps', 'Chrome only', false, 'iOS, Android, web, Chrome', true],
    ['Audiobooks', 'No', false, 'Yes', true],
    ['Offline listening', 'No', false, 'Ultra', true],
  ],
  why: [
    ['Sign-in', 'Needed to listen', 'No account, no audio.'],
    ['Import', 'Not in-page reading', 'The extension sends pages to its web app.'],
    ['10 hrs', 'A month on free', 'Heavy listeners need Ultra.'],
  ],
  steps: STEPS,
  faqs: [
    ['Is Voq a good alternative to ElevenReader?', 'Yes, for reading in Chrome.', 'Voq reads the page you’re on with no account. ElevenReader has richer voices and audiobooks, but you sign in and import pages into its app.'],
    ['Is ElevenReader free?', 'Yes, up to 10 hours a month.', 'Ultra ($11/month or $99/year) makes listening unlimited and adds premium audiobooks and offline downloads.'],
    ['Does ElevenReader need an account?', 'Yes.', 'You need to be signed in for the Chrome extension to import pages. Voq needs no account at all.'],
    ['Are ElevenReader’s voices better than Voq’s?', 'They’re among the most expressive available.', 'Voq uses natural Google voices; ElevenReader uses ElevenLabs’ own models. Try both on the same page.'],
    ['Does Voq have audiobooks or mobile apps?', 'No.', 'Voq is a Chrome extension for reading the web. For audiobooks and phone listening, ElevenReader does more.'],
  ],
  sourcesNote: 'Chrome Web Store rating checked 7 Oct 2026. Themes summarised from App Store and Chrome Web Store reviews and independent reviews.',
  tableNote: 'ElevenReader details from elevenreader.io/pricing and the ElevenLabs help centre, checked 7 Oct 2026. Prices and limits can change.',
};
export default page;
