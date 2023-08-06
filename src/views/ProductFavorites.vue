<template>
  <div>
    <Header :title="'ИЗБРАННОЕ'" />
    <div>
      <Navbar />
    </div>

    <div class="product-list">
      <div v-for="(item, index) in cartArray" :key="index" class="product-item">
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
        </div>
        <ButtonRemove @click="removeFromFavorites(index)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Header from "../components/Header.vue";
import ButtonRemove from "@/components/ButtonRemove.vue";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const cartArray = ref([...store.state.favorites]);

function removeFromFavorites(index) {
  store.dispatch("removeFromFavorites", index);
  cartArray.value = [...store.state.favorites];
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.text-top
  width: full
  display: flex
  justify-content: center
  font-weight: bold
  font-size: 30px
  letter-spacing: 2px
  margin: 15px

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
