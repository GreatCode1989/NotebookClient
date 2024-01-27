<template>
  <div class="select-wrapper">
    <select
      class="select-al"
      v-model="selectedCategory"
      @change="selectToCloth"
      :class="{ 'readonly': selectedCategory === '' }"
    >
      <option value="">Все</option>
      <option value="popularity">Мужские</option>
      <option value="old">Женские</option>
    </select>
    <div>
      <button style="cursor: pointer" @click="resetSelect">
        Сбросить фильтр
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from "vue";
import { useStore } from "vuex";

const store = useStore();
const selectedCategory = ref(sessionStorage.getItem("selectedCategory") || "");
const items = ref();

const emit = defineEmits();

function resetSelect() {
  clothRandom();
  selectedCategory.value = "";
  sessionStorage.removeItem("selectedCategory");
}

function saveSelectedCategoryToSessionStorage(category) {
  sessionStorage.setItem("selectedCategory", category);
}

const clothRandom = () => {
  store
    .dispatch("getAllCloth")
    .then((data) => {
      items.value = data;
      emit("selectItem", items.value);
      console.log("Данные успешно получены:", data);
    })
    .catch((error) => {
      console.error("Ошибка при получении данных:", error);
    });
};

const selectToCloth = () => {
  if (selectedCategory.value === "") {
    clothRandom();
  } else {
    store
      .dispatch("selectCloth", selectedCategory.value)
      .then((data) => {
        items.value = data;
        emit("selectItem", items.value);
        console.log("Данные успешно получены:", data);
        saveSelectedCategoryToSessionStorage(selectedCategory.value);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }
};

onMounted(() => {
  if (selectedCategory.value !== "") {
    selectToCloth();
  } else {
    clothRandom()
  }
});
</script>


<style lang="sass">
@import '../assets/styles/main'

.select-wrapper
  display: flex
  align-items: center
  justify-content: center
  margin: 10px 10px
  padding-left: 130px
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

@media (max-width: 768px)
  .select-wrapper
    margin: 5px 0
</style>
