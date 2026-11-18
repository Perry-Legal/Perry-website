# Perry Marketing Website

A modern marketing site built with [Next.js](https://nextjs.org), [Shadcn UI](https://ui.shadcn.com), and [Tailwind CSS](https://tailwindcss.com).

## Getting started

Install dependencies:

```bash
npm ci
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Add Shadcn components

```bash
npx shadcn@latest add <component-name>
```

## Deploy to Vercel

This project is ready to deploy on [Vercel](https://vercel.com):

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project in the Vercel dashboard.
3. Vercel will detect Next.js automatically — no extra configuration required.
4. Vercel will use npm automatically from `package-lock.json`.

Or deploy from the CLI:

```bash
npx vercel
```

## Newsroom thumbnails

Article cards on `/newsroom` are landscape (`aspect-video`, 16:9). Share images are wide, about 1200x630 (1.91:1) or 16:9. Save them as WebP in `public/press/` and set the optional `image` field in `src/lib/newsroom.ts`. Do not use portrait thumbnails, and do not change the cards to a portrait frame: `object-cover` would crop most of the picture.

`npm run build` checks `public/press/` and warns if a thumbnail is portrait or far from that landscape ratio.

## Scripts

| Command          | Description              |
| ---------------- | ------------------------ |
| `npm run dev`    | Start development server |
| `npm run build`  | Create production build  |
| `npm run start`  | Run production server    |
| `npm run lint`   | Run ESLint               |
