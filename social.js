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
  headings.slice(1).forEach((heading, index) => {
    const anchor = 'story-' + String(index + 1).padStart(2,'0');
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


// v7: Every new story gets its own copyright notice automatically.
// Story boundaries are the H2 headings already used for the table of contents.
if (reading) {
  const storyHeads = Array.from(reading.querySelectorAll(':scope > h2')).slice(1);
  const russian = document.documentElement.lang === 'ru';
  const copyrightLines = russian
    ? ['© Александр Кинев. Все права защищены.',
       'Перепечатка и публикация переводов — с разрешения автора.']
    : ['© Alexander Kinev. All rights reserved.',
       'Republication and publication of translations require the author’s permission.'];

  storyHeads.forEach((heading) => {
    // Locate the end of this story (before the next H2 or the end of the reading area).
    let last = heading;
    let next = heading.nextElementSibling;
    while (next && next.tagName !== 'H2') {
      last = next;
      next = next.nextElementSibling;
    }
    // Prevent duplicate notices if the script is re-run.
    if (last.classList.contains('story-copyright')) return;
    const notice = document.createElement('p');
    notice.className = 'story-copyright';
    notice.setAttribute('aria-label', russian ? 'Авторские права' : 'Copyright notice');
    copyrightLines.forEach((line, index) => {
      if (index) notice.append(document.createElement('br'));
      notice.append(document.createTextNode(line));
    });
    last.insertAdjacentElement('afterend', notice);
  });
}
