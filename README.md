# Madiha Memon — Portfolio (React + Vite + Tailwind CSS)

Same design as the original static site, now built with React, JavaScript and Tailwind CSS,
plus a floating **"Madiha's AI" chatbot** on the right side of the page.

## Run locally
```bash
npm install
npm run dev
```
Open the URL Vite prints (usually http://localhost:5173).
In `npm run dev` the chatbot answers from its built-in offline answers (`src/lib/localBot.js`).
To test the real AI locally, use `npx vercel dev` instead (needs the env vars below).

## Turn on the AI chatbot
The chatbot calls `/api/chat` (`api/chat.js`, a Vercel serverless function) which talks to Claude.
The key stays on the server, never in the browser.

1. Create a key at https://console.anthropic.com
2. In Vercel → Project → Settings → Environment Variables add:
   - `ANTHROPIC_API_KEY` = your key
   - `CLAUDE_MODEL` = `claude-haiku-5-5` (optional, this is the default)
3. Redeploy.

If the key is missing or the API is down, the chatbot automatically falls back to the offline answers,
so visitors never see an error.

## Deploy on Vercel
1. Push this folder to GitHub.
2. vercel.com → Add New → Project → pick the repo.
3. Framework Preset: **Vite** (auto-detected). Build command `npm run build`, output `dist`. Deploy.

## Where to edit things
| What | File |
| --- | --- |
| Skills, projects, leadership, email, social links, resume path | `src/data.js` (website **and** chatbot both read this) |
| Social icons | `src/socials.js` |
| Colors, fonts, animations (original design CSS) | `src/index.css` |
| Chatbot look & behaviour | `src/components/Chatbot.jsx` |
| Chatbot personality / rules | `buildSystemPrompt()` in `api/chat.js` |
| Offline chatbot answers | `src/lib/localBot.js` |
| Video, photos, resume PDF | `public/assets/` (keep the same file names) |

## Notes
- Tailwind's `preflight` reset is disabled in `tailwind.config.js` so the original design is not changed.
  The chatbot is written fully with Tailwind utilities.
- Keep your API key out of GitHub: `.env` is already in `.gitignore`.
