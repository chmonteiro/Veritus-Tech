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
│   └── favicon.svg
└── src/
    ├── main.jsx                # Entry point do React
    ├── App.jsx                 # Monta as seções na ordem da página
    ├── styles/
    │   ├── variables.css       # Design tokens (cores, fontes, espaçamentos)
    │   └── globals.css         # Reset, utilitários, botões, animações
    ├── data/
    │   └── content.js          # TODO o texto do site: edite aqui!
    └── components/
        ├── layout/             # Header (nav + menu mobile) e Footer
        ├── sections/           # Uma pasta por seção da página
        │   ├── Hero.jsx / .css
        │   ├── ValuesMarquee.jsx / .css   # Valores animados (loop infinito)
        │   ├── Solutions.jsx / .css       # Grid de 9 soluções
        │   ├── Process.jsx / .css         # 5 etapas de trabalho
        │   ├── Audience.jsx / .css        # Para quem + Missão/Visão
        │   └── Contact.jsx / .css         # Canais de contato
        └── ui/                 # Peças reutilizáveis (Logo, hook de animação)
```



## Responsividade

- Container central com `max-width: 1120px` e margem lateral fluida
  (`--gutter`), garantindo respiro em qualquer tela.
- Grid de soluções: 3 colunas (desktop) → 2 (tablet) → 1 (mobile).
- Menu vira hamburguer abaixo de 860px.
- Textos longos (e-mail) quebram com `overflow-wrap: anywhere` para
  nunca invadirem outros elementos.
- `overflow-x: hidden` no body impede rolagem horizontal acidental.
- Animações respeitam `prefers-reduced-motion` (acessibilidade).
