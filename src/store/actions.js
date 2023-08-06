import axios from "axios";

export function searchCloth({ commit }) {
  axios
    .get("http://localhost:3000/products")
    .then((response) => {
      const data = response.data;

      commit("searchRandom", data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function addToFavorites({ commit }, item) {
  commit("addToFavorites", item);
}

export function removeFromFavorites({ commit }, index) {
  commit("removeFavorites", index);
  console.log(index);
}
