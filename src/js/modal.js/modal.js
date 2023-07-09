import { log } from 'handlebars';

const modalEl = document.querySelector('.js-mobile-menu');
const btnOpen = document.querySelector('.js-header-open-modal');
const closeBtn = document.querySelector('.js-header-close');
const suppSection = document.querySelector('.support-box');

btnOpen.addEventListener('click', onBtnOpenModal);
closeBtn.addEventListener('click', onBtnCloseModal);
function onBtnOpenModal() {
  modalEl.classList.add('is-open');
  closeBtn.classList.remove('is-hidden');
  btnOpen.classList.add('is-hidden');
}

function onBtnCloseModal() {
  modalEl.classList.remove('is-open');
  closeBtn.classList.add('is-hidden');
  btnOpen.classList.remove('is-hidden');
}
