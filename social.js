/* Вставьте свои адреса после открытия Telegram, Дзена и X.
   Пока поле пустое, соответствующая ссылка не выводится. */
const socialLinks = {
  telegram: '',  // https://t.me/your_channel
  dzen: '',      // https://dzen.ru/your_channel
  x: ''          // https://x.com/your_account
};
const lang = document.documentElement.lang;
const labels = {telegram:'Telegram', dzen:lang==='ru'?'Дзен':'Dzen', x:'X'};
const social = document.querySelector('.social');
for (const [service, url] of Object.entries(socialLinks)) {
  if (!url || !/^https:\/\//i.test(url)) continue;
  const link = document.createElement('a');
  link.href = url;
  link.textContent = labels[service];
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  social.append(link);
}


// v6: Build a clickable table of contents from every story heading in Markdown.
// First H2 = Introduction. Every following H2 = a new story.
const reading = document.querySelector('.reading');
if (reading) {
  const headings = Array.from(reading.querySelectorAll(':scope > h2'));
  const toc = document.querySelector('.toc');
  headings.forEach((heading, index) => {
  const anchor = index === 0 ? 'intro' : 'story-' + index;
    heading.id = anchor;
    const a = document.createElement('a');
    a.href = '#' + anchor;
    a.textContent = heading.textContent;
    if(toc) toc.append(a);
  });
  // Only discourages casual copying from the visible page.
  reading.addEventListener('copy', event => event.preventDefault());
  reading.addEventListener('contextmenu', event => event.preventDefault());
}
.toc {
  max-width: 790px;
  margin: 12px auto 28px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.toc a {
  color: var(--accent);
  font: 400 20px/1.5 Arial, Helvetica, sans-serif;
}

.toc::before {
  font-weight: 600;
  margin-bottom: 6px;
}

html[lang="ru"] .toc::before {
  content: "Содержание";
}

html[lang="en"] .toc::before {
  content: "Contents";
}
