const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */

const navEl = document.querySelector('.site-nav');
console.log('navEl', navEl);
console.dir(navEl);

const navLinksEl = document.querySelectorAll('.site-nav__link');
console.log('navLinksEl', navLinksEl);
console.dir(navLinksEl);

// const navElAll = navEl.querySelectorAll('.site-nav__link');
// console.log('navElAll', navElAll);
// console.dir(navElAll);
/*
 * Document.querySelector* и Element.querySelector*
 */
console.log('Document', document);
console.dir(document);


magicBtn.addEventListener('click', () => {
  const sectionEl = document.querySelector('.section');
  console.log(sectionEl);
});
