const humb = document.querySelector('.humburger');
const popup = document.querySelector('.popup');
const menu = document.querySelector('.menu').cloneNode(1);
const popupBg = document.querySelector('.popup-bg');

humb.addEventListener('click', humbHandler);

function humbHandler(event) {
  event.preventDefault();
  popup.classList.toggle('open');
  humb.classList.toggle('active');
  popupBg.classList.toggle('darken');
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}
