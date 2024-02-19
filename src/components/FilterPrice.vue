<template>
  <div class="col-md-4 mb-3">
    <label for="priceSort" class="form-label">Сортировка по цене</label>
    <select class="form-select" id="priceSort" @change="filter">
      <option >Не выбрано</option>
      <option value="asc">По возрастанию цены</option>
      <option value="desc">По убыванию цены</option>
    </select>
  </div>
</template>

<script setup>
const emit = defineEmits(["filter"]);

const filter = (e) => {
  emit("filter", e.target.value);
};
</script>
