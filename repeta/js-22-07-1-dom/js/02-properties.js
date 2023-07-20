/*
 * Свойства элемента (hero)
 * - Изображение
 * - Текст и textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const magicBtn = document.querySelector('.js-magic-btn');
const imageEl = document.querySelector('.hero__image');
// console.log('imageEl', imageEl);
const heroTitleEl = document.querySelector('.hero__title');
// console.log('heroTitleEl', heroTitleEl);

const actions = document.querySelectorAll('.js-actions button');
// console.log('actions', actions)
// console.log(actions[2].dataset.action);

magicBtn.addEventListener('click', () => {
  imageEl.src =
    'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
  imageEl.alt = 'Это новый котик';
  heroTitleEl.textContent = 'Я сладкий пирожочек!';
  actions.value = 'afgfg';

  const inputEl = document.querySelector('.js-input');
  // console.log(inputEl.value)
  inputEl.value = 'Сделать магию';
});

/*
 * Атрибуты
 * - get(имя-атрибута)
 * - set(имя-атрибута)
 * - remove(имя-атрибута)
 * - has(имя-атрибута)
 */

// console.log(imageEl.getAttribute('src'));
// console.log(imageEl.src);
// console.log(imageEl.hasAttribute('src'));

/*
 * Data-атрибуты
 */
// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions);
// console.log(actions[2].dataset.action);
