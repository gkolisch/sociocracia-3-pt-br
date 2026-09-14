import data from './padroes.json';

export type Padrao = { slug: string; titulo: string; en: string };

export type Categoria = {
  id: string;
  titulo: string;
  en: string;
  descricao: string;
  padroes: Padrao[];
};

export const categorias = data as unknown as Categoria[];

export const estrutura = {
  slug: 'estrutura-organizacional',
  titulo: 'Estrutura organizacional',
  en: 'Organizational Structure',
};

export const todosPadroes: Padrao[] = categorias.flatMap((c) => c.padroes);

export const tituloPorSlug: Record<string, string> = Object.fromEntries(
  todosPadroes.map((p) => [p.slug, p.titulo]),
);

export const categoriaPorSlug: Record<string, Categoria> = Object.fromEntries(
  categorias.flatMap((c) => c.padroes.map((p) => [p.slug, c])),
);
