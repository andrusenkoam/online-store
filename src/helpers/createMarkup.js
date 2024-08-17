function createMarkup(arr, listEl) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name }) => ` <li class="item js-card" data-id="${id}">
      <img src="${img}" alt="${name}" width="300" />
      <h2 class="title">${name}</h2>
      <p class="info js-info">More information...</p>
      <div class="button-wrap">
        <button type="button" class="button js-favorite">Add to favorite</button>
        <button type="button" class="button js-cart">Add to products cart</button>
      </div>
    </li>`
      )
      .join('');
  } else {
    markup = ` <li class="empty-item">
      <img src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg"  class="empty-img" alt="404" width="600" />
    </li>`;
  }

  listEl.innerHTML = markup;
}

export { createMarkup };
