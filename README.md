This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Retours

- Le cas est plutôt sympa dans son ensemble. Je pense que ça permets de voir déjà pas mal de chose tant en terme de design que de la qualité du code et la façon de l'organiser.
- Je n'ai pas pris le temps de passer en typescript.
- Je me suis efforcé d'abstraire un maximum de choses pour que le code soit le plus lisible possible. Cependant je pense qu'à certains endroits j'aurai pu faire encore un peu mieux et être plus concis. Il est possible qu'il reste quelques morceaux de code qui soient dupliqués.
- Point sur lequel j'ai pas eu forcément de faire tout comme je le désirais, c'est le style avec tailwind. Je n'ai pas utilisé de lib externe. La responsivite est plus que moyenne du coup. Et il y à également trop de style inline à mon goût. Je suis plus habitué à utiliser un système de variants quand on a le temps via Stitches (https://stitches.dev/) ou cva (https://cva.style/docs)
- Pour l'affichage des types, je n'ai remarqué que vers la fin qu'il fallait les afficher au dessus de l'input et non en dessous.
