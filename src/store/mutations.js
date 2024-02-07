export function getAllRandom(state, products) {
  state.products = products;
}

export function selectCloth(state, products) {
  state.products = products;
}

export function addToCartArray(state, data) {
  state.cartArray.push(data);
}

export function searchItem(state, products) {
  state.products = products;
}

export function setClothPartDetails(state, details) {
  state.clothPartDetails = details;
}
