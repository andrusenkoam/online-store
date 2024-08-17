import 'basiclightbox/dist/basicLightbox.min.css';

import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { instruments } from './helpers/instruments';

const listEl = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarkup(favorite, listEl);

listEl.addEventListener('click', onCkick);

function onCkick(evt) {
  if (evt.target.classList.contains('js-info')) {
    const { id } = evt.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));

    createModal(product);
  }
}

function findProduct(productId) {
  return instruments.find(({ id }) => id === productId);
}
