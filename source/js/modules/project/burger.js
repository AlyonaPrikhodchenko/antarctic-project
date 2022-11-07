const initBurgerMenu = () => {
  const burger = document.querySelector('.navigation__button');
  // const burgerClose = document.querySelector('.navigation__button-close');
  const mobileMenu = document.querySelector('.navigation__container');
  // const mobileContent = document.querySelector('.navigation__content');
  // const mobileLogo = document.querySelector('.navigation__logo');

  if (burger) {
    burger.classList.add('navigation__button--js');
    mobileMenu.classList.add('navigation__container--js');
  }

  // if (burger && burgerClose && mobileMenu && mobileLogo && mobileContent) {

  //   burgerClose.classList.add('navigation__button-close--js');
  //
  //   mobileLogo.classList.add('navigation__logo--js');
  //   mobileContent.classList.add('navigation__content--js');
  // }
};

export {initBurgerMenu};
