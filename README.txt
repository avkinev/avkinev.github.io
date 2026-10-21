LITERARY WEBSITE v6 — SIMPLE EDITING / ПРОСТОЕ РЕДАКТИРОВАНИЕ

IMPORTANT: UNZIP THIS ARCHIVE BEFORE UPLOADING TO GITHUB.
On GitHub upload the individual files, NOT the .zip archive itself.

WHAT CHANGED
- index.html / style.css / author.jpg: burgundy front page, author photo left,
  large bilingual name right, and two clickable story choices.
- ru.md: Russian prose. Edit THIS FILE when correcting or adding Russian stories.
- en.md: English prose. Edit THIS FILE for English edits and future translations.
- ru.html / en.html: small fixed Jekyll templates; usually never edit these.
- social.js: automatically makes the table of contents from Markdown headings;
  also contains the optional social links (empty until configured).
- Copyright notice and print-only watermark on reading pages.

FIRST UPLOAD — PERFORM ONCE
1. Unzip this folder on your computer.
2. In GitHub open https://github.com/avkinev/avkinev.github.io/tree/main
   Make sure you are looking at the MAIN branch (not a past commit).
3. Add file > Upload files. Drag the 8 website files from the extracted
   folder: index.html, ru.html, en.html, ru.md, en.md, style.css,
   social.js, author.jpg. README.txt is optional. Commit changes.
4. Open https://github.com/avkinev/avkinev.github.io and verify the eight
   website filenames are visible in the TOP-LEVEL list (no subfolder).
5. Under Actions/Pages check that the deployment succeeded.
6. Open https://avkinev.github.io/ and test both language options.
   Hard reload (Ctrl+F5) if you see old styling.
   NOTE: the ru.html/en.html templates must be viewed online after GitHub Pages
   builds them; double-clicking those templates on your computer will display
   unprocessed Jekyll tags.

WEEKLY EDITING — NO CHATGPT NEEDED
1. Open https://github.com/avkinev/avkinev.github.io/blob/main/ru.md
   or https://github.com/avkinev/avkinev.github.io/blob/main/en.md
2. Click the pencil icon (Edit this file).
3. Change text, or append a new heading and paragraphs at the very end:

   ## 2. Название второго рассказа

   Первый абзац...

   Второй абзац...

4. Click Commit changes. GitHub Pages regenerates the reading page.
   The table of contents is built automatically from every heading that
   begins with ##. The first ## heading is the Introduction.

RULES
- Keep the Markdown headings starting with ##; do not edit HTML for stories.
- Add only stories you intend to publish immediately. This is a PUBLIC repository.
- Keep your master manuscripts separately on your computer.
- Do not create a .nojekyll file: GitHub Pages must process Liquid/Jekyll tags
  in ru.html and en.html, to convert the Markdown to HTML.
- The two story URLs stay /ru.html and /en.html; no new links to publish each week.
- The no-copy behavior is a small deterrent, not real copyright security.

If the pages show a Jekyll syntax string instead of a story, check Settings >
Pages > Build and deployment. The site needs ordinary GitHub Pages Jekyll
processing (Deploy from a branch); no third-party build needed.
