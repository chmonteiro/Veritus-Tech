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

**Regra de manutenção:** cada seção tem seu próprio `.jsx` (estrutura) e `.css`
(estilo). Para alterar **textos, contatos ou links**, edite apenas
`src/data/content.js`: nenhum componente precisa ser tocado.

---

## Rodando localmente

```bash
# 1. Instalar dependências (Node 18+)
npm install

# 2. Servidor de desenvolvimento
npm run dev
# → http://localhost:5173

# 3. Build de produção (opcional, para testar)
npm run build
npm run preview
```

---

## Versionamento no GitHub

```bash
git init
git add .
git commit -m "feat: landing page inicial Veritus Tech"

# Crie um repositório vazio no GitHub e conecte:
git remote add origin https://github.com/SEU_USUARIO/veritus-tech.git
git branch -M main
git push -u origin main
```

Fluxo sugerido para atualizações futuras:

```bash
git checkout -b ajuste/nome-da-mudanca   # nova branch
# ...edite os arquivos...
git add .
git commit -m "fix: descrição curta da mudança"
git push origin ajuste/nome-da-mudanca
# Abra um Pull Request no GitHub e faça merge na main
```

---

## Publicando na Vercel (plano gratuito)

1. Acesse [vercel.com](https://vercel.com) e faça login com o GitHub.
2. Clique em **Add New → Project** e importe o repositório `veritus-tech`.
3. A Vercel detecta o Vite automaticamente:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Clique em **Deploy**. Pronto: cada `git push` na `main` publica
   automaticamente uma nova versão.

O projeto já vem otimizado para o plano gratuito: build minificado,
chunk separado do React (`vendor`), fontes com `display=swap`,
sem dependências além de React/ReactDOM.

---

## Responsividade

- Container central com `max-width: 1120px` e margem lateral fluida
  (`--gutter`), garantindo respiro em qualquer tela.
- Grid de soluções: 3 colunas (desktop) → 2 (tablet) → 1 (mobile).
- Menu vira hamburguer abaixo de 860px.
- Textos longos (e-mail) quebram com `overflow-wrap: anywhere` para
  nunca invadirem outros elementos.
- `overflow-x: hidden` no body impede rolagem horizontal acidental.
- Animações respeitam `prefers-reduced-motion` (acessibilidade).
