FIX v9 — ONLY TWO FILES

This patch replaces ONLY ru.html and en.html in the ROOT of the main branch.
Do not change ru.md, en.md, index.html, social.js, style.css, or the photo.

The notice is inserted as a visible HTML element below the last story.
For multiple stories, a small inline script repeats it between stories.
This version does not depend on editing social.js or style.css.

CHECK UPLOAD AND DEPLOYMENT:
1. On GitHub, open ru.html in the main branch. Click Code; its file should
   contain 'copyright-v9'. If it doesn't, the upload did NOT replace ru.html.
2. Check GitHub Actions: the most recent Pages build must be successful.
3. Open https://avkinev.github.io/ru.html?version=9 in a NEW private window.
   Copyright should appear below the story even if scripts are disabled.
4. Ctrl+P: a large diagonal watermark should overlay the printed page.
   Depending on print settings/browser, some print features may differ.

Full original stories/Markdown texts are UNCHANGED.
