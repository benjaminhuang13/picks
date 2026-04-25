# CLAUDE.md — Picks Project

## Architecture

React + Vite SPA. React Router v6 with `basename="/picks"` (GitHub Pages base path).

- `src/data/sports.js` — master registry; each sport needs `id`, `label`, `icon`, `color`, `statLabels`
- `src/data/<sport>.js` — exports `teams[]`, `players{}` (keyed by teamId), `games{}` (keyed by teamId)
- `src/data/index.js` — `getSportData(sportId)` — single import point; add new sports here
- `src/pages/SportPage.jsx` — generic page, works for all sports via `sport` prop
- `src/components/` — NavBar, TeamSummary, PlayerTable, RecentGames (each has paired `.css`)

## Key Commands

```bash
npm run dev       # dev server at localhost:5173/picks/
npm run build     # production build → dist/
npm run preview   # preview build at localhost:4173/picks/
npm run deploy    # build + push to gh-pages branch
```

## Deployment

Base path is `/picks/` — set in `vite.config.js` as `base: '/picks/'`.

SPA routing on GitHub Pages: `public/404.html` catches 404s, stores path in `sessionStorage`, redirects to `/picks/`. `index.html` restores the path on load.

If deploying to a different repo name, update both `vite.config.js` `base` and the path strip in `public/404.html`.

## Code Conventions

- Co-located CSS: each component/page has `ComponentName.css` in same folder
- CSS variables in `src/styles/global.css` (colors, spacing, radius, shadow)
- `--sport-color` CSS var drives per-league accent colors via inline style
- No TypeScript, no Tailwind — plain CSS modules-style co-location
- No test suite currently

## Data Shape

Every sport's data module must match:

```js
// teams: array of objects
{ id, name, wins, losses, ptsPg/ERA/etc, rank, conf }

// players: object keyed by teamId, value = array
{ id, name, pos, stat1, stat2, stat3, stat4 }

// games: object keyed by teamId, value = array (newest first)
{ opponent, date, win, score, oppScore, stat1, stat2, stat3 }
```

`statLabels` in `sports.js` maps `stat1–4` and `teamStat1–4` to display strings.

## Adding a Sport

1. `src/data/<sport>.js` — follow shape above
2. `src/data/sports.js` — add to `SPORTS` array
3. `src/data/index.js` — import and add to `DATA` map

## Common Pitfalls

- `base` in `vite.config.js` must match repo name exactly (including `/`)
- `BrowserRouter basename` in `App.jsx` must match `base` (without trailing slash)
- GitHub Pages 404.html redirect strips the base prefix before storing — update if base changes
- `stat4` can be `null` for players where it doesn't apply (e.g. pitchers in MLB, defenders in NFL)
- `games` arrays should be sorted newest-first; `RecentGames` takes `slice(0, gameCount)`
