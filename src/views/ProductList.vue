<template>
  <div>
    <Header :title="'ЛУЧШИЕ БРЕНДЫ'" />
    <div>
      <Navbar />
    </div>
    <div>
      <div>
        <Search @searchItem="searchName($event)" />
      </div>
      <div>
        <Select @selectedCategory="selectCategory($event)" />
      </div>
    </div>
    <div class="product-list">
      <div v-for="item in filteredItems" :key="item.id" class="product-item">
        <router-link :to="{ name: 'details', params: { id: item.id } }"
          ><img
            :src="require(`../assets/img/${item.image}`)"
            :alt="item.name"
            class="product-image"
          />
        </router-link>
        <div class="product-details">
          <div class="product-name">{{ item.name }}</div>
          <div class="product-price">Цена: {{ item.price }} грн.</div>
          <div class="product-availability">
            Наличие: {{ item.available ? "Да" : "Нет" }}
          </div>
          <ButtonAdd :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import Header from "../components/Header.vue";
import ButtonAdd from "../components/ButtonAdd.vue";
import Select from "../components/Select.vue";
import Search from "../components/Search.vue";

const store = useStore();

const items = computed(() => {
  return store.state.products;
});

const selectedCategory = ref("");

const searchedName = ref("");

const filteredItems = computed(() => {
  const filteredByCategory = selectedCategory.value
    ? items.value.filter((item) => item.category === selectedCategory.value)
    : items.value;

  if (!searchedName.value) {
    return filteredByCategory;
  } else {
    return filteredByCategory.filter((item) =>
      item.name.toLowerCase().includes(searchedName.value.toLowerCase())
    );
  }
});

const searchName = (name) => {
  searchedName.value = name;
};

const selectCategory = (category) => {
  selectedCategory.value = category;
};

function clothRandom() {
  store.dispatch("searchCloth", {
    limit: 25, 
    offset: 1, 
  })
  .then((data) => {
    
    console.log("Данные успешно получены:", data);
  })
  .catch((error) => {
   
    console.error("Ошибка при получении данных:", error);
  });
}

onMounted(() => {
  clothRandom();
});
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.header-container
  position: relative
  text-align: center

.img-header
  width: 100%
  height: 300px

.name-header
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  color: #fff
  font-size: 54px
  text-align: center
  letter-spacing: 2px
  font-weight: bold

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
  height: 150px
  object-fit: cover
  border-radius: 5px

.product-details
  margin-top: 10px
  text-align: center

.product-name
  font-size: 18px
  font-weight: bold

.product-price
  font-size: 16px

.product-availability
  font-size: 16px
  color: #777

@media screen and (max-width: 768px)
  .product-item
    width: 340px

  .product-image
    height: 320px

  .product-details
    margin-top: 5px

  .product-name
    font-size: 18px

  .product-price,
  .product-availability
    font-size: 16px
</style>
