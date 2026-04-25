# Picks — Sports Analytics Dashboard

Browse team and player performance across major sports leagues. Built with React + Vite, deployable to GitHub Pages.

## Features

- **4 leagues**: NBA, NFL, MLB, NHL
- Team selector per league
- Team summary with key stats (wins/losses, offensive/defensive metrics)
- Sortable player stats table
- Horizontally scrollable recent games (last 5 / 10 / 20)
- Responsive dark UI — desktop and mobile
- Stat window recalculates automatically when you change game count

## Local Setup

```bash
npm install
npm run dev
# → http://localhost:5173/picks/
```

## Build

```bash
npm run build
# Output: dist/
```

Preview the build locally:

```bash
npm run preview
# → http://localhost:4173/picks/
```

## Deploy to GitHub Pages

1. Set `base` in `vite.config.js` to match your repo name: `base: '/your-repo-name/'`
2. Update `404.html` redirect to strip the same prefix
3. Run:

```bash
npm run deploy
```

This builds and pushes `dist/` to the `gh-pages` branch via `gh-pages`.

Make sure GitHub Pages is set to serve from the `gh-pages` branch in repo Settings → Pages.

## Adding a New Sport

1. Create `src/data/<sport>.js` — export `teams`, `players`, `games` matching existing shape
2. Add entry to `src/data/sports.js` `SPORTS` array with `id`, `label`, `icon`, `color`, `statLabels`
3. Import in `src/data/index.js`
4. Done — routing and UI pick it up automatically

## Adding Real API Data

`src/data/index.js` exports `getSportData(sportId)`. Swap the static imports for async fetches there; the pages already use `useMemo` and can be upgraded to `useEffect` + loading states.

## Folder Structure

```
src/
  components/       # NavBar, TeamSummary, PlayerTable, RecentGames
  data/             # Mock JSON per sport + sports registry
  pages/            # HomePage, SportPage
  styles/           # global.css
public/
  404.html          # GitHub Pages SPA routing redirect
```
