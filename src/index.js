import 'basiclightbox/dist/basicLightbox.min.css';

import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { instruments } from './helpers/instruments';

// const searchEl = document.querySelector('.js-search');
const listEl = document.querySelector('.js-list');
const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const cartArr = JSON.parse(localStorage.getItem(common.KEY_CART)) ?? [];

createMarkup(instruments, listEl);

listEl.addEventListener('click', onClick);

function onClick(evt) {
  if (evt.target.classList.contains('js-info')) {
    const { id } = evt.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));

    createModal(product);
  }

  if (evt.target.classList.contains('js-favorite')) {
    const { id } = evt.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    const inStorage = favoriteArr.some(({ id }) => id === product.id);

    if (inStorage) {
      return;
    }

    favoriteArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }

  if (evt.target.classList.contains('js-cart')) {
    const { id } = evt.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));

    cartArr.push(product);
    localStorage.setItem(common.KEY_CART, JSON.stringify(cartArr));
  }
}

function findProduct(productId) {
  return instruments.find(({ id }) => id === productId);
}
