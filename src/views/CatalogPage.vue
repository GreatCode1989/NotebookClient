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
          <select v-model="priceSort" class="form-select" id="priceSort" @change="filterByPrice">
            <option value="rel">По релевантности</option>
            <option value="asc">По возрастанию цены</option>
            <option value="desc">По убыванию цены</option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label for="genderFilter" class="form-label">Фильтр по полу</label>
          <select v-model="genderFilter" class="form-select" id="genderFilter">
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label for="sizeFilter" class="form-label">Фильтр по размеру</label>
          <select v-model="sizeFilter" class="form-select" id="sizeFilter">
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
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
                <!-- <ButtonAddToCart :item="item" />
                <ButtonAddToFavorites :item="item" /> -->
              </div>
            </div>
          </div>
        </div>
        <div v-else>Загрузка данных...</div>
      </div>
    </div>
  </div>
    <Footer position="none"/>
</template>

<script setup>
import { ref } from "vue";
import Footer from "@/components/Footer.vue";
import NavbarMenu from "@/components/NavbarMenu.vue";
import Header from "../components/Header.vue";


const items = ref();
const priceSort = ref("rel");
const genderFilter = ref("male");
const sizeFilter = ref("s");

const filterByPrice = () => {
  if(priceSort.value === 'rel') {
    items.value = [...items.value].sort(() => Math.random() - 0.5);
  }
  items.value.sort((a, b) =>
    priceSort.value === "asc" ? a.price - b.price : b.price - a.price
  );
};

const searchItem = (event) => {
  items.value = event;
};
</script>


<style lang="sass" scoped>
@import '../assets/styles/main'

.card
  border: 1px solid #ddd
  padding: 10px
  margin: 10px
  border-radius: 8px
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)

.product-list
  display: flex
  flex-wrap: wrap
  justify-content: center


.product-item
  margin: 20px
  padding: 10px
  border: 1px solid #ccc
  border-radius: 5px
  width: 200px

.product-image
  width: 100%
  object-fit: cover
  object-position: center 10%
  border-radius: 5px
  max-height: 150px

.product-details
  margin-top: 10px

.product-name
  margin-bottom: 10px
  font-size: 18px
  font-weight: bold

.product-price
  font-size: 16px

.product-availability
  font-size: 14px
  color: #666


.filter-price
  display: flex
  align-items: center
  justify-content: center
  padding: 10px
  border: 1px solid #ddd
  border-radius: 5px

  .button-filter
    cursor: pointer
    margin-left: 10px

  .button-reset
    cursor: pointer
    margin-left: 10px

  .label-filter
    margin: 10px

  .input-filter
    font-size: 30px
</style>
