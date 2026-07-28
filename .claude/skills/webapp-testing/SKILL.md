---
name: webapp-testing
description: Use this after building or changing any part of a website or web app. Actually opens the site in a browser to check that it renders correctly, works on mobile screen sizes, and has no errors — instead of assuming the code works just because it compiles.
---

# Webapp Testing

After making any change to the site, don't just say it's done — actually verify it.

## Process

1. Start the local dev server if it isn't already running (e.g. `npm run dev`).
2. Open the site in a browser and take a screenshot of the full page.
3. Check the browser console for errors or warnings — report any found.
4. Resize the browser to a mobile width (around 375px) and screenshot again to confirm the layout doesn't break.
5. Click through any interactive elements (buttons, forms, nav links) to confirm they actually do something, not just look clickable.
6. If anything looks broken, misaligned, or throws an error, fix it before telling the user the task is done.

## Reporting back

Summarize what you checked and what you found — don't just say "looks good." If you found and fixed an issue, say what it was.
