function createMarkup(arr, listEl) {
  const markup = arr
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

  listEl.innerHTML = markup;
}

export { createMarkup };
