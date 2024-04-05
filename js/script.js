document.addEventListener('DOMContentLoaded', function () {
  // Сначала получим все необходимые элементы
  let btn = document.querySelector('.header-burger');
  let menu = document.querySelector('.header-burger-menu');
  let btnClose = document.querySelector('.header-burger-close');
  let dark = document.querySelector('.header-wrapper');

  // Функция для открытия бургера
  function openBurger() {
    menu.classList.add('show');
    dark.classList.add('header-dark');
  }

  // Функция для закрытия бургера
  function closeBurger() {
    menu.classList.remove('show');
    dark.classList.remove('header-dark');
  }

  // Назначаем обработчик события клика на кнопку открытия бургера
  btn.onclick = function (e) {
    e.preventDefault();
    openBurger();
  };

  // Назначаем обработчик события клика на кнопку закрытия бургера
  btnClose.onclick = function (e) {
    e.preventDefault();
    closeBurger();
  };

  // Дополнительно: закрыть бургер при клике вне его области
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      closeBurger();
    }
  });
});
