import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(readFileSync(join(here, '..', 'data', 'padroes.json'), 'utf8'));

const base = (process.env.BASE_PATH || '/').replace(/\/+$/, '') + '/';

const semAcento = (s) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();

const mapa = new Map();
for (const categoria of data) {
  for (const padrao of categoria.padroes) {
    mapa.set(semAcento(padrao.titulo), padrao.slug);
  }
}

const textoDoNo = (node) =>
  Array.isArray(node.children)
    ? node.children.map((c) => (c.type === 'text' ? c.value : '')).join('')
    : '';

function percorrer(node) {
  if (!node || typeof node !== 'object') return;

  if (node.type === 'element' && node.tagName === 'em') {
    const slug = mapa.get(semAcento(textoDoNo(node)));
    if (slug) {
      node.tagName = 'a';
      node.properties = { href: `${base}padroes/${slug}/` };
    }
    return;
  }

  if (Array.isArray(node.children)) node.children.forEach(percorrer);
}

export function rehypeLinkPatterns() {
  return (tree) => percorrer(tree);
}
