<template>
  <div class="col-md-4 mb-3">
    <label for="sizeFilter" class="form-label">Фильтр по размеру</label>
    <select @change="filter" class="form-select" id="sizeFilter">
      <option value="all">Все</option>
      <option value="30">30</option>
      <option value="31">31</option>
      <option value="32">32</option>
      <option value="33">33</option>
      <option value="34">34</option>
    </select>
  </div>
</template>

<script setup>
const emit = defineEmits(['filter'])

const filter = (e) => {
    emit('filter', e.target.value)
}
</script>
