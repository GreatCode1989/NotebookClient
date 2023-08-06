export function searchRandom(state, products) {
  state.products = products;
}

export function addToFavorites(state, item) {
  if (state.favorites.length) {
    let isProduct = false;
    state.favorites.map(function (el) {
      if (el.id === item.id) {
        isProduct = true;
        item.quantity++;
      }
    });
    if (!isProduct) {
      state.favorites.push(item);
    }
  } else {
    state.favorites.push(item);
  }
}

export function removeFavorites(state, index) {
  state.favorites.splice(index, 1);
}
