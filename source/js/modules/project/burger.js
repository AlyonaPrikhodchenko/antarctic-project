const initBurgerMenu = () => {
  const burger = document.querySelector('.header__button');
  const navigation = document.querySelector('.navigation');
  const mobileMenu = document.querySelector('.header__menu');
  const mobileContent = document.querySelector('.header__menu-wrapper');
  const mobileLogo = document.querySelector('.logo__image');

  if (burger) {
    burger.classList.remove('header__button--nojs');
    navigation.classList.add('navigation--js');

    burger.addEventListener('click', () => {
      if (!burger.classList.contains('header__button--close')) {
        burger.classList.add('header__button--close');
        mobileMenu.classList.add('header__menu--js');
        mobileContent.classList.add('header__menu-wrapper--js');
        mobileLogo.classList.add('logo__image--js');
        navigation.classList.remove('navigation--js');
      } else {
        burger.classList.remove('header__button--close');
        mobileMenu.classList.remove('header__menu--js');
        mobileContent.classList.remove('header__menu-wrapper--js');
        mobileLogo.classList.remove('logo__image--js');
        navigation.classList.add('navigation--js');
      }
    });
  }
};

export {initBurgerMenu};
