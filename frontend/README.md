# Smart Shelf — Frontend

React + Vite frontend for the exam prep portal. Talks to the Express backend
at `http://localhost:5000/api`. Right now it also falls back to placeholder
mock data (see `src/mockData.js`) whenever a backend route isn't built yet,
so you can demo the full click-through before the backend is finished.

## First-time setup

1. Copy this whole `frontend` folder into the root of your `smart-shelf`
   repo (next to the existing `smart-shelf` backend folder), on your
   `frontend` git branch.
2. Open a terminal inside `frontend/` and run:
   ```
   npm install
   npm run dev
   ```
3. Open the URL it prints (usually `http://localhost:5173`).

## What you'll see right now

Since the backend's routes/controllers folders are still empty, every
API call will fail and silently fall back to the mock data in
`src/mockData.js` — you'll see a warning in the browser console each
time this happens, that's expected, not a bug.

## Once the backend routes are filled in

- Make sure the backend is running on port 5000 (`npm run dev` inside
  the `smart-shelf` backend folder).
- The frontend will automatically start using real data the moment
  each endpoint responds successfully — no frontend code changes needed.
- Once all 4 endpoints work, delete the `catch` fallbacks in `src/api.js`
  and delete `src/mockData.js` entirely.

## File structure

```
frontend/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx          entry point
    ├── App.jsx           main flow: courses -> semesters -> subjects -> materials
    ├── api.js            all backend fetch calls + mock fallback
    ├── mockData.js        placeholder data — delete once backend is live
    ├── index.css          all styling
    └── components/
        ├── Breadcrumb.jsx
        ├── CardGrid.jsx
        └── MaterialList.jsx
```
