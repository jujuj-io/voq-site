// One file per competitor in this folder → one page at /alternative/<filename>.
// Competitor facts carry a "checked" date in sourcesNote/tableNote: re-verify before editing numbers.
export type Tick = boolean | null; // true = check, false = cross, null = no icon
export interface AltPage {
  competitor: string;
  title: string;
  description: string;
  h1: string;
  sub: string;
  chips: string[];
  price: {
    voq: { big: string; note: string };
    them: { label: string; big: string; unit?: string; note: string };
  };
  reviewsLede: string;
  ratings: { score: string; where: string; count: string }[];
  loves: [string, string][];
  gripes: [string, string][];
  pickVoq: string[];
  pickThem: string[];
  rows: [string, string, Tick, string, Tick][];
  why: [string, string, string][];
  steps: [string, string][];
  faqs: [string, string, string][];
  sourcesNote: string;
  tableNote: string;
}

export const VOQ_PRICE = {
  big: '$0',
  note: 'Natural voices free every day · $2/mo founding rate removes the daily limit',
};
export const STEPS: [string, string][] = [
  ['Add Voq to Chrome', 'Free, no sign-up'],
  ['Open any page', 'Articles, AI chats, Reddit…'],
  ['Press play', 'Words highlight as it reads'],
];
