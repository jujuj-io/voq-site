// /alternative/read-aloud — "Read Aloud: A Text to Speech Voice Reader" extension. Facts checked 7 Oct 2026
// (Chrome Web Store, Firefox Add-ons reviews, independent reviews).
import { type AltPage, VOQ_PRICE, STEPS } from './types';

const page: AltPage = {
  competitor: 'Read Aloud',
  title: 'Read Aloud Extension Alternative with Natural Voices — Voq',
  description: 'Looking for a Read Aloud alternative? Voq reads any webpage in natural AI voices for free — no API keys, no account. See how Voq and the Read Aloud extension compare.',
  h1: 'A Read Aloud alternative with natural voices',
  sub: 'Read Aloud is free but robotic by default. Voq reads any webpage in natural voices — free, with no setup.',
  chips: ['Natural voices free', 'No API keys', 'No account', '34 languages'],
  price: {
    voq: VOQ_PRICE,
    them: { label: 'Read Aloud', big: '$0', note: 'Free browser voices · natural voices need an in-app purchase or your own API key' },
  },
  reviewsLede: 'Read Aloud is one of the most-installed free readers on Chrome. The complaints are about voice quality and reliability.',
  ratings: [
    { score: '4.1', where: 'Chrome Web Store', count: '3.6K ratings · 6M users' },
    { score: '3.8', where: 'Firefox Add-ons', count: '1.3K reviews · 19% are 1-star' },
  ],
  loves: [
    ['Free and open source.', 'No account, no limits on built-in voices, code on GitHub.'],
    ['Simple.', 'One click reads the current article.'],
    ['Works widely.', 'Chrome, Firefox and Edge; PDFs, Google Docs and Kindle.'],
    ['Flexible.', 'Advanced users can plug in Google, Amazon or OpenAI voices with their own API keys.'],
  ],
  gripes: [
    ['Robotic voices.', 'The default browser voices sound dated.'],
    ['Stalling.', 'Users report it stuttering, loading for a while, then giving up.'],
    ['Setup for better voices.', 'Natural voices mean an in-app purchase or configuring API keys.'],
    ['Toolbar clutter.', 'Some users want more control over the icon and controls.'],
  ],
  pickVoq: ['Natural voices with zero setup', 'Listening to webpages in Chrome', 'No sign-up, nothing to configure', 'A small upgrade if you need it'],
  pickThem: ['Firefox and Edge', 'Open-source software', 'Bringing your own API keys', '40+ languages'],
  rows: [
    ['Free voices', 'Natural', true, 'Browser (robotic) voices', false],
    ['Natural voices', 'Included free', true, 'In-app purchase or own API key', false],
    ['Setup', 'None', true, 'API keys for cloud voices', false],
    ['Account', 'None', true, 'None', true],
    ['Languages', '34 + auto-detect', true, '40+', true],
    ['Word highlighting', 'Yes', true, 'Yes', true],
    ['Browsers', 'Chrome', null, 'Chrome, Firefox, Edge', true],
    ['Open source', 'No', false, 'Yes', true],
  ],
  why: [
    ['Robotic', 'Default voices', 'Free means your browser’s built-in voices.'],
    ['API keys', 'For better voices', 'Or an in-app purchase.'],
    ['19%', 'Of Firefox reviews are 1-star', 'Mostly voice quality and stalling.'],
  ],
  steps: STEPS,
  faqs: [
    ['Is Voq a good alternative to Read Aloud?', 'Yes, if you want natural voices.', 'Both are free. Read Aloud uses your browser’s voices by default; Voq uses natural AI voices with no setup.'],
    ['Is Read Aloud free?', 'Yes.', 'The extension and browser voices are free. Cloud voices from Google, Amazon, Microsoft or OpenAI need an in-app purchase or your own API key.'],
    ['Why does Read Aloud sound robotic?', 'It uses your browser’s built-in voices.', 'Those depend on your operating system. Voq streams natural voices instead.'],
    ['Does Voq need API keys or an account?', 'No.', 'Install it and press play. Natural voices are included.'],
    ['Does Voq work in Firefox like Read Aloud?', 'No.', 'Voq is a Chrome extension. Read Aloud also runs in Firefox and Edge.'],
  ],
  sourcesNote: 'Ratings from the Chrome Web Store and Firefox Add-ons, checked 7 Oct 2026. Themes summarised from user reviews on those sites and independent reviews.',
  tableNote: 'Read Aloud details from its Chrome Web Store listing and independent reviews, checked 7 Oct 2026.',
};
export default page;
