# Veritus Tech: Landing Page

Landing page da Veritus Tech (infraestrutura de TI), construída com **React + Vite**, totalmente responsiva (desktop e mobile)

---

## Tecnologias

| Camada | Ferramenta |
| --- | --- |
| Biblioteca de UI | React 18 |
| Build e dev server | Vite 5 |
| Estilo | CSS puro com design tokens (custom properties), sem framework |
| Tipografia | Sora, Instrument Sans e JetBrains Mono (Google Fonts) |
| Ícones | SVG próprio (`ui/Icon.jsx`) + logos de marca (`ui/TechLogo.jsx`) |
| Deploy | Vercel |

Sem dependências de runtime além de `react` e `react-dom`: todo o resto (grid,
animações, menu, carrossel de valores) é HTML, CSS e JavaScript próprios.

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
        │   ├── ValuesMarquee.jsx / .css  # Faixa animada com os cinco valores
        │   ├── Solutions.jsx / .css      # Grid bento de 10 soluções
        │   ├── Values.jsx / .css         # Nossos Valores (destaque + 4 cards)
        │   ├── About.jsx / .css          # Quem somos + card do fundador
        │   ├── Audience.jsx / .css       # Para quem + Missão/Visão
        │   ├── Faq.jsx / .css            # Dúvidas frequentes
        │   └── Contact.jsx / .css        # Canais de contato
        └── ui/
            ├── Logo.jsx
            ├── Icon.jsx        # Ícones de traço, referenciados por nome
            ├── TechLogo.jsx    # Logos oficiais da stack (MongoDB, React...)
            └── useReveal.js    # Hook de animação de entrada
```
