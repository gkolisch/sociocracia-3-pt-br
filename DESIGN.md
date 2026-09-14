---
name: Sociocracia 3.0 (pt-BR)
description: Guia prático de Sociocracia 3.0 em português do Brasil
colors:
  primary: "#2f6f4f"
  primary-bright: "#6cc49a"
  ink: "#1f2328"
  ink-muted: "#57606a"
  paper: "#ffffff"
  surface: "#f6f7f9"
  line: "#d8dee4"
  night-bg: "#0f1216"
  night-surface: "#161b22"
  night-line: "#2a313a"
  night-ink: "#e6edf3"
typography:
  display:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    letterSpacing: "0.04em"
rounded:
  sm: "6px"
  md: "10px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "16px 18px"
  card-hover:
    backgroundColor: "{colors.paper}"
  nav-link:
    textColor: "{colors.ink-muted}"
    typography: body
    padding: "6px 12px"
  nav-link-active:
    textColor: "{colors.primary}"
  padnav-link:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  glossary-link:
    textColor: "{colors.ink}"
  search-input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    height: "40px"
---

# Design System: Sociocracia 3.0 (pt-BR)

## Overview

**Creative North Star: "O Caderno da Assembleia"**

O sistema parece o caderno de estudo bem usado de um grupo autogerido: folhas claras, tinta escura, uma única
cor de marca que marca o que dá para fazer. Nada compete com o texto, porque o texto é o produto. A densidade é
média, de manual de leitura, com bordas e respiros que separam blocos sem cercar demais.

A cor de marca é rara por princípio: ela aparece em links, seleção e foco. O resto vive em neutros frios, para
que a ação nunca dispute atenção com o conteúdo. O verde é verde de assembleia: sóbrio, não publicitário.

O acento muda no tema escuro, mas a lógica é a mesma: um verde único, mais claro, sobre um fundo quase preto,
para manter a leitura confortável de noite, quando muita gente estuda.

**Key Characteristics:**
- Um único acento (verde) dedicado a link, seleção e foco.
- Neutros frios, com fundo claro e texto escuro; inverso no tema escuro.
- Superfícies planas com borda e cantos suaves; sem sombra decorativa.
- Tipografia de sistema, legível e sem carregamento de fontes.
- Coluna de leitura estreita com navegação lateral que acompanha a página.

## Colors

Paleta contida: um verde de ação sobre neutros frios, com inversão de luminosidade no tema escuro.

### Primary
- **Verde Assembleia** (#2f6f4f): link, item de navegação ativo e foco. Usado com parcimônia, nunca como decoração.
- **Verde Assembleia Claro** (#6cc49a): a mesma função no tema escuro, com contraste suficiente sobre a noite.

### Neutral
- **Papel** (#ffffff): fundo de página no tema claro e fundo de cartões elevados.
- **Superfície** (#f6f7f9): fundo de blocos, citações e cartões em repouso.
- **Linha** (#d8dee4): bordas, divisores e contorno de cartões.
- **Tinta** (#1f2328): texto de conteúdo e títulos.
- **Tinta Suave** (#57606a): texto secundário, legendas, rótulos e trilha de navegação.
- **Noite** (#0f1216), **Noite Superfície** (#161b22), **Noite Linha** (#2a313a), **Noite Tinta** (#e6edf3): a mesma hierarquia no tema escuro.

### Named Rules
**A Regra do Verde Raro.** O verde da marca cobre menos de 10% de qualquer tela. Ele marca ação e foco; nunca decora.

## Typography

**Body Font:** system-ui (com -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif)

**Character:** Tipografia de sistema, familiar e neutra, escolhida para não competir com o texto e não custar
carregamento. A hierarquia é feita por tamanho e peso, não por família.

### Hierarchy
- **Display** (700, 2rem, 1.2): título da página, um por tela.
- **Title** (700, 1.4rem, 1.3): seções, com filete inferior discreto.
- **Body** (400, 17px, 1.65): texto corrente e listas; coluna de leitura com largura confortável.
- **Label** (600, 0.72rem, 0.04em, maiúsculas): rótulos de navegação entre padrões e micro-títulos.

## Layout

Grade de duas colunas: uma barra lateral de navegação fixa de 18rem e uma coluna de leitura fluida, sob um
cabeçalho fixo. A largura máxima do conjunto é 76rem, centralizada, com respiro lateral de 1,25rem. Abaixo de
52rem a barra lateral vira um menu colapsável e a grade passa a uma coluna. O ritmo vertical usa 8 e 16px para
espaçamento interno e 24 a 40px entre blocos; títulos de seção abrem com respiro maior.

## Elevation & Depth

O sistema é **plano por padrão**. A profundidade vem de bordas de 1px e de mudanças de tom (Papel sobre
Superfície), não de sombras. A elevação, quando existe, é resposta a estado: um cartão clareia no hover e a
navegação de padrão ganha fundo, mas nada flutua na tela.

### Named Rules
**A Regra do Plano.** Superfícies repousam planas. Borda e tom fazem a separação; sombra não é usada para decoração.

## Shapes

Cantos suaves e constantes: 6px em controles (entrada de busca, botões), 10px em blocos e cartões, e pílula
(999px) em etiquetas. O contorno padrão é uma borda de 1px na cor Linha; a geometria é retangular, sem recortes
ou silhuetas exóticas.

## Components

### Cards
- **Corner Style:** 10px.
- **Background:** Superfície em repouso, Papel no hover.
- **Shadow Strategy:** nenhuma; ver Elevation & Depth.
- **Border:** 1px Linha.
- **Internal Padding:** 16px 18px, com título em Title e resumo em 0.92rem na cor Tinta Suave.

### Navigation
- **Style:** itens de texto na cor Tinta Suave, com estado ativo em Verde Assembleia e peso 600.
- **Hover:** texto escurece para Tinta; sem fundo colorido.
- **Mobile:** a barra vira menu colapsável acionado por botão no cabeçalho.

### Pattern Navigation (signature)
- **Style:** dois blocos Anterior/Próximo lado a lado, separados por um filete superior, com rótulo em Label maiúsculo e o título do padrão abaixo.
- **Hover:** fundo Superfície; sem sombra.

### Glossary Link (signature)
- **Style:** texto na cor herdada com sublinhado pontilhado em Verde Assembleia e `cursor: help`; a definição aparece no `title`.
- **Hover:** texto assume o verde, sem sublinhado.

### Search Input
- **Style:** campo do Pagefind sobre Papel, borda Linha, raio 6px.
- **Focus:** borda em Verde Assembleia com anel suave.

## Do's and Don'ts

### Do:
- **Do** usar o verde da marca só em link, seleção e foco.
- **Do** manter o texto de conteúdo em 17px com line-height 1.65 e contraste AA.
- **Do** dar estado visível a tudo que é clicável: hover, foco e ativo.
- **Do** usar os tokens de cor (Papel, Superfície, Linha, Tinta) em vez de valores soltos.
- **Do** manter os cantos em 6px para controles e 10px para blocos.

### Don't:
- **Don't** usar o verde para decoração ou para estados que não sejam de ação.
- **Don't** adicionar sombras decorativas nem flutuar superfícies em repouso.
- **Don't** usar borda colorida grossa de um só lado como enfeite.
- **Don't** trocar a tipografia de sistema por fontes que atrasem a leitura ou quebrem a acentuação.
- **Don't** inventar depoimentos, métricas de uso ou textos de marketing.
