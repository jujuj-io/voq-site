#!/usr/bin/env node
/**
 * Exports the homepage demo audio to static files: public/demo/<lang>.mp3
 *
 * Each language is fetched from the Voq Worker's /demo route, which synthesizes
 * it once and caches it in KV. Files that already exist for the current text
 * are skipped, so re-running this costs nothing. Run from the repo root:
 *
 *   node scripts/build-demo-audio.mjs          # only missing/changed languages
 *   node scripts/build-demo-audio.mjs --force  # re-download everything
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';

const ENDPOINT = 'https://voq-tts.julesignaciocanlas.workers.dev/demo';
const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'public/demo');
const MANIFEST = path.join(OUT_DIR, 'manifest.json');
const force = process.argv.includes('--force');

const demo = JSON.parse(await readFile(path.join(ROOT, 'src/data/demo.json'), 'utf8'));
const manifest = existsSync(MANIFEST) ? JSON.parse(await readFile(MANIFEST, 'utf8')) : {};
const hash = (s) => crypto.createHash('sha256').update(s).digest('hex').slice(0, 16);
await mkdir(OUT_DIR, { recursive: true });

let failed = 0;
for (const [lang, { text }] of Object.entries(demo.voices)) {
  const file = path.join(OUT_DIR, `${lang}.mp3`);
  if (!force && existsSync(file) && manifest[lang] === hash(text)) {
    console.log(`✓ ${lang} already up to date`);
    continue;
  }
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: 'https://getvoq.com' },
    body: JSON.stringify({ lang }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.audioContent) {
    console.error(`✗ ${lang}: ${data.error || res.status}${data.details ? ' ' + data.details.slice(0, 200) : ''}`);
    failed++;
    continue;
  }
  if (data.text !== text) {
    console.error(`✗ ${lang}: text in src/data/demo.json doesn't match the Worker's DEMO config — update and redeploy the Worker`);
    failed++;
    continue;
  }
  await writeFile(file, Buffer.from(data.audioContent, 'base64'));
  manifest[lang] = hash(text);
  console.log(`↓ ${lang} saved (${Math.round(Buffer.byteLength(data.audioContent, 'base64') / 1024)} KB)`);
}
await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
if (failed) { console.error(`\n${failed} language(s) failed.`); process.exit(1); }
console.log('\nAll demo audio saved to public/demo/.');
