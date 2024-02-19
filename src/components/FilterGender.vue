<template>
  <div class="col-md-4 mb-3">
    <label for="genderFilter" class="form-label">Фильтр по назначению</label>
    <select @change="filter" class="form-select" id="genderFilter">
      <option >Все</option>
      <option value="male">Мужские</option>
      <option value="female">Женские</option>
    </select>
  </div>
</template>

<script setup>
const emit = defineEmits(["filter"]);

const filter = (e) => {
  emit("filter", e.target.value);
};
</script>
