const humb = document.querySelector('.humburger');
const popup = document.querySelector('.popup');
const menu = document.querySelector('.menu').cloneNode(1);
const pageUp = document.querySelector('#pageup');

//scroll

window.addEventListener('scroll', scrollF);

function scrollF() {
  if (window.pageYOffset > 300) {
    pageUp.style.display = 'block';
  } else {
    pageUp.style.display = 'none';
  }
}

pageUp.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

//humburger
humb.addEventListener('click', humbHandler);

function humbHandler(event) {
  event.preventDefault();
  popup.classList.toggle('open');
  humb.classList.toggle('active');

  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}
