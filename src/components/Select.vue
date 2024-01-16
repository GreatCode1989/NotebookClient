<template>
  <div class="select-wrapper">
    <select
      class="select-al"
      v-model="selectedCategory"
      @change="selectToCloth"
      :class="{ 'readonly': selectedCategory === '' }"
    >
      <option value="">Сортировать по рейтингу</option>
      <option value="new">Показать только новинки</option>
      <option value="bestsellers">Показать только популярные</option>
    </select>
    <div class="search-container">
    <input
      type="text"
      class="search-input"
      v-model="searchItem"
      @change="searchCloth"
      placeholder="Поиск по выбранной категории... "
    />
    <img
      class="img-search"
      src="../assets/img/search.png"
      alt=""
      @click="searchCloth"
    />
  </div>
    <div>
      <button style="cursor: pointer" @click="resetSelect">
        Сбросить фильтр
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { useStore } from "vuex";

const store = useStore();
const selectedCategory = ref("");
const items = ref();


function resetSelect() {
  clothRandom()
  selectedCategory.value = ''
}

const emit = defineEmits();

function clothRandom() {
  store
    .dispatch("getAllCloth", {
      limit: 35,
      offset: 0,
    })
    .then((data) => {
      items.value = data;
      emit("selectItem", items.value);
      console.log("Данные успешно получены:", data);
    })
    .catch((error) => {
      console.error("Ошибка при получении данных:", error);
    });
}

function selectToCloth() {
  if (selectedCategory.value === '') {
    clothRandom();
  } else {
    store
      .dispatch("selectCloth", selectedCategory.value)
      .then((data) => {
        items.value = data;
        console.log("Данные успешно получены:", data);
        emit("selectItem", items.value);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }
}
</script>

<style lang="sass">
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

.select-wrapper
  display: flex
  align-items: center
  justify-content: center
  margin: 10px 10px
  gap: 10px
  cursor: pointer

  select
    padding: 10px
    font-size: 16px
    border: 1px solid #ccc
    border-radius: 4px
    background-color: white
    width: 100%
    max-width: 300px
    transition: border-color 0.3s, box-shadow 0.3s


  select:focus
    border-color: #007bff
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25)

  select:readonly
    pointer-events: none
    color: gray

@media (max-width: 768px)
  .select-wrapper
    margin: 5px 0
</style>
