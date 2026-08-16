# Camilo Calderon — Digital Portfolio

A responsive, bilingual (EN/ES) static portfolio for Dr Camilo Calderon — Senior Lecturer in Economics, Student Experience Director and SPGA Digital Champion at City St George's, University of London — plus a targeted Tesla landing page.

## Pages

- `index.html` — profile, Digital Champion section (interactive course infrastructure, TutorialX, AI-marking evaluation, digital-twin media), selected work, experience, education, publications and contact
- `tesla.html` — targeted contribution map for Tesla applications (intentionally not linked from the main navigation)
- `assets/camilo-calderon-digital-cv.pdf` — privacy-safe, digital-focused CV for public download

## Assets

- `assets/camilo-calderon-headshot.jpg` — hero portrait (web-optimised)
- `assets/calderon-poster.jpg` — stylised poster used on the Tesla page
- `assets/digital-twin.mp4` + `assets/digital-twin-poster.jpg` — looping expression-calibration clip for the digital-twin card
- `assets/og-card.jpg` — social sharing card (Open Graph / Twitter)
- `favicon.svg` — CC monogram favicon

Raw source exports (`ChatGPT Image*.png`, `download.mp4`) stay out of version control via `.gitignore`; only web-optimised copies are committed.

## Preview

Open `index.html` in a browser. The header toggle switches English/Spanish and remembers the visitor's choice; the digital-twin clip pauses off-screen and respects `prefers-reduced-motion`.

## Publish

The folder is a plain static site — it works on AI Studio app hosting, GitHub Pages, Netlify, Cloudflare Pages or Vercel. After pushing to GitHub, re-sync/redeploy the app in Google AI Studio so the hosted version at `camilo-digital-portfolio.ai.studio` picks up the changes.
