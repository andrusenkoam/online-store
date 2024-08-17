import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { common } from './common';
import { createMarkup } from './helpers/createMarkup';

const instruments = [
  {
    id: 1,
    img: 'https://static.dnipro-m.ua/cache/products/4878/catalog_origin_325618.jpg',
    name: 'Шуруповерт',
    price: 1290,
    description:
      'Мережевий дриль-шуруповерт TD-30 - надійний помічник для робіт по дому',
  },
  {
    id: 2,
    img: 'https://static.dnipro-m.ua/cache/products/5691/catalog_origin_191583.jpg',
    name: 'Перфоратор',
    price: 3948,
    description:
      'Перфоратор бочковий Dnipro-M ВН-20 використовується для виконання широкого спектру будівельних та ремонтних робіт',
  },
  {
    id: 3,
    img: 'https://static.dnipro-m.ua/cache/products/1248/catalog_origin_320661.jpg',
    name: 'Шліфмашина',
    price: 1299,
    description:
      'Кутова шліфувальна машина Dnipro-M GS-98 модель, яка поєднує в собі оптимальне співвідношення потужності та якості',
  },
  {
    id: 4,
    img: 'https://static.dnipro-m.ua/cache/products/5022/catalog_origin_317573.jpg',
    name: 'Пила',
    price: 11049,
    description:
      'Мобільна акумуляторна ланцюгова пила DSC-200BC DUAL, призначена для обрізання зайвих гілок, спилювання невеликих дерев',
  },
  {
    id: 5,
    img: 'https://static.dnipro-m.ua/cache/products/2298/catalog_origin_326046.jpg',
    name: 'Рівень',
    price: 897,
    description:
      'Рівень серії ProVision виробництва DNIPRO-M має високу точність вимірювань та чудові захисні властивоті',
  },
  {
    id: 6,
    img: 'https://static.dnipro-m.ua/cache/products/6566/catalog_origin_316315.jpg',
    name: 'Тример',
    price: 3699,
    description:
      'Тример електричний Dnipro-M 110 призначений для покосу густої трави, також кущів з діаметром стовбура до 20 мм.',
  },
  {
    id: 7,
    img: 'https://static.dnipro-m.ua/cache/products/6483/catalog_origin_325859.jpg',
    name: 'Мотокоса',
    price: 4485,
    description:
      'Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бурʼянів, газонів, а також для заготівлі сіна',
  },
  {
    id: 8,
    img: 'https://static.dnipro-m.ua/cache/products/2741/catalog_origin_318327.jpg',
    name: 'Генератор',
    price: 13470,
    description:
      'Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів',
  },
];

const searchEl = document.querySelector('.js-search');
const listEl = document.querySelector('.js-list');
const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const cartArr = JSON.parse(localStorage.getItem(common.KEY_CART)) ?? [];

createMarkup(instruments, listEl);

listEl.addEventListener('click', onClick);

function onClick(evt) {
  if (evt.target.classList.contains('js-info')) {
    const { id } = evt.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    const instance = basicLightbox.create(`
	    <div class="modal">
      <img src="${product.img}" alt="${product.name}" width="300" />
      <h2 class="title">${product.name}</h2>
      <h3 class="price">${product.price} грн.</h3>
      <p class="description">${product.description}</p>
      <div class="button-wrap">
        <button type="button" class="button js-favorite">Add to favorite</button>
        <button type="button" class="button js-cart">Add to products cart</button>
      </div>
    </div>
    `);

    instance.show();
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
    const inStorage = cartArr.some(({ id }) => id === product.id);

    if (inStorage) {
      return;
    }

    cartArr.push(product);
    localStorage.setItem(common.KEY_CART, JSON.stringify(cartArr));
  }
}

function findProduct(productId) {
  return instruments.find(({ id }) => id === productId);
}
