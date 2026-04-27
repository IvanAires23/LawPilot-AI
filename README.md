# LawPilot

Landing page do LawPilot (Lexora AI), construida com React + Vite e estilizada com Tailwind CSS.

## Sobre o projeto

Este repositorio contem a landing institucional do produto, com secoes de:
- Hero
- Desafios do mercado juridico
- Funcionalidades
- Como funciona
- Casos de uso
- Beneficios
- Depoimentos
- Planos
- FAQ
- CTA final

## Stack

- React 19
- Vite 8
- Tailwind CSS 3
- Framer Motion
- Radix UI
- Lucide React

## Requisitos

- Node.js 18+
- npm 9+

## Como rodar localmente

```bash
npm install
npm run dev
```

Aplicacao local: `http://localhost:5173`

## Scripts

- `npm run dev`: inicia ambiente de desenvolvimento
- `npm run build`: gera build de producao em `dist/`
- `npm run preview`: sobe preview local da build
- `npm run lint`: executa ESLint

## Estrutura principal

```text
src/
  components/
    layout/
    sections/
    ui/
  data/
  lib/
```

## Deploy no Vercel

O projeto possui configuracao em `vercel.json` com:
- framework: `vite`
- comando de build: `npm run build`
- pasta de saida: `dist`

Fluxo rapido:

```bash
npm install -g vercel
vercel
```

Para producao:

```bash
vercel --prod
```

## Licenca

Uso interno / privado.