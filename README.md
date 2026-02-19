# Personal Website

A modern single-page personal portfolio template for a software engineer.

## Features

- Hero section with concise personal intro
- Resume highlights timeline
- Project cards generated from JavaScript data
- Contact section with social links
- Responsive layout for desktop and mobile
- Ready for GitHub Pages deployment

## Local development

Because this is a static site, you can open `index.html` directly in the browser.

If you prefer a local server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your default branch), folder `/ (root)`
4. Save, wait for deployment, and open the provided site URL.

## Customize quickly

- Edit page copy in `index.html`
- Update colors/layout in `styles.css`
- Add/replace projects in `script.js`
- Replace contact links with your real profiles
