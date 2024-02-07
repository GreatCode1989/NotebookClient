<template>
  <div>
    <Header :title="'ЛУЧШИЕ БРЕНДЫ'" />
    <div>
      <NavbarMenu @searchItem="searchItem($event)" />
    </div>
    <div class="container mt-4">
      <!-- Selects -->
      <div class="row">
        <div class="col-md-4 mb-3">
          <label for="priceSort" class="form-label">Сортировка по цене</label>
          <select
            v-model="priceSort"
            class="form-select"
            id="priceSort"
            @change="filterByPriceAndGender"
          >
            <option value="rel">По релевантности</option>
            <option value="asc">По возрастанию цены</option>
            <option value="desc">По убыванию цены</option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label for="genderFilter" class="form-label">Фильтр по полу</label>
          <select
            v-model="genderFilter"
            @change="filterByPriceAndGender"
            class="form-select"
            id="genderFilter"
          >
            <option value="all">Все</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label for="sizeFilter" class="form-label">Фильтр по размеру</label>
          <select v-model="sizeFilter"  @change="filterBySize" class="form-select" id="sizeFilter">
            <option value="all">Все</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
          </select>
        </div>
      </div>

      <div>
        <div v-if="items && items" class="row row-cols-1 row-cols-md-3 g-4">
          <div v-for="item in items" :key="item._id" class="col">
            <div class="card h-100">
              <router-link :to="{ name: 'details', params: { id: item._id } }">
                <img
                  :src="require(`../assets/img/${item.image[0]}.jpg`)"
                  :alt="item.name"
                  class="card-img-top"
                />
              </router-link>
              <div class="card-body">
                <h5 class="card-title">{{ item.text }}</h5>
                <p class="card-text">Цена: {{ item.price }} грн.</p>
                <p class="card-text">
                  Наличие: {{ item.in_shop ? "Да" : "Нет" }}
                </p>
                <ButtonAddToCart :item="item" />
                <!-- <ButtonAddToFavorites :item="item" /> -->
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="d-flex justify-content-center spinner">
            <div class="spinner-border text-primary p-3" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer position="none" />
</template>

<script setup>
import { ref, watchEffect, onMounted } from "vue";
import Footer from "@/components/Footer.vue";
import NavbarMenu from "@/components/NavbarMenu.vue";
import ButtonAddToCart from "@/components/ButtonAddToCart.vue";
import Header from "../components/Header.vue";

const items = ref([]);
const originalItems = ref([]);
const priceSort = ref("rel");
const genderFilter = ref("all");
const sizeFilter = ref("all");

const searchItem = (event) => {
  items.value = event;
};

const filterByPriceAndGender = () => {
  let filteredItems = [...originalItems.value];
  console.log(filteredItems)

  if (priceSort.value === "rel") {
    filteredItems = filteredItems.sort(() => Math.random() - 0.5);
  } else {
    filteredItems.sort((a, b) =>
      priceSort.value === "asc" ? a.price - b.price : b.price - a.price
    );
  }

  if (genderFilter.value !== "all") {
    filteredItems = filteredItems.filter(
      (item) => (genderFilter.value === "female" ? item.old : !item.old)
    );
  }

  items.value = filteredItems;
};

const filterBySize = () => {
  if (sizeFilter.value !== "all") {
    items.value = originalItems.value.filter((item) => item.size == sizeFilter.value);
  } else {
    filterByPriceAndGender();
  }
};

onMounted(() => {
  originalItems.value = [...items.value];
});
</script>

<style scoped>
.spinner {
  margin-top: 70px;
}
</style>
