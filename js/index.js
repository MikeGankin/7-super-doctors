const dropdowns = document.querySelectorAll('.item-dropdown__list');
const links = document.querySelectorAll('.item-dropdown__btn');
const nav = document.querySelector('.header__nav');
const mobile = document.querySelector('#mobile-nav');
const desctop = document.querySelector('#desctop-nav');
const listDesctop = document.querySelector('.nav__list');
const mQuery = window.matchMedia('(max-width: 940px)');
const burger = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__list');

const toggleButtons = (btn) => {
  links.forEach((item) => {
    item.classList.remove('active');
    item.querySelector('.dropdown-arrow').style.transform = '';
    item.querySelector('.dropdown-arrow').style.fill = '';
  });
  btn.classList.add('active');
  btn.querySelector('.dropdown-arrow').style.transform = 'rotate(180deg)';
  btn.querySelector('.dropdown-arrow').style.fill = 'white';
};

const toggleLists = (list) => {
  dropdowns.forEach((item) => {
    item.classList.remove('opened');
  });
  list.classList.add('opened');
};

// listDesctop.addEventListener('click', (e) => {
//   let target = e.target;
//   if (target.classList.contains('item-dropdown__btn')) {
//       toggleButtons(target);
//       toggleLists(target.nextElementSibling);
//   }
// });

const toggleMenu = (element, opened, closed, timeOfAnimation) => {
  if (!element.classList.contains(opened)) {
    element.classList.add(opened);
    element.classList.remove(closed);
    document.querySelector('.body').classList.add('no-scroll');
    element.style.overflowY = 'scroll';
    document.querySelector('.line1').style.transform = 'rotate(45deg) translate(20%, -50%)';
    document.querySelector('.line2').style.transform = 'scaleY(0)';
    document.querySelector('.line3').style.transform = 'rotate(-45deg) translate(20%, 50%)';
  } else {
    element.classList.add(closed);
    document.querySelector('.line1').style.transform = '';
    document.querySelector('.line2').style.transform = '';
    document.querySelector('.line3').style.transform = '';
    window.setTimeout(() => {
      element.classList.remove(opened);
      document.querySelector('.body').classList.remove('no-scroll');
    }, timeOfAnimation);
  }
};

burger.addEventListener('click', () => {
  toggleMenu(menu, 'menu-opened', 'menu-closed', 400)
})

window.addEventListener('scroll', () => {
  dropdowns.forEach((item) => {
    item.classList.remove('opened');
  });
  links.forEach((item) => {
    item.classList.remove('active');
  });
});

window.addEventListener('click', (e) => {
  let target = e.target;
  let btn = target.classList.contains('item-dropdown__btn');
  let list = target.classList.contains('item-dropdown__list');
  let item = target.classList.contains('item-dropdown__item');
  if (!btn && !list && !item) {
    dropdowns.forEach((item) => {
      item.classList.remove('opened');
    });
    links.forEach((item) => {
      item.classList.remove('active');
      item.querySelector('.dropdown-arrow').style.transform = '';
      item.querySelector('.dropdown-arrow').style.fill = '';
    });
  }
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 'auto',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  }
});

