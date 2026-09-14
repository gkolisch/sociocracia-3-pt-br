# Sociocracia 3.0 em português do Brasil

Site do guia prático de Sociocracia 3.0 em pt-BR, gerado com [Astro](https://astro.build) a partir
dos arquivos Markdown em `pt-BR/`.

## Estrutura

- `pt-BR/` — conteúdo-fonte em Markdown (glossário, princípios, conceitos, 78 padrões, apêndice).
- `src/content.config.ts` — coleções de conteúdo lendo direto de `pt-BR/`.
- `src/data/padroes.ts` — categorias, títulos e ordem dos padrões.
- `src/pages/` — rotas do site.
- `reference/` — guia original em inglês (referência, não entra no build).

## Requisitos

Node 20 ou superior.

## Comandos

```bash
npm install      # instala as dependências
npm run dev      # servidor de desenvolvimento
npm run build    # gera o site em dist/ e indexes de busca (Pagefind)
npm run preview  # pré-visualiza o build
```

## Publicação no GitHub Pages

O workflow em `.github/workflows/deploy.yml` publica no GitHub Pages a cada push em `master`/`main`.

1. No repositório, em Settings → Pages, escolha **Source: GitHub Actions**.
2. Faça push. O site fica em `https://<usuario>.github.io/<repositorio>/`.

O `base` do Astro é calculado no build a partir do nome do repositório (`BASE_PATH`). Para publicar
em um domínio próprio ou em um site de usuário, defina as variáveis `BASE_PATH` e `SITE_URL`.

## Licença

Conteúdo derivado de *Um guia prático para evoluir organizações ágeis e resilientes com
Sociocracia 3.0*, de James Priest, Bernhard Bockelbrink e Liliana David, sob
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
