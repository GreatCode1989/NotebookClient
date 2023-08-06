<template>
  <div class="select-wrapper">
    <select class="select-al" v-model="selectedCategory" @change="updateDrink">
      <option value="">Фильтр:</option>
      <option value="Woman">Женские</option>
      <option value="Man">Мужские</option>
      <option value="">Все</option>
    </select>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const selectedCategory = ref("");

const emit = defineEmits();

const updateDrink = () => {
  emit("selectedCategory", selectedCategory.value);
};
</script>

<style lang="sass">
@import '../assets/styles/main'

.select-wrapper
  display: flex
  align-items: center
  justify-content: center
  margin: 10px 0

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
