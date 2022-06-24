const humb = document.querySelector('.humburger');
const popup = document.querySelector('.popup');
const menu = document.querySelector('.menu');
const body = document.body;
const pageUp = document.querySelector('#pageup');
const navLink = document.querySelectorAll('.menu-link[data-goto]');

//----------- open form-----------//

const closeForm = document.querySelector('.form-up_close');
const formUp = document.querySelector('.form-up');
const openForm = document.querySelectorAll('.btn-invite');

for (let i = 0; i < openForm.length; i++) {
  openForm[i].onclick = function (e) {
    e.target = form();
  };
}

function form() {
  formUp.classList.add('active');
}

closeForm.addEventListener('click', () => {
  formUp.classList.remove('active');
});

// openForm.addEventListener('click', function (event) {
//   event.preventDefault();

//   formUp.classList.add('active');
// });

// const openForm = document.getElementsByClassName('.btn-invite');
// for (var i = 0; i < openForm.length; i++)
//   openForm[i].onclick = function (e) {
//     e.preventDefault();

//     formUp.classList.add('active');
//   };

//----------- pageup -----------//

window.addEventListener('scroll', scrollF);

function scrollF() {
  if (window.pageYOffset > 300) {
    if (!pageUp.classList.contains('btnEntrance')) {
      pageUp.classList.add('btnEntrance');
      pageUp.classList.remove('btnExt');
      pageUp.style.display = 'block';
    }
  } else {
    if (pageUp.classList.contains('btnEntrance')) {
      pageUp.classList.remove('btnEntrance');
      pageUp.classList.add('btnExt');
      setTimeout(() => {
        pageUp.style.display = 'none';
      }, 250);
    }
  }
}

pageUp.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

//----------- humburger -----------//

humb.addEventListener('click', humbHandler);

function humbHandler(event) {
  event.preventDefault();
  popup.classList.toggle('open');
  humb.classList.toggle('active');
  body.classList.toggle('noscroll');

  // navLinks.forEach((link, index) => {
  //   if (link.style.animation) {
  //     link.style.animation = '';
  //   } else {
  //     link.style.animation = `navLinkFade 0.5s ease forwords ${index / 7 + 0}`;
  //   }
  // });

  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

//----------- navigation -----------//

if (navLink.length > 0) {
  navLink.forEach((menuLinks) => {
    menuLinks.addEventListener('click', onMenuClickLincks);
  });
}

function onMenuClickLincks(e) {
  const menuLinks = e.target;
  if (
    menuLinks.dataset.goto &&
    document.querySelector(menuLinks.dataset.goto)
  ) {
    const gotoBlock = document.querySelector(menuLinks.dataset.goto);
    const gotoBlockValue =
      gotoBlock.getBoundingClientRect().top +
      pageYOffset -
      document.querySelector('header').offsetHeight;

    if (humb.classList.contains('active')) {
      popup.classList.remove('open');
      humb.classList.remove('active');
      body.classList.remove('noscroll');
    }
    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth',
    });
    e.preventDefault();
  }
}
