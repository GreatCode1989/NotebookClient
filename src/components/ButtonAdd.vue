<template>
  <div class="product-buttons">
    <button
      class="add-to-favorites-button"
      :class="{ active: favoritesAdded }"
      @click="addToFavorites(item)"
      :disabled="favoritesAdded"
    >
      <img src="../assets/icons/heart.png" alt="heart-icon" class="icon" />
      {{ favoritesAdded ? "Добавлено" : "Добавить в избранное" }}
    </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const store = useStore();
const favoritesAdded = ref(false);

function addToFavorites(item) {
  store.dispatch("addToFavorites", item);
  favoritesAdded.value = true;
  localStorage.setItem(`favorites-${item.id}`, "added");
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.product-buttons
  margin-top: 15px
  display: flex
  flex-direction: column

.add-to-cart-button,
.add-to-favorites-button
  padding: 3px
  border: none
  border-radius: 5px
  color: #fff
  font-size: 13px
  cursor: pointer
  display: flex
  align-items: center
  justify-content: center
  transition: background-color 0.3s ease
  margin-bottom: 10px

.icon

  width: 20px
  height: 17px
  margin-right: 10px
  vertical-align: middle

.add-to-favorites-button
  background-color: $greenrez

.add-to-favorites-button.active img
  background-color: #ccc
  cursor: default

.add-to-favorites-button.active,
  background-color: #ccc
  cursor: default

.add-to-favorites-button:active
  transform: scale(0.95)

@media (max-width: 768px)
  .product-buttons
    flex-direction: column
    align-items: stretch

  .add-to-favorites-button
    width: 100%
    margin-bottom: 10px
</style>
