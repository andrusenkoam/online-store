import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function createModal(product) {
  const instance = basicLightbox.create(
    `
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
    `,
    {
      handler: null,
      onShow(instance) {
        this.handler = closeModal.bind(instance);
        document.addEventListener('keydown', this.handler);
      },

      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    }
  );

  instance.show();
}

function closeModal(evt) {
  if (evt.code === 'Escape') {
    this.close();
  }
}

export { createModal };
