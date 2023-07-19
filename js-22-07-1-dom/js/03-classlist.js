const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */

magicBtn.addEventListener('click', () => {
  const navEl = document.querySelector('.site-nav');
  console.log(navEl.classList);
  navEl.classList.toggle('super-cool');
});

const currentPageUrl = '/contact';
const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`,
);
console.log(linkEl);
linkEl.classList.add('site-nav__link--current');
