import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import GithubSlugger from 'github-slugger';

const here = dirname(fileURLToPath(import.meta.url));
const base = (process.env.BASE_PATH || '/').replace(/\/+$/, '') + '/';

const permitidos = new Set(
  [
    'motivador organizacional',
    'requisito',
    'domínio',
    'governança',
    'política',
    'objeção',
    'preocupação',
    'intervenção',
    'entregável',
    'condições propiciadoras',
    'resultado pretendido',
    'critérios de aceitação',
    'fluxo de valor',
    'lista de pendências',
    'livro de registro',
    'restrição padrão',
    'ocupante do papel',
    'responsabilização',
    'equivalência',
    'complexidade',
  ].map((t) => t.toLowerCase()),
);

function carregarGlossario() {
  const caminho = join(here, '..', '..', 'pt-BR', 'glossario.md');
  const linhas = readFileSync(caminho, 'utf8').split('\n');
  const slugger = new GithubSlugger();
  const termos = [];
  let atual = null;
  const paragrafo = [];

  const fechar = () => {
    if (atual && paragrafo.length) {
      const definicao = paragrafo.join(' ').replace(/\s+/g, ' ').trim();
      if (permitidos.has(atual.termo.toLowerCase())) {
        termos.push({ ...atual, definicao });
      }
    }
    paragrafo.length = 0;
  };

  for (const linha of linhas) {
    const titulo = /^(#{1,6})\s+(.*)$/.exec(linha);
    if (titulo) {
      fechar();
      const id = slugger.slug(titulo[2].trim());
      if (titulo[1].length === 2) {
        const termo = titulo[2].replace(/\s*\([^)]*\)\s*$/, '').trim();
        atual = { termo, anchor: id };
      } else {
        atual = null;
      }
      continue;
    }
    if (atual && linha.trim() && !linha.startsWith('#')) {
      paragrafo.push(linha.trim());
    }
  }
  fechar();

  return termos.sort((a, b) => b.termo.length - a.termo.length);
}

const termos = carregarGlossario();
const escapar = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const padroes = termos.map((t) => ({
  ...t,
  regex: new RegExp(`(^|[^\\p{L})])(${escapar(t.termo)})(?![\\p{L}])`, 'iu'),
}));

function dentroDeLink(ancestrais) {
  return ancestrais.some((a) => a && a.type === 'element' && a.tagName === 'a');
}

function processarParagrafo(children, usados, ancestrais) {
  for (const padrao of padroes) {
    if (usados.has(padrao.termo)) continue;
    for (let i = 0; i < children.length; i++) {
      const no = children[i];
      if (!no || no.type !== 'text') continue;
      const m = padrao.regex.exec(no.value);
      if (!m) continue;
      const inicio = m.index + m[1].length;
      const fim = inicio + padrao.termo.length;
      const antes = no.value.slice(0, inicio);
      const meio = no.value.slice(inicio, fim);
      const depois = no.value.slice(fim);
      const link = {
        type: 'element',
        tagName: 'a',
        properties: {
          href: `${base}glossario/#${padrao.anchor}`,
          title: padrao.definicao,
          class: 'glossario-link',
        },
        children: [{ type: 'text', value: meio }],
      };
      const novos = [];
      if (antes) novos.push({ type: 'text', value: antes });
      novos.push(link);
      if (depois) novos.push({ type: 'text', value: depois });
      children.splice(i, 1, ...novos);
      usados.add(padrao.termo);
      break;
    }
  }
}

function percorrer(node, usados, ancestrais) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node.children)) {
    if (node.type === 'element' && node.tagName === 'p' && !dentroDeLink(ancestrais)) {
      processarParagrafo(node.children, usados, ancestrais);
    }
    for (const filho of node.children) {
      percorrer(filho, usados, [...ancestrais, node]);
    }
  }
}

export function rehypeGlossaryTooltips() {
  return (tree) => {
    percorrer(tree, new Set(), []);
  };
}
