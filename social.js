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
