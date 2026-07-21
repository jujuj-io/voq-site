#!/usr/bin/env node
/**
 * Auto-translation pipeline for the Voq site.
 *
 * Scans English source content (blog posts, platform guides, and the
 * home/pricing/privacy dictionaries) and generates translations for every
 * other supported locale whenever the English source is new or has changed.
 *
 * Requires ANTHROPIC_API_KEY in the environment. Designed to be run from the
 * repo root, either locally (`node scripts/translate-content.mjs`) or from
 * the `.github/workflows/auto-translate.yml` GitHub Action.
 */

import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = process.cwd();
const LOCALES = ['ar', 'de', 'es', 'fr', 'it', 'ja', 'nl', 'pl', 'pt', 'zh-CN'];
const LOCALE_NAMES = {
  ar: 'Arabic', de: 'German', es: 'Spanish', fr: 'French', it: 'Italian',
  ja: 'Japanese', nl: 'Dutch', pl: 'Polish', pt: 'Portuguese', 'zh-CN': 'Simplified Chinese',
};

const MODEL = process.env.TRANSLATE_MODEL || 'claude-sonnet-5';
const API_KEY = process.env.ANTHROPIC_API_KEY;
const STATE_PATH = path.join(ROOT, '.translations', 'state.json');

const BLOG_EN_DIR = path.join(ROOT, 'src/content/blog/en');
const PLATFORMS_EN_DIR = path.join(ROOT, 'src/content/platforms/en');
const I18N_PAGES_DIR = path.join(ROOT, 'src/i18n/pages');

function sha256(text) {
  return crypto.createHash('sha256').update(text, 'utf8').digest('hex');
}

async function loadState() {
  if (!existsSync(STATE_PATH)) return {};
  try {
    return JSON.parse(await readFile(STATE_PATH, 'utf8'));
  } catch {
    return {};
  }
}

async function saveState(state) {
  await mkdir(path.dirname(STATE_PATH), { recursive: true });
  await writeFile(STATE_PATH, JSON.stringify(state, null, 2) + '\n', 'utf8');
}

async function callClaude(systemPrompt, userPrompt) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Anthropic API error ${res.status}: ${body}`);
  }
  const data = await res.json();
  return data.content.map((b) => b.text || '').join('');
}

function extractJson(raw) {
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/);
  const text = fenced ? fenced[1] : raw;
  return JSON.parse(text.trim());
}

// --- Frontmatter helpers for blog markdown -------------------------------

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return { frontmatter: {}, body: raw };
  const [, fmBlock, body] = m;
  const frontmatter = {};
  for (const line of fmBlock.split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    frontmatter[key] = val;
  }
  return { frontmatter, body };
}

function stringifyFrontmatter(frontmatter, body) {
  const lines = Object.entries(frontmatter).map(([k, v]) => {
    const needsQuotes = /:/.test(String(v)) || /^\d{4}-\d{2}-\d{2}$/.test(String(v)) === false && k === 'pubDate';
    if (k === 'pubDate') return `${k}: ${v}`;
    return `${k}: "${String(v).replace(/"/g, '\\"')}"`;
  });
  return `---\n${lines.join('\n')}\n---\n${body}`;
}

// --- Translators ----------------------------------------------------------

async function translateBlogPost(slug, raw, locale) {
  const { frontmatter, body } = parseFrontmatter(raw);
  const prompt = `Translate this blog post from English to ${LOCALE_NAMES[locale]} for a Chrome extension's marketing site (Voq, a text-to-speech extension).

Rules:
- Preserve Markdown structure exactly (headings, links, lists, formatting).
- Do NOT translate the URL inside any Markdown link, e.g. keep [text](URL) with the same URL — only translate the link text.
- Do NOT translate product names: Voq, Chrome, ChatGPT, Claude, Gemini, Reddit, Hacker News, Stack Overflow, Perplexity.
- Keep the tone natural and native-sounding, not a literal word-for-word translation.

Return ONLY a JSON object with this exact shape, no other text:
{"title": "...", "description": "...", "body": "..."}

Title: ${frontmatter.title}
Description: ${frontmatter.description}

Body:
${body}`;

  const raw_response = await callClaude(
    'You are a professional translator localizing marketing content. You always respond with valid JSON only.',
    prompt
  );
  const { title, description, body: translatedBody } = extractJson(raw_response);

  const newFrontmatter = {
    title,
    description,
    pubDate: frontmatter.pubDate,
    lang: locale,
  };
  return stringifyFrontmatter(newFrontmatter, translatedBody.endsWith('\n') ? translatedBody : translatedBody + '\n');
}

async function translatePlatform(json, locale) {
  const prompt = `Translate this platform guide JSON from English to ${LOCALE_NAMES[locale]} for a Chrome extension's marketing site (Voq, a text-to-speech extension).

Rules:
- Translate "description", "metaDescription", and every string in "steps".
- Do NOT translate "name" or "slug" (proper nouns / URL slugs) — copy them exactly as given.
- Do NOT translate product/site names mentioned inside the text (Voq, Chrome, ChatGPT, Claude, Gemini, Reddit, Hacker News, Stack Overflow, Perplexity, chat.openai.com, etc.) or URLs.
- Keep the same number of steps, in the same order.
- Keep the tone natural and native-sounding.

Return ONLY a JSON object with this exact shape, no other text:
{"name": "...", "slug": "...", "description": "...", "metaDescription": "...", "steps": ["...", "..."]}

Source JSON:
${JSON.stringify(json, null, 2)}`;

  const raw_response = await callClaude(
    'You are a professional translator localizing marketing content. You always respond with valid JSON only.',
    prompt
  );
  const translated = extractJson(raw_response);
  return { ...translated, lang: locale };
}

async function translatePageDict(pageName, enEntry, locale) {
  const prompt = `Translate this page-content JSON object from English to ${LOCALE_NAMES[locale]} for "${pageName}" page of Voq, a free Chrome text-to-speech extension's marketing site.

Rules:
- Translate every human-readable string value, including inside nested arrays/objects.
- Preserve the exact JSON key structure — same keys, same nesting, same array lengths.
- Preserve any HTML tags found inside string values (e.g. <br />) exactly as-is, just translate the surrounding text.
- Do NOT translate product/site names (Voq, Chrome, ChatGPT, Claude, Gemini, Reddit, Hacker News, Stack Overflow, Perplexity) or numbers/prices (e.g. "$2/mo").
- Keep the tone natural, native-sounding marketing copy — not a literal translation.

Return ONLY the translated JSON object, no other text.

Source JSON:
${JSON.stringify(enEntry, null, 2)}`;

  const raw_response = await callClaude(
    'You are a professional translator localizing marketing content. You always respond with valid JSON only.',
    prompt
  );
  return extractJson(raw_response);
}

// --- Main pipeline ----------------------------------------------------------

async function processBlog(state, changed) {
  if (!existsSync(BLOG_EN_DIR)) return;
  const files = (await readdir(BLOG_EN_DIR)).filter((f) => f.endsWith('.md'));
  for (const file of files) {
    const srcPath = path.join(BLOG_EN_DIR, file);
    const raw = await readFile(srcPath, 'utf8');
    const hash = sha256(raw);
    const stateKey = `blog/${file}`;
    state.blog = state.blog || {};
    state.blog[stateKey] = state.blog[stateKey] || {};

    for (const locale of LOCALES) {
      const outDir = path.join(ROOT, 'src/content/blog', locale);
      const outPath = path.join(outDir, file);
      const prevHash = state.blog[stateKey][locale];
      if (prevHash === hash && existsSync(outPath)) continue; // up to date

      console.log(`Translating blog/${file} -> ${locale}`);
      const translated = await translateBlogPost(file.replace(/\.md$/, ''), raw, locale);
      await mkdir(outDir, { recursive: true });
      await writeFile(outPath, translated, 'utf8');
      state.blog[stateKey][locale] = hash;
      changed.push(`src/content/blog/${locale}/${file}`);
    }
  }
}

async function processPlatforms(state, changed) {
  if (!existsSync(PLATFORMS_EN_DIR)) return;
  const files = (await readdir(PLATFORMS_EN_DIR)).filter((f) => f.endsWith('.json'));
  for (const file of files) {
    const srcPath = path.join(PLATFORMS_EN_DIR, file);
    const raw = await readFile(srcPath, 'utf8');
    const hash = sha256(raw);
    const json = JSON.parse(raw);
    const stateKey = `platforms/${file}`;
    state.platforms = state.platforms || {};
    state.platforms[stateKey] = state.platforms[stateKey] || {};

    for (const locale of LOCALES) {
      const outDir = path.join(ROOT, 'src/content/platforms', locale);
      const outPath = path.join(outDir, file);
      const prevHash = state.platforms[stateKey][locale];
      if (prevHash === hash && existsSync(outPath)) continue;

      console.log(`Translating platforms/${file} -> ${locale}`);
      const translated = await translatePlatform(json, locale);
      await mkdir(outDir, { recursive: true });
      await writeFile(outPath, JSON.stringify(translated, null, 2) + '\n', 'utf8');
      state.platforms[stateKey][locale] = hash;
      changed.push(`src/content/platforms/${locale}/${file}`);
    }
  }
}

async function processPageDicts(state, changed) {
  if (!existsSync(I18N_PAGES_DIR)) return;
  const files = (await readdir(I18N_PAGES_DIR)).filter((f) => f.endsWith('.json'));
  for (const file of files) {
    const filePath = path.join(I18N_PAGES_DIR, file);
    const raw = await readFile(filePath, 'utf8');
    const dict = JSON.parse(raw);
    const enEntry = dict.en;
    if (!enEntry) continue;
    const enHash = sha256(JSON.stringify(enEntry));
    const stateKey = `pages/${file}`;
    state.pages = state.pages || {};
    state.pages[stateKey] = state.pages[stateKey] || {};

    let fileChanged = false;
    for (const locale of LOCALES) {
      const prevHash = state.pages[stateKey][locale];
      if (prevHash === enHash && dict[locale]) continue;

      console.log(`Translating pages/${file} -> ${locale}`);
      dict[locale] = await translatePageDict(file.replace(/\.json$/, ''), enEntry, locale);
      state.pages[stateKey][locale] = enHash;
      fileChanged = true;
    }
    if (fileChanged) {
      await writeFile(filePath, JSON.stringify(dict, null, 2) + '\n', 'utf8');
      changed.push(`src/i18n/pages/${file}`);
    }
  }
}

async function main() {
  if (!API_KEY) {
    console.error('ANTHROPIC_API_KEY is not set. Aborting.');
    process.exit(1);
  }

  const state = await loadState();
  const changed = [];

  await processBlog(state, changed);
  await processPlatforms(state, changed);
  await processPageDicts(state, changed);

  await saveState(state);

  if (changed.length === 0) {
    console.log('Nothing to translate — all locales up to date.');
  } else {
    console.log(`\nUpdated ${changed.length} file(s):`);
    changed.forEach((f) => console.log(` - ${f}`));
  }

  // Emit for the GitHub Action to pick up whether there's anything to commit.
  if (process.env.GITHUB_OUTPUT) {
    await writeFile(process.env.GITHUB_OUTPUT, `changed=${changed.length > 0}\n`, { flag: 'a' });
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
