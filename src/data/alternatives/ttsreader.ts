// /alternative/ttsreader — facts checked 7 Oct 2026 (ttsreader.com pricing docs, Chrome Web Store, ttsreader.com/x).
import { type AltPage, VOQ_PRICE, STEPS } from './types';

const page: AltPage = {
  competitor: 'TTSReader',
  title: 'Free TTSReader Alternative for Chrome — Voq',
  description: 'Looking for a TTSReader alternative? Voq reads any webpage aloud in natural voices for free, with no sign-in. See how Voq and TTSReader compare on voices, price and the Chrome extension.',
  h1: 'The free TTSReader alternative for Chrome',
  sub: 'Natural voices on the page you’re reading. Free, no trial, no sign-in.',
  chips: ['Free natural voices', 'No sign-in', 'Free Chrome extension', '34 languages'],
  price: {
    voq: VOQ_PRICE,
    them: { label: 'TTSReader Premium', big: '$99', unit: '/year', note: 'or $10.99/month · free: browser voices, 5,000 AI characters' },
  },
  reviewsLede: 'TTSReader’s free web app is popular, clean and ad-free. Its natural AI voices and new Chrome extension are paid.',
  ratings: [
    { score: '4.5', where: 'Chrome Web Store', count: 'New extension · 8 ratings · 3K users' },
  ],
  loves: [
    ['Free web app.', 'Paste text and listen with browser voices — unlimited, no login.'],
    ['No ads.', 'A clean interface with no ads or tracking.'],
    ['Audio export.', 'Download MP3s, with commercial rights on Premium.'],
    ['Voice choice.', 'Voices from Google, Microsoft and OpenAI across many languages.'],
  ],
  gripes: [
    ['Robotic free voices.', 'Unlimited free listening uses your browser’s built-in voices.'],
    ['A tiny AI allowance.', 'Free accounts get 5,000 characters of AI voices in total — not per month.'],
    ['A paid extension.', 'The new Chrome extension needs Premium after a free trial, with Google or Apple sign-in.'],
    ['Price.', 'Premium is $10.99/month or $99/year.'],
  ],
  pickVoq: ['Listening on the page you’re reading', 'Natural voices without paying', 'A free extension, no sign-in', 'A low price if you do upgrade'],
  pickThem: ['Exporting MP3 audio files', 'Commercial use of the audio', 'Mixing voices in one file', 'An iPhone app with CarPlay'],
  rows: [
    ['Free voices', 'Natural', true, 'Browser voices; 5,000 AI characters', false],
    ['Paid price', '$2/month founding rate', null, '$99/year or $10.99/month', null],
    ['Chrome extension', 'Free', true, 'Paid after trial', false],
    ['Sign-in', 'None', true, 'Google or Apple (extension)', false],
    ['Read-along highlighting', 'Yes', true, 'Yes', true],
    ['MP3 export', 'No', false, 'Premium', true],
    ['Apps', 'Chrome only', false, 'Web, Chrome, iOS', true],
  ],
  why: [
    ['5,000', 'AI characters, free', 'About five minutes of natural voice — in total.'],
    ['Paid', 'Chrome extension', 'Free trial, then Premium.'],
    ['$99', 'A year for AI voices', 'Or $10.99/month.'],
    ['Robotic', 'Free voices', 'Unlimited, but it’s your browser’s voice.'],
  ],
  steps: STEPS,
  faqs: [
    ['Is Voq a good free alternative to TTSReader?', 'Yes, for reading in Chrome.', 'Voq’s free Chrome extension uses natural voices. TTSReader’s free voices are your browser’s built-in ones, and its new extension is paid after a trial.'],
    ['Is TTSReader free?', 'The web app is.', 'Browser voices are free and unlimited. Natural AI voices are limited to 5,000 characters on the free plan.'],
    ['How much is TTSReader Premium?', '$10.99/month or $99/year.', 'Pay-as-you-go credits start at $10 for 200,000 characters. Voq removes its daily limit for $2/month at the founding rate.'],
    ['Is the TTSReader Chrome extension free?', 'No.', 'Its listing says it has a free trial but is not a free extension, and it needs Google or Apple sign-in.'],
    ['Can Voq export MP3s like TTSReader?', 'No.', 'Voq is for listening while you read. For downloadable audio files, TTSReader does more.'],
    ['Do I need to sign in to Voq?', 'No.', 'Not to use it and not to pay — Premium uses a code, not an account.'],
  ],
  sourcesNote: 'Chrome Web Store rating checked 7 Oct 2026. Strengths and limits summarised from TTSReader’s own pricing and extension pages and independent reviews.',
  tableNote: 'TTSReader details from ttsreader.com pricing and its Chrome extension listing, checked 7 Oct 2026. Prices and limits can change.',
};
export default page;
