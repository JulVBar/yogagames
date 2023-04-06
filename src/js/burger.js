function burger() {
  const burger = document.querySelector('.burger');
  const burgerMenu = document.querySelector('.burger__menu');
  const fixedHeader = document.querySelector('.header__bottom');
  if (burger && burgerMenu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('opened');
      burgerMenu.classList.toggle('opened');
      fixedHeader.classList.toggle('mobile-menu-opened');
      document.body.classList.toggle('no-scroll');
    })
  }
}
export default burger;