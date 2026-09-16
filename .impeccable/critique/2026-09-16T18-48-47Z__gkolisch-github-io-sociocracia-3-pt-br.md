---
target: o site (home, mapa de padroes, padrao, glossario, busca, busca assistida) - 2a rodada
total_score: 28
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 1
timestamp: 2026-09-16T18-48-47Z
slug: gkolisch-github-io-sociocracia-3-pt-br
---
# Critique (2a rodada) — Site Sociocracia 3.0 (pt-BR)

Method: dual-agent (A: ses_f54747328ffeN7wbyfkcHBrAMp · B: ses_f54746e3fffes2p5ckNcO7aPQZ)

Target: o site (home, mapa de padroes, padrao, glossario, busca, busca assistida).

## Design Health Score

| # | Heuristica | Score | Problema-chave |
|---|-----------|:----:|-----------|
| 1 | Visibilidade do status | 3 | Filtro e busca assistida sem contagem; busca do cabecalho sem estado de carregando |
| 2 | Mundo real | 3 | Menu diz Assistente, pagina diz Busca assistida, ao lado de Busca |
| 3 | Controle e liberdade | 3 | Filtro sem estado na URL |
| 4 | Consistencia | 3 | Tres raios de chip (999/999/6) |
| 5 | Prevencao de erro | 3 | Envio vazio silencioso |
| 6 | Reconhecer em vez de lembrar | 3 | Nomes crus sem o porque |
| 7 | Flexibilidade e eficiencia | 2 | No mobile, busca/nav do topo somem e a barra lateral nao tem Busca/Assistente |
| 8 | Estetico e minimalista | 2 | Home empilha 3 grades (~22 cartoes) |
| 9 | Recuperar de erros | 3 | Erro generico sem tentar de novo |
| 10 | Ajuda e documentacao | 3 | Falta explicar o que e um padrao |
| **Total** | | **28/40** | **Bom (70%)** |

## Veredito de especificidade

Conteudo autoral, casca generica. Custou de 24 para 28.

Scan determinístico: [] (limpo). Evidencia de navegador: overflowX 0 em todas as paginas/viewports; 0 erros de console; 0 HTTP >=400; fluxo da busca assistida funciona; unico ofensor e o skip-link fora da tela (falso positivo).

## Impressao geral

Base solida, mas a correcao do overflow criou regressao: no mobile a busca sumiu; e a home tem tres grades competindo.

## O que esta funcionando

1. Disciplina de tokens batendo com o DESIGN.md.
2. Faixa "Comece por situacao" (mais autoral do site).
3. Busca assistida bem construida (import preguicoso, timeouts, escape, fallback, nota honesta).

## Problemas prioritarios

1. [P0] No mobile nao ha busca alcancavel: .topsearch e nav.top display:none e a barra lateral nao tem Busca/Assistente. Comando: /impeccable adapt
2. [P1] Home com tres grades de navegacao (~22 cartoes). Comando: /impeccable distill + layout
3. [P2] Chips de situacao sem explicacao e estilo indefinido; titulos longos viram mini-cartoes 6px contra a regra "pilula em etiquetas"; caixas estreitas e largas lado a lado. Comando: /impeccable polish
4. [P2] Dois nomes para busca (Assistente vs Busca assistida vs Busca). Comando: /impeccable clarify
5. [P3] Filtro sem estado nem contagem; #estrutura-organizacional sem class="cat" e nunca e filtrado. Comando: /impeccable polish

## Bandeiras por persona

- Jordan: nomes crus sem resumo; parede de 10 categorias; nada explica o que e "padrao".
- Sam: falta :focus-visible em .chip/.toggle/.qa-btn; navs sem rotulo; grupo de chips sem rotulo; main sem tabindex=-1.
- Casey: P0 (sem busca no mobile); .filtro sticky pode desalinhar.
- Membro de coletivo ativista novo: falta roteiro ordenado de primeira reuniao (item aberto do PRODUCT.md).

## Observacoes menores

- Faltam og:image, og:url, twitter:image.
- Verificar resumos[p.slug] vs entrada.id no mapa.
- Tres raios de chip sem mapeamento no DESIGN.md.
- min-width inutil de .topsearch input/.filtro input no mobile.
- Grupo Padroes aberto por padrao.

## Perguntas para considerar

1. Por que a faixa por situacao termina em nomes crus em vez de um roteiro de primeira reuniao?
2. Trocando o texto por outro manual, o que sobra alem do verde?
3. Busca em tres lugares e dois nomes: descoberta ou demonstracao?
