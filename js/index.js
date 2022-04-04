const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

const nav = document.querySelector('.nav__list');
const dropdown = document.querySelectorAll('.item-dropdown__list');

nav.addEventListener('mouseover', (e) => {
  let target = e.target;
  if (target.classList.contains('item-dropdown__btn')) {
    const menu = target.dataset.path;
    let dataTarget = document.querySelector(`[data-target=${menu}]`);
    dropdown.forEach( (e) => {
      if (!dataTarget.classList.contains('open')) {
        e.classList.remove('menu-active');
        e.classList.remove('open');
        dataTarget.classList.add('menu-active');
        intervalId = setTimeout(() => {
          dataTarget.classList.add('open')
        }, 0);
      };
    });
  }
});

nav.addEventListener('mouseout', (e) => {
  let target = e.target;
  if (target.classList.contains('item-dropdown__btn')) {
    const menu = target.dataset.path;
    let dataTarget = document.querySelector(`[data-target=${menu}]`);
    dropdown.forEach( (e) => {
      if (dataTarget.classList.contains('open')) {
        clearTimeout(intervalId);
        dataTarget.classList.remove('menu-active');
        intervalId = setTimeout(() => {
          dataTarget.classList.remove('open')
        }, 0);
      }
    })
  }
})