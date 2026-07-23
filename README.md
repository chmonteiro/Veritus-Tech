# Veritus Tech: Landing Page

Landing page da Veritus Tech (infraestrutura de TI), construída com **React + Vite**, totalmente responsiva (desktop e mobile) e otimizada para publicação gratuita na **Vercel**.

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

