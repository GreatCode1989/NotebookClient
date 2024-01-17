<template>
  <div class="search-container">
    <input
      type="text"
      class="search-input"
      v-model="searchItem"
      @change="searchCloth"
      placeholder="Поиск по всем коллекциям... "
    />
    <img
      v-show="!isSearchPerformed"
      class="img-search"
      src="../assets/img/search.png"
      alt=""
      @click="searchCloth"
    />
    <img
      @click="resetSearch"
      v-show="isSearchPerformed"
      class="img-search"
      src="../assets/img/delete.png"
      alt=""
    />
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { useStore } from "vuex";

const store = useStore();

const searchItem = ref("");
const items = ref();
const isSearchPerformed = ref(false);

const emit = defineEmits();

function resetSearch() {
  if (searchItem.value.length > 0 && isSearchPerformed.value) {
    clothRandom();
    searchItem.value = "";
    isSearchPerformed.value = false;
  }
}

function clothRandom() {
  store
    .dispatch("getAllCloth", {
      limit: 35,
      offset: 0,
    })
    .then((data) => {
      items.value = data;
      emit("searchName", items.value);
      console.log("Данные успешно получены:", data);
    })
    .catch((error) => {
      console.error("Ошибка при получении данных:", error);
    });
}

function searchCloth() {
  if (searchItem.value.length > 0) {
    store
      .dispatch("searchCloth", {
        search: searchItem.value,
      })
      .then((data) => {
        items.value = data;
        isSearchPerformed.value = true;
        emit("searchName", items.value);
        console.log("Данные успешно получены:", data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }
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
