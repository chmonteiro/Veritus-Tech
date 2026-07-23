# Veritus Tech: Landing Page

Landing page institucional da Veritus Tech (infraestrutura de TI), construída com **React + Vite**, totalmente responsiva (desktop e mobile) e otimizada para publicação gratuita na **Vercel**.

---

## Estrutura de pastas

```
veritus-tech/
├── index.html                  # HTML base (SEO, fontes, meta tags)
├── package.json
├── vite.config.js              # Build otimizado para Vercel
├── public/
│   ├── favicon.svg
│   └── fundador.jpg            # Foto da seção "Quem somos"
└── src/
    ├── main.jsx                # Entry point do React
    ├── App.jsx                 # Monta as seções na ordem da página
    ├── styles/
    │   ├── variables.css       # Design tokens (cores, fontes, espaçamentos)
    │   └── globals.css         # Reset, utilitários, botões, blindagem mobile
    ├── data/
    │   └── content.js          # TODO o texto do site: edite aqui!
    ├── lib/
    │   └── whatsapp.js         # Link do WhatsApp com mensagem pré-preenchida
    └── components/
        ├── layout/
        │   ├── Header.jsx / .css       # Barra do topo + hamburguer
        │   ├── MobileMenu.jsx / .css   # Menu em tela cheia
        │   ├── StickyCta.jsx / .css    # CTA fixo (mobile) e flutuante (desktop)
        │   └── Footer.jsx / .css
        ├── sections/           # Uma dupla .jsx/.css por seção da página
        │   ├── Hero.jsx / .css           # Título + painel de status
        │   ├── ValuesMarquee.jsx / .css  # Valores animados (loop infinito)
        │   ├── Solutions.jsx / .css      # Grid bento de 10 soluções
        │   ├── Process.jsx / .css        # Timeline de 5 etapas
        │   ├── About.jsx / .css          # Quem somos + cartão do fundador
        │   ├── Audience.jsx / .css       # Para quem + Missão/Visão
        │   ├── Faq.jsx / .css            # Dúvidas frequentes
        │   └── Contact.jsx / .css        # Canais de contato
        └── ui/
            ├── Logo.jsx
            ├── Icon.jsx        # Conjunto de ícones, referenciado por nome
            └── useReveal.js    # Hook de animação de entrada
```

## Como editar

Quase tudo que se quer mudar está em dois arquivos:

- **Texto, links e contatos:** `src/data/content.js`. Nenhum texto fica dentro
  de componente.
- **Cores, fontes e espaçamentos:** `src/styles/variables.css`.

Dois pontos do `content.js` têm restrição de layout, anotada em comentário no
próprio arquivo:

- **Grid de soluções:** os cartões com `wide: true` ocupam 2 colunas. Hoje são
  8 simples + 2 largos = 12 unidades, que fecham 4 linhas exatas em 3 colunas.
  Ao acrescentar ou remover um serviço, refaça a conta para não sobrar buraco.
- **Menu do topo:** `nav` são os itens da barra do desktop e `navExtra` os que
  só aparecem no menu mobile. A barra comporta cerca de 5 itens; ver a nota do
  breakpoint abaixo antes de acrescentar mais.

## Responsividade

- Container central com `max-width: 1180px` e margem lateral fluida
  (`--gutter`), que aperta para 18px abaixo de 420px.
- Grid de soluções: 3 colunas (desktop) → 2 (tablet) → 1 (mobile).
- Processo: timeline horizontal no desktop e vertical abaixo de 560px.
- **Menu vira hamburguer abaixo de 1024px**, e não de 860px como seria de
  esperar: logo + 5 itens + botão ocupam cerca de 895px de largura natural, e
  antes disso o header espremia a navegação em vez de colapsar. Ao mexer nos
  itens do menu, remeça essa largura antes de confiar no breakpoint.
- O CTA fixo do rodapé acompanha o mesmo breakpoint: onde não há botão no
  header, ele assume. `--safe-cta` reserva o espaço para ele não cobrir o
  rodapé.
- Textos longos (e-mail) quebram com `overflow-wrap` para nunca invadirem
  outros elementos, e os filhos de flex que contêm texto levam `min-width: 0`
  (sem isso o texto força a largura do pai e estoura o grid).
- `overflow-x: hidden` no body impede rolagem horizontal acidental.
- Alvos de toque de no mínimo 44px em toda a navegação.
- Animações respeitam `prefers-reduced-motion` (acessibilidade).

## Uma armadilha de CSS já paga

`globals.css` é importado **antes** do `App` no `main.jsx`, de propósito: ele é
a camada base, e o CSS dos componentes precisa vencer os empates de
especificidade. Na ordem inversa, `.btn { display: inline-flex }` do global
vencia `.header__cta { display: none }` do componente, e o botão do WhatsApp
continuava visível no mobile, causando 89px de rolagem horizontal.

Pelo mesmo motivo, a regra que esconde aquele botão é `.btn.header__cta`, com
duas classes. Parece redundante, mas não é.
