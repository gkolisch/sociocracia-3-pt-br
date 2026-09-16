---
target: o site (home, mapa de padroes, padrao, glossario, assistente, busca)
total_score: 24
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
timestamp: 2026-09-16T17-42-36Z
slug: gkolisch-github-io-sociocracia-3-pt-br
---
# Critique — Site Sociocracia 3.0 (pt-BR)

Method: dual-agent (A: ses_f54ba3d55ffeiFEECG6i5YyS6C · B: ses_f54ba36c5ffeO5oVl6P1bs0rye)

Target: o site (home, mapa de padrões, padrão, glossário, assistente, busca) · superfície Read com trecho Operate.

## Design Health Score

| # | Heurística | Score | Problema-chave |
|---|-----------|:----:|-----------|
| 1 | Visibilidade do status | 2 | Navegação do topo sem estado ativo; aria-label do menu mobile não vira "Fechar" |
| 2 | Mundo real | 3 | Copy didática, mas rótulos soltam jargão (Framework de senso comum, ICPT, domínios) |
| 3 | Controle e liberdade | 2 | Assistente tiro único; sem topo; sem tema manual |
| 4 | Consistência | 3 | Padrões / Todos os padrões / Mapa de padrões divergem |
| 5 | Prevenção de erro | 2 | Envio vazio silencioso; innerHTML sem escape |
| 6 | Reconhecer em vez de lembrar | 2 | 78 padrões em parede única; barra lateral sem padrões |
| 7 | Flexibilidade e eficiência | 2 | Sem busca no cabeçalho, sem atalhos, sem filtro no mapa |
| 8 | Estético e minimalista | 3 | Contido; repete o mesmo cartão em três níveis |
| 9 | Recuperar de erros | 2 | Fallback do assistente bom; resto só no console |
| 10 | Ajuda e documentação | 3 | É documentação; falta "como usar este site" |
| **Total** | | **24/40** | **Aceitável** |

## Veredito de especificidade

Intercambiável como categoria, com fina camada autoral. Disciplina de cor é do produto; link pontilhado do glossário é autoral; composição é de docs genérico. North Star "O Caderno da Assembleia" quase não aparece na tela.

Scan determinístico: 19 achados advisory em src/styles/global.css (14 font-size, 5 radius), majoritariamente falsos positivos (detector só lê frontmatter). Reais: raios de 8px em .toggle/.qa-input/.qa-btn (linhas 99/267/283) e tamanhos fora da escala.

Evidência de navegador: 6 páginas x 2 viewports, zero erros de console e zero HTTP >=400; fluxo do assistente funciona; overflow horizontal de 11px em todas as páginas no mobile, causado por button.toggle. Sem overlay injetado (sem ferramenta nativa; script próprio). Prints em Temp/opencode/shots.

## Impressão geral

Calmo, honesto e bem-feito; falta caráter e um caminho para quem chega sem o vocabulário do método. Maior oportunidade única: porta de entrada por situação (já registrada no PRODUCT.md).

## O que está funcionando

1. Disciplina de cor incomum, aplicada no código.
2. Link de glossário como recurso de leitura (sublinhado pontilhado + title).
3. Sinais de confiança alinhados ao público (sem conta, sem rastreio, CC BY-SA, sem marketing).

## Problemas prioritários

1. [P1] Overflow horizontal no mobile (11px em todas as páginas). Corrigir cabeçalho no breakpoint. /impeccable adapt
2. [P1] Sem porta de entrada por situação. Faixa "Comece por situação" com 5-6 tarefas verbais e caminhos curtos. /impeccable shape
3. [P1] Mapa de 78 cartões sem filtro nem índice. Filtro (texto + chips de categoria) e trilho fixo; distinto peso visual para categoria. /impeccable layout
4. [P2] Busca como destino e "Assistente" que promete demais; innerHTML sem escape. Campo de busca no cabeçalho; renomear/reenquadrar, exemplos clicáveis, estado sem resposta; escapar valores. /impeccable clarify + harden
5. [P3] Acessibilidade/teclado (skip link, foco, aria, reduced-motion, alvos, glossário só em title) + deriva de tokens. /impeccable audit + polish

## Bandeiras por persona

- Jordan (iniciante): 16 cartões sem "comece aqui"; jargão cedo; três nomes para um destino; salto de âncora sem contexto; assistente sem exemplos clicáveis.
- Sam (acessibilidade/teclado): sem skip link; foco permanece no botão após resultados; aria-label do menu não atualiza; glossário só em title; smooth sem reduced-motion; alvos pequenos.
- Casey (mobile): overflow 11px; cabeçalho com cinco elementos; mapa em coluna infinita; .padnav 1fr 1fr comprime títulos; barra lateral empurra o conteúdo.
- Rita (coletivo novo, pouco jargão - persona do projeto): vocabulário de entrada é o do guia; sem roteiro curto para imprimir/compartilhar; "Nada encontrado" sem fallback; privacidade abaixo da dobra.

## Observações menores

- Span morto em padroes/[slug].astro:34.
- Logs de console em produção (assistente.astro:43).
- Sem meta Open Graph/Twitter apesar de compartilhamento de links.
- Sem theme-color e sem alternância manual de tema.
- Breadcrumb do padrão mostra só a categoria, não o título.

## Perguntas para considerar

1. Se o North Star é "O Caderno da Assembleia", onde está o caderno?
2. E se a primeira pergunta da home fosse "O que vocês precisam fazer agora?"
3. O rótulo "assistente" é honesto para uma busca por palavras - e o que ele faz com a confiança quando a resposta não vem?
