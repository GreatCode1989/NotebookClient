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

  <div >
    <div v-if="items && items.rows"  class="product-list">
      <div v-for="item in items.rows" :key="item.id"  class="product-item">
        <router-link :to="{ name: 'details', params: { id: item.id } }">
          <img
            :src="require(`../assets/img/${item.images}.jpg`)"
            :alt="item.name"
            class="product-image"
          />
        </router-link>
        <div class="product-details">
          <div class="product-name">{{ item.name }}</div>
          <div class="product-price">Цена: {{ item.price }} грн.</div>
          <div class="product-availability">
            Наличие: {{ item.in_stock ? "Да" : "Нет" }}
          </div>
          <ButtonAdd :item="item" />
        </div>
      </div>
    </div>
    <div v-else>
      Загрузка данных...
    </div>
  </div>
  
  </div>
</template>

<style  lang="sass" scoped>
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
  font-size: 18px
  font-weight: bold


.product-price 
  font-size: 16px


.product-availability 
  font-size: 14px
  color: #666

</style>

<script setup>
import Navbar from "@/components/Navbar.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import Header from "../components/Header.vue";
import ButtonAdd from "../components/ButtonAdd.vue";
import Select from "../components/Select.vue";
import Search from "../components/Search.vue";

const store = useStore();

const items = ref();

const searchedName = ref("");

const searchName = (name) => {
  searchedName.value = name;
};

function clothRandom() {
  store
    .dispatch("searchCloth", {
      limit: 30,
      offset: 0,
    })
    .then((data) => {
      items.value = data;
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

