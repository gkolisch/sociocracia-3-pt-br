import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  padroes: defineCollection({
    loader: glob({ pattern: '*.md', base: './pt-BR/padroes' }),
  }),
  paginas: defineCollection({
    loader: glob({ pattern: '*.md', base: './pt-BR' }),
  }),
  apendice: defineCollection({
    loader: glob({ pattern: '*.md', base: './pt-BR/apendice' }),
  }),
};
