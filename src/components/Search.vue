<template>
  <div class="search-container">
    <input
      type="text"
      class="search-input"
      v-model="searchItem"
      @change="searchCloth"
      placeholder="Поиск по всем товарам... "
    />
    <img
      class="img-search"
      src="../assets/img/search.png"
      alt=""
      @click="searchCloth"
    />
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { useStore } from "vuex";

const store = useStore();

const searchItem = ref("");
const items = ref()

const emit = defineEmits();

function searchCloth() {
  store
    .dispatch("searchCloth", {
      search: searchItem.value,
    })
    .then((data) => {
      items.value = data;
      console.log("Данные успешно получены:", data);
      emit("searchName", items.value)
    })
    .catch((error) => {
      console.error("Ошибка при получении данных:", error);
    });
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.search-container
    display: flex
    position: relative
    align-items: center
    justify-content: center
    margin: 10px

.img-search
  position: absolute
  justify-content: center
  bottom: 4px
  width: 30px
  margin-left: 250px
  cursor: pointer

.search-input
  width: 300px
  padding: 10px
  border: 1px solid #ccc
  border-radius: 4px
  font-size: 16px
  transition: border-color 0.2s ease

@media (max-width: 768px)
  font-size: 14px
  padding: 8px
</style>
